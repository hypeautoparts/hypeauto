import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 60 },
    { id: 'interior', name: 'Interior Parts', count: 20 },
    { id: 'exterior', name: 'Exterior Parts', count: 20 },
    { id: 'body', name: 'Body Parts', count: 20 }
  ];

  const products = [
    // Interior Parts
    { id: 1, name: 'Premium Leather Seat Cover Set', category: 'interior', price: '₹8,999', originalPrice: '₹12,999', rating: 4.8, reviews: 156, image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/FD/EW/IS/3693396/premium-synthetic-leather-car-seat-cover-500x500.jpg', badge: 'Best Seller' },
    { id: 2, name: 'Carbon Fiber Dashboard Trim Kit', category: 'interior', price: '₹3,999', originalPrice: '₹5,999', rating: 4.6, reviews: 67, image: 'https://d1428jhdevokot.cloudfront.net/production/catalog/product/cache/9/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/6/6/66078va030-4.jpg' },
    { id: 3, name: 'Leather Steering Wheel Cover', category: 'interior', price: '₹1,299', originalPrice: '₹1,999', rating: 4.7, reviews: 234, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXP7QS-jsN9t5DS0BNQtCOSzsucy0Ws0tekg&s' },
    { id: 4, name: 'Premium Floor Mat Set', category: 'interior', price: '₹2,499', originalPrice: '₹3,499', rating: 4.5, reviews: 89, image: 'https://www.ford.com/performance/product/images/M-13086-F60_V1.JPG?fp_width=584&fp_height=584&imformat=chrome' },
    { id: 5, name: 'LED Ambient Lighting Kit', category: 'interior', price: '₹4,999', originalPrice: '₹6,999', rating: 4.9, reviews: 123, image: 'https://ae01.alicdn.com/kf/Sdfa449af887e49bd94d3140b46981472e/18-22-in-1-213-64Color-Rainbow-Symphony-Car-Ambient-Lighting-Kit-RGB-LED-Strip-Light.jpg_.webp' },
    
    // Exterior Parts
    { id: 21, name: 'LED Headlight Assembly', category: 'exterior', price: '₹15,999', originalPrice: '₹19,999', rating: 4.9, reviews: 89, image: 'https://m.media-amazon.com/images/I/612H6WfjeSL._AC_.jpg', specs: 'Plug & play, 6000K white', badge: 'New Arrival' },
    { id: 22, name: 'Chrome Side Mirror Set', category: 'exterior', price: '₹5,499', originalPrice: '₹7,999', rating: 4.7, reviews: 134, image: 'https://m.media-amazon.com/images/I/51PghKOfnxL._UF1000,1000_QL80_.jpg', specs: 'Power folding, heated glass' },
    { id: 23, name: 'Alloy Wheel Set (17 inch)', category: 'exterior', price: '₹32,999', originalPrice: '₹39,999', rating: 4.8, reviews: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVElyN8Xqp7rTyrlqEPpw8lWFbRr01NRL2g&s', specs: 'Lightweight, 5x114.3 PCD' },
    { id: 24, name: 'Front Bumper Lip Spoiler', category: 'exterior', price: '₹3,999', originalPrice: '₹5,499', rating: 4.6, reviews: 78, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8mGZDIEMvwrl6je9CDW74FsCSldrWMtU3Q&s', specs: 'ABS plastic, glossy finish' },
    { id: 25, name: 'Roof Rails Set', category: 'exterior', price: '₹6,999', originalPrice: '₹8,999', rating: 4.5, reviews: 56, image: 'https://treknride.com/wp-content/uploads/2022/02/cross-bar4.jpg', specs: 'Aluminum, load capacity 75kg' },

    // Body Parts  
    { id: 41, name: 'Replacement Car Door', category: 'body', price: '₹18,999', originalPrice: '₹22,999', rating: 4.7, reviews: 23, image: 'https://www.breakerlink.com/blog/wp-content/uploads/2022/01/Technician-replacing-a-car-door.jpg', specs: 'OEM quality, primer finish' },
    { id: 42, name: 'Front Fender Panel', category: 'body', price: '₹8,999', originalPrice: '₹11,999', rating: 4.6, reviews: 34, image: 'https://boodmo.com/media/cache/catalog_part/images/parts/02be00ba9f34c295ba39528ceff98bd6.webp', specs: 'Steel construction, anti-rust' },
    { id: 43, name: 'Hood/Bonnet Assembly', category: 'body', price: '₹15,999', originalPrice: '₹19,999', rating: 4.8, reviews: 17, image: 'https://m.media-amazon.com/images/I/51vYIrWBzOL._SL1219_.jpg', specs: 'Pre-primed, includes hinges' },
    { id: 44, name: 'Tailgate/Boot Lid', category: 'body', price: '₹22,999', originalPrice: '₹27,999', rating: 4.5, reviews: 12, image: 'https://image.made-in-china.com/202f0j00MDaoGwnghbpI/Chery-Tiggo-7-Rear-Tailgate-Boot-Lid-Assy.webp', specs: 'Complete assembly, OEM fit' },
    { id: 45, name: 'Roof Panel Section', category: 'body', price: '₹28,999', originalPrice: '₹34,999', rating: 4.9, reviews: 8, image: 'https://www.opgi.com/product/image/OP/156077/roof-panel-1968-72-a-body-coupe-sedan-exc-cut-supreme-monte-carlo-CH27798.jpg', specs: 'Reinforced steel, weatherproof' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-primary text-primary-foreground';
      case 'New Arrival': return 'bg-green-500 text-white';
      default: return 'bg-red-500 text-white';
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-8 md:pt-12 pb-0 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center animate-slide-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
                <span className="text-foreground">Shop Auto</span>
                <span className="text-primary"> Parts</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
                Explore our comprehensive collection of premium automotive parts. 
                From interior comfort to exterior performance and body durability.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-4 md:py-6 bg-card/50 sticky top-20 z-40 backdrop-blur-md border-b border-border/20 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="hover-scale"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Filter Button */}
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <h2 className="text-xl md:text-2xl font-black text-foreground">
                {filteredProducts.length} Products Found
              </h2>
              <select className="w-full sm:w-auto px-4 py-2 border border-border rounded-lg bg-background text-foreground">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id}
                  className="group hover-lift cursor-pointer glass-card border-border/50 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                            {product.badge}
                          </span>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <CardContent className="p-4">
                      {/* Category */}
                      <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                        {product.category}
                      </div>

                      {/* Product Name */}
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      {product.specs && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {product.specs}
                        </p>
                      )}

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) 
                                  ? 'fill-primary text-primary' 
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-primary">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <Button 
                        className="w-full hover-glow group-hover:scale-105 transition-transform"
                        size="sm"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="hover-lift">
                  Load More Products
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-black mb-2 text-foreground">No Products Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;