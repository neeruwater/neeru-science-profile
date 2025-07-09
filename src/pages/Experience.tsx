import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap, Building, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Experience = () => {
  const experiences = [
    {
      title: "Postdoctoral Researcher",
      organization: "Nanyang Technological University (NTU)",
      location: "Singapore",
      period: "2023 - Present",
      type: "Research",
      description: "Leading research in computational catalysis and machine learning applications for sustainable energy systems. Collaborating with ExxonMobil on polymer informatics projects.",
      highlights: [
        "Developed ML frameworks for catalyst discovery",
        "Published 3 first-author papers in top-tier journals",
        "Established industry collaboration with ExxonMobil"
      ]
    },
    {
      title: "Ph.D. in Chemical Engineering",
      organization: "Washington State University",
      location: "Pullman, WA, USA",
      period: "2018 - 2023",
      type: "Education",
      description: "Dissertation: 'Computational Investigation of Oxygenate Reduction Mechanisms using DFT and AIMD Simulations'",
      highlights: [
        "GPA: 3.9/4.0",
        "Graduate Student Director, AIChE (2020-2022)",
        "NSF Graduate Research Fellowship (Finalist)",
        "Teaching Excellence Award (2021)"
      ]
    },
    {
      title: "Faculty Member",
      organization: "National Institute of Technology (NIT) Srinagar",
      location: "Srinagar, India",
      period: "2016 - 2018",
      type: "Teaching",
      description: "Assistant Professor in Chemical Engineering Department. Taught undergraduate courses and supervised student research projects.",
      highlights: [
        "Courses: Thermodynamics, Instrumentation & Process Control",
        "Supervised 8 undergraduate thesis projects",
        "Established computational chemistry lab",
        "Published 2 research papers"
      ]
    },
    {
      title: "Data Scientist",
      organization: "IBM India",
      location: "Bangalore, India",
      period: "2015 - 2016",
      type: "Industry",
      description: "Developed machine learning models for business intelligence and process optimization in chemical manufacturing.",
      highlights: [
        "Led ML projects for process optimization",
        "Reduced manufacturing costs by 15%",
        "Mentored junior data scientists",
        "IBM Watson AI Certification"
      ]
    },
    {
      title: "Process Engineer",
      organization: "NALCO Water (Ecolab)",
      location: "Pune, India",
      period: "2014 - 2015",
      type: "Industry",
      description: "Water treatment process optimization and chemical analysis for industrial clients in automotive and pharmaceutical sectors.",
      highlights: [
        "Optimized water treatment processes",
        "Client satisfaction rating: 98%",
        "Cost savings: $2M annually for key clients",
        "Six Sigma Green Belt Certification"
      ]
    },
    {
      title: "M.Tech. in Chemical Engineering",
      organization: "Indian Institute of Technology (IIT) Delhi",
      location: "New Delhi, India",
      period: "2012 - 2014",
      type: "Education",
      description: "Specialization in Biochemical Engineering. Thesis on phenol adsorption and xylitol bioproduction optimization.",
      highlights: [
        "CGPA: 8.7/10.0",
        "Teaching Assistantship for 2 years",
        "Best Thesis Award in Biochemical Engineering",
        "Published 1 research paper"
      ]
    }
  ];

  const certifications = [
    "Google AI & Machine Learning Certification",
    "Stanford Machine Learning Course (Coursera)",
    "IBM Data Science Professional Certificate",
    "AWS Certified Cloud Practitioner",
    "Six Sigma Green Belt",
    "ORCID Researcher ID"
  ];

  const teachingSubjects = [
    "Chemical Engineering Thermodynamics",
    "Instrumentation & Process Control",
    "Machine Learning for Materials Science",
    "Computational Chemistry Methods",
    "Data Science for Engineers",
    "Sustainable Process Design"
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research": return "bg-blue-100 text-blue-800";
      case "Education": return "bg-green-100 text-green-800";
      case "Teaching": return "bg-purple-100 text-purple-800";
      case "Industry": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Research": return Building;
      case "Education": return GraduationCap;
      case "Teaching": return GraduationCap;
      case "Industry": return Building;
      default: return Building;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl academic-heading fade-in-up">
            Experience & Teaching
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto academic-body">
            A diverse background spanning research, academia, and industry, 
            with expertise in computational science and engineering education.
          </p>
        </div>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl academic-heading mb-8">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = getTypeIcon(exp.type);
              return (
                <Card key={index} className="academic-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${getTypeColor(exp.type).replace('text-', 'bg-').replace('800', '100')}`}>
                          <IconComponent className={`h-6 w-6 ${getTypeColor(exp.type).replace('bg-', 'text-').replace('100', '800')}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-sans font-semibold text-primary">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground">
                            {exp.organization}
                          </CardDescription>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="academic-body">{exp.description}</p>
                    <div>
                      <h4 className="font-sans font-medium text-sm text-primary mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="academic-body text-sm flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Teaching & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Teaching */}
          <section>
            <h2 className="text-3xl academic-heading mb-6">Teaching Expertise</h2>
            <Card className="academic-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Courses Taught</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {teachingSubjects.map((subject, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="academic-body font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-3xl academic-heading mb-6">Certifications</h2>
            <Card className="academic-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Professional Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                      <div className="w-2 h-2 bg-academic-gold rounded-full"></div>
                      <span className="academic-body font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Personal Interests */}
        <section className="mt-16 bg-academic-warm rounded-xl p-8">
          <h3 className="text-2xl academic-heading mb-6 text-center">Beyond Academics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-lg text-primary mb-3">Personal Interests</h4>
              <ul className="space-y-2 academic-body">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Classical Indian Dance (Bharatanatyam)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Yoga & Mindfulness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Sketching & Digital Art</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Mental Wellness Advocacy</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-lg text-primary mb-3">Volunteer Work</h4>
              <ul className="space-y-2 academic-body">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>AIChE Student Chapter Mentor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Organ Donation Awareness Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>Math & Science Olympiad Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>STEM Education for Underprivileged</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;