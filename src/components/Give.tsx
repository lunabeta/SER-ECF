import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Heart, MapPin, Mail, Phone, HandHeart, Landmark } from "lucide-react";
import BankDetails from "./BankDetails";
import { useRevealRoot } from "@/hooks/useReveal";

const Give = () => {
  const { t } = useTranslation();
  useRevealRoot();

  const options = [
    { icon: Sparkles, t: t("give.o1t"), d: t("give.o1d") },
    { icon: Users, t: t("give.o2t"), d: t("give.o2d") },
    { icon: Heart, t: t("give.o3t"), d: t("give.o3d") },
  ];

  return (
    <section id="give" className="section-padding relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/15 via-transparent to-transparent" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute -top-10 right-10 opacity-30 animate-pattern-float">
        <div className="ethiopian-mandala-md" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <div className="max-w-2xl reveal">
          <div className="flex gap-1 mb-5">
            <div className="w-10 h-1 bg-ethiopian-green rounded-full" />
            <div className="w-10 h-1 bg-secondary rounded-full" />
            <div className="w-10 h-1 bg-ethiopian-red rounded-full" />
          </div>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">{t("give.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {t("give.titleA")} <span className="text-gradient-gold">{t("give.titleB")}</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">{t("give.body")}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {options.map((o, i) => (
            <div
              key={o.t}
              className="reveal-zoom p-7 rounded-xl bg-primary-foreground/5 border border-secondary/25 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/10 hover:-translate-y-1 hover:shadow-gold group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-gold grid place-items-center shadow-gold">
                <o.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold group-hover:text-secondary transition-colors">
                {o.t}
              </h3>
              <p className="text-sm text-primary-foreground/75 mt-2 leading-relaxed">{o.d}</p>
            </div>
          ))}
        </div>

        {/* Bank accounts */}
        <div className="mt-14 reveal">
          <div className="rounded-2xl border border-secondary/30 bg-primary-foreground/5 backdrop-blur p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                <Landmark className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs">Direct Bank Transfer</p>
                <h3 className="font-display text-lg md:text-xl font-bold">የባንክ ሂሳብ — Bank Accounts</h3>
              </div>
            </div>
            <BankDetails theme="dark" />
            <p className="text-xs text-primary-foreground/60 mt-4">
              After your transfer, please email a copy of the receipt to{" "}
              <a href="mailto:southethiopiaregionalecfoa@gmail.com" className="text-secondary hover:underline">southethiopiaregionalecfoa@gmail.com</a>{" "}
              · <Link to="/donate" className="text-secondary hover:underline">View full donation page →</Link>
            </p>
          </div>
        </div>


        {/* Become a Ministry Partner */}
        <div className="mt-20 reveal">
          <div className="rounded-2xl border border-secondary/30 bg-primary-foreground/5 backdrop-blur p-8 md:p-10 grid md:grid-cols-[auto,1fr,auto] gap-8 items-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
              <HandHeart className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-2">Become a Ministry Partner</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Walk with us in long-term mission across Southern Ethiopia.
              </h3>
              <p className="mt-3 text-primary-foreground/80 leading-relaxed max-w-2xl">
                We welcome individuals, churches, and organizations who wish to partner with us in long-term mission and development work across Southern Ethiopia.
              </p>
            </div>
            <Button
              variant="heroSolid"
              size="lg"
              onClick={() => document.querySelector("#partners")?.scrollIntoView({ behavior: "smooth" })}
              className="shrink-0"
            >
              Partner with us
            </Button>
          </div>

          <div className="mt-8">
            <p className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-5">Support & Contact</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: MapPin, label: "Office", value: "Arba Minch, Southern Ethiopia", href: undefined as string | undefined },
                { icon: Mail, label: "Email", value: "southethiopiaregionalecfoa@gmail.com", href: "mailto:southethiopiaregionalecfoa@gmail.com" },
                { icon: Phone, label: "Phone", value: "+251 91 157 5204 · +251 91 661 8105", href: "tel:+251911575204" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary/50 hover:bg-primary-foreground/10 transition-all"
                >
                  <c.icon className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60">{c.label}</p>
                    <p className="text-sm text-primary-foreground/90 mt-1 break-words">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Give;
