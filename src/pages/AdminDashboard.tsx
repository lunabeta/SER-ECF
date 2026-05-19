import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Inbox, Handshake, Mail, Trash2, Loader2, ClipboardList, LogOut, Image as ImageIcon } from "lucide-react";
import { format } from "date-fns";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface ContactMsg { id: string; name: string; email: string; subject: string | null; message: string; created_at: string; }
interface PartnerInq { id: string; name: string; email: string; organization: string | null; area: string | null; message: string | null; created_at: string; }
interface Subscriber { id: string; email: string; name: string | null; created_at: string; }

const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<ContactMsg[]>([]);
  const [partners, setPartners] = useState<PartnerInq[]>([]);
  const [subs, setSubs] = useState<Subscriber[]>([]);

  const load = async () => {
    setLoading(true);
    const [c, p, s] = await Promise.all([
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("partnership_inquiries").select("*").order("created_at", { ascending: false }),
      supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false }),
    ]);
    if (c.data) setContacts(c.data as ContactMsg[]);
    if (p.data) setPartners(p.data as PartnerInq[]);
    if (s.data) setSubs(s.data as Subscriber[]);
    setLoading(false);
  };

  useEffect(() => {
    document.title = "Admin Dashboard — SER-ECF";
    load();
  }, []);

  const del = async (table: "contact_messages" | "partnership_inquiries" | "newsletter_subscribers", id: string) => {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted"); load(); }
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 pb-10 md:pt-40 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-secondary tracking-[0.25em] uppercase text-xs font-semibold mb-2">Admin Dashboard</p>
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Submissions & <span className="text-gradient-gold">Content</span>
              </h1>
              <p className="text-primary-foreground/70 mt-2 text-sm">Signed in as {user?.email}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link to="/admin/checklist">
                <Button variant="hero" size="sm"><ClipboardList className="w-4 h-4 mr-1" /> Checklist</Button>
              </Link>
              <Link to="/admin/media">
                <Button variant="hero" size="sm"><ImageIcon className="w-4 h-4 mr-1" /> Media</Button>
              </Link>
              <Button variant="hero" size="sm" onClick={signOut}><LogOut className="w-4 h-4 mr-1" /> Sign out</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl">
            <Stat icon={Inbox} label="Contact" value={contacts.length} />
            <Stat icon={Handshake} label="Partnerships" value={partners.length} />
            <Stat icon={Mail} label="Subscribers" value={subs.length} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          {loading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-secondary" /></div>
          ) : (
            <Tabs defaultValue="contact">
              <TabsList>
                <TabsTrigger value="contact">Contact ({contacts.length})</TabsTrigger>
                <TabsTrigger value="partners">Partnerships ({partners.length})</TabsTrigger>
                <TabsTrigger value="subs">Newsletter ({subs.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="contact" className="mt-6 space-y-4">
                {contacts.length === 0 && <Empty label="No contact messages yet." />}
                {contacts.map((m) => (
                  <Card key={m.id} onDelete={() => del("contact_messages", m.id)}>
                    <Row label="From" value={`${m.name} · ${m.email}`} />
                    {m.subject && <Row label="Subject" value={m.subject} />}
                    <Row label="When" value={format(new Date(m.created_at), "PPpp")} />
                    <p className="text-sm text-foreground mt-3 whitespace-pre-wrap">{m.message}</p>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="partners" className="mt-6 space-y-4">
                {partners.length === 0 && <Empty label="No partnership inquiries yet." />}
                {partners.map((p) => (
                  <Card key={p.id} onDelete={() => del("partnership_inquiries", p.id)}>
                    <Row label="From" value={`${p.name} · ${p.email}`} />
                    {p.organization && <Row label="Organization" value={p.organization} />}
                    {p.area && <Row label="Area of interest" value={p.area} />}
                    <Row label="When" value={format(new Date(p.created_at), "PPpp")} />
                    {p.message && <p className="text-sm text-foreground mt-3 whitespace-pre-wrap">{p.message}</p>}
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="subs" className="mt-6 space-y-2">
                {subs.length === 0 && <Empty label="No newsletter subscribers yet." />}
                {subs.map((s) => (
                  <div key={s.id} className="flex items-center justify-between bg-card border border-border rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.email}</p>
                      <p className="text-xs text-muted-foreground">{s.name || "—"} · {format(new Date(s.created_at), "PP")}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => del("newsletter_subscribers", s.id)}>
                      <Trash2 className="w-4 h-4 text-ethiopian-red" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

const Stat = ({ icon: Icon, label, value }: { icon: typeof Inbox; label: string; value: number }) => (
  <div className="rounded-xl p-4 border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm">
    <Icon className="w-5 h-5 text-secondary mb-2" />
    <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/70">{label}</p>
    <p className="font-display text-2xl font-bold text-gradient-gold">{value}</p>
  </div>
);

const Card = ({ children, onDelete }: { children: React.ReactNode; onDelete: () => void }) => (
  <article className="card-elevated relative">
    <Button variant="ghost" size="icon" onClick={onDelete} className="absolute top-3 right-3">
      <Trash2 className="w-4 h-4 text-ethiopian-red" />
    </Button>
    <div className="space-y-1 pr-10">{children}</div>
  </article>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <p className="text-xs text-muted-foreground">
    <span className="uppercase tracking-wider font-semibold mr-2">{label}:</span>
    <span className="text-foreground">{value}</span>
  </p>
);

const Empty = ({ label }: { label: string }) => (
  <div className="text-center py-12 text-muted-foreground italic text-sm">{label}</div>
);

export default AdminDashboard;
