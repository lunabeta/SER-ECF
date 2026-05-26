import { useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";
import SEO from "@/components/SEO";

export type InfoBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string; eyebrow?: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "cards"; items: { title: string; description: string; icon?: LucideIcon }[] }
  | { kind: "definition"; items: { term: string; description: string }[] }
  | { kind: "callout"; title?: string; body: string }
  | { kind: "custom"; node: ReactNode };

export interface InfoSection {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  blocks: InfoBlock[];
  background?: "alt" | "light";
}

interface InfoPageProps {
  title: string;
  heroEyebrow: string;
  heroTitle: ReactNode;
  heroSubtitle?: string;
  sections: InfoSection[];
  cta?: { title: string; body?: string; primary?: { label: string; to: string }; secondary?: { label: string; to: string } };
}

const renderBlock = (block: InfoBlock, idx: number) => {
  switch (block.kind) {
    case "paragraph":
      return (
        <p key={idx} className="text-foreground/80 leading-relaxed">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <div key={idx} className="pt-2">
          {block.eyebrow && (
            <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold mb-2">
              {block.eyebrow}
            </p>
          )}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{block.text}</h3>
        </div>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag key={idx} className={`space-y-2 ${block.ordered ? "list-decimal pl-6" : ""}`}>
          {block.items.map((item, i) => (
            <li key={i} className="text-foreground/80 leading-relaxed flex gap-3">
              {!block.ordered && (
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden />
              )}
              <span>{item}</span>
            </li>
          ))}
        </Tag>
      );
    }
    case "cards":
      return (
        <div key={idx} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {block.items.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="card-elevated group">
                {Icon && (
                  <div className="icon-container mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                )}
                <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      );
    case "definition":
      return (
        <div key={idx} className="space-y-5">
          {block.items.map((d, i) => (
            <div key={i} className="card-elevated">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">{d.term}</h4>
              <p className="text-sm text-foreground/75 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <div key={idx} className="card-elevated border-l-4 border-secondary">
          {block.title && (
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">{block.title}</h4>
          )}
          <p className="text-foreground/80 leading-relaxed">{block.body}</p>
        </div>
      );
    case "custom":
      return <div key={idx}>{block.node}</div>;
  }
};

const InfoPage = ({ title, heroEyebrow, heroTitle, heroSubtitle, sections, cta }: InfoPageProps) => {
  useRevealRoot();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, [title]);

  const canonical = typeof window !== "undefined" ? `https://serecf.org${window.location.pathname}` : "https://serecf.org";

  return (
    <main className="min-h-screen bg-background">
      <SEO title={title.replace(/\s*\u2014\s*SER-ECF$/i, "")} description={heroSubtitle ?? title} url={canonical} />
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute -top-20 -right-20 ethiopian-mandala-lg opacity-30 animate-pattern-float" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">
            {heroEyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            {heroTitle}
          </h1>
          {heroSubtitle && (
            <p className="text-primary-foreground/80 mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
              {heroSubtitle}
            </p>
          )}
          <div className="flex gap-1 mt-8">
            <div className="w-12 h-1 bg-ethiopian-green rounded-full" />
            <div className="w-12 h-1 bg-secondary rounded-full" />
            <div className="w-12 h-1 bg-ethiopian-red rounded-full" />
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={idx}
          id={section.id}
          className={`section-padding ${
            (section.background ?? (idx % 2 === 0 ? "alt" : "light")) === "alt"
              ? "bg-section-alt"
              : "bg-section-light"
          }`}
        >
          <div className="container-wide mx-auto">
            {(section.eyebrow || section.title) && (
              <div className="max-w-3xl mx-auto text-center mb-10 reveal">
                {section.eyebrow && (
                  <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">
                    {section.eyebrow}
                  </p>
                )}
                {section.title && (
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    {section.title}
                  </h2>
                )}
                {section.intro && (
                  <p className="text-foreground/75 mt-5 leading-relaxed">{section.intro}</p>
                )}
                <div className="section-divider mt-8" />
              </div>
            )}
            <div className="max-w-4xl mx-auto space-y-6 reveal">
              {section.blocks.map((b, i) => renderBlock(b, i))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      {cta && (
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "var(--gradient-mesh)" }} />
          <div className="container-wide mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
            {cta.body && (
              <p className="text-primary-foreground/75 max-w-xl mx-auto mb-8">{cta.body}</p>
            )}
            <div className="flex flex-wrap justify-center gap-4">
              {cta.primary && (
                /^https?:\/\//.test(cta.primary.to) ? (
                  <a
                    href={cta.primary.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    {cta.primary.label}
                  </a>
                ) : (
                  <Link
                    to={cta.primary.to}
                    className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    {cta.primary.label}
                  </Link>
                )
              )}
              {cta.secondary && (
                /^https?:\/\//.test(cta.secondary.to) ? (
                  <a
                    href={cta.secondary.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-secondary/60 text-primary-foreground hover:bg-secondary/10 transition-colors"
                  >
                    {cta.secondary.label}
                  </a>
                ) : (
                  <Link
                    to={cta.secondary.to}
                    className="px-6 py-3 rounded-lg border border-secondary/60 text-primary-foreground hover:bg-secondary/10 transition-colors"
                  >
                    {cta.secondary.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
};

export default InfoPage;
