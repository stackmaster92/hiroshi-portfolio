import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-name-highlight bg-clip-text text-transparent drop-shadow-lg filter">
                  Takahiro Hiroshi
                </span>
                <span className="absolute inset-0 bg-name-highlight bg-clip-text text-transparent blur-sm opacity-30 -z-10"></span>
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Full-Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-accent border-4 border-accent/20">
                <img 
                  src={profilePhoto} 
                  alt="Takahiro Hiroshi - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-gradient rounded-full flex items-center justify-center shadow-accent">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;