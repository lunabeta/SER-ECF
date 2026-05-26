import InfoPage from "@/components/InfoPage";
import SEO from "@/components/SEO";
import { Shirt, Crown, Send, Calendar, Users, Globe2 } from "lucide-react";

const Apparel = () => (
  <>
    <SEO title="Apparel — SER-ECF" description="Official SER-ECF apparel and branded materials." url="https://serecf.org/apparel" />
    <InfoPage
    title="Apparel — SER-ECF"
    heroEyebrow="Identity"
    heroTitle={<>SER-ECF <span className="text-gradient-ethiopian">Apparel</span></>}
    heroSubtitle="Official branded materials that reflect the identity, unity, and mission of SER-ECF — promoting visibility, belonging, and shared purpose among churches, leaders, staff, and partners engaged in ministry and community transformation."
    sections={[
      {
        eyebrow: "Purpose",
        title: "Why Apparel",
        blocks: [{ kind: "list", items: [
          "Strengthen identity and unity among member churches",
          "Represent the fellowship in events, conferences, and outreach programs",
          "Promote visibility of SER-ECF mission and values",
          "Encourage a sense of belonging among leaders and members",
          "Support fundraising and ministry sustainability initiatives",
        ] }],
      },
      {
        eyebrow: "Types",
        title: "Apparel Categories",
        blocks: [{ kind: "cards", items: [
          { title: "Leadership Apparel", description: "Special attire for executive leaders, staff, and official representatives during conferences and formal events.", icon: Crown },
          { title: "Ministry Uniforms", description: "Designed for field workers, evangelists, missionaries, and outreach teams engaged in active ministry.", icon: Send },
          { title: "Event Apparel", description: "Branded clothing for conferences, seminars, prayer gatherings, and regional events.", icon: Calendar },
          { title: "Youth & Volunteer Apparel", description: "Casual and functional designs for youth ministries, volunteers, and community outreach participants.", icon: Users },
          { title: "Partner & Guest Apparel", description: "Special recognition apparel for partners, visiting guests, and international collaborators.", icon: Globe2 },
          { title: "Custom Requests", description: "Special organizational requests for specific ministry teams or events.", icon: Shirt },
        ] }],
      },
      {
        eyebrow: "Design",
        title: "Design Identity",
        blocks: [{ kind: "list", items: [
          "Christian faith and Evangelical identity",
          "Regional unity across Southern Ethiopia",
          "Simplicity, dignity, and professionalism",
          "Cultural relevance and respect",
          "Mission-focused branding",
        ] }],
      },
      {
        eyebrow: "Availability",
        title: "How to Get SER-ECF Apparel",
        blocks: [
          { kind: "list", items: [
            "Official SER-ECF events and conferences",
            "Leadership and ministry programs",
            "Partner distribution channels",
            "Special organizational requests",
          ] },
          { kind: "callout", title: "More Than Clothing", body: "Apparel is a symbol of unity among Evangelical churches, shared mission and vision, commitment to service and transformation, and visible representation of SER-ECF identity." },
        ],
      },
    ]}
    cta={{ title: "Connect with us", primary: { label: "Contact Office", to: "/contact" } }}
  />
);

export default Apparel;
