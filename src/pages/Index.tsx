import SiteHeader from "@/components/SiteHeader";
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
