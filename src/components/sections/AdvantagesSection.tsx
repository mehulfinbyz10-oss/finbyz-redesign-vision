import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const advantages = [
  {
    title: "Highly Talented & Experienced Team",
    description: "Our in-house team consists of seasoned developers with extensive experience across various technologies and industries.",
    icon: "👥"
  },
  {
    title: "Business-Focused Approach",
    description: "Deep insight into vital business requirements, ensuring solutions that drive real business value and growth.",
    icon: "🎯"
  },
  {
    title: "Structured Development Process",
    description: "Disciplined and structured software development methodology ensuring optimized and efficient web applications.",
    icon: "⚙️"
  },
  {
    title: "Intuitive User Experience",
    description: "Eye-catching designs with exceptional user interfaces that ensure maximum user satisfaction and engagement.",
    icon: "🎨"
  }
];

const partnershipValues = [
  "Respect & Professionalism",
  "Business Understanding", 
  "Shared Success Goals",
  "Agile Framework",
  "Positive ROI Focus",
  "Long-term Partnership"
];

export const AdvantagesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnership Philosophy */}
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Approach
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Treat Our Clients Like
            <span className="text-primary"> Our Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            We focus on successfully achieving the same targets as our clients through a strong foundation 
            based on respect, professionalism, and deep understanding of your business needs.
          </p>
          
          {/* Partnership Values */}
          <div className="flex flex-wrap justify-center gap-3">
            {partnershipValues.map((value, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 bg-white/50 border-primary/20 text-primary">
                {value}
              </Badge>
            ))}
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Advantages of Working With Us
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-card to-card/70">
                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-secondary rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with powerful web applications 
            built using modern technologies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Request Free Demo
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};