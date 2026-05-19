import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";
import { useTranslation } from "react-i18next";
import drWendmagegn from "@/assets/dr-wendmagegn.png";
import boardMarkos from "@/assets/board-markos.jpg";
import boardTessema from "@/assets/board-tessema.jpg";
import boardIsaac from "@/assets/board-isaac.jpg";
import boardLemma from "@/assets/board-lemma.jpg";
import boardSamuel from "@/assets/board-samuel.jpg";
import boardWondmu from "@/assets/board-wondmu.jpg";

const BOARD_MEMBERS = [
  {
    name: "Dr. Markos Abiso (PhD. , Assosiate Professor)",
    role: "Executive Board Chairman",
    photo: boardMarkos,
    objectPos: "object-left-top",
    bio: "Provides strategic leadership and governance oversight for SER-ECF, ensuring organizational alignment, accountability, and effective execution of the fellowship's mission across Southern Ethiopia.",
  },
  {
    name: "Pastor Dr. Wendmagegn Asfaw Shiferaw (PhD.)",
    role: "Executive Board Vice Chairman",
    photo: drWendmagegn,
    objectPos: "object-top",
    bio: "Provides overall executive leadership and strategic direction for SER-ECF. He oversees coordination of programs, strengthens inter-church unity, and guides the fellowship's mission, development, and peacebuilding initiatives across Southern Ethiopia.",
    linkedin: "https://www.linkedin.com/in/dr-wendmagegn-asfaw-147a83229",
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
    name: "Dr. Markos Abiso (PhD. , Associate Professor)",
    role: "Executive Board Chairman",
    photo: boardMarkos,
    objectPos: "object-left-top",
    bio: "Provides strategic leadership and governance oversight for SER-ECF, ensuring organizational alignment and effective execution of the fellowship's mission.",
  },
  {
    name: "Pastor Dr. Wendmagegn Asfaw Shiferaw (PhD.)",
    role: "Executive Board Vice Chairman",
    photo: drWendmagegn,
    objectPos: "object-top",
    bio: "Provides overall executive leadership and strategic direction for SER-ECF, overseeing programs, strengthening unity, and guiding mission and peacebuilding initiatives.",
    linkedin: "https://www.linkedin.com/in/dr-wendmagegn-asfaw-147a83229",
  },
  {
    name: "Pastor Samuel Tegen",
    role: "Executive Board Secretary",
    photo: boardSamuel,
    objectPos: "object-top",
    bio: "Responsible for board coordination, documentation, and ensuring effective governance communication and institutional continuity.",
  },
];

