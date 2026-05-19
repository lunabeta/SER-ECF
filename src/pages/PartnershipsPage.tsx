import InfoPage from "@/components/InfoPage";
import { Handshake, Church, GraduationCap, HeartHandshake, Send, Globe2 } from "lucide-react";

const PartnershipsPage = () => (
  <InfoPage
    title="Strategic Partnerships — SER-ECF"
    heroEyebrow="Collaboration"
    heroTitle={<>Strategic <span className="text-gradient-ethiopian">Partnerships</span></>}
    heroSubtitle="SER-ECF engages in strategic partnerships with churches, NGOs, mission agencies, academic institutions, and development organizations to advance shared Kingdom and community transformation goals across Southern Ethiopia."
    sections={[
      {
        eyebrow: "Vision",
        title: "Why Partnerships",
        blocks: [
          { kind: "paragraph", text: "SER-ECF believes that lasting transformation is achieved through unity, collaboration, and shared responsibility. Strategic partnerships enable the fellowship to expand its ministry reach, enhance program effectiveness, and strengthen regional impact." },
        ],
      },
      {
        eyebrow: "Who We Work With",
        title: "Our Network",
        blocks: [{ kind: "list", items: [
          "Local Evangelical churches and church networks",
          "National and international mission agencies",
          "Non-governmental and humanitarian organizations (NGOs)",
          "Academic and theological institutions",
          "Development and relief organizations",
          "Faith-based networks and alliances",
        ] }],
      },
      {
        eyebrow: "Areas",
        title: "Strategic Partnership Areas",
        blocks: [{ kind: "cards", items: [
          { title: "Evangelism & Church Planting", description: "Expanding Gospel outreach, establishing new churches, and strengthening congregations in underserved communities.", icon: Send },
          { title: "Leadership Development", description: "Equipping pastors and ministry workers through theological education, training, and mentorship.", icon: GraduationCap },
          { title: "Peacebuilding & Reconciliation", description: "Promoting dialogue, conflict resolution, and long-term peace among diverse communities.", icon: HeartHandshake },
          { title: "Humanitarian & Social Outreach", description: "Relief programs, compassion ministries, and emergency support for vulnerable populations.", icon: Church },
          { title: "Education, Health & Development", description: "Joint initiatives improving access to education, healthcare, and sustainable livelihoods.", icon: Globe2 },
          { title: "Mission & Capacity Building", description: "Strengthening organizational systems, ministry effectiveness, and long-term mission impact.", icon: Handshake },
        ] }],
      },
      {
        eyebrow: "Principles",
        title: "Partnership Principles",
        blocks: [{ kind: "list", items: [
          "Mutual respect and shared vision",
          "Transparency and accountability",
          "Long-term collaboration",
          "Ethical stewardship of resources",
          "Community-centered impact",
          "Sustainable development outcomes",
          "Christ-centered unity and cooperation",
        ] }],
      },
      {
        eyebrow: "Why SER-ECF",
        title: "Why Partner With Us",
        blocks: [
          { kind: "list", items: [
            "Strong regional church networks",
            "Deep community relationships across Southern Ethiopia",
            "Established governance and accountability systems",
            "Proven experience in peacebuilding and development",
            "Integrated spiritual and social transformation approach",
            "Long-term presence and trust in local communities",
          ] },
          { kind: "callout", title: "Partnership Invitation", body: "SER-ECF welcomes new partnerships with organizations and individuals committed to Gospel-centered transformation, church strengthening and unity, community development, peacebuilding, and leadership development." },
          { kind: "callout", title: "Together in Faith • Together in Service", body: "“Meaningful partnership creates opportunities for lasting transformation. Through unity, faith, and shared service, we can impact lives and communities for generations to come.” — Pastor Dr. Wendmagegn Asfaw (PhD)" },
        ],
      },
    ]}
    cta={{ title: "Let's build together", primary: { label: "Become a Partner", to: "https://docs.google.com/forms/d/e/1FAIpQLSdryA70k38CtMyi3csS1w4j3S4Ekv59-fOMJ051BNziL0Rl4A/viewform?usp=header" }, secondary: { label: "Contact Us", to: "/contact" } }}
  />
);

export default PartnershipsPage;
