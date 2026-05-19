import InfoPage from "@/components/InfoPage";
import { Globe2, GraduationCap, Send, BookOpen, HeartHandshake, Users } from "lucide-react";

const GlobalPastors = () => (
  <InfoPage
    title="Global Pastors Network — SER-ECF"
    heroEyebrow="Network"
    heroTitle={<>Global <span className="text-gradient-ethiopian">Pastors Network</span></>}
    heroSubtitle="A strategic platform connecting experienced pastors, ministry leaders, and international church partners committed to advancing the Gospel, strengthening church leadership, and supporting holistic transformation across nations."
    sections={[
      {
        eyebrow: "Purpose",
        title: "Why Global Partnership",
        blocks: [{ kind: "list", items: [
          "Strengthen global church-to-church relationships",
          "Promote international ministry collaboration",
          "Support leadership development across nations",
          "Facilitate knowledge and experience exchange",
          "Advance mission, evangelism, and discipleship globally",
          "Encourage unity within the worldwide Evangelical Church",
        ] }],
      },
      {
        eyebrow: "Focus Areas",
        title: "Core Focus",
        blocks: [{ kind: "cards", items: [
          { title: "Global Ministry Collaboration", description: "Building partnerships with churches and ministries across continents for shared mission impact.", icon: Globe2 },
          { title: "Leadership Exchange & Mentorship", description: "Connecting senior pastors and leaders for mentoring, coaching, and leadership development.", icon: GraduationCap },
          { title: "Mission & Evangelism Partnership", description: "Coordinating joint evangelistic efforts and missionary support across regions and nations.", icon: Send },
          { title: "Theological & Ministry Training", description: "Training programs, conferences, and learning opportunities for pastors and leaders.", icon: BookOpen },
          { title: "Peacebuilding & Transformation", description: "Engaging global partners in reconciliation, humanitarian work, and community development.", icon: HeartHandshake },
          { title: "Strategic Advisory & Resource Mobilization", description: "Advisory support, partnership building, and resource sharing across nations.", icon: Users },
        ] }],
      },
      {
        eyebrow: "Who We Are",
        title: "Who Are Global Pastors?",
        blocks: [{ kind: "list", items: [
          "Senior church leaders and pastors",
          "Mission agency leaders",
          "Theological educators and trainers",
          "International ministry partners",
          "Church network coordinators",
          "Christian development leaders",
        ] }],
      },
      {
        eyebrow: "Benefits",
        title: "Benefits of Global Partnership",
        blocks: [
          { kind: "list", items: [
            "Access to global ministry experience and expertise",
            "Stronger international church relationships",
            "Expanded mission and outreach opportunities",
            "Enhanced leadership development systems",
            "Broader visibility and global engagement",
            "Sustainable ministry partnerships",
          ] },
          { kind: "callout", title: "Our Commitment", body: "Building strong global church partnerships, promoting unity across cultural and national boundaries, supporting shared mission and ministry initiatives, strengthening pastoral leadership worldwide, and advancing the Gospel with excellence and integrity." },
        ],
      },
    ]}
    cta={{ title: "Join the global network", primary: { label: "Become a Partner", to: "/partnerships" }, secondary: { label: "Contact Us", to: "/contact" } }}
  />
);

export default GlobalPastors;
