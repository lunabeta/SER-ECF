
-- =========================================================
-- ROLES & PROFILES
-- =========================================================
create type public.app_role as enum ('admin', 'user');

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles viewable by owner"
  on public.profiles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users update own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = user_id);

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users view own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Admins view all roles"
  on public.user_roles for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage roles"
  on public.user_roles for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- updated_at trigger fn
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.update_updated_at_column();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'display_name', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- =========================================================
-- ADMIN READ ACCESS to existing submission tables
-- =========================================================
create policy "Admins view contact messages"
  on public.contact_messages for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins view partnership inquiries"
  on public.partnership_inquiries for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete partnership inquiries"
  on public.partnership_inquiries for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- =========================================================
-- NEWSLETTER
-- =========================================================
create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

create policy "Anyone can subscribe"
  on public.newsletter_subscribers for insert
  to anon, authenticated
  with check (true);

create policy "Admins view subscribers"
  on public.newsletter_subscribers for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete subscribers"
  on public.newsletter_subscribers for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- =========================================================
-- MEDIA RESOURCES (catalog)
-- =========================================================
create table public.media_resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text not null default 'report', -- report | sermon | photo | video | other
  file_url text not null,
  file_path text,
  file_type text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by uuid references auth.users(id) on delete set null
);

alter table public.media_resources enable row level security;

create policy "Public can view published media"
  on public.media_resources for select
  to anon, authenticated
  using (published = true or public.has_role(auth.uid(), 'admin'));

create policy "Admins insert media"
  on public.media_resources for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins update media"
  on public.media_resources for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins delete media"
  on public.media_resources for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create trigger media_resources_updated_at
before update on public.media_resources
for each row execute function public.update_updated_at_column();

-- =========================================================
-- STORAGE BUCKET: media (public read, admin write)
-- =========================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "Public read media bucket"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'media');

create policy "Admins upload to media bucket"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'media' and public.has_role(auth.uid(), 'admin'));

create policy "Admins update media bucket"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'media' and public.has_role(auth.uid(), 'admin'));

create policy "Admins delete from media bucket"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'media' and public.has_role(auth.uid(), 'admin'));
