import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Led development of enterprise web applications serving 100k+ users. Architected scalable microservices and implemented modern React frontends.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      achievements: [
        "Reduced app load times by 40% through optimization",
        "Led team of 5 developers on major product launch",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects from concept to deployment. Collaborated closely with design team to create pixel-perfect implementations.",
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Docker"],
      achievements: [
        "Delivered 12+ projects on time and under budget",
        "Improved client satisfaction scores by 25%",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      description: "Specialized in creating responsive, accessible web applications for diverse clientele including e-commerce, healthcare, and finance sectors.",
      technologies: ["React", "JavaScript", "SCSS", "Webpack", "Jest"],
      achievements: [
        "Achieved 98% accessibility compliance across all projects",
        "Reduced client revision requests by 30%",
        "Implemented reusable component library"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-accent hidden md:block"></div>
                  
                  <Card className="ml-0 md:ml-20 p-8 shadow-elegant hover:shadow-accent transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium text-lg">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;