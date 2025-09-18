import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations. Whether you need AI-powered solutions, scalable backend 
                  systems, or full-stack development expertise, let's connect!
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 hover:shadow-accent transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">takahiro.hiroshi.swe92@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-accent transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">+1 (229) 588-6699</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-accent transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Send className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telegram</p>
                      <p className="text-muted-foreground">@smartdev1227</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Areas of Expertise</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">AI & Machine Learning Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">Scalable Backend Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">DevOps & Cloud Infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">Full-Stack Web Applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">Data Engineering & ETL Pipelines</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Ready to Connect?</h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently available for new projects and collaborations. 
                  Whether you're looking for technical consultation, system architecture, 
                  or full project development, I'd love to hear about your ideas.
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Current Status</h4>
                  <p className="text-accent font-medium">Open to Opportunities</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available for contract work, consulting, and full-time positions
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-accent-gradient hover:opacity-90 transition-opacity"
                    onClick={() => window.location.href = 'mailto:takahiro.hiroshi.swe92@gmail.com'}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send me an email
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;