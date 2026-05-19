import p1 from "@/assets/partners/partner-1.jpg";
import p2 from "@/assets/partners/partner-2.jpg";
import p3 from "@/assets/partners/partner-3.jpg";
import p4 from "@/assets/partners/partner-4.jpg";
import p5 from "@/assets/partners/partner-5.jpg";
import p6 from "@/assets/partners/partner-6.jpg";
import p7 from "@/assets/partners/partner-7.jpg";
import p8 from "@/assets/partners/partner-8.jpg";
import p9 from "@/assets/partners/partner-9.jpg";
import p10 from "@/assets/partners/partner-10.jpg";

const partners = [
  { src: p1, name: "Meserete Kristos", dark: true },
  { src: p2, name: "KPS Theological School" },
  { src: p3, name: "New Generation", dark: true },
  { src: p4, name: "Kingdom Builders Network", dark: true },
  { src: p5, name: "IMF Serves" },
  { src: p6, name: "Debub Ethiopia Regional Peace Bureau" },
  { src: p7, name: "Evangelical Churches Fellowship of Ethiopia" },
  { src: p8, name: "OneHope" },
  { src: p9, name: "South Ethiopia Regional State — Office of the President" },
  { src: p10, name: "Elvezet Events", dark: true },
];

const PartnersMarquee = () => {
  const loop = [...partners, ...partners];
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide mx-auto text-center mb-10">
        <p className="text-secondary font-medium tracking-[0.25em] uppercase text-sm mb-3">
          Together in Mission
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold">
          Our <span className="text-gradient-gold">Partners</span>
        </h2>
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          We are grateful to walk alongside these ministries and organizations advancing the Gospel and community transformation.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex items-center gap-8 animate-marquee group-hover:[animation-play-state:paused] w-max px-4">
          {loop.map((p, i) => (
            <div
              key={i}
              className={`shrink-0 h-28 rounded-2xl border border-border shadow-sm grid place-items-center px-6 transition-transform hover:scale-105 ${
                p.dark ? "bg-foreground" : "bg-card"
              }`}
            >
              <img
                src={p.src}
                alt={p.name}
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
