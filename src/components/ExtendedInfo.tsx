import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Shield, Target, AlertCircle, Users } from 'lucide-react';

const ExtendedInfo = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and processes where applicable for environmental responsibility',
      color: 'text-green-400',
      position: 'top-left'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted supplier of global and local parts with proven track record',
      color: 'text-blue-400',
      position: 'top-right'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Exact-fit engineered auto parts manufactured to OEM specifications',
      color: 'text-primary',
      position: 'middle-left'
    },
    {
      icon: AlertCircle,
      title: 'Safety',
      description: 'Tested to meet safety standards with comprehensive quality assurance',
      color: 'text-red-400',
      position: 'middle-right'
    },
   
  ];

  const getFloatingPosition = (position: string) => {
    switch (position) {
      case 'top-left': return 'lg:absolute lg:top-4 lg:left-4';
      case 'top-right': return 'lg:absolute lg:top-4 lg:right-4';
      case 'middle-left': return 'lg:absolute lg:top-1/2 lg:left-4 lg:-translate-y-1/2';
      case 'middle-right': return 'lg:absolute lg:top-1/2 lg:right-4 lg:-translate-y-1/2';
      case 'bottom-center': return 'lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2';
      default: return '';
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>
            <span className="text-primary"> Commitment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond just selling parts, we're committed to automotive excellence, 
            environmental responsibility, and customer success at every level.
          </p>
        </div>

        {/* Central Hero Content */}
        <div className="relative lg:h-[600px] mb-12 lg:mb-0">
          {/* Central Content */}
          <div className="lg:absolute lg:inset-0 flex items-center justify-center z-10">
            <div className="text-center max-w-2xl animate-slide-up bg-background/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary/20">
              <div className="w-24 h-24 gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-6 animate-glow">
                <span className="text-3xl font-black text-primary-foreground">H</span>
              </div>
              
              <h3 className="text-3xl font-black mb-4 text-foreground">
                Powering Every Journey
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                From precision engineering to environmental stewardship, 
                every aspect of our business reflects our commitment to excellence.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 glass-card border border-primary/30 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">99.8%</div>
                  <div className="text-xs text-muted-foreground">Quality Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">24h</div>
                  <div className="text-xs text-muted-foreground">Fast Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">5★</div>
                  <div className="text-xs text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:hidden mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="hover-lift glass-card border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-card/80 rounded-xl flex items-center justify-center border border-border/50">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Desktop Floating Cards */}
          <div className="hidden lg:block">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className={`w-64 hover-lift glass-card border-border/50 animate-slide-up shadow-lg ${getFloatingPosition(feature.position)}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-5">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-card/80 rounded-xl flex items-center justify-center mx-auto mb-3 border border-border/50 hover-glow">
                        <Icon className={`w-7 h-7 ${feature.color}`} />
                      </div>
                      <h4 className="font-black text-base mb-2 text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-black text-foreground mb-4 max-w-4xl mx-auto">
            "Excellence isn't just our goal - it's our standard. Every part, every service, every interaction."
          </blockquote>
          <cite className="text-lg text-primary font-semibold">
            — Hypeautoparts Team
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ExtendedInfo;