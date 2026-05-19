import InfoPage from "@/components/InfoPage";
import { Calendar, Mic, BookOpen, HeartHandshake, Users, Send } from "lucide-react";

const Events = () => (
  <InfoPage
    title="Events — SER-ECF"
    heroEyebrow="Gatherings"
    heroTitle={<>SER-ECF <span className="text-gradient-ethiopian">Events</span></>}
    heroSubtitle="Regional gatherings, conferences, trainings, and ministry activities that strengthen church unity, leadership development, evangelism, and community transformation across Southern Ethiopia."
    sections={[
      {
        eyebrow: "Event Types",
        title: "What We Host",
        blocks: [{ kind: "cards", items: [
          { title: "Leadership Conferences", description: "Regional and zonal conferences equipping pastors, church leaders, and ministry workers.", icon: Mic },
          { title: "Evangelism Campaigns", description: "Coordinated outreach focused on the Gospel, church planting, and reaching unreached communities.", icon: Send },
          { title: "Prayer Gatherings", description: "Regional and local prayer meetings uniting churches in intercession for revival and peace.", icon: HeartHandshake },
          { title: "Training & Capacity Building", description: "Workshops on leadership development, theological training, discipleship, and church administration.", icon: BookOpen },
          { title: "Peacebuilding Forums", description: "Church leaders, community elders, and stakeholders promoting reconciliation, unity, and cohesion.", icon: Users },
          { title: "Youth & Women Conferences", description: "Empowerment events focused on leadership, spiritual growth, skills training, and mentorship.", icon: Calendar },
        ] }],
      },
      {
        eyebrow: "Format",
        title: "Each Event Includes",
        blocks: [{ kind: "list", items: [
          "Event title and theme or focus",
          "Date and time",
          "Location (zone or city)",
          "Speakers and facilitators",
          "Target participants",
          "Registration information",
        ] }],
      },
      {
        eyebrow: "Highlights",
        title: "Why Our Events Matter",
        blocks: [
          { kind: "list", items: [
            "Strengthen unity among Evangelical churches",
            "Equip leaders for effective ministry",
            "Promote spiritual revival and discipleship",
            "Advance evangelism and church planting",
            "Support peacebuilding and reconciliation",
            "Enhance collaboration among partners and churches",
          ] },
          { kind: "callout", title: "How to Participate", body: "Register through the official office, receive invitations from member churches, follow regional announcements and updates, or contact the SER-ECF coordination team." },
        ],
      },
    ]}
    cta={{ title: "Stay informed about upcoming events", primary: { label: "Contact Office", to: "/contact" }, secondary: { label: "Visit Media", to: "/media" } }}
  />
);

export default Events;
