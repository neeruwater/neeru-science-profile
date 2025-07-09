import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const Research = () => {
  const currentProjects = [
    {
      title: "Functional Data Modeling for Polymer Informatics",
      collaboration: "ExxonMobil Collaboration",
      description: "Developing advanced statistical models to predict polymer properties and optimize synthesis conditions using functional data analysis techniques.",
      status: "Active",
      tags: ["Machine Learning", "Polymer Science", "Industry Partnership"]
    },
    {
      title: "ORR Catalysis using ML-guided Frameworks",
      description: "Machine learning-guided discovery of novel oxygen reduction reaction catalysts for fuel cell applications, combining DFT calculations with predictive modeling.",
      status: "Active",
      tags: ["Electrocatalysis", "Machine Learning", "Fuel Cells"]
    },
    {
      title: "Confined Electrocatalytic Synthesis of Hydrogen Peroxide",
      description: "Investigating confined catalytic environments for selective hydrogen peroxide production through computational modeling and mechanism elucidation.",
      status: "Active",
      tags: ["Electrocatalysis", "DFT", "Green Chemistry"]
    }
  ];

  const pastProjects = [
    {
      title: "Oxygenate Reduction via DFT and AIMD",
      period: "Ph.D. Research",
      description: "Comprehensive computational study of oxygenate reduction mechanisms using density functional theory and ab initio molecular dynamics simulations.",
      tags: ["DFT", "AIMD", "Catalysis"]
    },
    {
      title: "Phenol Adsorption & Xylitol Bioproduction",
      period: "M.Tech. Project",
      description: "Optimization of phenol removal processes and sustainable xylitol production through biotechnological approaches.",
      tags: ["Biotechnology", "Environmental", "Process Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl academic-heading fade-in-up">
            Research & Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto academic-body">
            Exploring the intersection of computational science, machine learning, and sustainable technologies 
            to address global challenges in energy and materials.
          </p>
        </div>

        {/* Current Projects */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <h2 className="text-3xl academic-heading">Current Projects</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
          </div>
          
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="academic-card border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-sans font-semibold text-primary">
                        {project.title}
                      </CardTitle>
                      {project.collaboration && (
                        <CardDescription className="text-academic-gold font-medium mt-1">
                          {project.collaboration}
                        </CardDescription>
                      )}
                    </div>
                    <Badge variant="outline" className="text-green-700 border-green-300">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="academic-body">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Projects */}
        <section className="mb-16">
          <h2 className="text-3xl academic-heading mb-8">Past Projects</h2>
          
          <div className="space-y-6">
            {pastProjects.map((project, index) => (
              <Card key={index} className="academic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-sans font-semibold text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">
                    {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="academic-body">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Research Notes */}
        <section className="bg-accent rounded-xl p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl academic-heading">Research Notes & Future Directions</h3>
            <p className="academic-body text-muted-foreground">
              Interested in expanding this section? Future updates will include detailed research notes, 
              methodology insights, and collaborative opportunities.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary">
              <span className="font-sans font-medium">Coming Soon</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;