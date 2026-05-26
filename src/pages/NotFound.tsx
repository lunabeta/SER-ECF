import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Page Not Found — SER-ECF";
  }, []);

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <SEO title="404 — Page Not Found" noindex />
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center max-w-md reveal">
          <img
            src={logo}
            alt="SER-ECF"
            className="h-20 w-20 rounded-full object-cover mx-auto ring-2 ring-secondary/50 shadow-elevated"
          />
          <p className="mt-8 text-secondary font-medium tracking-[0.2em] uppercase text-xs">SER-ECF</p>
          <h1 className="mt-2 font-display text-6xl font-bold text-foreground">404</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("notFound.message")}</p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            <code className="text-xs bg-muted px-2 py-1 rounded">{location.pathname}</code>
          </p>
          <Button asChild variant="heroSolid" size="lg" className="mt-8">
            <Link to="/">{t("notFound.back")}</Link>
          </Button>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
};

export default NotFound;
