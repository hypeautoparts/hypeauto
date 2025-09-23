import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-auto-parts.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Garage Setting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        }}
      >
      </div>

      {/* Floating Auto Parts Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-24 left-8 animate-float opacity-30">
        <div className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/50 rounded-full animate-glow"></div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-32 right-12 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-16 h-16 border border-accent rounded-lg rotate-45 opacity-20"></div>
      </div>
      <div className="hidden lg:block absolute top-1/3 right-1/5 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-10 h-10 bg-primary/30 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
        <div className="max-w-5xl mx-auto">
          {/* Service Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card border border-primary/40 mb-8 bg-background/10">
            <span className="text-primary font-bold text-sm tracking-wider">ADVANCED AUTO PARTS SERVICES</span>
          </div>

          {/* Main Headline - Clean Modern Style */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight px-4 sm:px-0">
            <span className="text-foreground block mb-2">Excellence in Every</span>
            <span className="text-primary block">Part, Every Ride</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Professional auto parts supply with premium quality assurance. Interior, exterior, 
            and body components for all major vehicle brands with expert technical support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-16 px-4 sm:px-0">
            <Link to="/shop" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold hover-glow hover-scale group rounded-lg"
              >
                Explore Catalog
                <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/about" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all group rounded-lg"
              >
                <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-card border border-primary/20 rounded-xl p-4 animate-fade-in hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl md:text-3xl font-black text-primary mb-2">10K+</div>
              <div className="text-muted-foreground text-sm font-semibold">Premium Parts</div>
            </div>
            <div className="glass-card border border-primary/20 rounded-xl p-4 animate-fade-in hover-lift" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl md:text-3xl font-black text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm font-semibold">Vehicle Brands</div>
            </div>
            <div className="glass-card border border-primary/20 rounded-xl p-4 animate-fade-in hover-lift" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl md:text-3xl font-black text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm font-semibold">Expert Support</div>
            </div>
            <div className="glass-card border border-primary/20 rounded-xl p-4 animate-fade-in hover-lift" style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl md:text-3xl font-black text-primary mb-2">100%</div>
              <div className="text-muted-foreground text-sm font-semibold">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center bg-background/20">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;