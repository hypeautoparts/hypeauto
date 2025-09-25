import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PopularBrands from '@/components/PopularBrands';
import CoreStrengths, { CustomerSection } from '@/components/CoreStrengths';
import ExtendedInfo from '@/components/ExtendedInfo';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, Truck, HeadphonesIcon, Award, CheckCircle,
  ArrowRight, Star, Globe, Wrench, Zap, TrendingUp, Users,
  Car, Cog, Package, Phone, Mail, MapPin, Calculator
} from 'lucide-react';
import heroAutoParts from '@/assets/hero-auto-parts.jpg';
import carYellow from '@/assets/car-yellow.jpg';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        
        {/* About Hypeautoparts - Comprehensive Introduction */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 relative z-10">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/10 rounded-full blur-2xl"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text & Features */}
              <div className="animate-slide-up">
                <div className="mb-8">
                  <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                    About Us
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Trusted Automotive Partner</span>
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-6"></div>
                </div>
                <div className="glass-card p-8 rounded-2xl shadow-xl border border-border/30 backdrop-blur-md mb-8">
                  <p className="text-lg text-muted-foreground mb-4">
                    With over a decade of innovation, HypeAuto Parts is redefining automotive care in the US. Our mission: deliver seamless, high-tech, and personalized service for every vehicle owner.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    We offer advanced diagnostics, precision maintenance, custom upgrades, and expert advice for all major brands. Our certified technicians use the latest technology and undergo continuous training to stay ahead in the industry.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Every service is backed by our commitment to quality, reliability, and customer satisfaction. Your vehicle is more than transport—it's your productivity partner and deserves the best care.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  <div className="flex-1 glass-card p-6 rounded-xl flex items-center gap-4 shadow border border-border/20">
                    <Shield className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">Certified Excellence</h3>
                      <p className="text-muted-foreground text-sm">ASE-certified and manufacturer-trained technicians for expert care.</p>
                    </div>
                  </div>
                  <div className="flex-1 glass-card p-6 rounded-xl flex items-center gap-4 shadow border border-border/20">
                    <Zap className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">Advanced Technology</h3>
                      <p className="text-muted-foreground text-sm">State-of-the-art diagnostics and tools for fast, precise solutions.</p>
                    </div>
                  </div>
                  <div className="flex-1 glass-card p-6 rounded-xl flex items-center gap-4 shadow border border-border/20">
                    <Award className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">Quality Guarantee</h3>
                      <p className="text-muted-foreground text-sm">Comprehensive warranties and satisfaction guarantee for peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Automotive Image */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-card/80 to-card/40 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
                    <img 
                      src="https://as2.ftcdn.net/v2/jpg/08/87/32/83/1000_F_887328304_DRwRdPgqydudAYcQnUMOUCXC4MMymBtS.jpg" 
                      alt="Modern Sports Car - HypeAuto Service Center"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg border border-border/20"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Performance Statistics & Achievements */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Enhanced Background Animation Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-accent rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">Proven Track Record of</span>
                <span className="text-primary"> Automotive Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our commitment to exceptional service and customer satisfaction is reflected in the numbers that matter most. 
                These achievements represent years of dedication to automotive excellence and the trust our customers place in us 
                every day. Each statistic tells a story of quality workmanship, reliable service, and the lasting relationships 
                we've built within the automotive community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Users, 
                  number: '12,500+', 
                  label: 'Satisfied Customers',
                  description: 'Vehicle owners trust us',
                  color: 'text-blue-500', 
                  bgGlow: 'hover:shadow-blue-500/20' 
                },
                { 
                  icon: Wrench, 
                  number: '25,000+', 
                  label: 'Services Completed',
                  description: 'Successful repairs & maintenance',
                  color: 'text-green-500', 
                  bgGlow: 'hover:shadow-green-500/20' 
                },
                { 
                  icon: Clock, 
                  number: '10+', 
                  label: 'Years Experience',
                  description: 'Decades of automotive expertise',
                  color: 'text-orange-500', 
                  bgGlow: 'hover:shadow-orange-500/20' 
                },
                { 
                  icon: Star, 
                  number: '4.9/5', 
                  label: 'Customer Rating',
                  description: 'Average satisfaction score',
                  color: 'text-yellow-500', 
                  bgGlow: 'hover:shadow-yellow-500/20' 
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.label} 
                    className={`glass-card border-border/50 hover-lift animate-slide-up text-center group cursor-pointer transition-all duration-500 hover:shadow-2xl ${stat.bgGlow}`} 
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <Icon className={`w-10 h-10 ${stat.color} mx-auto group-hover:scale-125 transition-transform duration-300`} />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{stat.number}</div>
                      <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{stat.label}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.description}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          {/* Animated Background Pattern - Simplified */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-full"></div>
              <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary/30 rounded-full"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-block">
                <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                  Professional Service Excellence
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black mb-6 relative">
                  <span className="text-foreground">Why Industry Leaders</span>
                  <span className="text-primary"> Trust HypeAuto</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
                From fleet managers to independent mechanics, automotive professionals nationwide rely on our comprehensive service ecosystem. We deliver more than parts – we provide complete solutions that keep your operations running smoothly and your customers satisfied.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Industry-Leading Warranty</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Authenticity Guarantee',
                  subtitle: 'Quality You Can Trust',
                  description: '100% genuine OEM and aftermarket parts with authenticity certificates. Every component undergoes rigorous verification through our advanced authentication system, ensuring you receive only legitimate, high-performance parts that meet or exceed manufacturer specifications.',
                  bulletPoints: ['OEM certification process', 'Advanced authentication technology', 'Quality verification protocols'],
                  color: 'text-blue-500',
                  bgColor: 'bg-blue-500/10',
                  glowColor: 'hover:shadow-blue-500/25'
                },
                {
                  icon: Clock,
                  title: 'Lightning-Fast Fulfillment',
                  subtitle: 'Same-Day Processing',
                  description: 'Orders placed before 2 PM are processed and dispatched the same day across the United States. Our strategically located distribution centers and automated fulfillment systems ensure your critical automotive needs are met with unprecedented speed and precision.',
                  bulletPoints: ['2 PM cutoff for same-day dispatch', 'Multiple distribution centers', 'Automated processing systems'],
                  color: 'text-green-500',
                  bgColor: 'bg-green-500/10',
                  glowColor: 'hover:shadow-green-500/25'
                },
                {
                  icon: HeadphonesIcon,
                  title: 'Expert Technical Support',
                  subtitle: 'Professional Consultation',
                  description: 'Access free technical guidance from certified automotive specialists for optimal part selection. Our team of experienced technicians provides comprehensive support, helping you make informed decisions that maximize performance and minimize downtime.',
                  bulletPoints: ['Certified automotive specialists', 'Free technical consultation', 'Performance optimization advice'],
                  color: 'text-purple-500',
                  bgColor: 'bg-purple-500/10',
                  glowColor: 'hover:shadow-purple-500/25'
                },
                {
                  icon: Wrench,
                  title: 'Complete Installation Support',
                  subtitle: 'Professional Installation Network',
                  description: 'Comprehensive installation support including step-by-step guides, video tutorials, and access to our nationwide network of certified professional mechanics. We ensure your parts are installed correctly for optimal performance and longevity.',
                  bulletPoints: ['Detailed installation guides', 'Video tutorial library', 'Certified mechanic network'],
                  color: 'text-orange-500',
                  bgColor: 'bg-orange-500/10',
                  glowColor: 'hover:shadow-orange-500/25'
                },
                {
                  icon: Award,
                  title: 'Rigorous Quality Assurance',
                  subtitle: 'Multi-Point Inspection',
                  description: 'Every automotive part undergoes comprehensive quality testing before dispatch through our multi-stage verification process. Our quality assurance team employs advanced testing equipment and standardized protocols to guarantee exceptional reliability and performance.',
                  bulletPoints: ['Multi-stage verification process', 'Advanced testing equipment', 'Standardized quality protocols'],
                  color: 'text-red-500',
                  bgColor: 'bg-red-500/10',
                  glowColor: 'hover:shadow-red-500/25'
                },
                {
                  icon: Truck,
                  title: 'Nationwide Delivery Network',
                  subtitle: 'Coast-to-Coast Coverage',
                  description: 'Reliable delivery network covering all major cities and remote areas with real-time tracking and delivery confirmation. Our logistics partnerships ensure your automotive parts arrive safely and on schedule, regardless of your location.',
                  bulletPoints: ['National coverage network', 'Real-time tracking system', 'Remote area accessibility'],
                  color: 'text-indigo-500',
                  bgColor: 'bg-indigo-500/10',
                  glowColor: 'hover:shadow-indigo-500/25'
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.title}
                    className={`glass-card border-border/50 hover-lift animate-slide-up group cursor-pointer transition-all duration-500 hover:shadow-2xl ${service.glowColor} hover:border-primary/30`}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <Icon className={`w-8 h-8 ${service.color} group-hover:animate-pulse`} />
                      </div>
                      <div className="relative z-10">
                        <div className="mb-4">
                          <h3 className="text-xl font-black mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                          <p className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors duration-300">{service.subtitle}</p>
                        </div>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4 leading-relaxed">{service.description}</p>
                        <div className="space-y-2">
                          {service.bulletPoints.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <PopularBrands />

        {/* Why Choose HypeAuto */}
        <section className="py-24 bg-background relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-16 h-16 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-10 w-8 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="animate-slide-up">
                <div className="mb-8">
                  <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                    Why Choose Us
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                    HypeAuto Parts
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-6"></div>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-8">
                  <p className="mb-4">
                    HypeAuto Parts is a US-based comprehensive platform specializing in premium automotive services and genuine parts. 
                    We partner with certified suppliers and authorized dealers across the country to provide our customers with 
                    only the highest quality automotive solutions.
                  </p>
                  <p className="mb-6">
                    Through our advanced service network, you'll discover a streamlined approach to automotive care that connects you 
                    with expert technicians and authentic parts suppliers. We help you maintain your vehicle's peak performance 
                    without the hassle, acting as your trusted bridge to professional automotive excellence.
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Shield className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        Expert Certified Technicians
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Once you have selected the automotive services you need, you will receive expert assistance within hours. 
                        All you need is internet access - no need to visit multiple service centers. Maintaining your vehicle can 
                        sometimes be complex and expensive, but our certified experts make it affordable and reliable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        Premium Quality Guarantee
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        At HypeAuto Parts, we strive to source only the best components, guaranteeing that you receive 
                        the highest quality products at the most competitive prices. Every part comes with our comprehensive warranty 
                        and satisfaction guarantee.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-300">
                      <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        How does HypeAuto work?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Simple. Browsing through our services is just a breeze - within a few minutes you can find everything 
                        you've been looking for. Just fill the required fields, such as vehicle brand, model, year, etc., 
                        and find the most affordable and top-quality automotive solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-3xl"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative bg-gradient-to-br from-card/80 to-card/40 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
                    <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                      {/* Car Image */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img 
                          src="https://ebm-auto.com/assets/img/home1/car-red.png" 
                          alt="Premium Red Sports Car - HypeAuto Services"
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-6 right-6 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                        <Wrench className="w-6 h-6 text-primary" />
                      </div>
                      <div className="absolute bottom-6 left-6 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                        <Cog className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    
                    {/* Bottom Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-card/50 rounded-xl border border-border/30">
                        <div className="text-2xl font-black text-primary mb-1">10+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-card/50 rounded-xl border border-border/30">
                        <div className="text-2xl font-black text-accent mb-1">25K+</div>
                        <div className="text-sm text-muted-foreground">Services Complete</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CoreStrengths />

        <ExtendedInfo />
        <CustomerSection />
        <Testimonials />

        {/* Quick Contact Strip */}
        <section className="py-16 bg-primary relative overflow-hidden">
          {/* Animated Background Elements - Simplified */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute top-8 right-8 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute bottom-8 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-8 right-1/4 w-6 h-6 bg-white rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center">
              <div className="animate-slide-up group cursor-pointer">
                <div className="relative inline-block mb-4">
                  <Phone className="w-8 h-8 text-primary-foreground mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 w-8 h-8 mx-auto border-2 border-primary-foreground rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                </div>
                <h3 className="text-lg font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-200">Call Us Now</h3>
                <a href="tel:+18889290045" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg font-semibold group-hover:animate-pulse">
                  +1 (888) 929-0045
                </a>
              </div>
              <div className="animate-slide-up group cursor-pointer" style={{ animationDelay: '0.1s' }}>
                <div className="relative inline-block mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground mx-auto group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 w-8 h-8 mx-auto border-2 border-primary-foreground rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                </div>
                <h3 className="text-lg font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-200">Email Support</h3>
                <a href="mailto:info@hypeautoparts.com" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-semibold group-hover:animate-pulse">
                  info@hypeautoparts.com
                </a>
              </div>
              <div className="animate-slide-up group cursor-pointer" style={{ animationDelay: '0.2s' }}>
                <div className="relative inline-block mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground mx-auto group-hover:scale-125 group-hover:bounce transition-all duration-300" />
                  <div className="absolute inset-0 w-8 h-8 mx-auto border-2 border-primary-foreground rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                </div>
                <h3 className="text-lg font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-200">Visit Showroom</h3>
                <p className="text-primary-foreground/90 font-semibold group-hover:text-primary-foreground group-hover:animate-pulse transition-colors">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;