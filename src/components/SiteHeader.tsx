import { useEffect, useState } from "react";
import { Menu, ChevronRight, Heart, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import logo from "@/assets/logo.jpg";

type NavItem = { label: string; href: string; route?: string };

const ministryLinks: { label: string; to: string }[] = [
  { label: "Ministry Leadership", to: "/ministry-leadership" },
  { label: "Missionaries", to: "/missionaries" },
  { label: "Chaplaincy", to: "/chaplaincy" },
  { label: "CPE Center", to: "/cpe-center" },
  { label: "Global Pastors", to: "/global-pastors" },
  { label: "Apparel", to: "/apparel" },
];

const moreLinks: { label: string; to: string }[] = [
  { label: "History", to: "/history" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Events", to: "/events" },
  { label: "Careers", to: "/careers" },
  { label: "Prayer Request", to: "/prayer-request" },
  { label: "Contact", to: "/contact" },
];

const SiteHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMinistriesOpen, setMobileMinistriesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { label: t("nav.home"), href: "", route: "/" },
    { label: t("nav.about"), href: "", route: "/about" },
    { label: "Leadership", href: "", route: "/leadership" },
    { label: t("nav.work"), href: "#work", route: "/" },
    { label: t("nav.impact"), href: "#impact", route: "/" },
    { label: "Media", href: "", route: "/media" },
    { label: "Give", href: "", route: "/donate" },
  ];

  const go = (item: NavItem) => {
    setOpen(false);
    if (item.route && !item.href) {
      navigate(item.route);
      return;
    }
    if (item.route && item.href) {
      if (location.pathname !== item.route) {
        navigate(item.route + item.href);
        setTimeout(() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }), 80);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goRegister = () =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScpf4q2tXRL2u9MXw7FPhfb6FAfruxx-4x80WodxycG0daPIw/viewform?usp=publish-editor",
      "_blank",
      "noopener,noreferrer",
    );

  const isActive = (item: NavItem) => {
    if (item.route && !item.href) return location.pathname === item.route;
    if (item.route && item.href && location.pathname === item.route) {
      return location.hash === item.href;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container-wide mx-auto px-4 md:px-8 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="SER-ECF logo"
            className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover shadow-gold ring-2 ring-secondary/60 shrink-0"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display text-base md:text-lg text-primary-foreground font-semibold truncate">
              SER-ECF
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-secondary/90 truncate">
              {t("hero.eyebrow")}
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => go(item)}
              className="px-3 py-2 text-sm text-primary-foreground/85 hover:text-secondary font-medium transition-colors gold-underline"
            >
              {item.label}
            </button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-sm text-primary-foreground/85 hover:text-secondary font-medium transition-colors gold-underline inline-flex items-center gap-1 outline-none">
              Ministries <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {ministryLinks.map((l) => (
                <DropdownMenuItem key={l.to} onClick={() => navigate(l.to)} className="cursor-pointer">
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-sm text-primary-foreground/85 hover:text-secondary font-medium transition-colors gold-underline inline-flex items-center gap-1 outline-none">
              More <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {moreLinks.map((l) => (
                <DropdownMenuItem key={l.to} onClick={() => navigate(l.to)} className="cursor-pointer">
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="heroSolid" size="sm" onClick={goRegister}>
            Register
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-secondary/20"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm p-0 bg-primary text-primary-foreground border-l border-secondary/20 flex flex-col"
            >
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-secondary/20 text-left">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-secondary/60"
                  />
                  <div className="leading-tight">
                    <SheetTitle className="font-display text-base text-primary-foreground">
                      SER-ECF
                    </SheetTitle>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-secondary/90">
                      {t("hero.eyebrow")}
                    </div>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const active = isActive(item);
                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => go(item)}
                          className={`group w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-lg text-left font-medium transition-all ${
                            active
                              ? "bg-secondary/15 text-secondary"
                              : "text-primary-foreground/90 hover:text-secondary hover:bg-secondary/10"
                          }`}
                        >
                          <span className="text-base">{item.label}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${
                              active
                                ? "text-secondary translate-x-0.5"
                                : "text-primary-foreground/40 group-hover:text-secondary group-hover:translate-x-0.5"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}

                  {/* Ministries expandable */}
                  <li>
                    <button
                      onClick={() => setMobileMinistriesOpen((v) => !v)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-lg text-left font-medium text-primary-foreground/90 hover:text-secondary hover:bg-secondary/10"
                    >
                      <span className="text-base">Ministries</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileMinistriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileMinistriesOpen && (
                      <ul className="ml-3 mt-1 border-l border-secondary/20 pl-3">
                        {ministryLinks.map((l) => (
                          <li key={l.to}>
                            <Link
                              to={l.to}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:text-secondary"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* More expandable */}
                  <li>
                    <button
                      onClick={() => setMobileMoreOpen((v) => !v)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-lg text-left font-medium text-primary-foreground/90 hover:text-secondary hover:bg-secondary/10"
                    >
                      <span className="text-base">More</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileMoreOpen && (
                      <ul className="ml-3 mt-1 border-l border-secondary/20 pl-3">
                        {moreLinks.map((l) => (
                          <li key={l.to}>
                            <Link
                              to={l.to}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:text-secondary"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </div>

              <div className="px-6 py-5 border-t border-secondary/20 bg-primary/40">
                <Button
                  variant="heroSolid"
                  size="lg"
                  className="w-full"
                  onClick={goRegister}
                >
                  <Heart className="h-4 w-4 mr-1" />
                  Register
                </Button>
                <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 text-center mt-3">
                  Arba Minch · Southern Ethiopia
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
