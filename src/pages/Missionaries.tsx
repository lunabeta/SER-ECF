import InfoPage from "@/components/InfoPage";
import { Send, Church, BookOpen, HeartHandshake, Users, MapPin } from "lucide-react";

const Missionaries = () => (
  <InfoPage
    title="Missionaries — SER-ECF"
    heroEyebrow="Mission"
    heroTitle={<>Our <span className="text-gradient-ethiopian">Missionaries</span></>}
    heroSubtitle="SER-ECF Missionaries are dedicated servants of the Gospel — called, trained, and sent to advance the mission of Jesus Christ across Southern Ethiopia and beyond through evangelism, church planting, discipleship, and community engagement."
    sections={[
      {
        eyebrow: "Purpose",
        title: "Why We Send",
        blocks: [{ kind: "list", items: [
          "Proclaim the Gospel of Jesus Christ in unreached areas",
          "Establish and strengthen local churches",
          "Disciple new believers and communities",
          "Support leadership development in emerging churches",
          "Promote peace, reconciliation, and unity among communities",
          "Demonstrate Christ's love through practical service and outreach",
        ] }],
      },
      {
        eyebrow: "Areas of Work",
        title: "Core Mission Work",
        blocks: [{ kind: "cards", items: [
          { title: "Evangelism & Gospel Outreach", description: "Reaching communities with the message of salvation through Jesus Christ.", icon: Send },
          { title: "Church Planting", description: "Establishing new local churches in unreached and underserved regions.", icon: Church },
          { title: "Discipleship & Follow-Up", description: "Strengthening new believers through Bible teaching, mentoring, and spiritual growth.", icon: BookOpen },
          { title: "Community Engagement", description: "Serving through compassion, education, health awareness, and development support.", icon: HeartHandshake },
          { title: "Peacebuilding & Reconciliation", description: "Promoting unity and healing in areas affected by conflict or division.", icon: Users },
          { title: "Leadership Development", description: "Identifying and training emerging local church leaders and ministry workers.", icon: MapPin },
        ] }],
      },
      {
        eyebrow: "Where We Serve",
        title: "Deployment Areas",
        blocks: [{ kind: "list", items: [
          "Rural and remote communities",
          "Urban and semi-urban areas",
          "Unreached people groups",
          "Church planting fields",
          "Conflict-affected regions",
          "Cross-cultural mission environments",
        ] }],
      },
      {
        eyebrow: "Support System",
        title: "How We Support Missionaries",
        blocks: [
          { kind: "list", items: [
            "Spiritual mentorship and oversight",
            "Leadership and ministry training",
            "Organizational and logistical support",
            "Connection to local churches and networks",
            "Prayer and pastoral care support",
            "Monitoring and accountability structures",
          ] },
          { kind: "callout", title: "Vision", body: "To faithfully proclaim the Gospel of Jesus Christ, establish strong local churches, and bring holistic transformation to communities through Spirit-led mission work across Southern Ethiopia and beyond." },
        ],
      },
    ]}
    cta={{ title: "Stand with our missionaries", primary: { label: "Give Now", to: "/donate" }, secondary: { label: "Pray With Us", to: "/prayer-request" } }}
  />
);

export default Missionaries;
