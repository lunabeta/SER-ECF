import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Globe, Heart, Shield, Megaphone, Crown, ScrollText, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";
import drWendmagegn from "@/assets/dr-wendmagegn.png";
import boardMarkos from "@/assets/board-markos.jpg";
import boardTessema from "@/assets/board-tessema.jpg";
import boardIsaac from "@/assets/board-isaac.jpg";
import boardLemma from "@/assets/board-lemma.jpg";
import boardSamuel from "@/assets/board-samuel.jpg";
import boardWondmu from "@/assets/board-wondmu.jpg";
import boardWendimagegn from "@/assets/board-wendimagegn.jpg";
import foundingPlaque from "@/assets/founding-plaque.jpg";
import BuildingSlideshow from "@/components/BuildingSlideshow";

const BOARD_MEMBERS = [
  {
    name: "Dr. Markos Abiso",
    role: "Executive Board Chairman",
    photo: boardMarkos,
    objectPos: "object-left-top",
    bio: "Provides strategic leadership and governance oversight for SER-ECF, ensuring organizational alignment, accountability, and effective execution of the fellowship's mission across Southern Ethiopia.",
  },
  {
    name: "Pastor Dr. Wendmagegn Asfaw",
    role: "Executive Board Vice Chairman",
    photo: drWendmagegn,
    objectPos: "object-top",
    bio: "Provides overall executive leadership and strategic direction for SER-ECF. He oversees coordination of programs, strengthens inter-church unity, and guides the fellowship's mission, development, and peacebuilding initiatives across Southern Ethiopia.",
  },
  {
    name: "Pastor Samuel Tegen",
    role: "Executive Board Secretary",
    photo: boardSamuel,
    objectPos: "object-top",
    bio: "Responsible for coordinating board communications, maintaining official records, and supporting the effective administration of SER-ECF governance processes to ensure transparency and organizational continuity.",
  },
  {
    name: "Pastor Lemma Moges",
    role: "Executive Board Accountant",
    photo: boardLemma,
    objectPos: "object-top",
    bio: "Provides financial oversight and accountability for SER-ECF, ensuring transparent stewardship of resources, accurate financial reporting, and compliance with organizational and donor requirements.",
  },
  {
    name: "Pastor Tessema Agena",
    role: "Executive Board Member",
    photo: boardTessema,
    objectPos: "object-top",
    bio: "Contributes to strategic oversight and governance of SER-ECF, supporting program development, church engagement, and the advancement of the fellowship's mission across Southern Ethiopia.",
  },
  {
    name: "Pastor Wondmu Getachew",
    role: "Executive Board Member",
    photo: boardWondmu,
    objectPos: "object-top",
    bio: "Participates in strategic governance, contributing to decision-making processes, program oversight, and strengthening collaboration among member churches and regional initiatives.",
  },
  {
    name: "Rev. Isaac Daniel",
    role: "Executive Board Member",
    photo: boardIsaac,
    objectPos: "object-top",
    bio: "Contributes to strategic oversight and governance of SER-ECF, supporting program development, church engagement, and the advancement of the fellowship's mission across Southern Ethiopia.",
  },
];

const EXECUTIVE_BOARD = [
  {
    name: "Dr. Markos Abiso",
    role: "Executive Board Chairman",
    photo: boardMarkos,
    objectPos: "object-left-top",
    bio: "Provides strategic leadership and governance oversight for SER-ECF, ensuring organizational alignment and effective execution of the fellowship's mission.",
  },
  {
    name: "Pastor Dr. Wendmagegn Asfaw",
    role: "Executive Board Vice Chairman",
    photo: drWendmagegn,
    objectPos: "object-top",
    bio: "Provides overall executive leadership and strategic direction for SER-ECF, overseeing programs, strengthening unity, and guiding mission and peacebuilding initiatives.",
  },
  {
    name: "Pastor Samuel Tegen",
    role: "Executive Board Secretary",
    photo: boardSamuel,
    objectPos: "object-top",
    bio: "Responsible for board coordination, documentation, and ensuring effective governance communication and institutional continuity.",
  },
];

