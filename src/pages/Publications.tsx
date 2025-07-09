import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";

const Publications = () => {
  const publications = [
    {
      title: "Harnessing Physics-inspired Machine Learning to Design Nanocluster Catalysts for Dehydrogenating Liquid Organic Hydrogen Carriers",
      authors: "Chuhong Lin, Bryan C. S. Lee, Uzma Anjum, Asmese M. Prabhu, Neeru Chaudhary, Rong Xu, Tej S. Choksi",
      journal: "Applied Catalysis B: Environmental Energy",
      year: "2025",
      volume: "371",
      pages: "125192",
      doi: "https://doi.org/10.1016/j.apcatb.2025.125192",
      type: "Co-Author",
      featured: true,
      cover: false,
      topics: ["Machine Learning", "Catalysis", "Hydrogen Storage"]
    },
    {
      title: "CO₂ Reduction Thermodynamics and Kinetics on Bulk and Two-Dimensional Electrocatalysts: From First Principles to Experimental Outcomes",
      authors: "Raghavendra Rajagopalan, Shivam Chaturvedi, Neeru Chaudhary, Abhijit Gogoi, Tej S. Choksi, Ananth Govind Rajan",
      journal: "Current Opinion in Electrochemistry",
      year: "2025",
      volume: "51",
      pages: "101668",
      doi: "https://doi.org/10.1016/j.coelec.2025.101668",
      type: "Co-Author",
      featured: true,
      cover: false,
      topics: ["CO₂ Reduction", "DFT", "Electrocatalysis"]
},
    {
      title: "Capturing Surface Coverage Effects in Heterogeneous Catalysis",
      authors: "Alyssa J.R. Hensley, Neeru Chaudhary, Naseeha Cardwell, Isaac Onyango, Yong Wang, Di Wu, Jean-Sabin McEwen",
      journal: "Journal of Physical Chemistry C",
      year: "2024",
      volume: "129",
      pages: "1907-1929",
      doi: "http://dx.doi.org/10.1021/acs.jpcc.4c05086",
      type: "Co-Author",
      featured: true,
      cover: true,
      topics: ["Surface Science", "Catalysis", "Coverage Effects"]
},
   {
      title: "Determining Catalytically Relevant Surfaces through Coverage-Dependent Lattice Gas Models: Carbon Adsorption on Fe(100)",
      authors: "Neeru Chaudhary, Isaac Onyango, Yong Wang, Jean-Sabin McEwen",
      journal: "Journal of Physical Chemistry C",
      year: "2023",
      volume: "127",
      pages: "14163-14176",
      doi: "http://dx.doi.org/10.1021/acs.jpcc.3c01761",
      type: "First Author",
      featured: true,
      cover: true,
      topics: ["Surface Science", "Catalysis", "Adsorption"]
},
  {
      title: "Determining the Hydration Energetics on Carbon-Supported Ru Catalysts: An Adsorption Calorimetry and Density Functional Theory Study",
      authors: "Xianghui Zhang, Neeru Chaudhary, Megan R. Hawkins, Cody B. Cockreham, Chen Yang, Junnan Shangguan, Alyssa J. R. Hensley, Ya-Huei Cathy Chin, Su Ha, Jean-Sabin McEwen, Di Wu",
      journal: "Catalysis Today",
      year: "2021",
      volume: "365",
      pages: "172–180",
      doi: "",
      type: "Co-Author",
      featured: false,
      cover: false,
      topics: ["Catalysis", "Adsorption", "DFT"]
},
{
      title: "Coverage-Dependent Adsorption of Phenol on Pt(111) from First Principles",
      authors: "Neeru Chaudhary, Alyssa Hensley, Greg Collinge, Yong Wang, Jean-Sabin McEwen",
      journal: "Journal of Physical Chemistry C",
      year: "2020",
      volume: "124",
      pages: "356-362",
      doi: "",
      type: "First Author",
      featured: false,
      cover: true,
      topics: ["Phenol Adsorption", "Catalysis", "DFT"]
},
{
      title: "Removal of Phenol Using Fly Ash and Impregnated Fly Ash: An Approach to Equilibrium, Kinetic, and Thermodynamic Study",
      authors: "Neeru Chaudhary*, Chandrajit Balomajumder, Bhumica Agrawal, Vidyasagar Jagati",
      journal: "Separation Science and Technology",
      year: "2015",
      volume: "50",
      pages: "690-699",
      doi: "",
      type: "Corresponding Author",
      featured: false,
      cover: false,
      topics: ["Adsorption", "Environmental Engineering", "Phenol Removal"]
},
{
      title: "Optimization Study of Adsorption Parameters for Removal of Phenol on Aluminum Impregnated Fly Ash Using Response Surface Methodology",
      authors: "Neeru Chaudhary*, Chandrajit Balomajumder",
      journal: "Journal of the Taiwan Institute of Chemical Engineers",
      year: "2014",
      volume: "45",
      pages: "852–859",
      doi: "",
      type: "Corresponding Author",
      featured: false,
      cover: false,
      topics: ["Adsorption", "Optimization", "Environmental Remediation"]
},
{
      title: "Biological Production of Xylitol from Corn Husk and Switchgrass by Pichia stiptis",
      authors: "Neeru Chaudhary*, Chandrajit Balomajumder, Vidyasagar Jagati",
      journal: "Research Journal of Chemical Sciences",
      year: "2013",
      volume: "3",
      pages: "58-64",
      doi: "",
      type: "Corresponding Author",
      featured: false,
      cover: false,
      topics: ["Bioprocessing", "Xylitol", "Fermentation"]
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
              Google Scholar, ORCID, or Scopus profiles.
            </p>
            <div className="flex justify-center space-x-4">
            <a
              href="https://scholar.google.com/citations?user=Dfx0TaQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">Google Scholar</Button>
            </a>
            <a
              href="https://orcid.org/0000-0001-8753-7326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">ORCID</Button>
            </a>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=58462578300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">Scopus</Button>
            </a>
          </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
