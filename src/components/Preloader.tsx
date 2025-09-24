import React, { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-auto-parts.jpg';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-red-900 flex items-center justify-center overflow-hidden">
      {/* Background with Hero Image */}
      <div className="absolute inset-0">
        {/* Hero background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${heroImage})`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Brand Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-yellow-500 mb-2 brand-pulse">
            HYPE
          </h1>
          <p className="text-white text-lg md:text-xl font-semibold tracking-widest">
            AUTO PARTS
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full transition-all duration-300 ease-out progress-glow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-white text-sm mt-3 font-medium">
            Loading... {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-300 text-sm loading-dots">
          Preparing your premium auto parts experience
        </div>
      </div>

      {/* Floating auto parts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-parts opacity-10"
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {/* Different auto part shapes */}
            {i % 4 === 0 && <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>}
            {i % 4 === 1 && <div className="w-6 h-6 bg-red-500 transform rotate-45"></div>}
            {i % 4 === 2 && <div className="w-8 h-4 bg-blue-500 rounded"></div>}
            {i % 4 === 3 && <div className="w-4 h-8 bg-green-500 rounded-full"></div>}
          </div>
        ))}
      </div>

      {/* CSS Styles */}
      <style>{`

        

        
        .brand-pulse {
          animation: brandPulse 2s ease-in-out infinite;
        }
        
        .progress-glow {
          box-shadow: 0 0 10px rgba(255, 212, 0, 0.5);
        }
        
        .loading-dots::after {
          content: '';
          animation: dots 1.5s steps(4, end) infinite;
        }
        
        .floating-parts {
          animation: floatParts 6s ease-in-out infinite;
        }
        

        

        
        @keyframes brandPulse {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 10px rgba(255, 212, 0, 0.3);
          }
          50% {
            opacity: 0.8;
            text-shadow: 0 0 20px rgba(255, 212, 0, 0.6);
          }
        }
        
        @keyframes dots {
          0%, 20% {
            content: '';
          }
          40% {
            content: '.';
          }
          60% {
            content: '..';
          }
          80%, 100% {
            content: '...';
          }
        }
        
        @keyframes floatParts {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
