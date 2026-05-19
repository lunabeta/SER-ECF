import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Trash2, Loader2, FileText, Image as ImageIcon } from "lucide-react";
import { format } from "date-fns";
import { z } from "zod";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Media {
  id: string;
  title: string;
  description: string | null;
  category: string;
  file_url: string;
  file_path: string | null;
  file_type: string | null;
  published: boolean;
  created_at: string;
}

const metaSchema = z.object({
  title: z.string().trim().min(1).max(200),
  description: z.string().trim().max(2000).optional(),
  category: z.enum(["report", "publication", "sermon", "photo", "video", "other"]),
});

const AdminMedia = () => {
  const { user } = useAuth();
  const fileRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"report" | "publication" | "sermon" | "photo" | "video" | "other">("report");
  const [file, setFile] = useState<File | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("media_resources").select("*").order("created_at", { ascending: false });
    if (data) setItems(data as Media[]);
    setLoading(false);
  };

  useEffect(() => {
    document.title = "Media Library — SER-ECF Admin";
    load();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { toast.error("Choose a file"); return; }
    if (file.size > 50 * 1024 * 1024) { toast.error("File must be under 50 MB"); return; }
    const parsed = metaSchema.safeParse({ title, description, category });
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }

    setBusy(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${category}/${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("media").upload(path, file);
      if (upErr) throw upErr;
      const { data: pub } = supabase.storage.from("media").getPublicUrl(path);
      const { error: insErr } = await supabase.from("media_resources").insert({
        title,
        description: description || null,
        category,
        file_url: pub.publicUrl,
        file_path: path,
        file_type: file.type,
        published: true,
        created_by: user?.id ?? null,
      });
      if (insErr) throw insErr;
      toast.success("Uploaded");
      setTitle(""); setDescription(""); setFile(null);
      if (fileRef.current) fileRef.current.value = "";
      load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (m: Media) => {
    if (!confirm(`Delete "${m.title}"?`)) return;
    if (m.file_path) await supabase.storage.from("media").remove([m.file_path]);
    const { error } = await supabase.from("media_resources").delete().eq("id", m.id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted"); load(); }
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="pt-32 pb-10 md:pt-40 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/admin" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Media <span className="text-gradient-gold">Library</span>
          </h1>
          <p className="text-primary-foreground/75 mt-3 max-w-2xl">
            Upload reports, sermons, photos, and videos. Files appear publicly on the Media page.
          </p>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto grid lg:grid-cols-[400px_1fr] gap-8">
          <form onSubmit={handleUpload} className="card-elevated h-fit space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Upload new resource</h2>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="cat">Category</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as typeof category)}>
                <SelectTrigger id="cat"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="report">Report / PDF</SelectItem>
                  <SelectItem value="publication">Publication</SelectItem>
                  <SelectItem value="sermon">Sermon / Teaching</SelectItem>
                  <SelectItem value="photo">Photo</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="file">File (max 50 MB)</Label>
              <Input id="file" ref={fileRef} type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} required />
            </div>
            <Button type="submit" disabled={busy} variant="heroSolid" className="w-full">
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Upload className="w-4 h-4 mr-1" /> Upload</>}
            </Button>
          </form>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-4">All resources ({items.length})</h2>
            {loading ? (
              <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-secondary" /></div>
            ) : items.length === 0 ? (
              <p className="text-muted-foreground italic">No files yet.</p>
            ) : (
              <ul className="grid sm:grid-cols-2 gap-4">
                {items.map((m) => (
                  <li key={m.id} className="card-elevated">
                    {m.file_type?.startsWith("image/") ? (
                      <img src={m.file_url} alt={m.title} className="w-full aspect-video object-cover rounded-lg mb-3" loading="lazy" />
                    ) : (
                      <div className="w-full aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                        {m.category === "photo" ? <ImageIcon className="w-8 h-8 text-muted-foreground" /> : <FileText className="w-8 h-8 text-muted-foreground" />}
                      </div>
                    )}
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-semibold">{m.category}</p>
                    <h3 className="font-semibold text-foreground line-clamp-1">{m.title}</h3>
                    {m.description && <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{m.description}</p>}
                    <p className="text-xs text-muted-foreground mt-2">{format(new Date(m.created_at), "PP")}</p>
                    <div className="flex gap-2 mt-3">
                      <a href={m.file_url} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">View</Button>
                      </a>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(m)}>
                        <Trash2 className="w-4 h-4 text-ethiopian-red" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default AdminMedia;
