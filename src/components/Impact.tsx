import { useTranslation } from "react-i18next";
import { useRevealRoot } from "@/hooks/useReveal";

const Impact = () => {
  const { t } = useTranslation();
  useRevealRoot();

  const stats = [
    { n: "500+", l: t("impact.s1") },
    { n: "100+", l: t("impact.s2") },
    { n: "10,000+", l: t("impact.s3") },
    { n: "12+", l: t("impact.s4") },
  ];

  return (
    <section id="impact" className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute -top-10 -right-10 opacity-25 animate-pattern-float">
        <div className="ethiopian-mandala-md" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">{t("impact.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold">
            {t("impact.titleA")} <span className="text-gradient-ethiopian">{t("impact.titleB")}</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">{t("impact.body")}</p>
          <div className="section-divider mt-10" />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="card-elevated group text-center reveal-zoom"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-5xl font-bold text-gradient-gold">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.l}</div>
              <div className="mt-5 h-0.5 w-12 mx-auto bg-gradient-ethiopian rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
