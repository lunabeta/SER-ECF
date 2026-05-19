import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Heart, Send } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";

const ContactPage = () => {
  useRevealRoot();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact SER-ECF";
  }, []);

  const reasons = [
    "Church partnership and affiliation requests",
    "Ministry program inquiries",
    "Leadership and training applications",
    "Mission and missionary coordination",
    "Event registration and participation",
    "Financial giving and support information",
    "General organizational communication",
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
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">Contact Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Let's <span className="text-gradient-ethiopian">Connect</span>
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-3xl leading-relaxed text-base md:text-lg">
            We welcome communication from churches, partners, ministries, organizations, and individuals
            who wish to connect with SER-ECF — whether for partnership, ministry collaboration, support, or general information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="mailto:southethiopiaregionalecfoa@gmail.com"
              className="card-elevated reveal hover:border-secondary transition-colors group"
            >
              <div className="icon-container mb-4"><Mail className="w-6 h-6 text-secondary" /></div>
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold mb-2">Email</p>
              <p className="font-display text-base font-semibold text-foreground group-hover:text-secondary transition-colors break-all">
                southethiopiaregionalecfoa@gmail.com
              </p>
            </a>
            <div className="card-elevated reveal">
              <div className="icon-container mb-4"><Phone className="w-6 h-6 text-secondary" /></div>
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold mb-2">Phone</p>
              <a href="tel:+251911575204" className="block font-display text-base font-semibold text-foreground hover:text-secondary transition-colors">
                +251 91 157 5204
              </a>
              <a href="tel:+251916618105" className="block font-display text-base font-semibold text-foreground hover:text-secondary transition-colors mt-1">
                +251 91 661 8105
              </a>
            </div>
            <div className="card-elevated reveal">
              <div className="icon-container mb-4"><MapPin className="w-6 h-6 text-secondary" /></div>
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold mb-2">Address</p>
              <p className="font-display text-base font-semibold text-foreground">Arba Minch</p>
              <p className="text-sm text-muted-foreground mt-1">Southern Ethiopia</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-light">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 reveal">
              <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">Office Purpose</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How We Can Help</h2>
              <div className="section-divider mt-8" />
            </div>
            <ul className="space-y-3 reveal">
              {reasons.map((r) => (
                <li key={r} className="card-elevated !p-4 flex items-center gap-3">
                  <Send className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-foreground/85">{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 card-elevated reveal">
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold mb-3">Direct Line — General Secretary</p>
              <p className="font-display text-lg font-semibold text-foreground">Pastor Dr. Wendmagegn Asfaw (PhD)</p>
              <p className="text-sm text-muted-foreground mt-1">For speaking invitations, partnership requests, and ministry collaboration.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <a href="mailto:drwendmagegnasfaw@gmail.com" className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <span className="break-all">drwendmagegnasfaw@gmail.com</span>
                </a>
                <a href="tel:+251911575204" className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary shrink-0" /> +251 911 575 204
                </a>
                <a href="tel:+251912169165" className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary shrink-0" /> +251 912 169 165
                </a>
                <a href="https://www.linkedin.com/in/dr-wendmagegn-asfaw-147a83229" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors">
                  <Send className="w-4 h-4 text-secondary shrink-0" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-10 card-elevated text-center reveal">
              <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-foreground/80 leading-relaxed">
                SER-ECF is committed to transparent and responsive communication, supporting ministry collaboration,
                and strengthening relationships across the region and beyond. We aim to respond with clarity, care, and timely communication.
              </p>
              <p className="mt-4 text-secondary font-semibold tracking-[0.2em] uppercase text-xs">
                Connecting Faith, Leadership & Transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default ContactPage;
