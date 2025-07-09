import { Award, Trophy, Star, Users } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: "WiEST Women in Tech Award",
      year: "2025",
      description: "Recognition for outstanding contributions to technology and engineering",
      color: "text-academic-gold"
    },
    {
      icon: Award,
      title: "Poster Award",
      year: "2024",
      organization: "Singapore Catalysis Society",
      description: "Excellence in catalysis research presentation",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Graduate Student Director",
      year: "2020–2022",
      organization: "AIChE",
      description: "Leadership role in professional engineering society",
      color: "text-academic-sage"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl academic-heading">
            Awards & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="academic-card text-center group hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className={`p-4 rounded-full ${award.color} bg-opacity-10 w-fit mx-auto`}>
                    <award.icon className={`h-8 w-8 ${award.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-primary mb-1">
                      {award.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="font-sans font-medium text-academic-navy">
                        {award.year}
                      </p>
                      {award.organization && (
                        <p className="academic-caption text-muted-foreground">
                          {award.organization}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <p className="academic-body text-sm">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;