import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Molecular Pattern Background */}
      <div className="absolute inset-0 molecular-pattern"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 fade-in-up">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-primary">
              Dr. Neeru Chaudhary
            </h1>
            <h2 className="text-xl md:text-2xl font-sans font-medium text-foreground">
              Postdoctoral Researcher, NTU Singapore
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driving innovation at the interface of materials science, data, and sustainability
            </p>
          </div>

          {/* Research Fields */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Computational Catalysis", "Machine Learning", "Polymer Informatics"].map((field) => (
              <span
                key={field}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-sans font-medium text-sm md:text-base"
              >
                {field}
              </span>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="font-sans">Singapore</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:neeru.chaudhary@ntu.edu.sg"
                className="font-sans hover:text-primary transition-colors"
              >
                neeru.chaudhary@ntu.edu.sg
              </a>
            </div>
          </div>

          {/* Social Links & CV */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button className="btn-academic" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#" aria-label="ORCID">
                  <span className="text-xs font-bold">OR</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#" aria-label="Google Scholar">
                  <span className="text-xs font-bold">GS</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;