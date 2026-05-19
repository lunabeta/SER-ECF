import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_FROM_EMAIL =
  Deno.env.get("RESEND_FROM_EMAIL") ?? "SER ECF <onboarding@resend.dev>";
const NOTIFY_EMAIL = "southethiopiaregionalecfoa@gmail.com";

type ContactRecord = {
  id?: string;
  name?: string;
  email?: string;
  subject?: string | null;
  message?: string;
  phone?: string | null;
  organization?: string | null;
  created_at?: string;
};

type WebhookPayload = {
  type?: string;
  table?: string;
  schema?: string;
  record?: ContactRecord;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveRecord(body: WebhookPayload | ContactRecord): ContactRecord {
  if ("record" in body && body.record) {
    return body.record;
  }
  return body as ContactRecord;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY is not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload: WebhookPayload | ContactRecord;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const record = resolveRecord(payload);
  const name = record.name?.trim() || "Unknown";
  const email = record.email?.trim();
  const subject = record.subject?.trim() || "New contact form submission";
  const message = record.message?.trim() || "(no message)";
  const phone = record.phone?.trim();
  const organization = record.organization?.trim();
  const submittedAt = record.created_at
    ? new Date(record.created_at).toLocaleString("en-US", { timeZone: "Africa/Addis_Ababa" })
    : new Date().toLocaleString("en-US", { timeZone: "Africa/Addis_Ababa" });

  if (!email) {
    return new Response(JSON.stringify({ error: "Contact record is missing email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const html = `
    <h2>New contact submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ""}
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `.trim();

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      subject: `[SER-ECF Contact] ${subject}`,
      html,
      reply_to: email,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("Resend API error:", errorText);
    return new Response(JSON.stringify({ error: "Failed to send email", details: errorText }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await resendResponse.json();
  return new Response(JSON.stringify({ success: true, id: result.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
