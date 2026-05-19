import InfoPage from "@/components/InfoPage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { History as HistoryIcon, Sprout, GitBranch, Building2, Award, Globe2 } from "lucide-react";

const faqs = [
  { q: "What is SER-ECF?", a: "SER-ECF (South Ethiopia Region Evangelical Churches Fellowship) is a regional Evangelical umbrella organization that unites churches across Southern Ethiopia to advance the Gospel of Jesus Christ and promote holistic transformation through evangelism, leadership development, peacebuilding, and community outreach." },
  { q: "What is the main purpose of SER-ECF?", a: "To promote unity among Evangelical churches, advance evangelism and church planting, strengthen church leadership, promote peacebuilding and reconciliation, and support holistic community development." },
  { q: "Who can join SER-ECF programs?", a: "Churches and church leaders, pastors and ministry workers, youth and women leaders, volunteers and interns, partner organizations and institutions." },
  { q: "How can a church become part of SER-ECF?", a: "Churches can become affiliated through a formal partnership and registration process. Interested churches are encouraged to contact the SER-ECF office for guidance on affiliation and membership procedures." },
  { q: "What programs does SER-ECF offer?", a: "Evangelism & Church Planting, Leadership Development & Theological Training, Youth & Women Empowerment, Peacebuilding & Reconciliation, Humanitarian & Social Outreach, Education & Health Initiatives." },
  { q: "Does SER-ECF provide leadership training?", a: "Yes. SER-ECF provides structured leadership development programs for pastors, church leaders, and ministry workers, including theological training, mentorship, and capacity-building workshops." },
  { q: "How can I partner with SER-ECF?", a: "Through ministry collaboration, program sponsorship, humanitarian support, leadership training initiatives, and peacebuilding and community development projects. Visit the Partnerships page or contact the office directly." },
  { q: "How can I support SER-ECF financially?", a: "Through one-time donations, project sponsorship, monthly support partnerships, or church-based giving. Visit the Give page for more details." },
  { q: "How can I submit a prayer request?", a: "You can submit your prayer request through the Prayer Request page. The SER-ECF prayer team will stand with you in prayer and intercession." },
  { q: "Where is SER-ECF located?", a: "📍 Arba Minch, Southern Ethiopia." },
  { q: "How can I contact SER-ECF?", a: "📧 southethiopiaregionalecfoa@gmail.com  •  📞 +251 91 157 5204 / +251 91 661 8105" },
  { q: "Is SER-ECF connected to other church organizations?", a: "Yes. SER-ECF is a member of the Ethiopian Evangelical Churches Fellowship (EECF) and works in collaboration with churches, mission agencies, NGOs, and development partners." },
  { q: "Does SER-ECF work only in Southern Ethiopia?", a: "SER-ECF primarily operates in Southern Ethiopia across multiple zones, but it also engages in broader national and international partnerships for mission and development work." },
  { q: "What makes SER-ECF different?", a: "SER-ECF uniquely integrates church unity and coordination, leadership development, evangelism and mission work, peacebuilding and reconciliation, and community development and humanitarian service." },
  { q: "How can I stay updated with SER-ECF activities?", a: "Through the Media section (news, sermons, reports), Events page, social media platforms, and email updates and newsletters." },
];

const History = () => (
  <InfoPage
    title="Our History — 50 Years of SER-ECF"
    heroEyebrow="Our Journey"
    heroTitle={<>50 Years of <span className="text-gradient-ethiopian">Faith, Unity & Mission</span></>}
    heroSubtitle="Discover the 50-year journey of the South Ethiopia Region Evangelical Churches Fellowship (SER-ECF), from early church collaboration to a structured regional Evangelical fellowship with defined governance, ministry systems, and a clear mission for holistic transformation."
    sections={[
      {
        eyebrow: "Historical Development",
        title: "From Movement to Fellowship",
        blocks: [
          { kind: "paragraph", text: "SER-ECF began as an informal movement of Evangelical churches seeking greater unity, cooperation, and shared mission engagement. Early church leaders recognized the need for collaboration to strengthen evangelism efforts, support discipleship, and respond collectively to the spiritual and social needs of communities." },
          { kind: "paragraph", text: "Over time, this growing cooperation developed into a structured regional fellowship with organized leadership, coordinated programs, and a unified vision for ministry across Southern Ethiopia." },
        ],
      },
      {
        eyebrow: "Institutional Growth",
        title: "Stages of Development",
        blocks: [
          {
            kind: "cards",
            items: [
              { title: "1. Foundation Stage", description: "Informal fellowship among Evangelical churches, emphasis on unity and shared worship, and early collaborative evangelism efforts.", icon: Sprout },
              { title: "2. Coordination Stage", description: "Formation of regional cooperation structures, joint ministry and evangelism activities, and strengthening of inter-church relationships.", icon: GitBranch },
              { title: "3. Organizational Development", description: "Establishment of leadership systems, introduction of structured programs, and development of training and ministry initiatives.", icon: Building2 },
              { title: "4. Institutional Maturity", description: "Formation of Executive Board governance, expansion of regional programs and partnerships, integration of development and peacebuilding ministries.", icon: Award },
              { title: "Ministry Milestones", description: "Expansion of Evangelical networks, structured leadership training, coordinated evangelism, peacebuilding ministries, youth & women empowerment, humanitarian work.", icon: HistoryIcon },
              { title: "Regional Impact", description: "Trusted regional platform for church collaboration, community transformation, and sustainable development across Southern Ethiopia.", icon: Globe2 },
            ],
          },
        ],
      },
      {
        eyebrow: "Impact",
        title: "Regional Impact Story",
        blocks: [
          { kind: "paragraph", text: "SER-ECF has played a significant role in transforming communities across Southern Ethiopia through both spiritual and practical ministry engagement." },
          { kind: "list", items: [
            "Strengthening unity among diverse Evangelical churches",
            "Expanding access to Gospel outreach in underserved areas",
            "Equipping hundreds of church leaders annually",
            "Supporting peacebuilding and reconciliation in conflict-affected communities",
            "Improving community well-being through education, health, and development initiatives",
          ] },
        ],
      },
      {
        eyebrow: "Evolution",
        title: "Organizational Evolution",
        blocks: [
          { kind: "paragraph", text: "SER-ECF has evolved from a grassroots fellowship into a structured regional institution characterized by:" },
          { kind: "list", items: [
            "Defined governance and leadership systems",
            "Organized ministry programs and departments",
            "Strategic planning and implementation frameworks",
            "Regional operational zones and networks",
            "Strong partnership and collaboration models",
            "Commitment to accountability and transparency",
          ] },
          { kind: "callout", title: "Today", body: "SER-ECF stands as a mature Evangelical fellowship that integrates spiritual ministry with holistic development, serving as a bridge between churches, communities, and development partners across Southern Ethiopia." },
        ],
      },
      {
        eyebrow: "FAQs",
        title: "Frequently Asked Questions",
        intro: "Clear answers to common questions about SER-ECF, its identity, programs, partnerships, and ways to engage.",
        blocks: [
          {
            kind: "custom",
            node: (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">
                      {i + 1}. {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ),
          },
        ],
      },
    ]}
    cta={{
      title: "Be part of the next chapter",
      body: "Join us as we continue advancing the Gospel and transforming communities across Southern Ethiopia.",
      primary: { label: "Become a Partner", to: "/partnerships" },
      secondary: { label: "Give Now", to: "/donate" },
    }}
  />
);

export default History;
