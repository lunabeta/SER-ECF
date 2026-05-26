import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import NewsletterSignup from "./NewsletterSignup";
import SocialLinks from "./SocialLinks";

const SiteFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-hero text-primary-foreground py-8 border-t border-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-ethiopian" />

      <div className="container-wide mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8 relative z-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="SER-ECF logo" className="h-10 w-10 rounded-full object-cover shadow-gold ring-2 ring-secondary/60" />
            <div className="font-display text-base font-semibold">SER-ECF</div>
          </div>
          <p className="mt-3 text-xs text-primary-foreground/70 max-w-sm leading-relaxed">{t("footer.tagline")}</p>
          <div className="mt-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2">{t("footer.newsletter")}</div>
            <NewsletterSignup />
          </div>
          <div className="mt-5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2">{t("footer.followUs")}</div>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">{t("footer.explore")}</div>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-secondary transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/history" className="hover:text-secondary transition-colors">History</Link></li>
            <li><Link to="/partnerships" className="hover:text-secondary transition-colors">Partnerships</Link></li>
            <li><Link to="/events" className="hover:text-secondary transition-colors">Events</Link></li>
            <li><Link to="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
            <li><Link to="/media" className="hover:text-secondary transition-colors">{t("common.media")}</Link></li>
            <li><Link to="/donate" className="hover:text-secondary transition-colors">{t("common.donate")}</Link></li>
            <li><Link to="/prayer-request" className="hover:text-secondary transition-colors">Prayer Request</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mt-5">Ministries</div>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-primary-foreground/80">
            <li><Link to="/chaplaincy" className="hover:text-secondary transition-colors">Chaplaincy</Link></li>
            <li><Link to="/cpe-center" className="hover:text-secondary transition-colors">CPE Center</Link></li>
            <li><Link to="/global-pastors" className="hover:text-secondary transition-colors">Global Pastors</Link></li>
            <li><Link to="/missionaries" className="hover:text-secondary transition-colors">Missionaries</Link></li>
            <li><Link to="/ministry-leadership" className="hover:text-secondary transition-colors">Ministry Leadership</Link></li>
            <li><Link to="/apparel" className="hover:text-secondary transition-colors">Apparel</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">{t("footer.contactTitle")}</div>
          <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/80">
            <li>{t("footer.addressVal")}</li>
            <li><a href="mailto:southethiopiaregionalecfoa@gmail.com" className="hover:text-secondary transition-colors break-all">southethiopiaregionalecfoa@gmail.com</a></li>
            <li><a href="tel:+251911575204" className="hover:text-secondary transition-colors">+251 91 157 5204</a> · <a href="tel:+251916618105" className="hover:text-secondary transition-colors">+251 91 661 8105</a></li>
          </ul>
        </div>
      </div>

      <div className="container-wide mx-auto px-4 md:px-8 mt-6 pt-4 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-foreground/60 relative z-10">
        <div>© {new Date().getFullYear()} SER-ECF. {t("footer.rights")} · <Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link></div>
        <div>{t("footer.madeBy")} <span className="text-secondary">♥</span> <Link to="/developer" className="text-secondary hover:underline transition-colors">Betelhem Worku</Link></div>
      </div>
    </footer>
  );
};

export default SiteFooter;
