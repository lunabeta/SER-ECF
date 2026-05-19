import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Crown, Users, BookOpen, HeartHandshake, Sparkles, Shield } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";
import { SPECIALIZED_MINISTRIES } from "@/data/specializedMinistries";

const purposeItems = [
  "Provide spiritual and strategic direction for all SER-ECF programs",
  "Coordinate church-based ministry activities across the region",
  "Strengthen leadership capacity among pastors and ministry workers",
  "Ensure effective implementation of evangelism and discipleship programs",
  "Promote unity and collaboration among member churches",
  "Oversee holistic transformation initiatives in communities",
];

const domains = [
  { title: "Evangelism & Church Planting", description: "Outreach programs, gospel campaigns, and the establishment of new churches in underserved communities.", icon: Sparkles },
  { title: "Discipleship & Spiritual Formation", description: "Bible teaching, discipleship systems, and spiritual development programs.", icon: BookOpen },
  { title: "Leadership Development & Training", description: "Theological education, mentorship, and capacity-building initiatives.", icon: Crown },
  { title: "Peacebuilding & Reconciliation", description: "Conflict resolution, dialogue, and unity among diverse communities and churches.", icon: HeartHandshake },
  { title: "Youth & Women Ministry", description: "Empowerment programs focused on leadership development, mentorship, and skills training.", icon: Users },
  { title: "Humanitarian & Development", description: "Compassion ministries, relief programs, and support for vulnerable communities.", icon: Shield },
];

const structure = [
  "Executive Board (Strategic Governance)",
  "Regional Leadership Team (Implementation Coordination)",
  "Ministry Departments (Program Execution)",
  "Field Coordinators (Local Church Engagement)",
  "Program Leaders (Specialized Ministry Areas)",
];

const values = [
  "Biblical integrity and spiritual maturity",
  "Servant leadership and humility",
  "Accountability and transparency",
  "Unity and collaboration",
  "Excellence in service delivery",
  "Commitment to community transformation",
];

const MinistryLeadership = () => {
  useRevealRoot();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ministry Leadership — SER-ECF";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute -top-20 -right-20 ethiopian-mandala-lg opacity-30 animate-pattern-float" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">Leadership</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Ministry <span className="text-gradient-ethiopian">Leadership</span>
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
            The coordinated system of spiritual, programmatic, and operational leadership that drives SER-ECF's mission across Southern Ethiopia — ensuring all ministry activities are aligned with our vision of unity, evangelism, leadership development, peacebuilding, and holistic community transformation.
          </p>
          <div className="flex gap-1 mt-8">
            <div className="w-12 h-1 bg-ethiopian-green rounded-full" />
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <div className="w-12 h-1 bg-ethiopian-red rounded-full" />
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Purpose</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Why Ministry Leadership</h2>
            <div className="section-divider mt-8" />
          </div>
          <ul className="max-w-4xl mx-auto space-y-2 reveal">
            {purposeItems.map((it) => (
              <li key={it} className="text-foreground/80 leading-relaxed flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Domains */}
      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Core Areas</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Leadership Domains</h2>
            <div className="section-divider mt-8" />
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="card-elevated group">
                  <div className="icon-container mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{d.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Ministries */}
      <section id="specialized-ministries" className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Specialized Ministries</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Explore Our Ministries</h2>
            <p className="text-foreground/75 mt-5 leading-relaxed">
              Each specialized ministry advances a specific facet of SER-ECF's mission. Click a ministry to learn more about its vision, focus areas, programs, and how to get involved.
            </p>
            <div className="section-divider mt-8" />
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {SPECIALIZED_MINISTRIES.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.slug}
                  to={`/ministries/${m.slug}`}
                  className="card-elevated group block focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg transition-transform hover:-translate-y-1"
                  aria-label={`Open ${m.name}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-2xl" aria-hidden>{m.emoji}</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {m.shortName}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Structure</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Leadership Structure</h2>
            <div className="section-divider mt-8" />
          </div>
          <ol className="max-w-4xl mx-auto space-y-2 list-decimal pl-6 reveal">
            {structure.map((it) => (
              <li key={it} className="text-foreground/80 leading-relaxed">{it}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Values</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Leadership Values</h2>
            <div className="section-divider mt-8" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6 reveal">
            <ul className="space-y-2">
              {values.map((it) => (
                <li key={it} className="text-foreground/80 leading-relaxed flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="card-elevated border-l-4 border-secondary">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">Vision</h4>
              <p className="text-foreground/80 leading-relaxed">
                To build a strong, Spirit-led, and well-equipped leadership system that effectively advances the Gospel, strengthens churches, and transforms communities across Southern Ethiopia.
              </p>
            </div>
            <div className="card-elevated border-l-4 border-secondary">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">Faith • Leadership • Transformation</h4>
              <p className="text-foreground/80 leading-relaxed">
                “Our mission is to proclaim the Gospel, equip leaders, strengthen the Church, serve communities, and contribute to lasting spiritual and social transformation.” — Pastor Dr. Wendmagegn Asfaw (PhD)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Equip leaders, transform communities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/partnerships" className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors">Partner With Us</Link>
            <Link to="/donate" className="px-6 py-3 rounded-lg border border-secondary/60 text-primary-foreground hover:bg-secondary/10 transition-colors">Give Now</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default MinistryLeadership;
