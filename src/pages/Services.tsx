import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TestTube2, 
  Cog, 
  Code2, 
  Layout, 
  Plug, 
  MessageSquare, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: TestTube2,
    title: "Manual and Automated Testing",
    description: "Comprehensive testing strategies covering both manual and automated approaches to ensure software quality and reliability.",
  },
  {
    icon: Cog,
    title: "Test Strategy & Quality Processes",
    description: "Design and implement robust testing strategies and quality assurance processes tailored to your development workflow.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "Build modern, scalable web applications using React, Node.js, PHP, Laravel, and other cutting-edge technologies.",
  },
  {
    icon: Layout,
    title: "Landing Page Creation",
    description: "Create stunning, conversion-optimized landing pages that capture attention and drive results.",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description: "Develop and integrate RESTful APIs to connect your systems and enable seamless data exchange.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description: "Provide expert guidance on software quality, architecture decisions, and best development practices.",
  },
  {
    icon: Zap,
    title: "Productivity, Automation & Tooling",
    description: "Streamline workflows and boost productivity through custom automation solutions and development tooling.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            My <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for quality assurance, testing, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 animate-scale-in border-border/50 hover:border-accent/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4 shadow-glow">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
