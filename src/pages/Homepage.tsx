import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import PopularBrands from '@/components/PopularBrands';
import CoreStrengths, { CustomerSection } from '@/components/CoreStrengths';
import ExtendedInfo from '@/components/ExtendedInfo';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        
        {/* About Hypeautoparts - Brief Intro */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 text-center animate-slide-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-foreground">About</span>
                <span className="text-primary"> Hypeautoparts</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in the automotive industry, Hypeautoparts has become 
                the trusted name for premium auto parts across India. We specialize in providing 
                high-quality interior, exterior, and body parts for all major vehicle brands, 
                ensuring every customer receives authentic, reliable components backed by expert support.
              </p>
            </div>
          </div>
        </section>

        <CategoriesSection />
        <FeaturedProducts />
        <PopularBrands />
        <CoreStrengths />
        <ExtendedInfo />
        <CustomerSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;