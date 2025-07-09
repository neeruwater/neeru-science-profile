import { Atom, Brain, Database, BarChart3, Zap, Beaker } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Atom,
      title: "DFT, AIMD & Cluster Expansion",
      description: "Quantum mechanical calculations for understanding catalytic mechanisms and materials properties at the atomic level."
    },
    {
      icon: Brain,
      title: "Machine Learning for Catalysis",
      description: "Developing ML frameworks to accelerate catalyst discovery and optimize reaction pathways."
    },
    {
      icon: Database,
      title: "Functional Data Modeling",
      description: "Advanced statistical approaches for complex materials data and polymer property prediction."
    },
    {
      icon: BarChart3,
      title: "Deep Generative Models",
      description: "Neural networks for molecular design and property optimization in chemical systems."
    },
    {
      icon: Zap,
      title: "Electrocatalysis",
      description: "CO₂ reduction reactions, fuel cells, and sustainable energy conversion processes."
    },
    {
      icon: Beaker,
      title: "Polymer Informatics",
      description: "Data-driven approaches to polymer design and property prediction for industrial applications."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl academic-heading">
            Areas of Expertise
          </h2>
          
          <div className="expertise-grid">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="academic-card group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-light rounded-lg group-hover:bg-primary/10 transition-colors">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-lg text-primary mb-2">
                      {area.title}
                    </h3>
                    <p className="academic-body text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;