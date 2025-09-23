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
                  We are the Most Reliable Auto Parts Company in the Indian Market.
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
              <div className="border border-gray-700 rounded-lg">
                <button className="w-full text-left p-4 bg-gray-900 hover:bg-gray-800 transition-colors flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">Q1. WHAT ARE OEM AUTO PARTS?</span>
                  <span className="text-white">+</span>
                </button>
                <div className="p-4 text-gray-300 text-sm leading-relaxed">
                  OEM (Original Equipment Manufacturer) parts are components made by the same company that manufactured the original parts for your vehicle. These parts ensure perfect fit, quality, and performance matching your car's specifications.
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg">
                <button className="w-full text-left p-4 bg-gray-900 hover:bg-gray-800 transition-colors flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">Q2. WHY SHOULD I CHOOSE HYPEAUTOPARTS FOR AUTO PARTS?</span>
                  <span className="text-white">+</span>
                </button>
              </div>

              <div className="border border-gray-700 rounded-lg">
                <button className="w-full text-left p-4 bg-gray-900 hover:bg-gray-800 transition-colors flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">Q3. HOW DO I ENSURE COMPATIBILITY WITH MY VEHICLE?</span>
                  <span className="text-white">+</span>
                </button>
              </div>

              <div className="border border-gray-700 rounded-lg">
                <button className="w-full text-left p-4 bg-gray-900 hover:bg-gray-800 transition-colors flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">Q4. WHERE ARE YOU LOCATED?</span>
                  <span className="text-white">+</span>
                </button>
              </div>
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
            
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">YOUR NAME *</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">EMAIL ADDRESS *</label>
                  <input 
                    type="email" 
                    placeholder="johndoe@gmail.com"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">PHONE NO</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (888) 234-9140"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">CAR BRAND</label>
                  <input 
                    type="text" 
                    placeholder="Toyota"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">CAR MODEL</label>
                  <input 
                    type="text" 
                    placeholder="Camry 2020"
                    className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">PARTS NEEDED</label>
                <textarea 
                  placeholder="Describe the auto parts you need..."
                  className="w-full p-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-black h-24 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                GET QUOTE
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