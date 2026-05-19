import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://web.facebook.com/me/", icon: Facebook },
  {
    name: "Instagram",
    href: "https://www.instagram.com/southethiopiaregionalecf?igsh=Zno2MnRvMTFqMmE4",
    icon: Instagram,
  },
  { name: "YouTube", href: "https://www.youtube.com/@SouthEthiopiaRegionalECFOA", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/southethiopiaregionalEcf", icon: Linkedin },
  {
    name: "Dr. Wendmagegn on LinkedIn",
    href: "https://www.linkedin.com/in/dr-wendmagegn-asfaw-147a83229",
    icon: Linkedin,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@southethiopia.reg",
    // TikTok glyph (lucide doesn't ship one)
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3.1a8.6 8.6 0 0 1-4.5-1.3v6.2a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.03 1 .08v3.2a3.3 3.3 0 1 0 2.3 3.15V3h3.2z" />
      </svg>
    ),
  },
];

type Props = {
  variant?: "footer" | "inline";
  className?: string;
};

const SocialLinks = ({ variant = "footer", className = "" }: Props) => {
  const base =
    variant === "footer"
      ? "h-9 w-9 rounded-full border border-primary-foreground/20 text-primary-foreground/80 hover:text-secondary hover:border-secondary/60 hover:bg-primary-foreground/5"
      : "h-10 w-10 rounded-full border border-secondary/40 text-secondary hover:bg-secondary/10";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((s) => {
        const Icon = s.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className={`grid place-items-center transition-all hover:scale-110 ${base}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
