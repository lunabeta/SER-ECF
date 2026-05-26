import SiteHeader from "@/components/SiteHeader";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhereWeWork from "@/components/WhereWeWork";
import Impact from "@/components/Impact";
import Partnerships from "@/components/Partnerships";
import PartnersMarquee from "@/components/PartnersMarquee";
import Give from "@/components/Give";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Home"
        description="SER-ECF: Supporting churches and ministries in Southern Ethiopia with leadership, training, and community impact. Learn about our programs, partners, and how to get involved."
        url="https://serecf.org"
      />
      <SiteHeader />
      <Hero />
      <About />
      <Programs />
      <WhereWeWork />
      <Impact />
      <Partnerships />
      <PartnersMarquee />
      <Give />
      <Contact />
      <SiteFooter />
    </main>
  );
};

export default Index;
