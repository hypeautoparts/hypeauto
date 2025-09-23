import React from 'react';
import { Card } from '@/components/ui/card';

const JourneySection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Red Dots Pattern */}
        <div className="absolute top-20 right-20 grid grid-cols-4 gap-2 opacity-70">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
          ))}
        </div>
        
        {/* Red Arrow/Chevron Pattern */}
        <div className="absolute bottom-32 right-32">
          <div className="flex flex-col space-y-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex space-x-1">
                <div className="w-4 h-4 bg-red-500 transform rotate-45"></div>
                <div className="w-4 h-4 bg-red-500 transform rotate-45"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Orange Accent Lines */}
        <div className="absolute left-12 top-1/3 w-1 h-32 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
        <div className="absolute left-12 bottom-1/4 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="text-white/80 uppercase tracking-wider text-sm font-medium mb-4 border-l-4 border-yellow-500 pl-4">
                BEST FROM THE BEGINNING
              </div>
              
              {/* Yellow Box with Main Title */}
              <Card className="bg-yellow-500 text-black p-8 mb-8 border-0">
                <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-wide">
                  JOURNEY FROM 2012-
                  <br />
                  2024
                </h2>
              </Card>
              
              {/* Description */}
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>
                  For 12 years, we've revolutionized the automotive parts industry with 
                  passion and innovation, leading with customer satisfaction and 
                  technological advancement. As we expand all over India, we remain 
                  committed to exceeding expectations, driving transformation, 
                  and delivering outstanding value to our customers and 
                  communities.
                </p>
                <p className="text-white font-semibold">
                  The future is bright by quality parts excellence.
                </p>
              </div>
            </div>

            {/* Managing Director Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                {/* Placeholder for director image */}
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MD</span>
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm uppercase tracking-wide">MANAGING DIRECTOR</div>
                <div className="text-yellow-500 text-xl font-bold">Rajesh Kumar</div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-8">
            {/* Top Image */}
            <div className="relative">
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.781 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Quality Control Process</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bottom Image */}
            <div className="relative">
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Parts Inspection & Testing</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneySection;