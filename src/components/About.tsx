import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React & Next.js", "Vue.js & Angular", "Node.js & Express", "Python & Django",
    "FastAPI & Flask", "Laravel & Rails", "MongoDB & PostgreSQL", "AWS & Docker",
    "Kubernetes & Terraform", "AI/ML & NLP", "ETL Pipelines", "DevOps & CI/CD"
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a seasoned FullStack & AI Developer with over 8 years of experience building 
                scalable systems, AI-powered applications, and robust backend architectures. 
                From ETL pipelines processing real estate data to AI chatbots powered by GPT models, 
                I specialize in transforming complex business requirements into efficient, maintainable solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans the entire technology stack—from React frontends to Python/Node.js 
                backends, DevOps automation, and machine learning integration. I'm passionate about 
                leveraging cutting-edge AI technologies and cloud infrastructure to deliver systems 
                that scale and perform under pressure.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">8+ Years</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">AI & Backend Systems</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-medium text-accent">Open to Opportunities</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;