import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Education
          </h2>
          
          <Card className="p-8 shadow-elegant">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Bachelor's Degree
                    </h3>
                    <p className="text-accent font-medium text-lg">Waseda University, Tokyo</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>April 2012 - May 2015</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>2-3-1 Kanda Awajicho, Chiyoda City, Tokyo 101-0063, Japan</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Developed a robust foundation in software engineering and computer science with focus on 
                  core technologies and principles essential to software development. Gained hands-on experience 
                  in both frontend and backend development through multiple academic and personal projects.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Focus Areas</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Web Development (JavaScript, Python)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">System Design & Architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Database Management (MySQL, SQLite)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Object-Oriented Programming</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Frameworks: React, Django, jQuery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Version Control: Git</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Data Structures & Algorithms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">Collaborative Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;