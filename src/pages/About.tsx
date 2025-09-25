import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, Target, Award, TrendingUp, Shield, Clock, Globe, 
  Leaf, Truck, HeadphonesIcon, Wrench, CheckCircle, 
  Building, MapPin, Phone, Mail, Star, Zap
} from 'lucide-react';

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

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Why Choose</span>
                <span className="text-primary"> Hypeautoparts?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover what sets us apart in the competitive automotive parts industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Authentic Parts Guarantee',
                  description: '100% genuine OEM and aftermarket parts sourced directly from certified manufacturers.',
                  color: 'text-blue-500'
                },
                {
                  icon: Clock,
                  title: '24-Hour Delivery',
                  description: 'Lightning-fast delivery across India with same-day dispatch for urgent orders.',
                  color: 'text-green-500'
                },
                {
                  icon: Award,
                  title: 'Quality Assurance',
                  description: 'Rigorous quality control processes ensure every part meets international standards.',
                  color: 'text-purple-500'
                },
                {
                  icon: HeadphonesIcon,
                  title: 'Expert Support',
                  description: 'Technical guidance from automotive specialists for perfect part selection.',
                  color: 'text-orange-500'
                },
                {
                  icon: Truck,
                  title: 'Nationwide Coverage',
                  description: 'Extensive distribution network covering all major cities and remote locations.',
                  color: 'text-red-500'
                },
                {
                  icon: Star,
                  title: '99% Satisfaction Rate',
                  description: 'Proven track record with thousands of satisfied customers nationwide.',
                  color: 'text-yellow-500'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title}
                    className="glass-card border-border/50 hover-lift animate-slide-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-card/80 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-border/50 group-hover:scale-110 transition-transform">
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <h3 className="text-lg font-black mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Certifications */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Industry</span>
                <span className="text-primary"> Certifications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence is validated by industry-leading certifications and partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'ISO 9001:2015', description: 'Quality Management System', icon: CheckCircle },
                { name: 'OEM Certified', description: 'Original Equipment Manufacturer Authorization', icon: Award },
                { name: 'IATF 16949', description: 'Automotive Quality Management Standard', icon: Shield },
                { name: 'Green Certified', description: 'Environmental Sustainability Standards', icon: Leaf }
              ].map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card 
                    key={cert.name}
                    className="glass-card border-border/50 hover-lift animate-slide-up text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-black mb-2 text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  <span className="text-foreground">Global Reach,</span>
                  <span className="text-primary"> Local Service</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With strategic partnerships across continents and a robust supply chain network, 
                  we bring you authentic parts from leading manufacturers worldwide while maintaining 
                  personalized, local customer service standards.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 glass-card rounded-lg">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-black text-foreground">25+</div>
                    <div className="text-sm text-muted-foreground">Countries Sourced</div>
                  </div>
                  <div className="text-center p-4 glass-card rounded-lg">
                    <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-black text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground">Manufacturer Partners</div>
                  </div>
                  <div className="text-center p-4 glass-card rounded-lg">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-black text-foreground">200+</div>
                    <div className="text-sm text-muted-foreground">Cities Covered</div>
                  </div>
                  <div className="text-center p-4 glass-card rounded-lg">
                    <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-black text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Daily Deliveries</div>
                  </div>
                </div>

                <Button className="hover-glow hover-scale">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Service Center Near You
                </Button>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card border border-primary/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-black mb-6 text-center text-foreground">
                    Service Locations
                  </h3>
                  <div className="space-y-4">
                    {[
                      { city: 'Mumbai', region: 'Western India', status: 'Main Hub' },
                      { city: 'Delhi', region: 'Northern India', status: 'Distribution Center' },
                      { city: 'Bangalore', region: 'Southern India', status: 'Tech Center' },
                      { city: 'Kolkata', region: 'Eastern India', status: 'Regional Office' },
                      { city: 'Chennai', region: 'Southern India', status: 'Port Operations' },
                      { city: 'Pune', region: 'Western India', status: 'Manufacturing Hub' }
                    ].map((location, index) => (
                      <div key={location.city} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                        <div>
                          <div className="font-semibold text-foreground">{location.city}</div>
                          <div className="text-sm text-muted-foreground">{location.region}</div>
                        </div>
                        <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {location.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Initiative */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Sustainability</span>
                <span className="text-primary"> Initiative</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Committed to environmental responsibility and sustainable business practices in the automotive industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: 'Eco-Friendly Packaging',
                  description: 'Biodegradable and recyclable packaging materials for all shipments.',
                  stat: '80% Reduction',
                  statLabel: 'in Plastic Usage'
                },
                {
                  icon: Zap,
                  title: 'Carbon Neutral Delivery',
                  description: 'Offsetting delivery emissions through renewable energy partnerships.',
                  stat: '50% Offset',
                  statLabel: 'Carbon Footprint'
                },
                {
                  icon: CheckCircle,
                  title: 'Recycling Program',
                  description: 'Old parts exchange program promoting circular economy principles.',
                  stat: '10,000+',
                  statLabel: 'Parts Recycled'
                }
              ].map((initiative, index) => {
                const Icon = initiative.icon;
                return (
                  <Card 
                    key={initiative.title}
                    className="glass-card border-border/50 hover-lift animate-slide-up text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-black mb-4 text-foreground">{initiative.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{initiative.description}</p>
                      <div className="border-t border-border/50 pt-4">
                        <div className="text-2xl font-black text-primary mb-1">{initiative.stat}</div>
                        <div className="text-sm text-muted-foreground">{initiative.statLabel}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Get in</span>
                <span className="text-primary"> Touch</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to experience the Hypeautoparts difference? Contact our expert team today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card border-border/50 hover-lift animate-slide-up text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-foreground">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Speak with our parts specialists</p>
                  <a href="tel:+18555189685" className="text-primary font-semibold hover:underline text-lg">
                    +1 (855) 518-9685
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">24/7 Support Available</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50 hover-lift animate-slide-up text-center" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-foreground">Email Us</h3>
                  <p className="text-muted-foreground mb-4">Get detailed quotes and specifications</p>
                  <a href="mailto:info@hypeautoparts.com" className="text-primary font-semibold hover:underline text-lg">
                    info@hypeautoparts.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Response within 2 hours</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50 hover-lift animate-slide-up text-center" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-foreground">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">Main headquarters and showroom</p>
                  <address className="text-primary font-semibold not-italic">
                    123 Auto Parts District<br />
                    Mumbai, Maharashtra 400001
                  </address>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Sat: 9AM-7PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center animate-slide-up">
              <div className="max-w-4xl mx-auto glass-card border border-primary/30 rounded-3xl p-12">
                <Award className="w-16 h-16 text-primary mx-auto mb-6" />
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
                  <Button className="px-8 py-4 hover-glow hover-scale">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Learn About Our Process
                  </Button>
                  <Button variant="outline" className="px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all">
                    <Award className="w-4 h-4 mr-2" />
                    View Certifications
                  </Button>
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