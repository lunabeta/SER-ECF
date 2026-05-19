import { useState } from "react";
import { Copy, Check, Landmark, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const accounts = [
  { bank: "Berhan Bank", name: "South Ethiopia Region Ecf", number: "1502150129555" },
  { bank: "Commercial Bank of Ethiopia (CBE)", name: "South Ethiopia Region Ecf", number: "1000468138496" },
  { bank: "Awash Bank", name: "South Ethiopia Region Ecf", number: "" },
  { bank: "Nib International Bank", name: "South Ethiopia Region Ecf", number: "" },
];

const telebirr = { name: "South Ethiopia Region Ecf", number: "0907076806" };

type Props = { theme?: "dark" | "light" };

const BankDetails = ({ theme = "dark" }: Props) => {
  const [copied, setCopied] = useState<string | null>(null);

  const onCopy = async (n: string, label = "Account number") => {
    try {
      await navigator.clipboard.writeText(n);
      setCopied(n);
      toast({ title: `${label} copied`, description: n });
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast({ title: "Could not copy", variant: "destructive" });
    }
  };

  const isDark = theme === "dark";
  const cardCls = isDark
    ? "bg-primary-foreground/5 border-primary-foreground/15 hover:border-secondary/50"
    : "bg-card border-border hover:border-secondary/50";
  const labelCls = isDark ? "text-primary-foreground/60" : "text-muted-foreground";
  const subCls = isDark ? "text-primary-foreground/70" : "text-muted-foreground";
  const valueCls = isDark ? "text-primary-foreground" : "text-foreground";

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {accounts.map((a, i) => (
          <div
            key={`${a.bank}-${i}`}
            className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${cardCls}`}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-gold grid place-items-center shrink-0">
              <Landmark className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className={`text-[10px] tracking-[0.2em] uppercase ${labelCls}`}>{a.bank}</p>
              <p className={`text-xs mt-1 ${subCls}`}>Account Name: {a.name}</p>
              {a.number ? (
                <p className={`text-sm md:text-base font-mono mt-1 break-all ${valueCls}`}>{a.number}</p>
              ) : null}
            </div>
            {a.number ? (
              <button
                type="button"
                onClick={() => onCopy(a.number, `${a.bank} account`)}
                aria-label={`Copy ${a.bank} account number`}
                className="text-secondary hover:text-secondary/80 transition-colors p-1"
              >
                {copied === a.number ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            ) : null}
          </div>
        ))}
      </div>

      <div className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${cardCls}`}>
        <div className="h-10 w-10 rounded-lg bg-gradient-gold grid place-items-center shrink-0">
          <Smartphone className="h-5 w-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-[10px] tracking-[0.2em] uppercase ${labelCls}`}>Telebirr — Mobile Money</p>
          <p className={`text-xs mt-1 ${subCls}`}>Name: {telebirr.name}</p>
          {telebirr.number ? (
            <p className={`text-sm md:text-base font-mono mt-1 break-all ${valueCls}`}>{telebirr.number}</p>
          ) : null}
        </div>
        {telebirr.number ? (
          <button
            type="button"
            onClick={() => onCopy(telebirr.number, "Telebirr number")}
            aria-label="Copy Telebirr number"
            className="text-secondary hover:text-secondary/80 transition-colors p-1"
          >
            {copied === telebirr.number ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default BankDetails;
