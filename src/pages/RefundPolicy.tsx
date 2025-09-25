import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Clock, Package } from 'lucide-react';

const RefundPolicy = () => {
  const refundConditions = [
    {
      icon: CheckCircle,
      title: 'Eligible for Refund',
      items: [
        'Products received in damaged condition',
        'Wrong parts delivered due to our error',
        'Defective products within warranty period',
        'Products returned within 30 days in original packaging'
      ],
      color: 'text-green-400'
    },
    {
      icon: XCircle,
      title: 'Not Eligible for Refund',
      items: [
        'Custom or specially ordered parts',
        'Products installed or used',
        'Electrical components that have been connected',
        'Products without original packaging and documentation'
      ],
      color: 'text-red-400'
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: 'Contact Us',
      description: 'Reach out within 30 days of delivery with your order number and reason for return.',
      icon: '📞'
    },
    {
      step: 2,
      title: 'Get Authorization',
      description: 'Receive return authorization number and shipping instructions from our team.',
      icon: '✅'
    },
    {
      step: 3,
      title: 'Ship the Product',
      description: 'Package the item securely in original packaging and ship to our returns center.',
      icon: '📦'
    },
    {
      step: 4,
      title: 'Inspection & Processing',
      description: 'We inspect the returned item and process refund within 5-7 business days.',
      icon: '🔍'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-foreground">Refund</span>
              <span className="text-primary"> Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 2024
            </p>
          </div>

          <Card className="glass-card border-border/50 mb-8 animate-slide-up">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                At Hypeautoparts, we want you to be completely satisfied with your purchase. 
                Our refund policy is designed to be fair and transparent while ensuring the 
                quality and integrity of our auto parts inventory.
              </p>
            </CardContent>
          </Card>

          {/* Refund Timeframes */}
          <Card className="glass-card border-border/50 mb-8 animate-slide-up">
            <CardContent className="p-6">
              <h2 className="text-2xl font-black mb-6 text-foreground text-center">
                Refund Timeframes
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">30 Days</h3>
                  <p className="text-sm text-muted-foreground">Return Window</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">5-7 Days</h3>
                  <p className="text-sm text-muted-foreground">Processing Time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">3-5 Days</h3>
                  <p className="text-sm text-muted-foreground">Refund Credit</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligibility Conditions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {refundConditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <Card 
                  key={condition.title}
                  className="glass-card border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`w-6 h-6 ${condition.color}`} />
                      <h3 className="text-xl font-black text-foreground">{condition.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {condition.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-2 ${condition.color.replace('text-', 'bg-')}`}></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Refund Process */}
          <Card className="glass-card border-border/50 mb-8 animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-black mb-6 text-foreground text-center">
                How to Request a Refund
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {refundProcess.map((process, index) => (
                  <div key={process.step} className="text-center">
                    <div className="text-4xl mb-4">{process.icon}</div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {process.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="glass-card border-border/50 mb-8 animate-slide-up">
            <CardContent className="p-6">
              <h2 className="text-2xl font-black mb-4 text-foreground">
                Important Notes
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>• Return shipping costs are the customer's responsibility unless the return is due to our error</p>
                <p>• Refunds will be processed to the original payment method used for the purchase</p>
                <p>• International orders may be subject to additional return shipping fees and customs charges</p>
                <p>• Items must be returned in their original condition with all packaging and documentation</p>
                <p>• Warranty claims may be processed differently than standard returns</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="glass-card border border-primary/30 animate-slide-up">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-black mb-4 text-foreground">
                Need Help with a Return?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help with any return or refund questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:returns@hypeautoparts.com"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all"
                >
                  Email Returns Team
                </a>
                <a 
                  href="tel:+18555189685"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Call: +1 (855) 518-9685
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

export default RefundPolicy;