import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import { useRevealRoot } from "@/hooks/useReveal";

const zones = ["Gamo", "Gofa", "South Omo", "Ari", "Konso", "Gedio", "Burji", "Gardula", "Basketo", "Ale", "Kore", "Wolaita"];

const WhereWeWork = () => {
  const { t } = useTranslation();
  useRevealRoot();

  return (
    <section id="where" className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/15 via-transparent to-secondary/10" />
      </div>
      <div className="absolute top-10 right-10 opacity-30 animate-pattern-float">
        <div className="ethiopian-mandala-md" />
      </div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left">
            <div className="flex gap-1 mb-5">
              <div className="w-10 h-1 bg-ethiopian-green rounded-full" />
              <div className="w-10 h-1 bg-secondary rounded-full" />
              <div className="w-10 h-1 bg-ethiopian-red rounded-full" />
            </div>
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-4">{t("where.eyebrow")}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t("where.titleA")} <span className="text-gradient-gold">{t("where.titleB")}</span> {t("where.titleC")}
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">{t("where.body")}</p>
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/5 border border-secondary/30 backdrop-blur">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm">{t("where.hq")}</span>
            </div>
            <div className="mt-5 p-5 rounded-xl bg-primary-foreground/5 border border-secondary/20 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-2">{t("where.institutionsLabel")}</p>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{t("where.institutionsBody")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {zones.map((z, i) => (
              <div
                key={z}
                className="reveal-zoom group relative px-4 py-5 rounded-lg bg-primary-foreground/5 border border-secondary/20 backdrop-blur transition-all duration-300 hover:bg-secondary hover:border-secondary hover:-translate-y-1 hover:shadow-gold cursor-pointer"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-[10px] uppercase tracking-widest text-secondary/80 group-hover:text-primary/70 font-medium">
                  {t("where.zone")} {String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-display text-lg font-semibold mt-1 group-hover:text-primary">{z}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;
