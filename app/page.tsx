import Navigation from "@/components/Navigation";
import AIAssistantSection from "@/components/AIAssistantSection";
import ContentHubSection from "@/components/ContentHubSection";
import Footer from "@/components/Footer";
import HomeCarousel from "@/components/HomeCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSearchSection from "@/components/HeroSearchSection";


export default function Home() {
  return (
    <>
      <Navigation />
      <div className="px-4 lg:px-8">
        <HeroSearchSection />
        <AIAssistantSection />
        <ContentHubSection />
        <HomeCarousel />
        <TestimonialsSection />
        
       
        <Footer />
      </div>
    </>
  );
}
