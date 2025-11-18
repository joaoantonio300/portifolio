import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Photo */}
          <div className="flex justify-center md:justify-start animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-background"
              />
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                QA Engineer &{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm passionate about improving processes, building reliable
                software, and delivering high-quality solutions. With expertise
                in both quality assurance and full-stack development, I ensure
                every project meets the highest standards.
              </p>
              <p className="text-2xl font-display font-semibold text-accent">
                Quality-driven. Detail-oriented. Results-focused.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-base shadow-lg"
                onClick={() => navigate("/services")}
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-base"
                onClick={() => navigate("/projects")}
              >
                See My Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
