import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Leather Seat Cover Set',
      category: 'Interior',
      price: '$109',
      originalPrice: '$155',
      rating: 4.8,
      reviews: 156,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/FD/EW/IS/3693396/premium-synthetic-leather-car-seat-cover-500x500.jpg',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'LED Headlight Assembly',
      category: 'Exterior',
      price: '$195',
      originalPrice: '$240',
      rating: 4.9,
      reviews: 89,
      image: 'https://m.media-amazon.com/images/I/612H6WfjeSL._AC_.jpg',
      badge: 'New Arrival'
    },
    {
      id: 3,
      name: 'Carbon Fiber Side Mirror',
      category: 'Exterior',
      price: '$65',
      originalPrice: '$95',
      rating: 4.7,
      reviews: 234,
      image: 'https://i.ebayimg.com/images/g/jywAAOSwouhmzuJ~/s-l400.jpg',
      badge: '31% Off'
    },
    {
      id: 4,
      name: 'Dashboard Trim Kit',
      category: 'Interior',
      price: '$48',
      originalPrice: '$72',
      rating: 4.6,
      reviews: 67,
      image: 'https://www.suncoastparts.com/mm5/graphics/00000002/991%20981%20718%20dash%20trim%20porsche%20painted.jpg',
      badge: 'Popular'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-primary text-primary-foreground';
      case 'New Arrival': return 'bg-green-500 text-white';
      case 'Popular': return 'bg-blue-500 text-white';
      default: return 'bg-red-500 text-white';
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">Featured</span>
            <span className="text-primary"> Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our top-selling auto parts trusted by thousands of customers. 
            Premium quality, competitive prices, and expert recommendations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-0">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group hover-lift cursor-pointer glass-card border-border/50 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <CardContent className="p-4">
                  {/* Category */}
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>

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
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Buy Now Button */}
                  <Link to="/contact">
                    <Button 
                      className="w-full hover-glow group-hover:scale-105 transition-transform"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
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
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg hover-lift">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;