const AboutPage = () => {
  const { t } = useTranslation();
  useRevealRoot();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mandate = [
    { icon: Users, key: "mand1" },
    { icon: Globe, key: "mand2" },
    { icon: BookOpen, key: "mand3" },
    { icon: Sparkles, key: "mand4" },
    { icon: Shield, key: "mand5" },
    { icon: Megaphone, key: "mand6" },
  ];

  const missionPoints = ["m1", "m2", "m3", "m4", "m5", "m6"];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="About SER-ECF"
        description="Learn about SER-ECF — our vision, mission, history, leadership, and the ministries we serve across Southern Ethiopia."
        url="https://serecf.org/about"
      />
      <SiteHeader />

      {/* Page hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute -top-20 -right-20 ethiopian-mandala-lg opacity-30 animate-pattern-float" />

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("common.home")}
          </Link>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">
            {t("about.eyebrow")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            {t("aboutPage.heroH1A")} <span className="text-gradient-ethiopian">{t("aboutPage.heroH1B")}</span>{" "}
            {t("aboutPage.heroH1C")}
          </h1>
          <div className="flex gap-1 mt-8">
            <div className="w-12 h-1 bg-ethiopian-green rounded-full" />
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <div className="w-12 h-1 bg-ethiopian-red rounded-full" />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="reveal-left">
              <p className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-3">
                {t("aboutPage.whoEyebrow")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{t("aboutPage.whoTitle")}</h2>
            </div>
            <div className="lg:col-span-2 space-y-5 reveal-right">
              <p
                className="text-foreground/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("aboutPage.whoP1") }}
              />
              <p
                className="text-foreground/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("aboutPage.whoP2") }}
              />
              <p className="text-foreground/80 leading-relaxed">{t("aboutPage.whoP3")}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {["value1", "value2", "value3", "value4"].map((v) => (
                  <li key={v} className="card-elevated !p-4 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="text-foreground/85 text-sm font-medium">{t(`aboutPage.${v}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto grid md:grid-cols-2 gap-8">
          <div className="card-elevated reveal-left relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="icon-container mb-5">
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">
              {t("aboutPage.visionEyebrow")}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("aboutPage.visionTitle")}
            </h3>
            <p className="text-foreground/80 leading-relaxed">{t("aboutPage.visionBody")}</p>
          </div>

          <div className="card-elevated reveal-right relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="icon-container mb-5">
              <ScrollText className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">
              {t("aboutPage.missionEyebrow")}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("aboutPage.missionTitle")}
            </h3>
            <ul className="space-y-3">
              {missionPoints.map((m, i) => (
                <li key={m} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                  <span className="text-secondary font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t(`aboutPage.${m}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-section-alt relative overflow-hidden">
        <div className="absolute -bottom-10 -left-10 ethiopian-mandala-md opacity-20 animate-pattern-float" />
        <div className="container-wide mx-auto relative z-10">
          <div className="text-center mb-14 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">
              {t("aboutPage.historyEyebrow")}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              <span className="text-gradient-ethiopian">{t("aboutPage.historyTitleA")}</span>{" "}
              {t("aboutPage.historyTitleB")}
            </h2>
            <div className="section-divider mt-8" />
          </div>

          <div className="max-w-3xl mx-auto space-y-5 reveal">
            <p className="text-foreground/80 leading-relaxed">{t("aboutPage.historyP1")}</p>
            <p className="text-foreground/80 leading-relaxed">{t("aboutPage.historyP2")}</p>
            <p className="text-foreground/80 leading-relaxed">{t("aboutPage.historyP3")}</p>
          </div>

          {/* Mandate grid */}
          <div className="mt-16">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-10 reveal">
              {t("aboutPage.mandateTitle")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mandate.map((m, i) => (
                <div key={m.key} className="card-elevated group reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="icon-container mb-4">
                    <m.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {t(`aboutPage.${m.key}Title`)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`aboutPage.${m.key}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Today */}
          <div className="mt-16 max-w-3xl mx-auto card-elevated reveal">
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-3">
              {t("aboutPage.todayEyebrow")}
            </p>
            <p className="text-foreground/80 leading-relaxed">{t("aboutPage.todayBody")}</p>
          </div>
        </div>
      </section>

      {/* Foundation Stone & Future Headquarters */}
      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="reveal">
            <div className="text-center mb-10">
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">
                {t("aboutPage.foundEyebrow")}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {t("aboutPage.foundTitle")}
              </h3>
              <p className="text-foreground/70 mt-3 max-w-2xl mx-auto">{t("aboutPage.foundIntro")}</p>
            </div>

            <div className="card-elevated overflow-hidden p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-section-alt">
                    <img
                      src={foundingPlaque}
                      alt={t("aboutPage.foundCeremony")}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-display text-xl font-bold text-foreground">{t("aboutPage.foundCeremony")}</h4>
                    <p className="text-foreground/75 leading-relaxed text-sm">{t("aboutPage.foundExplain")}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <BuildingSlideshow className="w-full" />
                  <div className="space-y-3">
                    <h4 className="font-display text-xl font-bold text-foreground">{t("aboutPage.bldTitle")}</h4>
                    <p className="text-foreground/75 leading-relaxed text-sm">{t("aboutPage.bldBody")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Our Commitment</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
            <div className="section-divider mt-8" />
          </div>
          <ul className="max-w-3xl mx-auto mt-10 grid sm:grid-cols-2 gap-3 reveal">
            {[
              "Serving the Church with integrity and humility",
              "Advancing the Gospel of Jesus Christ",
              "Strengthening unity among Evangelical churches",
              "Promoting peace and reconciliation",
              "Supporting community transformation",
              "Ensuring accountability, transparency, and excellence",
            ].map((c) => (
              <li key={c} className="card-elevated !p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span className="text-foreground/85 text-sm font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Our Commitment</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
            <div className="section-divider mt-8" />
          </div>
          <ul className="max-w-3xl mx-auto mt-10 grid sm:grid-cols-2 gap-3 reveal">
            {[
              "Serving the Church with integrity and humility",
              "Advancing the Gospel of Jesus Christ",
              "Strengthening unity among Evangelical churches",
              "Promoting peace and reconciliation",
              "Supporting community transformation",
              "Ensuring accountability, transparency, and excellence",
            ].map((c) => (
              <li key={c} className="card-elevated !p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span className="text-foreground/85 text-sm font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("aboutPage.ctaTitle")}</h2>
          <p className="text-primary-foreground/75 max-w-xl mx-auto mb-8">{t("aboutPage.ctaBody")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#work"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
            >
              {t("aboutPage.ctaWork")}
            </Link>
            <Link
              to="/#partners"
              className="px-6 py-3 rounded-lg border border-secondary/60 text-primary-foreground hover:bg-secondary/10 transition-colors"
            >
              {t("aboutPage.ctaPartner")}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default AboutPage;
