import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2012', title: 'Company Founded', description: 'Started with a vision to revolutionize auto parts supply in India' },
    { year: '2015', title: 'First Expansion', description: 'Expanded operations to 5 major cities across India' },
    { year: '2018', title: '10,000+ Parts', description: 'Achieved milestone of 10,000+ parts in our inventory' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platform for seamless ordering experience' },
    { year: '2022', title: '50+ Brands', description: 'Partnership with 50+ automotive brands globally' },
    { year: '2024', title: 'Market Leader', description: 'Became the trusted choice for 5,000+ customers nationwide' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Every part meets or exceeds OEM standards through rigorous quality control processes.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Customer satisfaction drives every decision we make, from sourcing to delivery.',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously evolving our processes and technology to serve customers better.',
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Committed to sustainable growth while maintaining our core values and quality.',
      color: 'text-purple-400'
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-foreground">About</span>
                <span className="text-primary"> Hypeautoparts</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pioneering automotive excellence for over a decade. From humble beginnings to 
                becoming India's trusted auto parts specialist, our journey is built on quality, 
                innovation, and unwavering customer commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  <span className="text-foreground">Our</span>
                  <span className="text-primary"> Story</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Founded in 2012 with a simple yet powerful vision: to make high-quality 
                    automotive parts accessible to every vehicle owner in India. What started 
                    as a small operation has grown into one of the country's most trusted 
                    auto parts suppliers.
                  </p>
                  <p>
                    Our founder, recognizing the gap in the market for reliable, authentic 
                    auto parts, established Hypeautoparts with the commitment to source 
                    only the finest components from certified manufacturers worldwide.
                  </p>
                  <p>
                    Today, we serve over 5,000 satisfied customers, from individual car 
                    enthusiasts to large fleet operators, all unified by our shared passion 
                    for automotive excellence.
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card border border-primary/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-black mb-6 text-center text-foreground">
                    Our Impact Today
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">5,000+</div>
                      <div className="text-sm text-muted-foreground">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Partner Brands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Parts Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">12+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Mission &</span>
                <span className="text-primary"> Vision</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card border-border/50 hover-lift animate-slide-up">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide authentic, high-quality automotive parts at competitive prices, 
                    backed by exceptional customer service and technical expertise that empowers 
                    every vehicle owner to maintain and enhance their automotive experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50 hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading automotive parts marketplace in Asia, recognized for 
                    innovation, reliability, and customer-centric solutions that drive the 
                    future of automotive maintenance and customization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Our</span>
                <span className="text-primary"> Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key milestones that shaped our growth and commitment to automotive excellence.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`flex items-center gap-8 animate-slide-up ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card className="glass-card border-border/50 hover-lift">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-black mb-2 text-foreground">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center border-4 border-background">
                        <span className="text-primary-foreground font-black">{milestone.year}</span>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-1 h-16 bg-primary/30 mt-4"></div>
                      )}
                    </div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Our</span>
                <span className="text-primary"> Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and define who we are as a company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="glass-card border-border/50 hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-card/80 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-border/50">
                        <Icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <h3 className="text-lg font-black mb-3 text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center animate-slide-up">
              <div className="max-w-4xl mx-auto glass-card border border-primary/30 rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  <span className="text-foreground">Our Quality</span>
                  <span className="text-primary"> Promise</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every part we supply undergoes rigorous quality testing and verification. 
                  We partner only with certified manufacturers and authorized distributors 
                  to ensure you receive genuine, reliable components that meet or exceed 
                  original equipment standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all">
                    Learn About Our Process
                  </button>
                  <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                    View Certifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;