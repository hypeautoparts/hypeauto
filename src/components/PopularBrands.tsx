import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import toyotaLogo from '@/assets/brands/toyota-logo.png';
import hondaLogo from '@/assets/brands/honda-logo.png';
import fordLogo from '@/assets/brands/ford-logo.png';
import bmwLogo from '@/assets/brands/bmw-logo.png';
import mercedesLogo from '@/assets/brands/mercedes-logo.png';
import hyundaiLogo from '@/assets/brands/hyundai-logo.png';
import tataLogo from '@/assets/brands/tata-logo.png';
import mahindraLogo from '@/assets/brands/mahindra-logo.png';
import kiaLogo from '@/assets/brands/kia-logo.png';
import jeepLogo from '@/assets/brands/jeep-logo.png';

const PopularBrands = () => {
  const brands = [
    { name: 'Toyota', logo: toyotaLogo, parts: '518+' },
    { name: 'Honda', logo: hondaLogo, parts: '501+' },
    { name: 'Ford', logo: fordLogo, parts: '280+' },
    { name: 'BMW', logo: bmwLogo, parts: '367+' },
    { name: 'Mercedes-Benz', logo: mercedesLogo, parts: '319+' },
    { name: 'Hyundai', logo: hyundaiLogo, parts: '459+' },
    { name: 'Tata', logo: tataLogo, parts: '363+' },
    { name: 'Mahindra', logo: mahindraLogo, parts: '573+' },
    { name: 'Kia', logo: kiaLogo, parts: '137+' },
    { name: 'Jeep', logo: jeepLogo, parts: '520+' }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Popular</span>
            <span className="text-primary"> Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compatible parts for all major automotive brands. Find the perfect fit 
            for your vehicle with our extensive brand coverage and expert compatibility.
          </p>
        </div>

        {/* Brands Grid - Exactly like reference */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <Card 
              key={brand.name}
              className="group hover-lift cursor-pointer glass-card border-2 border-primary/20 bg-background/80 backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-background/90 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center min-h-[140px] justify-between">
                {/* Brand Logo Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center bg-card/50 rounded-2xl group-hover:scale-110 group-hover:bg-card/70 transition-all duration-300 border border-border/30">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    onError={(e) => {
                      // Fallback to text
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-black text-lg';
                      fallback.textContent = brand.name.charAt(0);
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>

                {/* Brand Info */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-black text-base md:text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground font-semibold">
                    {brand.parts} Parts
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black mb-4">
              <span className="text-foreground">Can't find your brand?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              We work with over 100+ automotive brands. Contact our experts to find 
              compatible parts for any vehicle make or model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow hover-scale transition-all">
                  Contact Expert
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                  View All Brands
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;