import React, { useState, useEffect } from 'react';
import { X, Clock, Tag, Mail, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LimitedTimeOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LimitedTimeOfferModal: React.FC<LimitedTimeOfferModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [showOfferModal, setShowOfferModal] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Timer expired
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOfferModal(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We\'ll contact you soon with your exclusive discount code.');
    onClose();
  };

  if (!isOpen || !showOfferModal) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in-0 duration-300"
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        <Card className="bg-gradient-to-br from-background to-card border-border shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            {/* Left Side - Offer Details */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex flex-col justify-center border-r border-border">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
              
              {/* Flash Sale Badge */}
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                <Tag className="h-4 w-4" />
                LIMITED TIME FLASH SALE
              </div>
              
              {/* Main Offer */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-black text-primary mb-2">
                  40% OFF
                </h1>
                <p className="text-xl text-foreground font-semibold mb-4">
                  All Premium Auto Services
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Professional automotive services with premium quality assurance. Vehicle inspection, 
                  maintenance, and custom solutions for all major vehicle brands.
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="bg-card/50 rounded-lg p-4 mb-6 border border-border/50">
                <div className="text-center mb-3">
                  <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    Offer expires in:
                  </p>
                </div>
                <div className="flex justify-center gap-3">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 min-w-[50px]">
                      <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Hours</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 min-w-[50px]">
                      <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Minutes</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 min-w-[50px]">
                      <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Seconds</p>
                  </div>
                </div>
              </div>

              {/* Offer Details */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground mb-3">What's Included:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    40% discount on all automotive services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Free consultation and vehicle inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Premium customer support
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 flex flex-col justify-center bg-card/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Get Your Exclusive Discount Code
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below to claim your 40% discount
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-background border-border focus:border-primary"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-background border-border focus:border-primary"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number (Optional)
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 bg-background border-border focus:border-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-lg transition-all duration-300"
                >
                  Claim My 40% Discount Now
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to receive promotional emails from Hypeautoparts. 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LimitedTimeOfferModal;