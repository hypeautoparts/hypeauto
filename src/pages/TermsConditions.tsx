import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const TermsConditions = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using the Hypeautoparts website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Product Information and Pricing',
      content: 'We strive to provide accurate product descriptions and pricing information. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. Prices are subject to change without notice.'
    },
    {
      title: 'Orders and Payment',
      content: 'All orders are subject to availability and confirmation of the order price. We reserve the right to refuse any order you place with us. Payment must be received in full before we dispatch your order. We accept various payment methods as displayed on our website.'
    },
    {
      title: 'Shipping and Delivery',
      content: 'We will make every effort to deliver products within the estimated timeframe. However, delivery times are estimates and we are not liable for any delays. Risk of loss and title for products purchased from us pass to you upon our delivery to the carrier.'
    },
    {
      title: 'Returns and Exchanges',
      content: 'Products may be returned within 30 days of delivery in their original condition and packaging. Custom or specially ordered items may not be returnable. Return shipping costs are the responsibility of the customer unless the return is due to our error.'
    },
    {
      title: 'Warranties and Disclaimers',
      content: 'Products sold carry manufacturer warranties where applicable. We make no additional warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Hypeautoparts be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products, even if we have been advised of the possibility of such damages.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, images, and software, is the property of Hypeautoparts or its content suppliers and is protected by copyright and other intellectual property laws.'
    },
    {
      title: 'Prohibited Uses',
      content: 'You may not use our website for any unlawful purpose or to solicit others to perform illegal acts. You may not transmit any viruses, worms, defects, Trojan horses, or any items of a destructive nature.'
    },
    {
      title: 'Modifications to Terms',
      content: 'We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website constitutes acceptance of the modified terms.'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Terms &</span>
              <span className="text-primary"> Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 2024
            </p>
          </div>

          <Card className="glass-card border-border/50 mb-8 animate-slide-up">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Hypeautoparts. These terms and conditions outline the rules and regulations 
                for the use of our website and services. By accessing this website, we assume you 
                accept these terms and conditions in full.
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
                Questions About Our Terms?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@hypeautoparts.com"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all"
                >
                  Email Legal Team
                </a>
                <a 
                  href="/contact"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  General Contact
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

export default TermsConditions;