import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Auto Consultation', href: '/contact' },
      { name: 'Part Installation', href: '/contact' },
      { name: 'Vehicle Inspection', href: '/contact' },
      { name: 'Custom Solutions', href: '/contact' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Technical Support', href: '/contact' },
      { name: 'Warranty', href: '#' },
      { name: 'Installation Guide', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Shipping Info', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/043/323/964/non_2x/car-logo-design-concept-art-design-stock-isolated-on-white-background-vector.jpg"
                alt="Hype Auto Parts Logo"
                className="w-12 h-12 object-contain bg-yellow-400 rounded-lg p-2"
              />
              <span className="text-2xl font-black text-primary">
                Hype<span className="text-foreground">autoparts</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for premium auto parts. Quality assurance, 
              authentic sourcing, and expert support for every automotive need.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+18555189685" className="text-foreground hover:text-primary transition-colors">+1 (855) 518-9685</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@hypeautoparts.com" className="text-foreground hover:text-primary transition-colors">info@hypeautoparts.com</a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-black text-lg mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 text-foreground">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="glass-card border border-primary/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black mb-2 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get the latest updates on new products, offers, and automotive tips.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Hypeautoparts. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card/80 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover-scale"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground">
              🔒 Secure Service
            </div>
            <div className="text-xs text-muted-foreground">
              ✅ Authentic Parts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;