const LeadershipPage = () => {
  const { t } = useTranslation();
  useRevealRoot();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Leadership — SER-ECF Board of Directors & Executive Board";
  }, []);

  return (
    <main className="min-h-screen bg-background">
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
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">Governance</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Our <span className="text-gradient-ethiopian">Leadership</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mt-6 leading-relaxed">
            Meet the Board of Directors and Executive Board guiding SER-ECF's mission across Southern Ethiopia.
          </p>
          <div className="flex gap-1 mt-8">
            <div className="w-12 h-1 bg-ethiopian-green rounded-full" />
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <div className="w-12 h-1 bg-ethiopian-red rounded-full" />
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Governance</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Board of Directors</h2>
            <div className="section-divider mt-8" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4 reveal mb-14">
            <p className="text-foreground/80 leading-relaxed">
              The South Ethiopia Region Evangelical Churches Fellowship (SER-ECF) is governed by an Executive Board of
              Directors composed of experienced Christian leaders who provide strategic leadership, governance
              oversight, and institutional direction for the fellowship's mission across Southern Ethiopia.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The Board ensures accountability, unity, and effective implementation of SER-ECF's programs in evangelism,
              leadership development, peacebuilding, and holistic community transformation.
            </p>
          </div>

          <div className="text-center mb-10 reveal">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Board Members</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD_MEMBERS.map((m, i) => (
              <div
                key={m.name}
                className="card-elevated reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative mb-5">
                  <div className="absolute -inset-2 rounded-full bg-secondary/15 blur-xl" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-secondary/60 shadow-gold">
                    <img src={m.photo} alt={m.name} className={`w-full h-full object-cover ${m.objectPos}`} />
                  </div>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">{m.name}</h4>
                <p className="text-[11px] tracking-[0.22em] uppercase text-secondary font-semibold mt-1">{m.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                {"linkedin" in m && m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Leadership Structure</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Executive Board</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              The Executive Board provides the highest level of governance and strategic direction for SER-ECF.
            </p>
            <div className="section-divider mt-8" />
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3 reveal mb-12">
            {[
              "Strategic leadership and institutional oversight",
              "Coordination of regional ministry programs",
              "Strengthening unity among Evangelical churches",
              "Ensuring accountability and transparency",
              "Guiding peacebuilding and development initiatives",
            ].map((item) => (
              <div key={item} className="card-elevated !p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span className="text-foreground/85 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EXECUTIVE_BOARD.map((m, i) => (
              <div
                key={m.name}
                className="card-elevated reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative mb-5">
                  <div className="absolute -inset-2 rounded-full bg-secondary/15 blur-xl" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-secondary/60 shadow-gold">
                    <img src={m.photo} alt={m.name} className={`w-full h-full object-cover ${m.objectPos}`} />
                  </div>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">{m.name}</h4>
                <p className="text-[11px] tracking-[0.22em] uppercase text-secondary font-semibold mt-1">{m.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                {"linkedin" in m && m.linkedin ? (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Staff */}
      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Meet Our Staff</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              South Ethiopia Region Evangelical Churches Fellowship Office
            </h2>
            <p className="text-secondary font-semibold mt-3">(SER-ECF)</p>
            <div className="section-divider mt-8" />
          </div>

          <div className="max-w-3xl mx-auto reveal mb-14">
            <p className="text-foreground/80 leading-relaxed text-center">
              The South Ethiopia Region Evangelical Churches Fellowship Office (SER-ECF) is led and supported by a
              dedicated team of spiritual and administrative leaders committed to advancing the Gospel, strengthening
              churches, and promoting holistic transformation across Southern Ethiopia.
            </p>
          </div>

          {/* Leadership */}
          <div className="max-w-4xl mx-auto reveal mb-16">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Leadership</h3>
            </div>
            <div className="card-elevated flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="relative shrink-0">
                <div className="absolute -inset-2 rounded-full bg-secondary/15 blur-xl" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-secondary/60 shadow-gold">
                  <img
                    src={drWendmagegn}
                    alt="Pastor Dr. Wendmagegn Asfaw"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  Pastor Dr. Wendmagegn Asfaw Shiferaw (PhD.)
                </h4>
                <p className="text-[11px] tracking-[0.22em] uppercase text-secondary font-semibold mt-1">
                  Regional General Secretary
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                In this important leadership position, he provides visionary guidance, spiritual leadership, and administrative coordination for the fellowship’s regional mission and ministry activities. His responsibilities include strengthening church unity, coordinating evangelical partnerships, supporting pastors and church leaders, promoting peacebuilding and community transformation, leading humanitarian and development initiatives, and advancing theological education and leadership training programs. Through his leadership, SER-ECF continues to expand its impact in evangelism, discipleship, social outreach, youth empowerment, and collaborative ministry across South Ethiopia and beyond.
                </p>
                <a
                  href="https://www.linkedin.com/in/dr-wendmagegn-asfaw-147a83229"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dr. Wendmagegn Asfaw on LinkedIn"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="reveal mb-16">
            <div className="text-center mb-4">
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-3">
                Under His Leadership
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Departments</h3>
            </div>
            <p className="text-foreground/75 max-w-3xl mx-auto text-center leading-relaxed mb-10">
              The following departments operate under the coordination and strategic oversight of the Regional General
              Secretary to ensure effective implementation of SER-ECF's mission and programs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Mission and Evangelism Department",
                  desc: "Coordinates evangelistic outreach, church planting initiatives, and discipleship programs across the region.",
                },
                {
                  title: "Media and Publication Department",
                  desc: "Manages communication, documentation, publications, sermons, news updates, and digital media outreach.",
                },
                {
                  title: "Marriage and Family Department",
                  desc: "Provides teaching, counseling, and programs that strengthen marriages, families, and Christian household life.",
                },
                {
                  title: "Evaluation and Monitoring Department",
                  desc: "Ensures effective tracking, assessment, and evaluation of SER-ECF programs for accountability and impact measurement.",
                },
                {
                  title: "Development and Social Services Department",
                  desc: "Coordinates humanitarian outreach, community development initiatives, and social transformation programs.",
                },
                {
                  title: "Administration and Finance Department",
                  desc: "Manages administrative systems, financial planning, resource allocation, and organizational operations.",
                },
                {
                  title: "Christian Education Department",
                  desc: "Oversees theological training, leadership development, discipleship programs, and Christian education initiatives.",
                },
                {
                  title: "Resource Collection and Usage Department",
                  desc: "Coordinates resource mobilization, stewardship, distribution, and responsible use of ministry resources.",
                },
              ].map((d, i) => (
                <div key={d.title} className="card-elevated reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                  <div className="w-10 h-1 bg-secondary rounded-full mb-3" />
                  <h4 className="font-display text-base font-semibold text-foreground mb-2">{d.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Teams */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: "Regional Leadership Team",
                intro:
                  "The Regional Leadership Team coordinates ministry activities and ensures effective implementation of SER-ECF programs across Southern Ethiopia.",
                items: [
                  "Regional program coordination",
                  "Church network engagement",
                  "Field supervision and support",
                  "Implementation of strategic initiatives",
                ],
              },
              {
                title: "Ministry Coordinators",
                intro:
                  "Ministry Coordinators oversee specific program areas and ensure effective delivery of SER-ECF ministry activities.",
                items: [
                  "Evangelism and church planting coordination",
                  "Leadership development programs",
                  "Youth and women ministries",
                  "Peacebuilding and reconciliation initiatives",
                  "Community outreach programs",
                ],
              },
              {
                title: "Administrative Staff",
                intro: "The Administrative Staff support the operational and organizational functions of SER-ECF.",
                items: [
                  "Office administration and communication",
                  "Record keeping and documentation",
                  "Financial and logistical support",
                  "Coordination of meetings and events",
                  "Internal communication systems",
                ],
              },
              {
                title: "Program Leaders",
                intro:
                  "Program Leaders are responsible for guiding and managing specific ministry and development programs within SER-ECF.",
                items: [
                  "Design and implementation of programs",
                  "Monitoring and evaluation of impact",
                  "Field-level ministry coordination",
                  "Collaboration with churches and partners",
                  "Reporting and program development",
                ],
              },
            ].map((g, i) => (
              <div key={g.title} className="card-elevated reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">{g.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{g.intro}</p>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Our Commitment */}
          <div className="max-w-4xl mx-auto reveal">
            <div className="text-center mb-8">
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs mb-3">Our Commitment</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                SER-ECF staff are committed to
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Serving the Church with integrity and humility",
                "Advancing the Gospel of Jesus Christ",
                "Strengthening unity among Evangelical churches",
                "Promoting peace and reconciliation",
                "Supporting community transformation",
                "Ensuring accountability, transparency, and excellence",
              ].map((item) => (
                <div key={item} className="card-elevated !p-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span className="text-foreground/85 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default LeadershipPage;
