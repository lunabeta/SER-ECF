import { useParams, Navigate } from "react-router-dom";
import InfoPage from "@/components/InfoPage";
import { getMinistryBySlug } from "@/data/specializedMinistries";

const MinistryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const ministry = getMinistryBySlug(slug);

  if (!ministry) return <Navigate to="/ministry-leadership" replace />;

  return (
    <InfoPage
      title={`${ministry.name} — SER-ECF`}
      heroEyebrow={ministry.hero.eyebrow}
      heroTitle={
        <>
          <span className="mr-3">{ministry.emoji}</span>
          {ministry.name}
        </>
      }
      heroSubtitle={ministry.hero.subtitle}
      sections={ministry.sections}
      cta={{
        title: ministry.motto,
        body: "Partner with SER-ECF to advance this ministry across South Ethiopia and beyond.",
        primary: { label: "Partner With Us", to: "/partnerships" },
        secondary: { label: "Back to Ministry Leadership", to: "/ministry-leadership" },
      }}
    />
  );
};

export default MinistryDetail;
