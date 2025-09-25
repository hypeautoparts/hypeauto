import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Auto Shop Owner',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'Hypeautoparts has been my go-to supplier for 3 years. Their quality is unmatched and delivery is always on time. My customers trust the parts I get from them.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      role: 'Fleet Manager',
      location: 'New York, NY',
      rating: 5,
      text: 'Managing a fleet of 50+ vehicles, I need reliable parts suppliers. Hypeautoparts delivers authentic parts with proper documentation. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      role: 'Car Enthusiast',
      location: 'Miami, FL',
      rating: 5,
      text: 'Been modifying cars for 10 years. Hypeautoparts has the best selection of performance parts. Their technical support team knows their stuff!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Jennifer Brown',
      role: 'Service Center Owner',
      location: 'Chicago, IL',
      rating: 5,
      text: 'Quality, pricing, and service - Hypeautoparts excels in all areas. Their warranty support is excellent. My service center has grown 40% since partnering with them.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Robert Taylor',
      role: 'Automotive Engineer',
      location: 'Detroit, MI',
      rating: 5,
      text: 'As an engineer, I appreciate attention to detail. Hypeautoparts sources genuine OEM parts with proper certification. Their technical documentation is thorough.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Lisa Martinez',
      role: 'Auto Parts Retailer',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'Switched to Hypeautoparts 2 years ago and never looked back. Their B2B platform is user-friendly, and bulk pricing is competitive. Great business partner!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Customer</span>
            <span className="text-primary"> Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from automotive professionals and enthusiasts who trust Hypeautoparts 
            for their critical part needs. Real experiences, real results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="hover-lift glass-card border-border/50 relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 gradient-accent rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <CardContent className="pt-8 pb-6 px-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=FFD700&color=000000&size=48`;
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="glass-card border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-black text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-black mb-4 text-foreground">
            Join Thousands of Satisfied Customers
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the Hypeautoparts difference. Quality parts, expert service, 
            and customer satisfaction guaranteed.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all">
              Start Your Order Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;