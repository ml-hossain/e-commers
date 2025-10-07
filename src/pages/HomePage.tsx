import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

// Mock flash sale products
const flashSaleProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: "4999",
    originalPrice: "5999", 
    discount: "17",
    rating: 4.8,
    reviews: 1234,
    sold: "89",
    image: "📱"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: "3599",
    originalPrice: "4299",
    discount: "16",
    rating: 4.7,
    reviews: 856,
    sold: "156",
    image: "📱"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: "5799",
    originalPrice: "6499",
    discount: "11",
    rating: 4.9,
    reviews: 432,
    sold: "43",
    image: "💻"
  },
  {
    id: 4,
    name: "AirPods Pro 2nd Gen",
    price: "799",
    originalPrice: "1099",
    discount: "27",
    rating: 4.6,
    reviews: 2145,
    sold: "234",
    image: "🎧"
  },
  {
    id: 5,
    name: "iPad Air 5th Gen",
    price: "2299",
    originalPrice: "2799",
    discount: "18",
    rating: 4.8,
    reviews: 678,
    sold: "67",
    image: "📱"
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    price: "1199",
    originalPrice: "1599",
    discount: "25",
    rating: 4.7,
    reviews: 934,
    sold: "98",
    image: "🎧"
  }
];

const HomePage = () => {
  // Promotional banners data
  const promotionalBanners = [
    {
      id: 1,
      title: "10.10 DEALS",
      subtitle: "UP TO 50% OFF",
      buttonText: "SHOP NOW ALL DAY",
      bgGradient: "from-blue-600 to-purple-700",
      products: ["📱", "⌚", "💄"]
    },
    {
      id: 2,
      title: "FLASH SALE",
      subtitle: "UP TO 70% OFF",
      buttonText: "LIMITED TIME ONLY",
      bgGradient: "from-red-500 to-orange-600",
      products: ["💻", "🎧", "📷"]
    },
    {
      id: 3,
      title: "MEGA SALE",
      subtitle: "UP TO 80% OFF",
      buttonText: "SHOP NOW",
      bgGradient: "from-green-500 to-teal-600",
      products: ["👕", "👜", "👟"]
    },
    {
      id: 4,
      title: "BRAND FESTIVAL",
      subtitle: "UP TO 60% OFF",
      buttonText: "EXPLORE BRANDS",
      bgGradient: "from-purple-600 to-pink-600",
      products: ["🎮", "📚", "🏠"]
    }
  ];

  // Banner rotation state
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate banners every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => 
          (prevIndex + 1) % promotionalBanners.length
        );
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [promotionalBanners.length]);

  const currentBanner = promotionalBanners[currentBannerIndex];

  // Service features with demo data and functionality
  const serviceFeatures = [
    {
      name: 'Free Shipping',
      subtitle: 'On orders RM40+',
      icon: () => <span className="text-2xl">🚚</span>,
      color: 'bg-blue-100 text-blue-600',
      demoData: {
        currentSpending: 'RM35.00',
        remaining: 'RM5.00',
        message: 'Add RM5 more for FREE shipping!'
      },
      route: '/shipping'
    },
    {
      name: 'Daily Deals',
      subtitle: 'Up to 50% Off',
      icon: () => <span className="text-2xl">🏷️</span>,
      color: 'bg-blue-100 text-blue-600',
      demoData: {
        activeDeals: 247,
        topDiscount: '50%',
        endTime: '23h 45m remaining'
      },
      route: '/daily-deals'
    },
    {
      name: 'Vouchers',
      subtitle: 'Save up to RM150',
      icon: () => <span className="text-2xl">🎫</span>,
      color: 'bg-yellow-100 text-black',
      demoData: {
        available: 12,
        totalSavings: 'RM150',
        expiring: '3 vouchers expiring soon'
      },
      route: '/vouchers'
    },
    {
      name: 'Shopee Choice',
      subtitle: 'Premium Quality',
      icon: () => <span className="text-2xl">🛡️</span>,
      color: 'bg-black text-white',
      demoData: {
        products: '10,000+',
        rating: '4.8★',
        guarantee: '100% Authentic'
      },
      route: '/shopee-choice'
    },
    {
      name: 'Live Shopping',
      subtitle: 'Interactive Deals',
      icon: () => <span className="text-2xl">📺</span>,
      color: 'bg-blue-100 text-blue-600',
      demoData: {
        liveShows: 45,
        viewers: '25.6K',
        discount: 'Up to 70% OFF'
      },
      route: '/live-shopping'
    },
    {
      name: 'Supermarket',
      subtitle: 'Fresh Groceries',
      icon: ShoppingCartIcon,
      color: 'bg-yellow-100 text-black',
      demoData: {
        freshItems: '2,500+',
        delivery: '2-hour delivery',
        deals: '30% OFF fruits'
      },
      route: '/supermarket'
    },
    {
      name: 'Global Brands',
      subtitle: 'International',
      icon: () => <span className="text-2xl">🌍</span>,
      color: 'bg-black text-white',
      demoData: {
        brands: '500+',
        countries: '15 countries',
        shipping: 'Global shipping'
      },
      route: '/global-brands'
    },
    {
      name: 'COD Available',
      subtitle: 'Pay on Delivery',
      icon: () => <span className="text-2xl">💰</span>,
      color: 'bg-yellow-100 text-black',
      demoData: {
        locations: '650+ cities',
        fee: 'RM2 COD fee',
        limit: 'Up to RM1,000'
      },
      route: '/cod'
    },
    {
      name: 'Collection Point',
      subtitle: 'Pickup Service',
      icon: HomeIcon,
      color: 'bg-blue-100 text-blue-600',
      demoData: {
        points: '1,200+ locations',
        hours: '24/7 pickup',
        nearYou: '5 points nearby'
      },
      route: '/collection-points'
    },
    {
      name: 'Rewards',
      subtitle: 'Coins & Vouchers',
      icon: UserIcon,
      color: 'bg-black text-white',
      demoData: {
        coins: '2,450 coins',
        value: 'Worth RM24.50',
        newRewards: '5 new rewards'
      },
      route: '/rewards'
    }
  ];

  // Handle service feature clicks - navigate directly to demo pages
  const handleServiceClick = (feature: any) => {
    // Navigate directly to the demo page
    window.location.href = feature.route;
  };

  // Categories with professional icons - Shopee Style
  const categories = [
    { 
      name: 'Mobile & Accessories',
      icon: () => <span className="text-2xl">📱</span>,
      color: 'bg-blue-500 text-white'
    },
    { 
      name: 'Electronics',
      icon: () => <span className="text-2xl">⚡</span>,
      color: 'bg-purple-500 text-white'
    },
    { 
      name: 'Fashion',
      icon: HeartIcon,
      color: 'bg-pink-500 text-white'
    },
    { 
      name: 'Health & Beauty',
      icon: UserIcon,
      color: 'bg-green-500 text-white'
    },
    { 
      name: 'Home & Living',
      icon: HomeIcon,
      color: 'bg-orange-500 text-white'
    },
    { 
      name: 'Baby & Toys',
      icon: () => <span className="text-2xl">🧸</span>,
      color: 'bg-yellow-500 text-black'
    },
    { 
      name: 'Groceries',
      icon: ShoppingCartIcon,
      color: 'bg-red-500 text-white'
    },
    { 
      name: 'Sports & Travel',
      icon: () => <span className="text-2xl">⚽</span>,
      color: 'bg-blue-600 text-white'
    },
    { 
      name: 'Automotive',
      icon: () => <span className="text-2xl">🚗</span>,
      color: 'bg-gray-700 text-white'
    },
    { 
      name: 'Books & Media',
      icon: () => <span className="text-2xl">📚</span>,
      color: 'bg-indigo-500 text-white'
    },
    { 
      name: 'Gaming',
      icon: UserIcon,
      color: 'bg-purple-600 text-white'
    },
    { 
      name: 'Pet Care',
      icon: HeartIcon,
      color: 'bg-green-600 text-white'
    },
    { 
      name: 'Watches',
      icon: () => <span className="text-2xl">📈</span>,
      color: 'bg-black text-white'
    },
    { 
      name: 'Shoes',
      icon: ShoppingCartIcon,
      color: 'bg-amber-700 text-white'
    },
    { 
      name: 'Bags & Travel',
      icon: HomeIcon,
      color: 'bg-teal-500 text-white'
    },
    { 
      name: 'Jewelry',
      icon: () => <span className="text-2xl">🛡️</span>,
      color: 'bg-yellow-600 text-white'
    },
    { 
      name: 'Hobbies',
      icon: () => <span className="text-2xl">⚙️</span>,
      color: 'bg-blue-700 text-white'
    },
    { 
      name: 'Food & Beverages',
      icon: () => <span className="text-2xl">📱</span>,
      color: 'bg-red-600 text-white'
    },
    { 
      name: 'Computers',
      icon: UserIcon,
      color: 'bg-gray-600 text-white'
    },
    { 
      name: 'Services',
      icon: () => <span className="text-2xl">🌍</span>,
      color: 'bg-blue-800 text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rotating Promotional Banners - Multiple banners cycling automatically */}
      <section className="bg-white pt-4">
        <div className="container mx-auto py-6 px-4">
          <div className="flex gap-6 max-w-7xl mx-auto">
            {/* Main Rotating Banner */}
            <div className="flex-1 relative">
              <div className={`bg-gradient-to-r ${currentBanner.bgGradient} rounded-xl p-8 text-white relative overflow-hidden h-72 transition-all duration-500 ${isTransitioning ? 'opacity-80 scale-98' : 'opacity-100 scale-100'}`}>
                <div className="absolute top-6 left-6 bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                  {currentBanner.title.split(' ')[0]}
                </div>
                <div className="mt-12">
                  <div className="text-white text-4xl font-bold mb-3">
                    {currentBanner.title}
                  </div>
                  <div className="text-yellow-300 text-6xl font-black mb-4">
                    {currentBanner.subtitle}
                  </div>
                  <div className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full inline-block text-base font-bold cursor-pointer transition-colors shadow-lg">
                    {currentBanner.buttonText}
                  </div>
                </div>
                {/* Professional Product Showcase */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
                      <HeartIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all">
                      <ShoppingCartIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Banner Navigation - Previous/Next Arrows */}
                <button 
                  onClick={() => setCurrentBannerIndex(currentBannerIndex === 0 ? promotionalBanners.length - 1 : currentBannerIndex - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-white font-bold text-xl">‹</span>
                </button>
                <button 
                  onClick={() => setCurrentBannerIndex((currentBannerIndex + 1) % promotionalBanners.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-white font-bold text-xl">›</span>
                </button>
              </div>
              
              {/* Banner Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {promotionalBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBannerIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentBannerIndex 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-white border-2 border-blue-600 hover:bg-blue-50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Side Promotional Cards */}
            <div className="w-80 space-y-4">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 text-white h-32 flex flex-col justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-sm font-bold mb-1">STACK & SAVE</div>
                <div className="text-xl font-bold">UP TO 40% OFF</div>
                <div className="text-sm opacity-90">Combine vouchers for max savings</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white h-32 flex flex-col justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-xl font-bold mb-1">BUY eVOUCHERS</div>
                <div className="text-sm opacity-90">Digital vouchers for lifestyle & entertainment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features - Matching Shopee's service icons */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 max-w-7xl mx-auto">
            {serviceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-4 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer group relative"
                  onClick={() => handleServiceClick(feature)}
                  title={`Click to see ${feature.name} demo data`}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-700 leading-tight font-medium block">{feature.name}</span>
                  <span className="text-xs text-gray-500 block">{feature.subtitle}</span>
                  
                  {/* Demo indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section - Shopee Style Design */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header with "See All" link */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">CATEGORIES</h2>
              <Link 
                to="/categories" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                See All
                <span className="text-lg">→</span>
              </Link>
            </div>
            
            {/* Categories Grid - Shopee Style */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
              {categories.slice(0, 20).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link 
                    key={index}
                    to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex flex-col items-center text-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    {/* Icon Container - Shopee Style */}
                    <div className="relative mb-3">
                      <div className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center shadow-sm border-2 border-white group-hover:scale-105 transition-transform duration-200`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      {/* New/Hot Badge for some categories */}
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                          HOT
                        </div>
                      )}
                    </div>
                    
                    {/* Category Name */}
                    <span className="text-xs text-gray-700 font-medium leading-tight text-center group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            
            {/* Popular Categories Banner */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🔥</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Popular This Week</h3>
                    <p className="text-sm text-gray-600">Trending categories with best deals</p>
                  </div>
                </div>
                <Link 
                  to="/trending" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Explore
                </Link>
              </div>
              
              {/* Mini trending categories */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                {categories.slice(0, 6).map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Link 
                      key={index}
                      to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center mb-2`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-gray-700 font-medium text-center leading-tight">
                        {category.name.split(' ')[0]}
                      </span>
                      <span className="text-xs text-blue-600 font-bold mt-1">
                        -{(index + 1) * 10}%
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section - Matching Shopee Design */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
            <div className="flex items-center space-x-6">
              <h2 className="text-3xl font-bold flex items-center text-black">
                <span className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl">📈</span>
                </span>
                FLASH SALE
              </h2>
              <div className="flex items-center space-x-4 text-base">
                <span className="font-medium">ON SALE NOW</span>
                <div className="flex space-x-2">
                  <div className="bg-black bg-opacity-40 px-3 py-2 rounded-lg font-bold">00</div>
                  <span className="text-2xl">:</span>
                  <div className="bg-black bg-opacity-40 px-3 py-2 rounded-lg font-bold">12</div>
                  <span className="text-2xl">:</span>
                  <div className="bg-black bg-opacity-40 px-3 py-2 rounded-lg font-bold">34</div>
                </div>
              </div>
            </div>
            <Link to="/flash-sale" className="text-black hover:text-blue-600 text-base font-medium">
              SHOP ALL PRODUCTS →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {[
              { name: "iPhone 15 Pro Max 256GB", originalPrice: "RM5,999", salePrice: "RM4,999", discount: "17%", sold: "89" },
              { name: "Samsung Galaxy S24 Ultra", originalPrice: "RM4,299", salePrice: "RM3,599", discount: "16%", sold: "156" },
              { name: "MacBook Air M2 13-inch", originalPrice: "RM6,499", salePrice: "RM5,799", discount: "11%", sold: "43" },
              { name: "AirPods Pro 2nd Gen", originalPrice: "RM1,099", salePrice: "RM799", discount: "27%", sold: "234" },
              { name: "iPad Air 5th Gen Wi-Fi", originalPrice: "RM2,799", salePrice: "RM2,299", discount: "18%", sold: "67" },
              { name: "Sony WH-1000XM5 Headphones", originalPrice: "RM1,599", salePrice: "RM1,199", discount: "25%", sold: "98" }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 text-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer">
                <div className="relative">
                  <div className="aspect-square bg-gray-50 border border-gray-200 flex items-center justify-center p-6">
                    <div className="w-20 h-20 bg-white shadow-sm rounded-lg flex items-center justify-center">
                      {index % 6 === 0 && <span className="text-3xl">📱</span>}
                      {index % 6 === 1 && <span className="text-3xl">🌍</span>}
                      {index % 6 === 2 && <span className="text-3xl">⚙️</span>}
                      {index % 6 === 3 && <span className="text-3xl">🛡️</span>}
                      {index % 6 === 4 && <HeartIcon className="w-10 h-10 text-blue-600" />}
                      {index % 6 === 5 && <ShoppingCartIcon className="w-10 h-10 text-black" />}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {product.discount} OFF
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-sm font-medium mb-2 leading-5 text-gray-900 h-10 overflow-hidden">{product.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600 font-bold text-lg">{product.salePrice}</span>
                      <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                        {product.sold} sold
                      </div>
                      <div className="text-xs text-yellow-600 font-medium">
                        {product.discount} OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* MALL Section - Premium Brands */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-lg mr-4 text-lg font-bold">
                MALL
              </span>
              Premium Brands of the Week
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="product-card group cursor-pointer bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <div className="relative">
                  <div className="aspect-square bg-gray-50 border border-gray-200 rounded-t-lg flex items-center justify-center p-6">
                    <div className="w-20 h-20 bg-white shadow-md rounded-lg flex items-center justify-center border border-gray-100">
                      <span className="text-3xl">🛡️</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      MALL
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-2 right-2 bg-white bg-opacity-80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-blue-600">
                      RM{product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      RM{product.originalPrice}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-600">
                    {product.sold} sold
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/mall" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              VIEW MORE →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stack & Save Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-3">STACK & SAVE UP TO 40% OFF</h2>
              <p className="text-lg opacity-90">Stack your vouchers for maximum savings!</p>
            </div>
            <Link to="/vouchers" className="text-blue-600 hover:underline text-lg font-medium">
              COLLECT VOUCHERS →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "RM5 OFF", subtitle: "Min. Spend RM50", color: "bg-blue-600" },
              { title: "RM15 OFF", subtitle: "Min. Spend RM150", color: "bg-yellow-500" },
              { title: "RM30 OFF", subtitle: "Min. Spend RM300", color: "bg-black" },
              { title: "FREE SHIPPING", subtitle: "No Min. Spend", color: "bg-blue-600" }
            ].map((voucher, index) => (
              <div key={index} className={`${voucher.color} text-white rounded-lg p-5 text-center cursor-pointer shadow-sm border border-opacity-20`}>
                <div className="text-2xl font-bold mb-2">{voucher.title}</div>
                <div className="text-sm mb-4 opacity-90">{voucher.subtitle}</div>
                <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors border border-black">
                  COLLECT NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPEE EVOUCHERS Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-3">BUY SHOPEE eVOUCHERS</h2>
              <p className="text-lg opacity-90">Get instant digital vouchers for entertainment & lifestyle</p>
            </div>
            <Link to="/evouchers" className="text-blue-600 hover:underline text-lg font-medium">
              SHOP ALL eVOUCHERS →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {[
              { name: "Transportation", icon: () => <span className="text-lg">📈</span>, discount: "5% OFF", color: "bg-blue-100 text-blue-600" },
              { name: "Food Delivery", icon: ShoppingCartIcon, discount: "RM10 OFF", color: "bg-yellow-100 text-black" },
              { name: "Entertainment", icon: () => <span className="text-lg">⚙️</span>, discount: "2% OFF", color: "bg-blue-100 text-blue-600" },
              { name: "Premium Services", icon: () => <span className="text-lg">🛡️</span>, discount: "1 Month Free", color: "bg-black text-white" },
              { name: "Digital Content", icon: () => <span className="text-lg">📱</span>, discount: "RM5 OFF", color: "bg-yellow-100 text-black" },
              { name: "Mobile Apps", icon: () => <span className="text-lg">🌍</span>, discount: "3% OFF", color: "bg-blue-100 text-blue-600" }
            ].map((voucher, index) => {
              const IconComponent = voucher.icon;
              return (
                <div key={index} className="bg-gray-50 text-gray-800 rounded-lg p-4 text-center cursor-pointer shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${voucher.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{voucher.name}</h3>
                  <div className="text-xs bg-yellow-500 text-black px-3 py-1 rounded-full font-medium">
                    {voucher.discount}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DAILY DISCOVER - Popular Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 max-w-7xl mx-auto">DAILY DISCOVER</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Premium Wireless Earbuds", price: "49", originalPrice: "89", rating: 4.8, sold: "2.1k", category: "AUDIO" },
              { name: "Premium Phone Case", price: "12", originalPrice: "25", rating: 4.6, sold: "856", category: "MOBILE" },
              { name: "Fast Charging Power Bank", price: "25", originalPrice: "45", rating: 4.9, sold: "1.5k", category: "TECH" },
              { name: "Portable Bluetooth Speaker", price: "35", originalPrice: "60", rating: 4.7, sold: "934", category: "AUDIO" },
              { name: "Fitness Smart Watch", price: "129", originalPrice: "199", rating: 4.5, sold: "567", category: "WATCH" },
              { name: "Adjustable Laptop Stand", price: "19", originalPrice: "35", rating: 4.8, sold: "743", category: "DESK" },
              { name: "Fast USB-C Cable", price: "8", originalPrice: "15", rating: 4.9, sold: "3.2k", category: "CABLE" },
              { name: "Tempered Glass Protector", price: "15", originalPrice: "29", rating: 4.6, sold: "1.8k", category: "MOBILE" },
              { name: "Quick Car Charger", price: "18", originalPrice: "32", rating: 4.7, sold: "687", category: "AUTO" },
              { name: "RGB Gaming Mouse", price: "42", originalPrice: "75", rating: 4.8, sold: "432", category: "GAME" },
              { name: "Mechanical Keyboard", price: "55", originalPrice: "89", rating: 4.5, sold: "298", category: "GAME" },
              { name: "HD Streaming Webcam", price: "35", originalPrice: "59", rating: 4.6, sold: "534", category: "TECH" }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative">
                  <div className="w-20 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center border border-gray-100">
                    {product.category === "AUDIO" && <span className="text-3xl">⚙️</span>}
                    {product.category === "MOBILE" && <span className="text-3xl">📱</span>}
                    {product.category === "TECH" && <span className="text-3xl">🌍</span>}
                    {product.category === "WATCH" && <span className="text-3xl">🛡️</span>}
                    {product.category === "DESK" && <HomeIcon className="w-10 h-10 text-black" />}
                    {product.category === "CABLE" && <span className="text-3xl">📈</span>}
                    {product.category === "AUTO" && <span className="text-3xl">💰</span>}
                    {product.category === "GAME" && <UserIcon className="w-10 h-10 text-black" />}
                  </div>
                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-gray-600">
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 leading-relaxed">{product.name}</h3>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-blue-600 font-bold text-lg">RM{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">RM{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm">★★★★★</span>
                      <span className="text-gray-600 ml-2">({product.rating})</span>
                    </div>
                    <span className="text-gray-600 font-medium">{product.sold} sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 max-w-7xl mx-auto">
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              LOAD MORE PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Deals
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on exclusive offers, new arrivals, and flash sales.
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;