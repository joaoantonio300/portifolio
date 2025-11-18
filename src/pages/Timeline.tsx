import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const timelineEvents = [
  {
    company: "Maratá",
    role: "QA Engineer & Full-Stack Developer",
    duration: "2 years",
    description: "The beginning of my career in QA and Full-Stack development. Gained invaluable experience in quality assurance processes, automated testing, and building reliable web applications. Contributed to improving software quality standards and development workflows.",
    year: "Present",
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            My <span className="gradient-primary bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and career milestones
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                      <Briefcase className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>

                  <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-display">{event.company}</CardTitle>
                        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {event.role}
                      </CardDescription>
                      <div className="text-sm text-muted-foreground">
                        Duration: {event.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {/* Future Events Placeholder */}
              <div className="relative pl-20 opacity-50">
                <div className="absolute left-0 top-0">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                <Card className="border-dashed border-muted">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-muted-foreground">
                      More to come...
                    </CardTitle>
                    <CardDescription>
                      The journey continues
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
