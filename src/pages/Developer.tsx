import { Link } from "react-router-dom";
import { Mail, Phone, Globe, ArrowLeft, Code2, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const Developer = () => {
  const name = "Betelhem Worku";
  const role = "Fullstack Developer";
  const portfolio = "https://lunaworku.vercel.app/";
  const phone = "+251911487718";
  const email = "lunaworku@gmail.com";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="Developer — Betelhem Worku" description="Developer profile for Betelhem Worku — Fullstack Developer. Portfolio, contact details, and services." url="https://serecf.org/developer" />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-ethiopian opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-ethiopian" />
          <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to site
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs uppercase tracking-[0.2em] font-semibold mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Made with love by
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                {name}
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-secondary font-medium">
                {role}
              </p>
              <p className="mt-6 text-base md:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
                Crafting modern, accessible, and beautiful web experiences. This
                site for SER-ECF was designed and built end-to-end with care for
                performance, design, and the people who use it.
              </p>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-16 md:py-20">
          <div className="container-wide mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-5">
              <a
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-border bg-card hover:border-secondary/60 hover:shadow-gold transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Portfolio
                </div>
                <div className="mt-1 font-medium text-foreground break-all">
                  lunaworku.vercel.app
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-secondary/60 hover:shadow-gold transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Email
                </div>
                <div className="mt-1 font-medium text-foreground break-all">
                  {email}
                </div>
              </a>

              <a
                href={`tel:${phone}`}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-secondary/60 hover:shadow-gold transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Phone
                </div>
                <div className="mt-1 font-medium text-foreground">{phone}</div>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 md:p-10 rounded-2xl bg-gradient-hero text-primary-foreground text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-ethiopian" />
              <Code2 className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                I build websites, web apps, and digital products for ministries,
                businesses, and creators. Let's make something great together.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <a href={portfolio} target="_blank" rel="noopener noreferrer">
                    View Portfolio
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href={`mailto:${email}`}>Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Developer;
