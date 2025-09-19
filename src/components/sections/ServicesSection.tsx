import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Custom Web Applications",
    description: "Tailored solutions built with modern frameworks and best practices to meet your unique business requirements.",
    features: ["React & Vue.js", "Node.js Backend", "Cloud Integration", "API Development"]
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable web applications designed to handle complex business workflows and large-scale operations.",
    features: ["Microservices", "High Availability", "Security First", "Performance Optimization"]
  },
  {
    title: "E-commerce Platforms",
    description: "Powerful online stores with seamless user experience, payment integration, and inventory management.",
    features: ["Payment Gateway", "Inventory System", "Mobile Responsive", "SEO Optimized"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Looking for a Web Application 
            <span className="text-primary"> Development Partner?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FinByz is a leading provider of advanced web application development services customized for your specific needs. 
            Our team of knowledgeable developers is committed to making your ideas a reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-gradient-to-br from-card to-card/50">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 text-white/90">
            We use best programming practices and structured frameworks to deliver efficient solutions.
          </p>
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};