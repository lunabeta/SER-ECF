import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BookOpen, Users, Globe, Heart, Lightbulb, ArrowRight, ScrollText, Crown } from "lucide-react";
import boardSamuel from "@/assets/board-samuel.jpg";
import { useRevealRoot } from "@/hooks/useReveal";

const About = () => {
  const { t } = useTranslation();
  useRevealRoot();

  const pillars = [
    { icon: BookOpen, title: t("about.pillar1Title"), description: t("about.pillar1Desc") },
    { icon: Users, title: t("about.pillar2Title"), description: t("about.pillar2Desc") },
    { icon: Globe, title: t("about.pillar3Title"), description: t("about.pillar3Desc") },
    { icon: Heart, title: t("about.pillar4Title"), description: t("about.pillar4Desc") },
  ];

  return (
    <section id="about" className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute -top-8 -left-8 opacity-30 animate-pattern-float">
        <div className="ethiopian-mandala-lg" />
      </div>
      <div className="absolute bottom-20 -right-6 opacity-25 animate-pattern-float" style={{ animationDelay: "6s" }}>
        <div className="ethiopian-mandala-md" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">
            {t("about.eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold">
            {t("about.titleA")}{" "}
            <span className="text-gradient-ethiopian">{t("about.titleB")}</span>
          </h2>
          <div className="section-divider mt-10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 relative reveal-left">
            <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent hidden lg:block" />
            <p className="text-foreground/80 leading-relaxed">{t("about.p1")}</p>
            <p className="text-foreground/80 leading-relaxed">{t("about.p2")}</p>
            <p className="text-foreground/80 leading-relaxed">{t("about.p3")}</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                Vision & History <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/leadership" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                Leadership <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="reveal-right">
            <h3 className="font-display text-2xl text-foreground font-semibold mb-4 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-secondary" />
              {t("about.pillarsTitle")}
            </h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">{t("about.pillarsBody")}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="card-elevated group reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="icon-container mb-4">
                    <p.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
