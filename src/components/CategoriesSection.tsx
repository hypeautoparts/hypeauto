import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import interiorImage from '@/assets/interior-parts.jpg';
import exteriorImage from '@/assets/exterior-parts.jpg';
import bodyPartsImage from '@/assets/body-parts.jpg';

const CategoriesSection = () => {
  const categories = [
    {
      title: 'Interior Parts',
      description: 'Premium interior components including seats, dashboards, steering wheels, and gear knobs for enhanced comfort and style.',
      image: interiorImage,
      items: ['Seat Covers', 'Dashboard Trims', 'Steering Wheels', 'Floor Mats'],
      color: 'from-primary/20 to-accent/20'
    },
    {
      title: 'Exterior Parts',
      description: 'High-quality exterior components featuring headlights, bumpers, mirrors, and alloy wheels for optimal performance.',
      image: exteriorImage,
      items: ['Headlights', 'Bumpers', 'Alloy Wheels', 'Side Mirrors'],
      color: 'from-accent/20 to-primary/20'
    },
    {
      title: 'Body Parts',
      description: 'Durable body components including doors, fenders, bonnets, and panels engineered for perfect fit and finish.',
      image: bodyPartsImage,
      items: ['Doors', 'Fenders', 'Bonnets', 'Roof Panels'],
      color: 'from-primary/30 to-accent/10'
    }
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Shop by</span>
            <span className="text-primary"> Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of automotive parts categorized for easy navigation. 
            From interior comfort to exterior performance and body durability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover-lift cursor-pointer glass-card border-border/50 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Category Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-80 transition-opacity`}></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 glass-card border border-primary/30 rounded-full">
                      <span className="text-primary font-semibold text-sm">Premium Quality</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category Title */}
                  <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Items List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.items.map((item) => (
                      <span 
                        key={item}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to="/shop">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      Explore {category.title.split(' ')[0]}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link to="/shop">
            <Button size="lg" className="px-8 py-6 text-lg hover-glow">
              View All Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;