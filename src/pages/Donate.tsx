import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, ShieldCheck, Globe2, Repeat, FileCheck2 } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import BankDetails from "@/components/BankDetails";
import { Button } from "@/components/ui/button";
import { useRevealRoot } from "@/hooks/useReveal";

const Donate = () => {
  const { t } = useTranslation();
  useRevealRoot();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Donate — Support SER-ECF" description="Give to SER-ECF: bank details, international giving, and monthly partnership options." url="https://serecf.org/donate" />
      <SiteHeader />

      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute -top-20 -right-20 ethiopian-mandala-lg opacity-30 animate-pattern-float" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t("common.home")}
          </Link>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">{t("donatePage.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            {t("donatePage.titleA")} <span className="text-gradient-gold">{t("donatePage.titleB")}</span> {t("donatePage.titleC")}
          </h1>
          <p className="text-primary-foreground/80 mt-5 max-w-2xl leading-relaxed">{t("donatePage.intro")}</p>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="card-elevated reveal max-w-4xl mx-auto">
            <div className="icon-container mb-4"><Heart className="w-6 h-6 text-secondary" /></div>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">{t("donatePage.bankEyebrow")}</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{t("donatePage.bankTitle")}</h2>
            <p className="text-foreground/75 leading-relaxed mb-5">{t("donatePage.bankBody")}</p>
            <BankDetails theme="light" />
            <p className="text-sm text-muted-foreground mt-5">
              {t("donatePage.sendReceipt")}{" "}
              <a href="mailto:southethiopiaregionalecfoa@gmail.com" className="text-secondary hover:underline">
                southethiopiaregionalecfoa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Partnership Tiers */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="max-w-2xl mb-10 reveal">
            <div className="icon-container mb-4"><Repeat className="w-6 h-6 text-secondary" /></div>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">Monthly Partnership</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Join our monthly partnership program</h2>
            <p className="text-foreground/75 leading-relaxed">
              Monthly giving ensures continuous impact in communities, leadership training, and humanitarian response across Ethiopia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tier: "Peace Partner", desc: "Stand with us in peacebuilding initiatives." },
              { tier: "Mission Builder", desc: "Help build churches and train leaders." },
              { tier: "Kingdom Ambassador", desc: "Champion gospel and community work." },
              { tier: "Vision Partner", desc: "Invest in long-term regional transformation." },
            ].map((p, i) => (
              <div
                key={p.tier}
                className="reveal-zoom p-6 rounded-xl border border-border bg-card hover:border-secondary/50 hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-gold grid place-items-center mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{p.tier}</h3>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International + Transparency */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-elevated reveal-left">
            <div className="icon-container mb-4"><Globe2 className="w-6 h-6 text-secondary" /></div>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">International Giving</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Supporters outside Ethiopia</h2>
            <p className="text-foreground/75 leading-relaxed mb-5">
              Partners abroad can contribute through secure international platforms. Reach out for PayPal details, bank wire instructions, and online partner giving channels.
            </p>
            <ul className="space-y-2 text-sm text-foreground/80 mb-6">
              <li>• PayPal — Wendmagegn Asfaw</li>
              <li>• Bank Wire Transfer — Wendmagegn Asfaw</li>
              <li>• Online partner giving systems</li>
              <li>• International mission support channels</li>
            </ul>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:southethiopiaregionalecfoa@gmail.com?subject=International%20Partnership">
                Contact us for wire details
              </a>
            </Button>
          </div>

          <div className="card-elevated reveal-right">
            <div className="icon-container mb-4"><FileCheck2 className="w-6 h-6 text-secondary" /></div>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">Our Commitment</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Transparency & Stewardship</h2>
            <ul className="space-y-3 text-foreground/80">
              {[
                "Ethical financial stewardship",
                "Transparent reporting",
                "Accountability in resource use",
                "Regular impact updates to partners",
              ].map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-6 pl-4 border-l-2 border-secondary text-foreground/75 italic">
              "Your partnership helps transform lives across Ethiopia."
              <footer className="not-italic text-sm text-muted-foreground mt-2">— Dr. Wendmagegn Asfaw</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Donate;
