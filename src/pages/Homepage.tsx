import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import PopularBrands from '@/components/PopularBrands';
import CoreStrengths, { CustomerSection } from '@/components/CoreStrengths';
import ExtendedInfo from '@/components/ExtendedInfo';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, Truck, HeadphonesIcon, Award, CheckCircle,
  ArrowRight, Star, Globe, Wrench, Zap, TrendingUp, Users,
  Car, Cog, Package, Phone, Mail, MapPin, Calculator
} from 'lucide-react';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        
        {/* About Hypeautoparts - Brief Intro */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 text-center animate-slide-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">About</span>
                <span className="text-primary"> Hypeautoparts</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in the automotive industry, Hypeautoparts has become 
                the trusted name for premium auto parts across India. We specialize in providing 
                high-quality interior, exterior, and body parts for all major vehicle brands, 
                ensuring every customer receives authentic, reliable components backed by expert support.
              </p>
            </div>
          </div>
        </section>

        <CategoriesSection />
        
        {/* Quick Stats */}
        <section className="py-16 bg-background relative overflow-hidden">
          {/* Background Animation Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-accent rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, number: '5,000+', label: 'Happy Customers', color: 'text-blue-500', bgGlow: 'hover:shadow-blue-500/20' },
                { icon: Package, number: '10,000+', label: 'Parts Available', color: 'text-green-500', bgGlow: 'hover:shadow-green-500/20' },
                { icon: Truck, number: '500+', label: 'Daily Deliveries', color: 'text-orange-500', bgGlow: 'hover:shadow-orange-500/20' },
                { icon: Star, number: '99%', label: 'Satisfaction Rate', color: 'text-yellow-500', bgGlow: 'hover:shadow-yellow-500/20' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.label} 
                    className={`glass-card border-border/50 hover-lift animate-slide-up text-center group cursor-pointer transition-all duration-500 hover:shadow-2xl ${stat.bgGlow}`} 
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="relative">
                        <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`} />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-2xl font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{stat.number}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <FeaturedProducts />

        {/* Service Highlights */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-full animate-spin-slow"></div>
              <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent rounded-full animate-spin-reverse"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-black mb-6 relative">
                  <span className="text-foreground animate-fade-in-up">Why Professionals</span>
                  <span className="text-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}> Choose Us</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 animate-scale-x" style={{ animationDelay: '0.5s' }}></div>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Industry-leading services that set us apart in the automotive parts market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Authenticity Guaranteed',
                  description: '100% genuine OEM and aftermarket parts with authenticity certificates.',
                  color: 'text-blue-500',
                  bgColor: 'bg-blue-500/10',
                  glowColor: 'hover:shadow-blue-500/25'
                },
                {
                  icon: Clock,
                  title: 'Same-Day Dispatch',
                  description: 'Orders placed before 2 PM are dispatched the same day across India.',
                  color: 'text-green-500',
                  bgColor: 'bg-green-500/10',
                  glowColor: 'hover:shadow-green-500/25'
                },
                {
                  icon: HeadphonesIcon,
                  title: 'Expert Consultation',
                  description: 'Free technical guidance from automotive specialists for part selection.',
                  color: 'text-purple-500',
                  bgColor: 'bg-purple-500/10',
                  glowColor: 'hover:shadow-purple-500/25'
                },
                {
                  icon: Wrench,
                  title: 'Installation Support',
                  description: 'Step-by-step installation guides and professional mechanic network.',
                  color: 'text-orange-500',
                  bgColor: 'bg-orange-500/10',
                  glowColor: 'hover:shadow-orange-500/25'
                },
                {
                  icon: Award,
                  title: 'Quality Assurance',
                  description: 'Every part undergoes rigorous quality testing before dispatch.',
                  color: 'text-red-500',
                  bgColor: 'bg-red-500/10',
                  glowColor: 'hover:shadow-red-500/25'
                },
                {
                  icon: Truck,
                  title: 'Nationwide Delivery',
                  description: 'Reliable delivery network covering all major cities and remote areas.',
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
                    <CardContent className="p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <Icon className={`w-8 h-8 ${service.color} group-hover:animate-pulse`} />
                      </div>
                      <h3 className="text-xl font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">{service.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">{service.description}</p>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <PopularBrands />

        {/* Industry Solutions */}
        <section className="py-24 bg-background relative">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-primary rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6 relative">
                <span className="text-foreground">Industry</span>
                <span className="text-primary animate-pulse"> Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized services tailored for different segments of the automotive industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Individual Car Owners',
                  description: 'Personal vehicle maintenance and upgrade solutions with expert guidance.',
                  features: ['OEM Parts', 'Installation Guides', 'Warranty Support', 'Technical Help'],
                  icon: Car,
                  color: 'text-blue-500',
                  bgGradient: 'from-blue-500/10 to-blue-600/5'
                },
                {
                  title: 'Professional Mechanics',
                  description: 'Bulk ordering, trade pricing, and technical resources for service centers.',
                  features: ['Trade Discounts', 'Bulk Orders', 'Priority Support', 'Technical Data'],
                  icon: Wrench,
                  color: 'text-green-500',
                  bgGradient: 'from-green-500/10 to-green-600/5'
                },
                {
                  title: 'Fleet Operators',
                  description: 'Large-scale parts supply with dedicated account management.',
                  features: ['Fleet Pricing', 'Account Manager', 'Scheduled Delivery', 'Custom Reports'],
                  icon: Truck,
                  color: 'text-orange-500',
                  bgGradient: 'from-orange-500/10 to-orange-600/5'
                }
              ].map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card 
                    key={solution.title}
                    className="glass-card border-border/50 hover-lift animate-slide-up group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-primary/40 overflow-hidden"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-card/80 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className={`w-6 h-6 ${solution.color} group-hover:animate-pulse`} />
                        </div>
                        <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">{solution.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">{solution.description}</p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm animate-slide-up" style={{ animationDelay: `${(index * 0.15) + (idx * 0.05)}s` }}>
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full hover-glow group-hover:shadow-lg transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Tools */}
        <section className="py-24 bg-card/30 relative overflow-hidden">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-1/4 left-1/6 w-24 h-24 border-2 border-primary rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/4 right-1/6 w-32 h-32 border border-accent rounded-full animate-spin-reverse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-40 border border-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border border-accent/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-black mb-6 relative inline-block">
                <span className="text-foreground">Quick</span>
                <span className="text-primary animate-bounce"> Tools</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Helpful tools to make your auto parts shopping experience easier and more efficient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calculator,
                  title: 'Price Calculator',
                  description: 'Get instant pricing for bulk orders',
                  action: 'Calculate Now',
                  color: 'from-blue-500 to-blue-600',
                  shadowColor: 'hover:shadow-blue-500/25'
                },
                {
                  icon: Car,
                  title: 'Parts Finder',
                  description: 'Find compatible parts for your vehicle',
                  action: 'Search Parts',
                  color: 'from-green-500 to-green-600',
                  shadowColor: 'hover:shadow-green-500/25'
                },
                {
                  icon: Cog,
                  title: 'Installation Guide',
                  description: 'Step-by-step installation tutorials',
                  action: 'View Guides',
                  color: 'from-purple-500 to-purple-600',
                  shadowColor: 'hover:shadow-purple-500/25'
                },
                {
                  icon: Phone,
                  title: 'Expert Consultation',
                  description: 'Speak with automotive specialists',
                  action: 'Call Now',
                  color: 'from-orange-500 to-orange-600',
                  shadowColor: 'hover:shadow-orange-500/25'
                }
              ].map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card 
                    key={tool.title}
                    className={`glass-card border-border/50 hover-lift animate-slide-up text-center group cursor-pointer transition-all duration-500 hover:shadow-2xl ${tool.shadowColor} hover:border-primary/30`}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Animated Icon Container */}
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                        </div>
                        {/* Floating Ring Animation */}
                        <div className="absolute inset-0 w-16 h-16 mx-auto mb-4 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                      </div>
                      
                      <h3 className="text-lg font-black mb-3 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 relative z-10">{tool.description}</p>
                      <Button size="sm" className="hover-glow group-hover:shadow-lg transition-all duration-300 relative z-10">
                        {tool.action}
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                      
                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <CoreStrengths />

        <ExtendedInfo />
        <CustomerSection />
        <Testimonials />

        {/* Quick Contact Strip */}
        <section className="py-16 bg-primary relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-8 w-8 h-8 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 left-1/4 w-16 h-16 border-2 border-white rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-8 right-1/4 w-6 h-6 bg-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center">
              <div className="animate-slide-up group cursor-pointer">
                <div className="relative inline-block mb-4">
                  <Phone className="w-8 h-8 text-primary-foreground mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 w-8 h-8 mx-auto border-2 border-primary-foreground rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                </div>
                <h3 className="text-lg font-black text-primary-foreground mb-2 group-hover:scale-105 transition-transform duration-200">Call Us Now</h3>
                <a href="tel:+18555189685" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg font-semibold group-hover:animate-pulse">
                  +1 (855) 518-9685
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