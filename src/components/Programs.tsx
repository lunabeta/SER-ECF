import { useTranslation } from "react-i18next";
import { BookOpen, GraduationCap, Users, HandshakeIcon, Heart, Sprout } from "lucide-react";
import { useRevealRoot } from "@/hooks/useReveal";

const keys = ["ec", "lt", "yw", "pb", "so", "eh"] as const;
const icons = [BookOpen, GraduationCap, Users, HandshakeIcon, Heart, Sprout];

const Programs = () => {
  const { t } = useTranslation();
  useRevealRoot();

  return (
    <section id="work" className="section-padding bg-section-light relative overflow-hidden">
      <div className="absolute top-20 -right-10 opacity-20 animate-pattern-float" style={{ animationDelay: "2s" }}>
        <div className="ethiopian-mandala-md" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">
            {t("programs.eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold">
            {t("programs.titleA")} <span className="text-gradient-gold">{t("programs.titleB")}</span>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto leading-relaxed">{t("programs.intro")}</p>
          <div className="section-divider mt-10" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((k, idx) => {
            const Icon = icons[idx];
            return (
              <article
                key={k}
                className="card-elevated group reveal"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="icon-container">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {t(`programs.items.${k}.title`)}
                </h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-secondary font-semibold">{t("programs.problem")}</dt>
                    <dd className="text-muted-foreground mt-1">{t(`programs.items.${k}.problem`)}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-ethiopian-green font-semibold">{t("programs.response")}</dt>
                    <dd className="text-muted-foreground mt-1">{t(`programs.items.${k}.response`)}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-ethiopian-red font-semibold">{t("programs.impact")}</dt>
                    <dd className="text-foreground font-medium mt-1">{t(`programs.items.${k}.impact`)}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
