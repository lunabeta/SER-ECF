import InfoPage from "@/components/InfoPage";
import { GraduationCap, HeartHandshake, BookOpen, AlertTriangle, Scale, MapPin } from "lucide-react";

const CPECenter = () => (
  <InfoPage
    title="CPE Center — Clinical Pastoral Education at SER-ECF"
    heroEyebrow="Training & Formation"
    heroTitle={<>Clinical Pastoral <span className="text-gradient-ethiopian">Education Center</span></>}
    heroSubtitle="A specialized training and formation hub dedicated to equipping chaplains, pastors, and ministry workers with professional pastoral care skills for effective ministry in clinical, institutional, and community settings."
    sections={[
      {
        eyebrow: "Purpose",
        title: "Why CPE Matters",
        blocks: [{ kind: "list", items: [
          "Train qualified chaplains and pastoral caregivers",
          "Integrate theology with practical pastoral experience",
          "Strengthen emotional, spiritual, and psychological care ministries",
          "Prepare ministers for service in hospitals, schools, prisons, and institutions",
          "Enhance counseling and crisis intervention skills",
          "Promote professional standards in pastoral care and chaplaincy",
        ] }],
      },
      {
        eyebrow: "Training Focus",
        title: "Focus Areas",
        blocks: [{ kind: "cards", items: [
          { title: "Clinical Pastoral Skills", description: "Hands-on skills for spiritual care in healthcare and institutional environments.", icon: HeartHandshake },
          { title: "Pastoral Counseling", description: "Emotional support, grief counseling, trauma care, and family counseling.", icon: BookOpen },
          { title: "Spiritual Formation", description: "Deepening personal spiritual growth, prayer life, and ministry identity.", icon: GraduationCap },
          { title: "Crisis Intervention", description: "Equipping trainees to respond effectively to emergencies, trauma, and critical situations.", icon: AlertTriangle },
          { title: "Ethics & Professional Practice", description: "Confidentiality, ethical conduct, and responsible ministry engagement.", icon: Scale },
          { title: "Field Education", description: "Supervised placement in hospitals, schools, churches, and community institutions.", icon: MapPin },
        ] }],
      },
      {
        eyebrow: "Structure",
        title: "Program Structure",
        blocks: [{ kind: "list", items: [
          "Theoretical classroom instruction",
          "Supervised clinical practice",
          "Group reflection and peer learning",
          "One-on-one supervision and mentorship",
          "Evaluation and feedback sessions",
          "Field ministry assignments",
        ] }],
      },
      {
        eyebrow: "Who Can Apply",
        title: "For Whom",
        blocks: [{ kind: "list", items: [
          "Pastors and church leaders",
          "Chaplains and ministry workers",
          "Theology and ministry students",
          "Christian counselors",
          "Community and social service workers",
          "Individuals called to pastoral care ministry",
        ] }],
      },
      {
        eyebrow: "Outcomes",
        title: "Graduate Capacities",
        blocks: [
          { kind: "list", items: [
            "Provide professional pastoral care in institutions",
            "Offer effective counseling and emotional support",
            "Serve as trained chaplains in various sectors",
            "Respond to crisis and trauma situations appropriately",
            "Integrate faith and care in practical ministry settings",
            "Strengthen church-based care systems",
          ] },
          { kind: "callout", title: "Our Vision", body: "To develop competent, compassionate, and Christ-centered pastoral caregivers who bring healing, hope, and spiritual support to individuals and communities across Southern Ethiopia and beyond." },
        ],
      },
    ]}
    cta={{ title: "Train with us", primary: { label: "Apply Now", to: "/careers" }, secondary: { label: "Contact Us", to: "/contact" } }}
  />
);

export default CPECenter;
