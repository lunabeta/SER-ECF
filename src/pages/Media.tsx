import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper, BookOpen, FileText, Image as ImageIcon, Video, Download, ExternalLink, Send, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRevealRoot } from "@/hooks/useReveal";
import { supabase } from "@/integrations/supabase/client";

interface MediaResource {
  id: string;
  title: string;
  description: string | null;
  category: string;
  file_url: string;
  file_type: string | null;
  created_at: string;
}

import imfMou from "@/assets/gallery/imf-mou-signing.jpg";
import kbn from "@/assets/gallery/kbn-arba-minch.jpg";
import recognition from "@/assets/gallery/recognition-evening.jpg";
import pastors from "@/assets/gallery/pastors-gathering.jpg";
import worship from "@/assets/gallery/worship-conference.jpg";
import attendees from "@/assets/gallery/conference-attendees.jpg";

const TELEGRAM_URL = "https://t.me/SERECFMedia";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@SouthEthiopiaRegionalECFOA";
const FEATURED_VIDEO_ID = "qOJf_Rv-B0k";

const videos: { id: string; title: string }[] = [
  { id: "2jX59PIbIVE", title: "የደቡብ ኢትዮጵያ ክልል ወንጌላውያን አብያተ ክርስቲያናት ህብረት ጽ/ቤት 50ኛ ዓመት ምስረታ በዓል — ዜና" },
  { id: "R7RYAUlJRTk", title: "50ኛ ዓመት ምስረታ በዓል — አርባ ምንጭ፣ ነሀሴ 29/2017 ዓ.ም" },
  { id: "RiGbAk2eQJU", title: "የነጋዴዎችና የሙያተኞች ምስረታ — አርባ ምንጭ ከተማ" },
  { id: "zzctLviPy54", title: "ክርስቲያን ነጋዴዎች ምስረታ — አርባ ምንጭ" },
  { id: "7Q59jfURSPo", title: "12 May 2026" },
  { id: "qOJf_Rv-B0k", title: "ሰበር ዜና" },
  { id: "n6zeYYkC1IY", title: "South Ethiopia Region ECF — 21-day prayer plan" },
  { id: "JV_-zXtBvco", title: "3 March 2026 — የማላጆች ዝግጅት፣ አርባ ምንጭ" },
  { id: "VzBhKy9Lm28", title: "3 March 2026" },
];

const gallery = [
  { src: imfMou, caption: "MoU signing with International Mission Fellowship" },
  { src: kbn, caption: "Kingdom Builders Network — Arba Minch" },
  { src: recognition, caption: "Partner recognition evening" },
  { src: pastors, caption: "Regional pastors gathering" },
  { src: worship, caption: "Worship at the regional conference" },
  { src: attendees, caption: "Delegates at the General Assembly" },
];

