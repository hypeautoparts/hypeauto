import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 gradient-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-foreground">Ready to Upgrade</span>
            <br />
            <span className="text-primary">Your Vehicle?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of automotive enthusiasts and professionals who trust Hypeautoparts 
            for premium quality parts. Get expert guidance and competitive pricing today.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 hover-glow hover-scale group animate-glow"
              >
                Browse Our Catalog
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
              >
                Get Expert Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 hover-glow">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-black mb-2 text-foreground">Call Us Now</h3>
            <p className="text-muted-foreground mb-3">Speak with our parts experts</p>
            <a 
              href="tel:+18555189685" 
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-black text-lg hover:bg-gray-100 transition-colors group hover:shadow-2xl border-2 border-white/20"
            >
              +1 (855) 518-9685
            </a>
          </div>

          {/* Email */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 hover-glow">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-black mb-2 text-foreground">Email Support</h3>
            <p className="text-muted-foreground mb-3">Get detailed quotes & specs</p>
            <a 
              href="mailto:info@hypeautoparts.com" 
              className="text-primary font-semibold hover:underline"
            >
              info@hypeautoparts.com
            </a>
          </div>

          {/* Live Chat */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 hover-glow">
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-black mb-2 text-foreground">Live Chat</h3>
            <p className="text-muted-foreground mb-3">Instant support available</p>
            <span className="text-primary font-semibold">
              24/7 Online Support
            </span>
          </div>
        </div>

        {/* Trust Section */}
        <div className="glass-card border border-primary/30 rounded-3xl p-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black mb-4 text-foreground">
              Why 5,000+ Customers Choose Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <div className="font-semibold text-sm text-foreground mb-1">Fast Delivery</div>
              <div className="text-xs text-muted-foreground">Same-day dispatch available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-semibold text-sm text-foreground mb-1">Quality Guarantee</div>
              <div className="text-xs text-muted-foreground">OEM-grade parts only</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-sm text-foreground mb-1">Best Prices</div>
              <div className="text-xs text-muted-foreground">Competitive market rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-semibold text-sm text-foreground mb-1">Expert Support</div>
              <div className="text-xs text-muted-foreground">Technical guidance included</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get started? Let's find the perfect parts for your vehicle.
          </p>
          <Button 
            size="lg" 
            className="px-12 py-6 text-lg font-black hover-glow hover-scale animate-glow"
          >
            Contact Us Today
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;