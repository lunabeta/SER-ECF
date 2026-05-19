import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle, Circle, ClipboardList, Filter } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type Status = "complete" | "partial" | "missing";

interface Item {
  label: string;
  status: Status;
  note?: string;
}

interface Section {
  id: string;
  title: string;
  href?: string;
  items: Item[];
}

const SECTIONS: Section[] = [
  {
    id: "about",
    title: "1. About Us — Institutional Identity",
    href: "/about",
    items: [
      { label: "Who We Are — institutional identity statement", status: "complete" },
      { label: "Regional umbrella role mentioned", status: "complete" },
      { label: "EECF affiliation noted", status: "complete" },
      { label: "Unity + transformation focus", status: "complete" },
      { label: "Vision statement", status: "complete" },
      { label: "Mission statement (6 strategic points)", status: "complete" },
      { label: "50-year historical narrative", status: "complete" },
      { label: "Mandate: Church Unity", status: "complete" },
      { label: "Mandate: Leadership Development", status: "complete" },
      { label: "Mandate: Mission Coordination", status: "complete" },
      { label: "Mandate: Peacebuilding", status: "complete" },
      { label: "Mandate: Representation", status: "complete" },
      { label: "Featured profile — Pastor Dr. Wendmagegn Asfaw (General Secretary) with photo", status: "complete" },
      { label: "Dr. Markos Abiso (Board Chairman) with photo", status: "complete" },
      { label: "Pastor Samuel Tegen (Board Secretary) with photo", status: "complete" },
      { label: "Rev. Isaac Daniel (Vice Chairman)", status: "partial", note: "Bio present, photo missing" },
      { label: "Pastor Lemma Moges (Accountant)", status: "partial", note: "Bio present, photo missing" },
      { label: "Pastor Tessema Agena (Board Member)", status: "partial", note: "Bio present, photo missing" },
      { label: "Pastor Wondmu Getachew (Board Member)", status: "partial", note: "Bio present, photo missing" },
      { label: "Future HQ — G+8 Building, Arba Minch render", status: "complete" },
    ],
  },
  {
    id: "work",
    title: "2. Our Work — Programs (6 modules)",
    href: "/#work",
    items: [
      { label: "Evangelism & Church Planting — problem / response / impact", status: "complete" },
      { label: "Leadership & Theology — problem / response / impact", status: "complete" },
      { label: "Youth & Women — problem / response / impact", status: "complete" },
      { label: "Peacebuilding & Reconciliation — problem / response / impact", status: "complete" },
      { label: "Social Outreach — problem / response / impact", status: "complete" },
      { label: "Education & Health — problem / response / impact", status: "complete" },
      { label: "Photos / stories per program", status: "partial", note: "Generic imagery used; field photos & success stories pending" },
    ],
  },
  {
    id: "where",
    title: "3. Where We Work — 11 Operational Zones",
    href: "/#where",
    items: [
      { label: "Gamo", status: "complete" },
      { label: "Gofa", status: "complete" },
      { label: "South Omo", status: "complete" },
      { label: "Ari", status: "complete" },
      { label: "Konso", status: "complete" },
      { label: "Gedio", status: "complete" },
      { label: "Burji", status: "complete" },
      { label: "Gardula", status: "complete" },
      { label: "Basketo", status: "complete" },
      { label: "Ale", status: "complete" },
      { label: "Kore", status: "complete" },
      { label: "Interactive map of Southern Ethiopia", status: "partial", note: "Static map shown; clickable zone detail pending" },
      { label: "Per-zone ministry summary on click", status: "missing" },
    ],
  },
  {
    id: "partners",
    title: "4. Partnerships",
    href: "/#partners",
    items: [
      { label: "Who We Work With (Churches, NGOs, Donors, Academic, Mission)", status: "complete" },
      { label: "Partnership Areas", status: "complete" },
      { label: "Become a Partner — form: Name", status: "complete" },
      { label: "Form field: Organization", status: "complete" },
      { label: "Form field: Email", status: "complete" },
      { label: "Form field: Area of Interest", status: "complete" },
      { label: "Form field: Message", status: "complete" },
      { label: "Submissions saved to database", status: "complete" },
    ],
  },
  {
    id: "impact",
    title: "5. Projects & Impact",
    href: "/#impact",
    items: [
      { label: "Active Projects", status: "complete" },
      { label: "Completed Projects", status: "partial", note: "Section structure present; case studies pending" },
      { label: "Impact metric: Churches planted (100+)", status: "complete" },
      { label: "Impact metric: Leaders trained (500+/yr)", status: "complete" },
      { label: "Impact metric: Communities reached (10,000+)", status: "complete" },
      { label: "Impact metric: Zones covered (11+)", status: "complete" },
      { label: "Photos for impact stories", status: "partial" },
      { label: "Short success stories", status: "missing", note: "Awaiting field-collected stories" },
    ],
  },
  {
    id: "media",
    title: "6. Media & Resources",
    href: "/media",
    items: [
      { label: "News & updates section", status: "complete" },
      { label: "Sermons / teachings", status: "partial", note: "Section exists; audio/video files pending" },
      { label: "Annual reports (PDF downloads)", status: "missing", note: "Awaiting PDF assets" },
      { label: "Photo gallery", status: "partial" },
      { label: "Video library", status: "missing" },
      { label: "Filters by year / category", status: "missing" },
    ],
  },
  {
    id: "give",
    title: "7. Give / Support",
    href: "/#give",
    items: [
      { label: "Why give — impact-driven messaging", status: "complete" },
      { label: "Sponsor a project", status: "complete" },
      { label: "Support leadership training", status: "complete" },
      { label: "Fund outreach programs", status: "complete" },
      { label: "Transparency & accountability statement", status: "complete" },
      { label: "Monthly giving system", status: "missing" },
      { label: "Project-specific funding targets", status: "missing" },
      { label: "Online payment integration", status: "missing", note: "Stripe/Paddle not yet enabled" },
    ],
  },
  {
    id: "contact",
    title: "8. Contact",
    href: "/#contact",
    items: [
      { label: "Email — southethiopiaregionalecfoa@gmail.com", status: "complete" },
      { label: "Phone — +251 91 157 5204", status: "complete" },
      { label: "Phone — +251 91 661 8105", status: "complete" },
      { label: "Physical address — Arba Minch, Southern Ethiopia", status: "complete" },
      { label: "Contact form (saves to database)", status: "complete" },
      { label: "Map embed", status: "complete" },
    ],
  },
  {
    id: "global",
    title: "9. Global / Site-wide",
    items: [
      { label: "SER-ECF logo in header & footer", status: "complete" },
      { label: "Light + Dark mode toggle", status: "complete" },
      { label: "English / Amharic translation toggle", status: "complete" },
      { label: "Scroll-reveal & transition effects", status: "complete" },
      { label: "Responsive mobile navigation", status: "complete" },
      { label: "Social media links (FB / X / YouTube / Instagram)", status: "missing", note: "Add real handles" },
      { label: "SEO meta description per page", status: "partial" },
      { label: "Favicon (SER-ECF mark)", status: "partial" },
      { label: "Custom domain", status: "missing" },
    ],
  },
];

