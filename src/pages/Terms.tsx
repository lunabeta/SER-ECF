import InfoPage from "@/components/InfoPage";
import SEO from "@/components/SEO";

const EFFECTIVE_DATE = "May 14, 2026";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for using the SER-ECF website and services. Read about intellectual property, donations, privacy, and legal terms."
        url="https://serecf.org/terms"
      />
      <InfoPage
        title="Terms & Conditions | SER-ECF"
        heroEyebrow="Legal"
        heroTitle={<>Terms & Conditions</>}
        heroSubtitle={`Please read these terms carefully before using the SER-ECF website and services. By accessing this site you agree to be bound by the terms below. Effective ${EFFECTIVE_DATE}.`}
        sections={[
          {
            eyebrow: "1",
            title: "Introduction & Acceptance",
            blocks: [
              {
                kind: "paragraph",
                text: "These Terms & Conditions (the \"Terms\") govern your access to and use of the website, content, and services provided by the South Ethiopia Region Evangelical Churches Fellowship (\"SER-ECF\", \"we\", \"us\", or \"our\"). By visiting or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use of the site.",
              },
            ],
          },
          {
            eyebrow: "2",
            title: "About SER-ECF",
            blocks: [
              {
                kind: "paragraph",
                text: "SER-ECF is a regional fellowship of evangelical churches operating in South Ethiopia, coordinating ministries, theological education, chaplaincy, missions, and community programs. The website serves as a public information, communication, and engagement channel for our churches, partners, and the wider community.",
              },
            ],
          },
          {
            eyebrow: "3",
            title: "Use of the Website",
            blocks: [
              { kind: "paragraph", text: "You agree to use this website lawfully and respectfully. In particular, you agree NOT to:" },
              {
                kind: "list",
                items: [
                  "Use the site in any way that violates applicable laws or regulations.",
                  "Attempt to gain unauthorized access to any part of the site, server, database, or related systems.",
                  "Upload, transmit, or distribute viruses, malware, or any harmful code.",
                  "Impersonate SER-ECF, its leaders, member churches, or any other person or entity.",
                  "Post or share content that is unlawful, defamatory, hateful, obscene, or contrary to Christian conduct and the values of SER-ECF.",
                  "Scrape, harvest, or collect data from the site without our written permission.",
                ],
              },
            ],
          },
          {
            eyebrow: "4",
            title: "Intellectual Property",
            blocks: [
              {
                kind: "paragraph",
                text: "All content on this website — including text, images, logos, graphics, audio, video, downloadable resources, and the SER-ECF name and emblem — is the property of SER-ECF or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.",
              },
              {
                kind: "paragraph",
                text: "You may view, share, and reference content for personal, non-commercial, ministry, or educational purposes with appropriate attribution to SER-ECF. Any other reproduction, modification, distribution, or commercial use requires our prior written consent. Scripture quotations are used for ministry purposes and remain the property of their respective publishers and translation rights holders.",
              },
            ],
          },
          {
            eyebrow: "5",
            title: "User Submissions",
            blocks: [
              {
                kind: "paragraph",
                text: "When you submit prayer requests, contact messages, newsletter sign-ups, partnership inquiries, or other information to us, you confirm that the information is accurate and that you have the right to share it. You grant SER-ECF a non-exclusive right to use such submissions for the purpose of responding, providing requested services, ministry support, and internal coordination.",
              },
              {
                kind: "paragraph",
                text: "Prayer requests may be shared with intercessors and ministry leaders. If you wish to remain anonymous or restrict how your request is shared, please indicate this in your submission.",
              },
            ],
          },
          {
            eyebrow: "6",
            title: "Donations & Financial Contributions",
            blocks: [
              {
                kind: "list",
                items: [
                  "All donations are voluntary and are used to advance the mission, ministries, and operations of SER-ECF.",
                  "Donations are generally non-refundable. If you believe a donation was made in error, contact us promptly and we will review the matter in good faith.",
                  "SER-ECF makes reasonable efforts to designate designated gifts to the indicated ministry; however, where a designated need is fully met or no longer applicable, funds may be redirected to similar ministry priorities.",
                  "Tax treatment of donations depends on your jurisdiction. SER-ECF does not provide tax or legal advice — please consult a qualified professional.",
                ],
              },
            ],
          },
          {
            eyebrow: "7",
            title: "Third-Party Links & Services",
            blocks: [
              {
                kind: "paragraph",
                text: "Our website may contain links to third-party websites, social media platforms, payment processors, or external resources. SER-ECF does not control and is not responsible for the content, policies, or practices of any third-party site or service. Use of those services is at your own risk and subject to their terms.",
              },
            ],
          },
          {
            eyebrow: "8",
            title: "Ministry & Institutional Affiliation",
            blocks: [
              {
                kind: "paragraph",
                text: "Affiliated ministries, theological colleges, seminaries, counseling ministries, humanitarian programs, and training centers operating within the SER-ECF jurisdiction are governed by SER-ECF's Protocol Regulation for Ministries, Spiritual Institutions, and Theological Colleges.",
              },
              {
                kind: "callout",
                title: "Protocol Regulation — Summary",
                body: "No ministry, spiritual institution, or theological college may operate in any zone or city under SER-ECF without written authorization from the Regional Chairman of the Executive Board, with activities approved through the Regional General Secretary. Affiliated institutions are subject to registration, doctrinal alignment review, periodic renewal, oversight, and disciplinary measures for non-compliance. The full Protocol Regulation is available from the SER-ECF Office on request.",
              },
              {
                kind: "paragraph",
                text: "Listing of a ministry, partner, or institution on this website does not by itself constitute affiliation or endorsement unless explicitly stated.",
              },
            ],
          },
          {
            eyebrow: "9",
            title: "Disclaimers & Limitation of Liability",
            blocks: [
              {
                kind: "paragraph",
                text: "The website and its content are provided on an \"as is\" and \"as available\" basis. While we strive for accuracy and reliability, SER-ECF makes no warranties, express or implied, regarding completeness, accuracy, availability, or fitness for any particular purpose.",
              },
              {
                kind: "paragraph",
                text: "To the fullest extent permitted by law, SER-ECF, its officers, leaders, employees, and volunteers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, this website or any linked services.",
              },
            ],
          },
          {
            eyebrow: "10",
            title: "Privacy",
            blocks: [
              {
                kind: "paragraph",
                text: "We respect your privacy and handle personal information (such as names, email addresses, phone numbers, and prayer requests) only for the purposes for which it was provided — communication, ministry coordination, donations, and improving our services. We do not sell personal information. To request access to, correction of, or deletion of your personal data, contact us at the address below.",
              },
            ],
          },
          {
            eyebrow: "11",
            title: "Governing Law",
            blocks: [
              {
                kind: "paragraph",
                text: "These Terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising in connection with these Terms or your use of the website shall be addressed first through good-faith dialogue with SER-ECF, and where necessary, in the competent courts of Ethiopia.",
              },
            ],
          },
          {
            eyebrow: "12",
            title: "Changes to These Terms",
            blocks: [
              {
                kind: "paragraph",
                text: "SER-ECF may update these Terms from time to time to reflect changes in our practices, services, or applicable law. Updates take effect when posted on this page, with the revised effective date shown above. Your continued use of the site after changes are posted constitutes acceptance of the revised Terms.",
              },
            ],
          },
          {
            eyebrow: "13",
            title: "Contact Us",
            blocks: [
              {
                kind: "paragraph",
                text: "Questions, concerns, or requests regarding these Terms can be directed to:",
              },
              {
                kind: "callout",
                title: "South Ethiopia Region Evangelical Churches Fellowship (SER-ECF)",
                body: "Arba Minch, Ethiopia · Email: southethiopiaregionalecfoa@gmail.com · Phone: +251 91 157 5204 / +251 91 661 8105",
              },
              {
                kind: "paragraph",
                text: `Effective date: ${EFFECTIVE_DATE}.`,
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Terms;