const MediaPage = () => {
  const { t } = useTranslation();
  useRevealRoot();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [resources, setResources] = useState<MediaResource[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Media & Resources — SER-ECF";
    supabase
      .from("media_resources")
      .select("id,title,description,category,file_url,file_type,created_at")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => { if (data) setResources(data as MediaResource[]); });
  }, []);

  const filterBy = (cats: string[]) => resources.filter((r) => cats.includes(r.category));

  const sections = [
    { icon: Newspaper, key: "s1", expandable: true },
    { icon: BookOpen, key: "s2", expandable: true },
    { icon: FileText, key: "s3", expandable: true },
    { icon: ImageIcon, key: "s4", expandable: true },
    { icon: Video, key: "s5", expandable: true },
    { icon: Download, key: "s6", expandable: true },
  ];

  const renderResourceGrid = (items: MediaResource[]) => {
    if (items.length === 0) {
      return <p className="text-sm text-muted-foreground italic text-center py-6">No items published yet — check back soon.</p>;
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r) => {
          const isImage = r.file_type?.startsWith("image/");
          return (
            <a
              key={r.id}
              href={r.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden bg-card border border-border/40 hover:border-secondary/60 transition-colors group/doc"
            >
              {isImage ? (
                <img src={r.file_url} alt={r.title} loading="lazy" className="w-full aspect-video object-cover" />
              ) : (
                <div className="w-full aspect-video bg-muted flex items-center justify-center">
                  <FileText className="w-10 h-10 text-secondary/70" />
                </div>
              )}
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-widest text-secondary font-semibold mb-1">{r.category}</p>
                <p className="text-sm font-medium text-foreground line-clamp-2 group-hover/doc:text-secondary transition-colors">{r.title}</p>
                {r.description && <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{r.description}</p>}
                <p className="text-xs text-secondary mt-2 inline-flex items-center gap-1 font-medium">
                  <Download className="w-3.5 h-3.5" /> Open / Download
                </p>
              </div>
            </a>
          );
        })}
      </div>
    );
  };


  const renderExpanded = (key: string) => {
    if (key === "s1") {
      return (
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
              title="SER-ECF featured video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-2">Latest from SER-ECF</h4>
            <p className="text-sm text-muted-foreground mb-4">Watch our most recent update and find more stories from across the region on our YouTube channel.</p>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition text-sm"
            >
              Visit our YouTube channel <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      );
    }
    if (key === "s5") {
      return (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/video block rounded-lg overflow-hidden bg-card border border-border/40 hover:border-secondary/60 transition-colors"
              >
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-secondary/95 text-secondary-foreground flex items-center justify-center shadow-lg">
                      <Video className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-foreground line-clamp-2 group-hover/video:text-secondary transition-colors">
                    {v.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition text-sm"
            >
              Watch all videos on YouTube <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      );
    }
    if (key === "s4") {
      return (
        <div className="space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {gallery.map((g, i) => (
              <figure key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white text-[11px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition text-sm"
            >
              <Send className="w-4 h-4" /> See more on Telegram
            </a>
          </div>
        </div>
      );
    }
    if (key === "s2") return renderResourceGrid(filterBy(["publication", "other"]));
    if (key === "s3") return renderResourceGrid(filterBy(["report"]));
    if (key === "s6") {
      const downloadable = resources.filter(
        (r) => !r.file_type?.startsWith("image/") && !r.file_type?.startsWith("video/")
      );
      return renderResourceGrid(downloadable);
    }
    return null;
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t("common.home")}
          </Link>
          <p className="text-secondary font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-4">{t("mediaPage.eyebrow")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            {t("mediaPage.titleA")} <span className="text-gradient-ethiopian">{t("mediaPage.titleB")}</span>{t("mediaPage.titleC")}
          </h1>
          <p className="text-primary-foreground/75 mt-6 max-w-2xl leading-relaxed">{t("mediaPage.intro")}</p>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((s, i) => {
              const isOpen = expanded === s.key;
              const revealClass = s.expandable ? "" : "reveal";
              const cardBase = `card-elevated group ${revealClass} transition-all`;
              const spanClass = isOpen ? "md:col-span-2 lg:col-span-3" : "";
              const Icon = s.icon;

              if (s.expandable) {
                return (
                  <div key={s.key} className={`${cardBase} ${spanClass} p-0 overflow-hidden`} style={{ transitionDelay: `${i * 60}ms` }}>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : s.key)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-6 flex items-start gap-4 hover:bg-section-light/40 transition-colors"
                    >
                      <div className="icon-container shrink-0"><Icon className="w-6 h-6 text-secondary" /></div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
                          {t(`mediaPage.${s.key}Title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t(`mediaPage.${s.key}Desc`)}</p>
                        <p className="text-xs text-secondary mt-3 inline-flex items-center gap-1 font-medium">
                          {isOpen ? "Hide" : "Click to view"}
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                        </p>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-border/40">
                        {renderExpanded(s.key)}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={s.key} className={cardBase} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="icon-container mb-4"><Icon className="w-6 h-6 text-secondary" /></div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{t(`mediaPage.${s.key}Title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`mediaPage.${s.key}Desc`)}</p>
                  <p className="text-xs text-muted-foreground/60 mt-4 italic">{t("common.comingSoon")}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center reveal">
            <p className="text-foreground/70 max-w-xl mx-auto">
              {t("mediaPage.helpText")} <Link to="/#contact" className="text-secondary hover:underline">{t("mediaPage.helpLink")}</Link> {t("mediaPage.helpAfter")}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default MediaPage;
