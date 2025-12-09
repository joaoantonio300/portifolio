import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/ReactGram.png";
import project2 from "@/assets/ERP.png";
import project3 from "@/assets/MenuSales.png";

const projects = [
  {
    title: "ReactGram Mobile",
    description: "A mobile project for a course to demonstrate an affinity for mobile projects. In this case, a social network was built.",
    image: project1,
    github: "https://github.com/joaoantonio300/NativeGramFront.git",
    demo: "https://example.com",
  },
  {
    title: "ERP Project",
    description: "A complete analytical platform with real-time data visualization, focused on warehouse and inventory movement analysis.",
    image: project2,
    github: "https://github.com/joaoantonio300/LaravelErp",
    demo: "https://example.com",
  },
  {
    title: "MenuSales Project",
    description: "Product menu design for restaurants, already finalized for mobile devices in website format, with location tracking, admin/client interfaces all in one project, and user-friendliness.",
    image: project3,
    github: "https://github.com/joaoantonio300/CardapioVite",
    demo: " https://cardapio-swart.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            My <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work in web development and quality assurance
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-display font-bold text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex gap-3">
                            <Button
                              variant="default"
                              className="gradient-primary text-white hover:opacity-90"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
