import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import CurriculumSection from "@/components/CurriculumSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <CurriculumSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
