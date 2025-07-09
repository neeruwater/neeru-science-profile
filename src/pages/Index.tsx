import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AwardsSection from "@/components/sections/AwardsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <AwardsSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-sans font-semibold">Dr. Neeru Chaudhary</h3>
            <p className="academic-body text-primary-foreground/80">
              Postdoctoral Researcher | Computational Chemical Engineer
            </p>
            <p className="academic-caption text-primary-foreground/60">
              © 2025 Dr. Neeru Chaudhary. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
