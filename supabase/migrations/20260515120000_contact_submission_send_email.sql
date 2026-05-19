-- Trigger send-contact-email Edge Function on new contact_submissions rows.
-- Prerequisites (run once in Supabase Dashboard → Project Settings → Vault, or SQL):
--   select vault.create_secret('<your-service-role-key>', 'service_role_key');
--
-- Edge Function secrets (supabase secrets set):
--   RESEND_API_KEY
--   RESEND_FROM_EMAIL   e.g. "SER ECF <noreply@yourdomain.com>" (must be verified in Resend)

create extension if not exists pg_net with schema extensions;

create or replace function public.notify_contact_submission_email()
returns trigger
language plpgsql
security definer
set search_path = public, net, extensions
as $$
declare
  project_url constant text := 'https://toqvfbrldtslgttrpwci.supabase.co';
  service_role text;
  request_id bigint;
begin
  select decrypted_secret
  into service_role
  from vault.decrypted_secrets
  where name = 'service_role_key'
  limit 1;

  if service_role is null or service_role = '' then
    raise warning 'notify_contact_submission_email: vault secret service_role_key is missing';
    return new;
  end if;

  select net.http_post(
    url := project_url || '/functions/v1/send-contact-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role
    ),
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', tg_table_name,
      'schema', tg_table_schema,
      'record', to_jsonb(new)
    )
  ) into request_id;

  return new;
end;
$$;

drop trigger if exists contact_submissions_send_email on public.contact_submissions;

create trigger contact_submissions_send_email
  after insert on public.contact_submissions
  for each row
  execute function public.notify_contact_submission_email();
