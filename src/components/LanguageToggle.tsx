import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isAm = i18n.language?.startsWith("am");
  const next = isAm ? "en" : "am";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => i18n.changeLanguage(next)}
      aria-label="Switch language"
      className="gap-2 text-primary-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="text-xs font-semibold tracking-wider uppercase">
        {isAm ? "EN" : "አማ"}
      </span>
    </Button>
  );
};

export default LanguageToggle;
