import { useState } from "react";
import InfoPage from "@/components/InfoPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

const PrayerForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const name = data.get("name") || "Anonymous";
    const email = data.get("email") || "";
    const request = data.get("request") || "";
    const subject = encodeURIComponent(`Prayer Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nRequest:\n${request}`);
    window.location.href = `mailto:southethiopiaregionalecfoa@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Thank you — your prayer request is being sent.");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <form onSubmit={onSubmit} className="card-elevated space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your name (optional)</Label>
          <Input id="name" name="name" placeholder="Anonymous is okay" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email (optional)</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="request">Your prayer request</Label>
        <Textarea id="request" name="request" rows={6} required placeholder="Share whatever is on your heart — we will pray with you." />
      </div>
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        <Send className="w-4 h-4 mr-2" /> Send Prayer Request
      </Button>
      <p className="text-xs text-muted-foreground">
        Your request is shared confidentially with the SER-ECF prayer team.
      </p>
    </form>
  );
};

const PrayerRequest = () => (
  <InfoPage
    title="Prayer Request — SER-ECF"
    heroEyebrow="Prayer Ministry"
    heroTitle={<>Submit Your <span className="text-gradient-ethiopian">Prayer Request</span></>}
    heroSubtitle="A dedicated space for individuals, families, churches, and communities to share needs and receive spiritual support through prayer and intercession. Our prayer team stands with you in faith."
    sections={[
      {
        eyebrow: "Share With Us",
        title: "What You Can Pray About",
        blocks: [
          { kind: "list", items: [
            "Personal and family challenges",
            "Health and healing needs",
            "Spiritual growth and guidance",
            "Ministry and leadership concerns",
            "Financial and economic difficulties",
            "Church and community issues",
            "Peace and reconciliation needs",
            "Any other prayer burdens",
          ] },
        ],
      },
      {
        eyebrow: "Submit",
        title: "Send Your Prayer Request",
        intro: "Once your request is received, SER-ECF prayer teams will stand in intercession for your specific need, lift your request in prayer gatherings, and support you spiritually with encouragement and follow-up.",
        blocks: [{ kind: "custom", node: <PrayerForm /> }],
      },
      {
        eyebrow: "Encouragement",
        title: "You Are Not Alone",
        blocks: [
          { kind: "callout", body: "“No matter how big or small your request may seem, you are not alone. SER-ECF stands with you in prayer and faith, believing for God's intervention and peace in your life.”" },
          { kind: "paragraph", text: "Our prayer ministry is guided by faith in God's power and promises, compassion and spiritual care, confidentiality and respect, unity in intercession, and persistent faith-filled prayer." },
        ],
      },
      {
        eyebrow: "🙏 Prayer Ministry",
        title: "SER-ECF Prayer Ministry Overview",
        intro: "South Ethiopia Regional Evangelical Churches Fellowship Office — SER-ECF, the South Ethiopia Regional for Christ Movement.",
        blocks: [
          { kind: "paragraph", text: "The SER-ECF Prayer Ministry is the spiritual foundation of the South Ethiopia Regional for Christ Movement. It exists to mobilize churches, ministries, and believers into consistent intercession for spiritual awakening, evangelism, church unity, leadership strength, and transformation across South Ethiopia and beyond." },
          { kind: "paragraph", text: "This ministry is coordinated through the South Ethiopia Regional Evangelical Churches Fellowship (SER-ECF) Office, ensuring regional prayer alignment and continuous spiritual coverage for all mission activities." },
          { kind: "callout", title: "🔥 Vision", body: "To build a praying Church that opens the way for revival, strengthens the Body of Christ, and brings the Gospel to every unreached community in South Ethiopia and beyond." },
          { kind: "callout", title: "🎯 Mission", body: "To unite churches and believers in strategic, continuous, and Spirit-led prayer for evangelism and mission expansion, church planting and discipleship, leadership strength and integrity, peace and reconciliation, unreached people groups, and community transformation." },
        ],
      },
      {
        eyebrow: "🙏 Focus Areas",
        title: "Core Prayer Focus Areas",
        blocks: [{ kind: "cards", items: [
          { title: "Unreached People Groups (UPGs)", description: "Wubosete and other unreached communities, remote and isolated ethnic groups, cross-border mission fields, and spiritual breakthrough in resistant areas." },
          { title: "Evangelism & Church Planting", description: "Expansion of Gospel outreach, new church establishment, boldness for evangelists and missionaries, and follow-up and discipleship strength." },
          { title: "Church Unity & Revival", description: "Unity among evangelical churches, healing of divisions, spiritual revival across congregations, and cooperation among ministries." },
          { title: "Leadership Empowerment", description: "Wisdom and protection for church leaders, training and mentoring of pastors, integrity and servant leadership, and growth of emerging leaders." },
          { title: "Peace & Community Transformation", description: "Peace in communities and regions, reconciliation among ethnic groups, protection of vulnerable populations, and social healing and stability." },
          { title: "Youth & Next Generation", description: "Spiritual awakening among youth, campus and school revival, leadership development for young believers, and protection from harmful influences." },
        ] }],
      },
      {
        eyebrow: "📅 Structure",
        title: "Prayer Structure",
        blocks: [{ kind: "cards", items: [
          { title: "Daily Prayer", description: "Personal and family intercession with morning and evening devotion focus." },
          { title: "Weekly Prayer Gatherings", description: "Church prayer meetings and SER-ECF regional intercession gatherings." },
          { title: "Monthly Focus", description: "“Unreached of the Month” prayer emphasis and regional breakthrough prayer campaigns." },
          { title: "Annual Events", description: "SER-ECF Prayer Summit and the South Ethiopia for Christ Prayer Congress." },
        ] }],
      },
      {
        eyebrow: "📖 Scripture",
        title: "Key Scriptures",
        blocks: [{ kind: "list", items: [
          "Matthew 9:37–38",
          "Isaiah 62:6–7",
          "1 Timothy 2:1–4",
          "Acts 1:8",
          "Habakkuk 2:14",
        ] }],
      },
      {
        eyebrow: "🤝 Participate",
        title: "Call to Participation",
        intro: "We invite churches and ministries, prayer networks and intercessors, youth and discipleship groups, Christian organizations, and global mission partners to join the SER-ECF Prayer Ministry in interceding for South Ethiopia and beyond.",
        blocks: [
          { kind: "callout", title: "🌍 Declaration", body: "“Through united prayer, we prepare the spiritual ground for revival, mission expansion, and transformation of communities through the Gospel of Jesus Christ.”" },
          { kind: "callout", title: "🔥 Prayer Motto", body: "“Pray • Reach • Transform”" },
        ],
      },
    ]}
  />
);

export default PrayerRequest;
