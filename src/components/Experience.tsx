import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Gravitate (Contract)",
      period: "August 2024 – June 2025",
      description: "Designed and maintained ETL pipelines for aggregating and analyzing off-market real estate data, integrating data scraping, APIs, and cloud storage for real-time listing updates.",
      technologies: ["Python", "SQL", "GPT-3", "React.js", "ETL Pipelines"],
      achievements: [
        "Built scalable data pipelines supporting AI-driven real estate assistants",
        "Developed data models improving deal discovery accuracy and reporting speed",
        "Engineered data-driven deal calculators with real-time ROI insights",
        "Created analytics dashboards for real estate agent performance scoring"
      ]
    },
    {
      title: "Senior Backend Engineer & AI Developer",
      company: "Prosa.ai (Part-time)",
      period: "September 2023 – December 2024",
      description: "Developed and deployed AI-powered systems, including NLP pipelines, conversational chatbots, and text recognition models, enhancing automation and user engagement.",
      technologies: ["Python", "Node.js", "Docker", "Kubernetes", "NLP", "ML Models"],
      achievements: [
        "Built microservices migrating legacy systems to scalable containerized architecture",
        "Designed APIs supporting real-time dashboards with high availability",
        "Collaborated with product teams aligning AI features with business requirements",
        "Conducted ML experiments and fine-tuned LLMs for automation"
      ]
    },
    {
      title: "Senior Backend Developer",
      company: "TechSolutions Inc.",
      period: "October 2022 – August 2023",
      description: "Led the migration of internal service applications to a custom, in-house backend stack built primarily with Python (FastAPI), enhancing system performance and scalability.",
      technologies: ["Python", "FastAPI", "OAuth2/JWT", "AWS", "PostgreSQL", "Jenkins"],
      achievements: [
        "Developed reusable Python service template adopted company-wide",
        "Architected CI/CD pipelines with automated testing and AWS deployment",
        "Designed optimized RESTful APIs integrating with managed databases",
        "Introduced TDD practices achieving higher code coverage"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "DevX Innovations",
      period: "April 2020 – August 2022",
      description: "Led the development and optimization of full-stack applications with a focus on scalability and performance, leveraging Python, Django, Flask, and React.",
      technologies: ["Python", "Django", "Flask", "React", "Vue.js", "NoSQL", "TDD"],
      achievements: [
        "Streamlined complex data management workflows improving operational efficiency",
        "Enhanced front-end applications reducing load time and improving UX",
        "Resolved critical data synchronization issues between NoSQL databases and APIs",
        "Drove full-stack project development with robust TDD practices"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "FinTech Solutions Ltd.",
      period: "April 2019 – January 2020",
      description: "Engineered dynamic, real-time dashboards for performance metrics and sentiment analysis, utilizing data scraping, NLP, and advanced data visualization techniques.",
      technologies: ["WebSocket", "NLP", "Data Visualization", "Real-time Processing"],
      achievements: [
        "Developed WebSocket-based real-time communication features",
        "Built real-time chat application enhancing team collaboration",
        "Streamlined data pipelines for real-time processing improving system efficiency",
        "Delivered scalable full-stack solutions with focus on long-term maintainability"
      ]
    },
    {
      title: "Backend Developer",
      company: "CloudTech Systems",
      period: "March 2017 – January 2019",
      description: "Designed and developed scalable backend systems using PHP, Laravel, and CodeIgniter, ensuring high performance and maintainability.",
      technologies: ["PHP", "Laravel", "CodeIgniter", "WebSocket", "NoSQL", "MySQL"],
      achievements: [
        "Architected real-time communication features using WebSocket",
        "Optimized databases supporting high-volume transactions",
        "Collaborated with front-end teams designing and integrating APIs",
        "Improved application performance by resolving bottlenecks"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "August 2015 – January 2017",
      description: "Developed responsive and interactive web pages using HTML5, CSS3, JavaScript, and Bootstrap, ensuring seamless cross-device and cross-browser compatibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "API Integration"],
      achievements: [
        "Transformed design prototypes into pixel-perfect functional components",
        "Integrated APIs ensuring efficient frontend-backend communication",
        "Optimized performance through lazy loading and code minification",
        "Maintained existing projects resolving bugs and implementing new features"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
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