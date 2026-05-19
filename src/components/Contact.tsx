import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRevealRoot } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Local XAMPP: http://localhost/contact_handler.php
// Production (Yegara): https://yourdomain.com/contact_handler.php
const CONTACT_HANDLER_URL =
  import.meta.env.VITE_CONTACT_HANDLER_URL ?? "/contact_handler.php";

const Contact = () => {
  const { t } = useTranslation();
  useRevealRoot();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      subject: String(fd.get("subject") || "").trim() || "General Inquiry",
      message: String(fd.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(CONTACT_HANDLER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message ?? "Message sent. We'll be in touch soon.");
        form.reset();
      } else {
        toast.error(result.message ?? "Could not send. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-section-alt relative overflow-hidden">
      <div className="container-wide mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-start">
        <div className="reveal-left">
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">{t("contact.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight">
            {t("contact.titleA")} <span className="text-gradient-gold">{t("contact.titleB")}</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">{t("contact.body")}</p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: t("contact.office"), value: "Arba Minch, Southern Ethiopia" },
              { icon: Mail, label: t("contact.emailLabel"), value: "southethiopiaregionalecfoa@gmail.com" },
              { icon: Phone, label: t("contact.phoneLabel"), value: "+251 91 157 5204  ·  +251 91 661 8105" },
            ].map((c, i) => (
              <li
                key={c.label}
                className="flex items-start gap-4 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="icon-container shrink-0">
                  <c.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">{c.label}</div>
                  <div className="text-foreground font-medium mt-1 break-all">{c.value}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-elevated h-[280px]">
            <iframe
              title="SER-ECF Office Location — Arba Minch"
              src="https://www.google.com/maps?q=Arba+Minch,+Ethiopia&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-elevated reveal-right">
          <h3 className="font-display text-2xl font-semibold text-foreground">Send us a message</h3>
          <p className="text-sm text-muted-foreground mt-1">We typically reply within 2 business days.</p>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="c-name">Name</Label>
              <Input id="c-name" name="name" required className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" name="email" type="email" required className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label htmlFor="c-subject">Subject</Label>
              <Input id="c-subject" name="subject" className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label htmlFor="c-message">Message</Label>
              <Textarea id="c-message" name="message" rows={5} required className="mt-1.5 bg-background" />
            </div>
            <Button type="submit" variant="heroSolid" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

