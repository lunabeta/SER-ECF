import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-ethiopia.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — Ken Burns slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Southern Ethiopia landscape at golden hour"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns will-change-transform"
        />

        {/* Cinematic gradient stack */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/15" />

        {/* Soft divine rays */}
        <div className="absolute inset-0 opacity-25">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] animate-orbit-slow"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, hsl(42 92% 60% / 0.20) 10deg, transparent 30deg, hsl(205 78% 60% / 0.12) 90deg, transparent 110deg, hsl(42 92% 60% / 0.16) 180deg, transparent 200deg, hsl(205 78% 60% / 0.10) 270deg, transparent 290deg)",
            }}
          />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-4s" }}
        />

        <div className="absolute -top-6 -right-6 opacity-50 animate-pattern-float">
          <div className="ethiopian-mandala-lg" />
        </div>
        <div className="absolute bottom-32 left-12 opacity-35 animate-pattern-float" style={{ animationDelay: "4s" }}>
          <div className="ethiopian-mandala-md" />
        </div>
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT — Text content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <div className="flex justify-center lg:justify-start gap-1 mb-6 animate-fade-in stagger-1">
              <div className="w-12 h-1 bg-ethiopian-green rounded-full" />
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <div className="w-12 h-1 bg-ethiopian-red rounded-full" />
            </div>

            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-5 animate-fade-in stagger-2">
              {t("hero.eyebrow")}
            </p>

            <h1 className="font-display text-3xl md:text-4xl lg:text-6xl text-primary-foreground font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="block animate-word-reveal" style={{ animationDelay: "0.2s" }}>
                {t("hero.titleA")}
              </span>
              <span className="block animate-word-reveal" style={{ animationDelay: "0.45s" }}>
                <span className="text-gradient-gold">{t("hero.titleB")}</span>{" "}
                <span className="text-primary-foreground">{t("hero.titleC")}</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-secondary/95 font-display italic mb-4 animate-spiritual-rise stagger-3">
              {t("hero.subtitle")}
            </p>

            <p className="text-base md:text-lg text-primary-foreground/85 max-w-2xl mb-10 animate-spiritual-rise stagger-4 mx-auto lg:mx-0 leading-relaxed">
              {t("hero.body")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-spiritual-rise stagger-5">
              <Button
                variant="heroSolid"
                size="xl"
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="group"
              >
                <Sparkles className="w-4 h-4 mr-1 transition-transform group-hover:rotate-12" />
                {t("hero.cta1")}
              </Button>
              <Button
                variant="hero"
                size="xl"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdryA70k38CtMyi3csS1w4j3S4Ekv59-fOMJ051BNziL0Rl4A/viewform?usp=header",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                {t("hero.cta2")}
              </Button>
              <Button
                variant="heroSolid"
                size="xl"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScpf4q2tXRL2u9MXw7FPhfb6FAfruxx-4x80WodxycG0daPIw/viewform?usp=publish-editor",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Registration Form
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 border-t border-primary-foreground/15 pt-8 animate-fade-in stagger-6">
              {[
                { n: "500+", l: t("hero.statLeaders") },
                { n: "100+", l: t("hero.statChurches") },
                { n: "12+", l: t("hero.statZones") },
              ].map((s) => (
                <div key={s.l} className="group">
                  <div className="font-display text-3xl md:text-4xl text-gradient-gold font-bold transition-transform duration-300 group-hover:scale-110 origin-left">
                    {s.n}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Logo, centered */}
          <div className="flex-shrink-0 flex items-center justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute -inset-4 rounded-full bg-accent/15 blur-2xl" />
              <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-4 border-secondary/50 shadow-gold ring-4 ring-primary-foreground/10 bg-primary-foreground/5 backdrop-blur">
                <img src={logo} alt="SER-ECF official crest" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:inline-flex absolute -bottom-3 left-1/2 -translate-x-1/2 items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-primary/40 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-[11px] tracking-[0.25em] uppercase text-secondary font-semibold whitespace-nowrap">
                  {t("hero.eyebrow")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-secondary transition-all duration-300 animate-bounce hover:scale-110"
        aria-label="Discover more"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">{t("hero.discover")}</span>
          <ChevronDown className="w-7 h-7" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