const STATUS_META: Record<Status, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
  complete: { label: "Complete", cls: "text-ethiopian-green border-ethiopian-green/40 bg-ethiopian-green/10", Icon: CheckCircle2 },
  partial: { label: "Partial", cls: "text-secondary border-secondary/40 bg-secondary/10", Icon: AlertCircle },
  missing: { label: "Missing", cls: "text-ethiopian-red border-ethiopian-red/40 bg-ethiopian-red/10", Icon: Circle },
};

const AdminChecklist = () => {
  const [filter, setFilter] = useState<Status | "all">("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Content Checklist — SER-ECF Admin";
  }, []);

  const stats = useMemo(() => {
    const all = SECTIONS.flatMap((s) => s.items);
    const c = all.filter((i) => i.status === "complete").length;
    const p = all.filter((i) => i.status === "partial").length;
    const m = all.filter((i) => i.status === "missing").length;
    return { total: all.length, complete: c, partial: p, missing: m, pct: Math.round((c / all.length) * 100) };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <ClipboardList className="w-6 h-6 text-secondary" />
            <p className="text-secondary tracking-[0.25em] uppercase text-xs font-semibold">Admin · Content Audit</p>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            SER-ECF Website <span className="text-gradient-gold">Content Checklist</span>
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl">
            Live audit of every required element from the website structure brief — section by section, item by item.
          </p>

          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <SummaryCard label="Overall Completion" value={`${stats.pct}%`} accent />
            <SummaryCard label="Complete" value={stats.complete} sub={`/ ${stats.total}`} tone="green" />
            <SummaryCard label="Partial" value={stats.partial} tone="gold" />
            <SummaryCard label="Missing" value={stats.missing} tone="red" />
          </div>

          <div className="mt-6 h-2 rounded-full bg-primary-foreground/15 overflow-hidden">
            <div className="h-full bg-gradient-gold transition-all duration-700" style={{ width: `${stats.pct}%` }} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8 sticky top-24 z-20 bg-background/80 backdrop-blur-md border border-border rounded-xl p-3 shadow-card">
            <Filter className="w-4 h-4 text-muted-foreground ml-1" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2">Filter</span>
            {(["all", "complete", "partial", "missing"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  filter === f
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "bg-card text-foreground/70 border-border hover:border-secondary/50"
                }`}
              >
                {f === "all" ? "All items" : STATUS_META[f].label}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {SECTIONS.map((section) => {
              const visible = section.items.filter((i) => filter === "all" || i.status === filter);
              if (visible.length === 0) return null;
              const sec_c = section.items.filter((i) => i.status === "complete").length;
              const sec_total = section.items.length;
              const sec_pct = Math.round((sec_c / sec_total) * 100);

              return (
                <article key={section.id} className="card-elevated !p-0 overflow-hidden">
                  <header className="flex flex-wrap items-center justify-between gap-4 p-5 md:p-6 border-b border-border bg-card">
                    <div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{section.title}</h2>
                      <p className="text-xs text-muted-foreground mt-1">
                        {sec_c} of {sec_total} complete · {sec_pct}%
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full transition-all duration-700 ${
                            sec_pct === 100 ? "bg-ethiopian-green" : sec_pct >= 60 ? "bg-secondary" : "bg-ethiopian-red"
                          }`}
                          style={{ width: `${sec_pct}%` }}
                        />
                      </div>
                      {section.href && (
                        <Link
                          to={section.href}
                          className="text-xs font-semibold text-secondary hover:underline whitespace-nowrap"
                        >
                          View →
                        </Link>
                      )}
                    </div>
                  </header>

                  <ul className="divide-y divide-border">
                    {visible.map((item, i) => {
                      const meta = STATUS_META[item.status];
                      return (
                        <li
                          key={i}
                          className="flex items-start gap-4 p-4 md:px-6 hover:bg-muted/30 transition-colors"
                        >
                          <span
                            className={`shrink-0 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${meta.cls}`}
                          >
                            <meta.Icon className="w-3 h-3" />
                            {meta.label}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground font-medium">{item.label}</p>
                            {item.note && (
                              <p className="text-xs text-muted-foreground mt-1 italic">↳ {item.note}</p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-10">
            This checklist is maintained in <code className="text-secondary">src/pages/AdminChecklist.tsx</code>. Update statuses there as items are completed.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

const SummaryCard = ({
  label,
  value,
  sub,
  tone,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  tone?: "green" | "gold" | "red";
  accent?: boolean;
}) => {
  const toneCls =
    tone === "green"
      ? "text-ethiopian-green"
      : tone === "gold"
      ? "text-secondary"
      : tone === "red"
      ? "text-ethiopian-red"
      : "text-secondary";
  return (
    <div className={`rounded-xl p-4 border ${accent ? "border-secondary/50 bg-secondary/10" : "border-primary-foreground/15 bg-primary-foreground/5"} backdrop-blur-sm`}>
      <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70 mb-1">{label}</p>
      <p className={`font-display text-3xl font-bold ${accent ? "text-gradient-gold" : toneCls}`}>
        {value}
        {sub && <span className="text-base font-normal text-primary-foreground/50 ml-1">{sub}</span>}
      </p>
    </div>
  );
};

export default AdminChecklist;
