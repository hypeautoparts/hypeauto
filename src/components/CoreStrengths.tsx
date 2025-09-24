import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Leaf, Shield, Award, Wrench, CheckCircle } from 'lucide-react';

const CoreStrengths = () => {
  const strengths = [
    {
      icon: Clock,
      title: 'Commitment',
      description: 'Meet your parts needs within 24 hours and see the difference in your ride',
      position: 'top-left'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Range of sustainable auto parts and recycled components for environmental care',
      position: 'top-right'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We are the most reliable auto parts supplier in the automotive market',
      position: 'middle-left'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We deliver premium quality OEM and aftermarket parts with certified equipment',
      position: 'middle-right'
    },
    {
      icon: Wrench,
      title: 'Service',
      description: 'Expert installation guidance from experienced and well-trained professionals',
      position: 'bottom-left'
    },
    {
      icon: CheckCircle,
      title: 'Trust',
      description: 'Being recognized as the most trusted auto parts company in India is our achievement',
      position: 'bottom-right'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-red-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
                {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up px-4 sm:px-0">
          <div className="text-yellow-500 text-sm font-semibold mb-4 tracking-wider uppercase">
            OUR COMMITMENT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Commitment to Excellence
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            We deliver premium quality auto parts with unmatched reliability and customer service.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="relative max-w-full mx-auto min-h-[1000px]">
          {/* Central Golden Car */}
          <div className="flex items-center justify-center mb-16 lg:mb-0 lg:absolute lg:inset-0 lg:top-1/2 lg:-translate-y-1/2">
            <div className="relative w-[650px] h-[480px] lg:w-[950px] lg:h-[700px] xl:w-[1100px] xl:h-[800px] animate-float">
              <img 
                src="https://www.exppresscarwash.com/assets/img/added_img/car_yellow.webp"
                alt="Golden wireframe car"
                className="w-full h-full object-contain opacity-95 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Strength Points positioned around the car - Desktop */}
          <div className="hidden lg:block absolute inset-0">
            
            {/* Top Left - Commitment */}
            <div className="absolute top-8 left-16 w-72 z-10">
              <div className="text-left">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Commitment</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Meet Assigned Targets in Just 20 Minutes and see the difference in your Car.
                </p>
              </div>
            </div>

            {/* Top Right - Eco-Friendly */}
            <div className="absolute top-8 right-16 w-72 z-10">
              <div className="text-right">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center ml-auto mb-3 shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Range of Eco-Friendly Techniques And Chemicals are used for Auto Parts Care.
                </p>
              </div>
            </div>

            {/* Middle Left - Reliability */}
            <div className="absolute top-1/2 left-16 -translate-y-1/2 w-72 z-10">
              <div className="text-left">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Reliability</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are the Most Reliable Auto Parts Company in the US Market.
                </p>
              </div>
            </div>

            {/* Middle Right - Quality */}
            <div className="absolute top-1/2 right-16 -translate-y-1/2 w-72 z-10">
              <div className="text-right">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center ml-auto mb-3 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We do much more than Auto Parts with premium quality products and equipment.
                </p>
              </div>
            </div>

            {/* Bottom Left - Services */}
            <div className="absolute bottom-8 left-16 w-72 z-10">
              <div className="text-left">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Services</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Hassle-free Auto Parts Service from Experienced & Well-Trained Professionals.
                </p>
              </div>
            </div>

            {/* Bottom Right - Trust */}
            <div className="absolute bottom-8 right-16 w-72 z-10">
              <div className="text-right">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center ml-auto mb-3 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Being recognized as the most trusted auto parts company in India is a significant achievement.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Visible only on smaller screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mt-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card 
                  key={strength.title}
                  className="bg-black/90 border-red-500 border-2 backdrop-blur-sm shadow-2xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{strength.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// New Customer Section Component
const CustomerSection = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

  const faqItems = [
    {
      question: "Q1. WHAT ARE OEM AUTO PARTS?",
      answer: "OEM (Original Equipment Manufacturer) parts are components made by the same company that manufactured the original parts for your vehicle. These parts ensure perfect fit, quality, and performance matching your car's specifications."
    },
    {
      question: "Q2. WHY SHOULD I CHOOSE HYPEAUTOPARTS FOR AUTO PARTS?",
      answer: "HypeAutoParts offers premium quality OEM and aftermarket parts with 24-hour delivery, expert installation guidance, competitive pricing, and exceptional customer service. We're recognized as one of the most trusted auto parts suppliers with 99% customer satisfaction."
    },
    {
      question: "Q3. HOW DO I ENSURE COMPATIBILITY WITH MY VEHICLE?",
      answer: "Our expert team helps you find the right parts by matching your vehicle's VIN number, year, make, model, and engine specifications. We also provide detailed compatibility charts and technical support to ensure perfect fitment."
    },
    {
      question: "Q4. WHERE ARE YOU LOCATED?",
      answer: "We serve customers nationwide with multiple distribution centers across major cities. Our headquarters handles online orders with fast shipping, and we have authorized dealers and service centers in key automotive markets."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Form state
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    carBrand: '',
    carModel: '',
    partsNeeded: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Basic validation
    if (!formData.name || !formData.email) {
      setSubmitMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        carBrand: '',
        carModel: '',
        partsNeeded: ''
      });
      
      setSubmitMessage('Thank you! We\'ll get back to you within 24 hours with your quote.');
    } catch (error) {
      setSubmitMessage('Sorry, there was an error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start px-4 sm:px-0">
          
          {/* Left Side - FAQ Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
              Our Customer
            </h2>
            
            {/* FAQ Items */}
            <div className="space-y-4 mb-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="border border-gray-700 rounded-lg">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 bg-gray-900 hover:bg-gray-800 transition-colors flex justify-between items-center"
                  >
                    <span className="text-yellow-500 font-semibold">{faq.question}</span>
                    <span className={`text-white transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="p-4 text-gray-300 text-sm leading-relaxed border-t border-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="text-gray-400 hover:text-yellow-500 transition-colors font-medium">
              VIEW MORE FAQ'S →
            </button>

            {/* Statistics */}
            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 border-4 border-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-2xl font-bold">99%</span>
                </div>
                <div className="text-white font-semibold">Quickest</div>
                <div className="text-white font-semibold">Response</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 border-4 border-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-2xl font-bold">99%</span>
                </div>
                <div className="text-white font-semibold">Customer</div>
                <div className="text-white font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-yellow-500 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Get Your Auto Parts</h3>
            
            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                submitMessage.includes('Thank you') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">YOUR NAME *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">EMAIL ADDRESS *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@gmail.com"
                    required
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">PHONE NO</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (855) 518-9685"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">CAR BRAND</label>
                  <input 
                    type="text" 
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleInputChange}
                    placeholder="Toyota"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">CAR MODEL</label>
                  <input 
                    type="text" 
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    placeholder="Camry 2020"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">PARTS NEEDED</label>
                <textarea 
                  name="partsNeeded"
                  value={formData.partsNeeded}
                  onChange={handleInputChange}
                  placeholder="Describe the auto parts you need..."
                  className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black h-24 resize-none text-black placeholder-gray-500"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 rounded-lg transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'GET QUOTE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
export { CustomerSection };