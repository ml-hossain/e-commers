import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const ShopeeChoiceDemo: React.FC = () => {
  const choiceStats = {
    products: '10,000+',
    avgRating: 4.8,
    guarantee: '100% Authentic',
    returns: '15-day returns'
  };

  const featuredProducts = [
    { 
      id: 1, 
      name: 'iPhone 15 Pro Max (Shopee Choice)', 
      price: 'RM4,999', 
      originalPrice: 'RM5,299',
      rating: 4.9, 
      reviews: 1234,
      brand: 'Apple',
      image: '📱',
      badges: ['AUTHENTIC', 'FAST SHIPPING']
    },
    { 
      id: 2, 
      name: 'Samsung 65" QLED TV (Shopee Choice)', 
      price: 'RM2,899', 
      originalPrice: 'RM3,299',
      rating: 4.8, 
      reviews: 856,
      brand: 'Samsung',
      image: '📺',
      badges: ['WARRANTY', 'INSTALLATION']
    },
    { 
      id: 3, 
      name: 'Dyson V15 Detect (Shopee Choice)', 
      price: 'RM2,399', 
      originalPrice: 'RM2,699',
      rating: 4.7, 
      reviews: 432,
      brand: 'Dyson',
      image: '🧹',
      badges: ['AUTHENTIC', '2-YEAR WARRANTY']
    }
  ];

  const benefits = [
    { 
      icon: '🏆', 
      title: 'Premium Quality', 
      description: 'Curated selection of top-rated products' 
    },
    { 
      icon: '🔒', 
      title: '100% Authentic', 
      description: 'Guaranteed genuine products from official stores' 
    },
    { 
      icon: '🚚', 
      title: 'Fast Delivery', 
      description: 'Priority shipping within 1-2 working days' 
    },
    { 
      icon: '🔄', 
      title: 'Easy Returns', 
      description: '15-day hassle-free returns with full refund' 
    },
    { 
      icon: '🛡️', 
      title: 'Extended Warranty', 
      description: 'Additional warranty protection on electronics' 
    },
    { 
      icon: '⭐', 
      title: 'Top Rated', 
      description: 'Only products with 4.5+ star ratings qualify' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-sm p-6 mb-6 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{choiceStats.products}</div>
              <div className="text-sm opacity-90">Premium Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                {choiceStats.avgRating} <StarIcon className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{choiceStats.guarantee}</div>
              <div className="text-sm opacity-90">Authentic</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{choiceStats.returns}</div>
              <div className="text-sm opacity-90">Easy Returns</div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Featured Shopee Choice Products</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors relative">
                {/* Choice Badge */}
                <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                  CHOICE
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{product.image}</div>
                  <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                  <h4 className="text-sm font-medium mb-2 h-12 overflow-hidden">{product.name}</h4>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                      <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.badges.map((badge, index) => (
                    <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors w-full">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-6">Why Choose Shopee Choice?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-medium mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Qualify */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">How Products Qualify for Shopee Choice</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-medium mb-2">High Rating</h4>
              <p className="text-sm text-gray-600">Must have 4.5+ star rating with 100+ reviews</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-medium mb-2">Verified Store</h4>
              <p className="text-sm text-gray-600">Only from official brand stores or authorized sellers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-medium mb-2">Quality Check</h4>
              <p className="text-sm text-gray-600">Passes our strict quality and authenticity verification</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h4 className="font-medium mb-2">Performance</h4>
              <p className="text-sm text-gray-600">Excellent order fulfillment and customer service record</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopeeChoiceDemo;