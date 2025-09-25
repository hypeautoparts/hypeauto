import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageCircle, Clock, MessageSquare, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      detail: '+1 (888) 929-0045',
      description: 'Mon-Sat 9AM to 8PM',
      action: 'tel:+18889290045'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'info@hypeautoparts.com',
      description: 'We reply within 2 hours',
      action: 'mailto:info@hypeautoparts.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat Support',
      detail: '24/7 Online Support',
      description: 'Instant help available',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Monday - Saturday',
      description: '9:00 AM - 8:00 PM',
      action: null
    }
  ];

  const quickActions = [
    { title: 'Technical Support', description: 'Get help with part compatibility and installation' },
    { title: 'Bulk Orders', description: 'Special pricing for fleet operators and dealers' },
    { title: 'Return & Warranty', description: 'Process returns or warranty claims' },
    { title: 'Partnership Inquiry', description: 'Explore business partnership opportunities' }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center animate-slide-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
                <span className="text-foreground">Contact</span>
                <span className="text-primary"> Us</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
                Get expert guidance on auto parts selection, technical support, or any questions 
                about our products and services. We're here to help you find the perfect fit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-8 md:py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="hover-lift glass-card border-border/50 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-black text-lg mb-2 text-foreground">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary font-semibold hover:underline block mb-1"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <div className="text-primary font-semibold mb-1">{info.detail}</div>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <Card className="glass-card border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-foreground">Send us a Message</h2>
                        <p className="text-muted-foreground">We'll get back to you within 2 hours</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground">
                            Subject
                          </label>
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                          >
                            <option value="">Select a subject</option>
                            <option value="technical">Technical Support</option>
                            <option value="bulk">Bulk Order Inquiry</option>
                            <option value="warranty">Warranty Claim</option>
                            <option value="partnership">Partnership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full hover-glow" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Info */}
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {/* Quick Actions */}
                <div>
                  <h3 className="text-2xl font-black mb-6 text-foreground">Quick Actions</h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <Card 
                        key={action.title}
                        className="hover-lift glass-card border-border/50 cursor-pointer"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1">{action.title}</h4>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Support Features */}
                <div>
                  <h3 className="text-2xl font-black mb-6 text-foreground">Why Choose Our Support</h3>
                  <Card className="glass-card border-border/50">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Phone className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">Expert Technical Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">24/7 Live Chat Available</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Mail className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">Fast Email Response</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Emergency Contact */}
                <Card className="glass-card border border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-black mb-2 text-foreground">Need Immediate Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent part requirements or technical emergencies
                    </p>
                    <Button asChild className="hover-glow">
                      <a href="tel:+18889290045">Call Now: +1 (888) 929-0045</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;