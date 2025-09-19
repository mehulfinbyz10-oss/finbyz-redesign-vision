import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    category: "Frontend",
    icon: "🎨",
    techs: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: "⚡",
    techs: ["Node.js", "Python", "PHP", "Java", "Express.js", "Django"]
  },
  {
    category: "Database",
    icon: "🗄️",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Firebase"]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    category: "Mobile",
    icon: "📱",
    techs: ["React Native", "Flutter", "Ionic", "PWA", "Hybrid Apps", "Native iOS/Android"]
  },
  {
    category: "Integration",
    icon: "🔗",
    techs: ["REST APIs", "GraphQL", "Webhooks", "Third-party APIs", "Payment Gateways", "CRM Integration"]
  }
];

export const TechnologySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Technology Stack
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technology <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our adaptive web applications are built using the latest array of technologies and practices 
            to simplify complex business workflows and deliver powerful, interactive, and robust solutions.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-card to-card/80">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tech.icon}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {tech.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((technology, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-sm bg-background/50 border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-colors"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Scalable & Responsive Development</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Scalable Business Software</h4>
                  <p className="text-muted-foreground">Highly scalable applications that handle increasing business data without downtime.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Responsive Web Applications</h4>
                  <p className="text-muted-foreground">Optimized solutions offering excellent user experience across all devices and screen sizes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8">
            <h4 className="text-2xl font-bold text-primary mb-6">Why Choose Our Technology Stack?</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Latest frameworks and best practices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">High performance and reliability</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Scalable architecture design</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Cross-platform compatibility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};