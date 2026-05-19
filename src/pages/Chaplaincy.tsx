import InfoPage from "@/components/InfoPage";
import { HeartHandshake, Stethoscope, GraduationCap, ShieldCheck, Briefcase, Users } from "lucide-react";

const Chaplaincy = () => (
  <InfoPage
    title="Chaplaincy Ministry — SER-ECF"
    heroEyebrow="Ministry"
    heroTitle={<>Chaplaincy <span className="text-gradient-ethiopian">Ministry</span></>}
    heroSubtitle="The Chaplaincy Ministry of SER-ECF provides spiritual care, counseling, and pastoral support in institutional, public, and community settings across Southern Ethiopia — bringing the presence of Christ into places of crisis, responsibility, and transition."
    sections={[
      {
        eyebrow: "Purpose",
        title: "Why Chaplaincy",
        blocks: [
          { kind: "list", items: [
            "Provide spiritual care and pastoral support in institutions",
            "Offer counseling and emotional support in times of crisis",
            "Strengthen moral and ethical values in public spaces",
            "Support individuals in hospitals, schools, prisons, and workplaces",
            "Promote peace, reconciliation, and wellbeing in communities",
            "Extend the ministry of the Church beyond traditional settings",
          ] },
        ],
      },
      {
        eyebrow: "Areas of Ministry",
        title: "Where We Serve",
        blocks: [{ kind: "cards", items: [
          { title: "Hospitals & Health Institutions", description: "Prayer, counseling, and spiritual encouragement to patients, families, and healthcare workers.", icon: Stethoscope },
          { title: "Schools & Universities", description: "Support for students, teachers, and academic communities with spiritual guidance and mentorship.", icon: GraduationCap },
          { title: "Correctional Institutions", description: "Hope, discipleship, and rehabilitation support to inmates and correctional staff.", icon: ShieldCheck },
          { title: "Military & Security Services", description: "Pastoral care, moral support, and counseling for personnel in service environments.", icon: ShieldCheck },
          { title: "Workplaces & Public Institutions", description: "Ethical guidance, stress counseling, and spiritual encouragement for employees and leaders.", icon: Briefcase },
          { title: "Families & Communities", description: "Support for families in distress and community-based pastoral care.", icon: Users },
        ] }],
      },
      {
        eyebrow: "Functions",
        title: "Key Functions",
        blocks: [{ kind: "list", items: [
          "Pastoral counseling and emotional support",
          "Crisis intervention and trauma care",
          "Prayer and spiritual guidance",
          "Ethical and moral teaching",
          "Conflict mediation and reconciliation support",
          "Discipleship and spiritual formation",
          "Support for families in distress",
        ] }],
      },
      {
        eyebrow: "Approach & Commitment",
        title: "Our Approach",
        blocks: [
          { kind: "list", items: [
            "Compassionate and Christ-centered care",
            "Respect for institutional policies and environments",
            "Confidentiality and professionalism",
            "Cultural sensitivity and pastoral wisdom",
            "Commitment to peacebuilding and reconciliation",
          ] },
          { kind: "callout", title: "Our Commitment", body: "SER-ECF is committed to expanding chaplaincy services across Southern Ethiopia, training and deploying qualified chaplains, strengthening institutional partnerships, and promoting holistic healing and transformation." },
        ],
      },
    ]}
    cta={{ title: "Partner with our chaplaincy work", primary: { label: "Become a Partner", to: "/partnerships" }, secondary: { label: "Contact Us", to: "/contact" } }}
  />
);

export default Chaplaincy;
