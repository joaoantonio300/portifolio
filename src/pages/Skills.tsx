import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Server, Database, TestTube2, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Database Design", level: 80 },
      { name: "Query Optimization", level: 75 },
    ],
  },
  {
    title: "QA & Testing",
    icon: TestTube2,
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Automated Testing", level: 85 },
      { name: "Test Planning", level: 90 },
      { name: "Bug Reporting", level: 95 },
      { name: "API Testing", level: 90 },
      { name: "CI/CD Awareness", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Browser DevTools", level: 90 },
      { name: "Linux/Unix", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Skills & <span className="gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shadow-glow">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-display">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
