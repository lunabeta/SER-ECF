import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Heart, Users, Shield, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdryA70k38CtMyi3csS1w4j3S4Ekv59-fOMJ051BNziL0Rl4A/viewform?embedded=true";
const GOOGLE_FORM_PUBLIC = "https://docs.google.com/forms/d/e/1FAIpQLSdryA70k38CtMyi3csS1w4j3S4Ekv59-fOMJ051BNziL0Rl4A/viewform";

const Careers = () => {
  useRevealRoot();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers — Work with SER-ECF";
  }, []);

  const opportunities = [
    { icon: Heart, title: "Ministry Positions", items: ["Evangelism and Church Planting", "Discipleship and Leadership Training", "Youth and Women Ministries", "Peacebuilding and Reconciliation", "Missionary Work and Outreach"] },
    { icon: Briefcase, title: "Administrative Roles", items: ["Office Administration", "Finance and Accounting", "Human Resources", "Program Coordination", "Logistics and Operations"] },
    { icon: Shield, title: "Technical & Support", items: ["Media and Communication", "Documentation and Reporting", "IT and Digital Systems", "Event Management", "Monitoring and Evaluation"] },
    { icon: Users, title: "Internship Programs", items: ["Theology and ministry students", "Young professionals", "Emerging church leaders", "Community development practitioners"] },
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute -top-20 -right-20 ethiopian-mandala-lg opacity-30 animate-pattern-float" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">Careers</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Work With <span className="text-gradient-ethiopian">SER-ECF</span>
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
            Join a team committed to advancing the Gospel and serving communities across Southern Ethiopia
            through ministry, leadership, administration, and community transformation.
          </p>
          <div className="flex gap-1 mt-8">
            <div className="w-12 h-1 bg-ethiopian-green rounded-full" />
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <div className="w-12 h-1 bg-ethiopian-red rounded-full" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Opportunities</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Career Opportunities</h2>
            <div className="section-divider mt-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((op) => (
              <div key={op.title} className="card-elevated reveal">
                <div className="icon-container mb-4"><op.icon className="w-6 h-6 text-secondary" /></div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{op.title}</h3>
                <ul className="space-y-2">
                  {op.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 reveal">
            <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Apply</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Application Form</h2>
            <p className="text-foreground/70 mt-4 leading-relaxed">
              Complete the form below to apply. We welcome applicants who demonstrate strong Christian faith,
              integrity, servant leadership, and a heart for community transformation.
            </p>
            <a
              href={GOOGLE_FORM_PUBLIC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-secondary font-semibold hover:underline"
            >
              Open form in new tab <ExternalLink className="w-4 h-4" />
            </a>
            <div className="section-divider mt-8" />
          </div>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-elevated bg-background reveal">
            <iframe
              src={GOOGLE_FORM_URL}
              title="SER-ECF Application Form"
              className="w-full"
              style={{ height: "1400px", border: 0 }}
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Careers;
