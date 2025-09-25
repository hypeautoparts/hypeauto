import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, shipping address, and payment information.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotions.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted partners who assist us in operating our website and conducting our business.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.'
    },
    {
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Privacy</span>
              <span className="text-primary"> Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 2024
            </p>
          </div>

          <Card className="glass-card border-border/50 mb-8 animate-slide-up">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                At Hypeautoparts, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, and 
                safeguard your information when you visit our website or use our services.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card 
                key={section.title}
                className="glass-card border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h2 className="text-2xl font-black mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-card border border-primary/30 mt-8 animate-slide-up">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-black mb-4 text-foreground">
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@hypeautoparts.com"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all"
                >
                  Email Us
                </a>
                <a 
                  href="/contact"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Contact Page
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;