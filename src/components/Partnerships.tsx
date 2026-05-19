import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRevealRoot } from "@/hooks/useReveal";
import { supabase } from "@/integrations/supabase/client";

const Partnerships = () => {
  const { t } = useTranslation();
  useRevealRoot();

  const [submitting, setSubmitting] = useState(false);

  const partners = [
    t("partners.list1"),
    t("partners.list2"),
    t("partners.list3"),
    t("partners.list4"),
    t("partners.list5"),
    t("partners.list6"),
  ];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    const { error } = await supabase.from("partnership_inquiries").insert({
      name: String(fd.get("name") || ""),
      organization: String(fd.get("org") || "") || null,
      email: String(fd.get("email") || ""),
      area: String(fd.get("area") || "") || null,
      message: String(fd.get("msg") || "") || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit. Please try again.");
      return;
    }
    toast.success(t("partners.toast"));
    form.reset();
  };

  return (
    <section id="partners" className="section-padding bg-section-light relative overflow-hidden">
      <div className="absolute bottom-10 -left-10 opacity-25 animate-pattern-float" style={{ animationDelay: "3s" }}>
        <div className="ethiopian-mandala-md" />
      </div>

      <div className="container-wide mx-auto relative z-10 grid lg:grid-cols-2 gap-12">
        <div className="reveal-left">
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">{t("partners.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight">
            {t("partners.titleA")} <span className="text-gradient-gold">{t("partners.titleB")}</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">{t("partners.body")}</p>

          <ul className="mt-10 space-y-4">
            {partners.map((p, i) => (
              <li
                key={p}
                className="flex items-center gap-4 text-foreground reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="h-1.5 w-10 bg-gradient-ethiopian rounded-full shrink-0" />
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="card-elevated reveal-right">
          <h3 className="font-display text-2xl font-semibold text-foreground">{t("partners.formTitle")}</h3>
          <p className="text-sm text-muted-foreground mt-1">{t("partners.formIntro")}</p>

          <div className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">{t("partners.name")}</Label>
                <Input id="name" name="name" required className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label htmlFor="org">{t("partners.org")}</Label>
                <Input id="org" name="org" className="mt-1.5 bg-background" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">{t("partners.email")}</Label>
              <Input id="email" name="email" type="email" required className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label htmlFor="area">{t("partners.area")}</Label>
              <Input id="area" name="area" placeholder={t("partners.areaPh")} className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label htmlFor="msg">{t("partners.message")}</Label>
              <Textarea id="msg" name="msg" rows={4} className="mt-1.5 bg-background" />
            </div>
            <Button type="submit" variant="heroSolid" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "..." : t("partners.send")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Partnerships;
