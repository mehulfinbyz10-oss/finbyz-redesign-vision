import { HeroButton } from "@/components/ui/button-variants";
import heroImage from "@/assets/web-dev-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Web Application
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent block">
                  Development
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 max-w-2xl">
                Transform your business with cutting-edge web applications. 
                We build scalable, responsive, and powerful solutions tailored to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton variant="primary">
                Get Free Demo
              </HeroButton>
              <HeroButton variant="secondary">
                View Our Work
              </HeroButton>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-white/70">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-xl" />
            <img 
              src={heroImage} 
              alt="Web Application Development" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};