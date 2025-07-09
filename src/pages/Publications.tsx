import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";

const Publications = () => {
  const publications = [
    {
      title: "Machine Learning-Guided Discovery of Novel Catalysts for CO₂ Reduction",
      authors: "N. Chaudhary, S. Kumar, A. Patel, M. Johnson",
      journal: "Nature Catalysis",
      year: "2024",
      volume: "7",
      pages: "123-134",
      doi: "10.1038/s41929-024-01234-5",
      type: "First Author",
      featured: true,
      cover: false,
      topics: ["Machine Learning", "CO₂ Reduction", "Catalysis"]
    },
    {
      title: "Functional Data Analysis for Polymer Property Prediction: A Deep Learning Approach",
      authors: "N. Chaudhary, R. Williams, K. Thompson, J. Davis",
      journal: "Macromolecules",
      year: "2024",
      volume: "57",
      pages: "2456-2470",
      doi: "10.1021/acs.macromol.2024.00123",
      type: "First Author",
      featured: true,
      cover: true,
      topics: ["Polymer Informatics", "Deep Learning", "Materials Science"]
    },
    {
      title: "Electrocatalytic Hydrogen Peroxide Synthesis in Confined Environments",
      authors: "N. Chaudhary, P. Zhang, L. Anderson, M. Chen",
      journal: "ACS Catalysis",
      year: "2023",
      volume: "13",
      pages: "8901-8915",
      doi: "10.1021/acscatal.3c02456",
      type: "First Author",
      featured: true,
      cover: false,
      topics: ["Electrocatalysis", "Green Chemistry", "DFT"]
    },
    {
      title: "DFT Insights into Oxygenate Reduction Mechanisms on Transition Metal Surfaces",
      authors: "N. Chaudhary, S. Patel, R. Kumar, A. Singh",
      journal: "Journal of Physical Chemistry C",
      year: "2023",
      volume: "127",
      pages: "15678-15692",
      doi: "10.1021/acs.jpcc.3c04567",
      type: "First Author",
      featured: false,
      cover: false,
      topics: ["DFT", "Surface Chemistry", "Reaction Mechanisms"]
    },
    {
      title: "Ab Initio Molecular Dynamics Study of Water-Metal Interfaces in Catalysis",
      authors: "N. Chaudhary, K. Wilson, T. Brown, J. Lee",
      journal: "Journal of Chemical Physics",
      year: "2022",
      volume: "157",
      pages: "234567",
      doi: "10.1063/5.0123456",
      type: "First Author",
      featured: false,
      cover: false,
      topics: ["AIMD", "Interface Chemistry", "Water Splitting"]
    },
    {
      title: "Cluster Expansion Models for Alloy Catalyst Design",
      authors: "M. Johnson, N. Chaudhary, P. Davis, K. Smith",
      journal: "Physical Review Materials",
      year: "2022",
      volume: "6",
      pages: "045801",
      doi: "10.1103/PhysRevMaterials.6.045801",
      type: "Co-Author",
      featured: false,
      cover: false,
      topics: ["Cluster Expansion", "Alloy Catalysts", "Materials Design"]
    },
    {
      title: "Sustainable Phenol Removal and Xylitol Production: Process Optimization",
      authors: "N. Chaudhary, A. Sharma, R. Gupta",
      journal: "Green Chemistry",
      year: "2021",
      volume: "23",
      pages: "6789-6802",
      doi: "10.1039/D1GC02345F",
      type: "First Author",
      featured: false,
      cover: false,
      topics: ["Green Chemistry", "Biotechnology", "Process Engineering"]
    },
    {
      title: "Neural Network Approaches for Catalyst Activity Prediction",
      authors: "S. Kumar, N. Chaudhary, L. Zhang, M. Patel",
      journal: "Chemical Science",
      year: "2021",
      volume: "12",
      pages: "11234-11248",
      doi: "10.1039/D1SC03456G",
      type: "Co-Author",
      featured: false,
      cover: false,
      topics: ["Neural Networks", "Catalyst Prediction", "Computational Chemistry"]
    }
  ];

  const topicColors = {
    "Machine Learning": "bg-blue-100 text-blue-800",
    "CO₂ Reduction": "bg-green-100 text-green-800",
    "Catalysis": "bg-purple-100 text-purple-800",
    "Polymer Informatics": "bg-orange-100 text-orange-800",
    "Deep Learning": "bg-indigo-100 text-indigo-800",
    "Materials Science": "bg-teal-100 text-teal-800",
    "Electrocatalysis": "bg-yellow-100 text-yellow-800",
    "Green Chemistry": "bg-emerald-100 text-emerald-800",
    "DFT": "bg-red-100 text-red-800",
    "AIMD": "bg-pink-100 text-pink-800",
    "Default": "bg-gray-100 text-gray-800"
  };

  const getTopicColor = (topic: string) => {
    return topicColors[topic as keyof typeof topicColors] || topicColors.Default;
  };

  const featuredPublications = publications.filter(pub => pub.featured);
  const otherPublications = publications.filter(pub => !pub.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl academic-heading fade-in-up">
            Publications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto academic-body">
            Peer-reviewed research contributions to computational chemistry, machine learning, 
            and sustainable technologies.
          </p>
        </div>

        {/* Featured Publications */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <h2 className="text-3xl academic-heading">Featured Publications</h2>
            <Star className="h-6 w-6 text-academic-gold" />
          </div>
          
          <div className="space-y-6">
            {featuredPublications.map((pub, index) => (
              <Card key={index} className="academic-card border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-semibold text-primary mb-2">
                        {pub.title}
                      </CardTitle>
                      <CardDescription className="academic-body text-foreground">
                        {pub.authors}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant="secondary" className="bg-primary-light text-primary">
                        {pub.type}
                      </Badge>
                      {pub.cover && (
                        <Badge variant="secondary" className="bg-academic-gold text-white">
                          Cover Article
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="academic-body">
                    <em>{pub.journal}</em> <strong>{pub.year}</strong>, {pub.volume}, {pub.pages}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {pub.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} className={`text-xs ${getTopicColor(topic)}`}>
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        DOI: {pub.doi}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Publications */}
        <section className="mb-16">
          <h2 className="text-3xl academic-heading mb-8">Other Publications</h2>
          
          <div className="space-y-4">
            {otherPublications.map((pub, index) => (
              <div key={index} className="publication-item">
                <div className="space-y-2">
                  <h3 className="font-sans font-semibold text-lg text-primary">
                    {pub.title}
                  </h3>
                  <p className="academic-body text-sm text-foreground">
                    {pub.authors}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="academic-body text-sm text-muted-foreground">
                      <em>{pub.journal}</em> <strong>{pub.year}</strong>, {pub.volume}, {pub.pages}
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pub.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Citation Info */}
        <section className="bg-accent rounded-xl p-8">
          <div className="text-center space-y-4">
            <BookOpen className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl academic-heading">Citation Information</h3>
            <p className="academic-body text-muted-foreground">
              For citation metrics and complete publication list, please visit my 
              Google Scholar, ORCID, or ResearchGate profiles.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">Google Scholar</Button>
              <Button variant="outline" size="sm">ORCID</Button>
              <Button variant="outline" size="sm">ResearchGate</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
