import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Settings, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "React Router", "React Native", "Vue.js", "Angular", "Next.js", "Webpack", "Babel", "UI/UX Design", "Flutter"]
    },
    {
      title: "Backend Technologies", 
      icon: <Code className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "Rails", "Laravel", "CodeIgniter", "Symfony", "Django", "Flask", "FastAPI", "TypeORM", "API Design", "WordPress", "Shopify"]
    },
    {
      title: "Database Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "NoSQL", "MySQL", "SQLite", "PostgreSQL", "Redis"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["EC2", "Jenkins", "RDS", "Nginx", "Kubernetes", "Docker", "Terraform", "Ansible", "Prometheus"]
    },
    {
      title: "AI & Data Engineering",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Python", "spaCy", "NLTK", "transformers", "TensorFlow", "PyTorch", "OpenAI GPT", "Dialogflow", "Rasa", "Wit.ai", "ETL Pipelines", "Airflow", "Apache Spark", "Pandas", "NumPy", "Data Warehousing", "Redshift", "BigQuery", "Snowflake"]
    },
    {
      title: "Development Practices",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Test-Driven Development (TDD)", "Algorithms", "Data Structures", "CI/CD", "Pair Programming", "Git", "Jira", "ESLint", "Solidity", "web3.js"]
    }
  ];

  const languages = ["Japanese", "English"];
  const programmingLanguages = ["JavaScript", "TypeScript", "Python", "PHP", "Ruby"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Skills & Technologies
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-elegant hover:shadow-accent transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-elegant">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Code className="w-5 h-5" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-elegant">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Globe className="w-5 h-5" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;