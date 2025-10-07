import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';

const CategoryPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Relevance');



  // Mock products data - Testing different scenarios
  const allProducts: Product[] = [
    // Test Case 1: Mall badge with long title
    {
      id: 1,
      name: 'Samsung Galaxy A55 5G (8GB+256GB) Mystery Black Edition',
      price: 1299.00,
      originalPrice: 1599.00,
      rating: '4.8',
      reviews: 328,
      sold: 174,
      discount: 32,
      image: '📱',
      mall: true,
      freeShipping: true,
      flashSale: false,
      choice: false,
      location: 'Selangor'
    },
    // Test Case 2: Choice badge with medium title
    {
      id: 2,
      name: 'iPhone 15 Pro Max 256GB Natural Titanium',
      price: 2899.00,
      originalPrice: 3299.00,
      rating: '4.9',
      reviews: 156,
      sold: 89,
      discount: 22,
      image: '📱',
      mall: false,
      freeShipping: false,
      flashSale: true,
      choice: true,
      location: 'Kuala Lumpur'
    },
    // Test Case 3: No badge with short title
    {
      id: 3,
      name: 'OPPO A79 5G Black',
      price: 899.00,
      originalPrice: 1199.00,
      rating: '4.5',
      reviews: 234,
      sold: 456,
      discount: 25,
      image: '📱',
      mall: false,
      freeShipping: true,
      flashSale: false,
      choice: false,
      location: 'Penang'
    },
    // Test Case 4: Mall badge with very long title
    {
      id: 4,
      name: 'Xiaomi Redmi Note 13 Pro 5G 8GB RAM 256GB Storage Midnight Black Special Edition',
      price: 456.00,
      originalPrice: 599.00,
      rating: '4.7',
      reviews: 567,
      sold: 234,
      discount: 24,
      image: '📱',
      mall: true,
      freeShipping: false,
      flashSale: true,
      choice: false,
      location: 'Johor'
    }
  ];
  
  // Create more products by repeating the test cases
  const extendedProducts: Product[] = [];
  for (let i = 0; i < 30; i++) {
    const baseProduct = allProducts[i % 4];
    extendedProducts.push({
      ...baseProduct,
      id: i + 1,
      price: baseProduct.price + (Math.random() * 100),
      sold: Math.floor(Math.random() * 500) + 10,
      rating: (4 + Math.random()).toFixed(1)
    });
  }

  const productsPerPage = 15;
  const totalPages = Math.ceil(extendedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = extendedProducts.slice(startIndex, startIndex + productsPerPage);





  return (
    <div className="min-h-screen bg-gray-50">

      {/* Voucher Section */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {/* RM5 OFF Voucher */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">RM5 OFF</h3>
                <p className="text-sm opacity-90 mb-3">Min. Spend RM50</p>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  COLLECT NOW
                </button>
              </div>
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
            </div>

            {/* RM15 OFF Voucher */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">RM15 OFF</h3>
                <p className="text-sm opacity-90 mb-3">Min. Spend RM150</p>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  COLLECT NOW
                </button>
              </div>
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
            </div>

            {/* RM30 OFF Voucher */}
            <div className="bg-gradient-to-r from-gray-800 to-black rounded-lg p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">RM30 OFF</h3>
                <p className="text-sm opacity-70 mb-3">Min. Spend RM300</p>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  COLLECT NOW
                </button>
              </div>
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>
              <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white bg-opacity-5 rounded-full"></div>
            </div>

            {/* FREE SHIPPING Voucher */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">FREE SHIPPING</h3>
                <p className="text-sm opacity-90 mb-3">No Min. Spend</p>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  COLLECT NOW
                </button>
              </div>
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Shopee Mall Section */}
      <div className="bg-white">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-red-600">SHOPEE MALL</h2>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1">
              See All →
            </a>
          </div>
          
          {/* Brand Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 lg:gap-8 mb-4 sm:mb-8">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-gray-700">CERRUTI 1881</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-blue-600">Q&Q</span>
              <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-gray-700">FOSSIL</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-black">
              <span className="text-lg font-bold text-orange-500">ice</span>
              <span className="text-xs text-orange-500">watch</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-black">swatch</span>
              <span className="text-red-600 text-lg">+</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-sm font-bold text-gray-700">A|X</span>
              <span className="text-xs text-gray-500">ARMANI EXCHANGE</span>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-black">
              <span className="text-lg font-bold text-white">TISSOT</span>
              <span className="text-xs text-red-500">SWISS WATCHES SINCE 1853</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-2xl font-bold text-blue-800">CASIO</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-gray-700">BONIA</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-black">
              <span className="text-lg font-bold text-white">CK</span>
              <span className="text-xs text-white">CITY CHAIN</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-pink-500">bb</span>
              <span className="text-xs text-gray-500">concept.</span>
            </div>
            <div className="flex flex-col items-center justify-center h-20 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-lg font-bold text-gray-700">GIORDANO</span>
            </div>
          </div>
          
          {/* Featured Collections */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-600 mb-6">FEATURED COLLECTIONS</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {/* Sport Watches */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <span className="text-6xl">⌚</span>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-800 text-white py-2 rounded text-sm font-medium mb-2">
                    SHOP NOW {'>'}
                  </button>
                  <h4 className="font-medium text-gray-900 mb-1">Sport Watches</h4>
                  <p className="text-sm text-gray-500">From <span className="text-red-600 font-bold">RM1.50</span></p>
                </div>
              </div>
              
              {/* Couple Watches */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <span className="text-6xl">⌚</span>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-800 text-white py-2 rounded text-sm font-medium mb-2">
                    SHOP NOW {'>'}
                  </button>
                  <h4 className="font-medium text-gray-900 mb-1">Couple Watches</h4>
                  <p className="text-sm text-gray-500">From <span className="text-red-600 font-bold">RM1.00</span></p>
                </div>
              </div>
              
              {/* Leather Watches */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <span className="text-6xl">⌚</span>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-800 text-white py-2 rounded text-sm font-medium mb-2">
                    SHOP NOW {'>'}
                  </button>
                  <h4 className="font-medium text-gray-900 mb-1">Leather Watches</h4>
                  <p className="text-sm text-gray-500">From <span className="text-red-600 font-bold">RM3.08</span></p>
                </div>
              </div>
              
              {/* Gold & Silver Watches */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <span className="text-6xl">⌚</span>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-800 text-white py-2 rounded text-sm font-medium mb-2">
                    SHOP NOW {'>'}
                  </button>
                  <h4 className="font-medium text-gray-900 mb-1">Gold & Silver Watches</h4>
                  <p className="text-sm text-gray-500">From <span className="text-red-600 font-bold">RM1.50</span></p>
                </div>
              </div>
              
              {/* Watch Accessories */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <span className="text-6xl">⌚</span>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-800 text-white py-2 rounded text-sm font-medium mb-2">
                    SHOP NOW {'>'}
                  </button>
                  <h4 className="font-medium text-gray-900 mb-1">Watch Accessories</h4>
                  <p className="text-sm text-gray-500">From <span className="text-red-600 font-bold">RM0.88</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          {/* Left Sidebar - Filters */}
          <div className="hidden lg:block w-64">
            {/* Categories Section */}
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
              <div className="space-y-1">
                <div className="text-sm text-orange-600 cursor-pointer font-medium">Mobile & Accessories</div>
                <div className="text-sm text-gray-600 cursor-pointer pl-3">Mobile Phones</div>
                <div className="text-sm text-gray-600 cursor-pointer pl-3">Phone & Data Accessories</div>
              </div>
            </div>

            {/* Brands Section */}
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Brand</h3>
              <div className="space-y-1.5">
                {['Samsung', 'Apple', 'Xiaomi', 'OPPO', 'Huawei', 'Realme', 'OnePlus', 'Vivo'].map((brand) => (
                  <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Min"
                    className="w-0 flex-1 min-w-0 border border-gray-300 rounded-md px-2 py-2 text-sm text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white"
                  />
                  <span className="text-gray-400 text-sm">-</span>
                  <input 
                    type="text" 
                    placeholder="Max"
                    className="w-0 flex-1 min-w-0 border border-gray-300 rounded-md px-2 py-2 text-sm text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none bg-white"
                  />
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-md text-sm font-bold uppercase tracking-wide transition-colors shadow-sm">
                  APPLY
                </button>
              </div>
            </div>

            {/* Shipping Options */}
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Shipping Options</h3>
              <div className="space-y-1.5">
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Free Shipping</span>
                </label>
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Rating */}
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Rating</h3>
              <div className="space-y-1.5">
                {[5, 4, 3].map((rating) => (
                  <label key={rating} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                      <span className="ml-1 text-sm text-gray-600">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Service & Promotions */}
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Service & Promotions</h3>
              <div className="space-y-1.5">
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Shopee Choice</span>
                </label>
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Flash Sale</span>
                </label>
              </div>
            </div>

            {/* Others */}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Others</h3>
              <div className="space-y-1.5">
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Video</span>
                </label>
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Bundle Deal</span>
                </label>
                <label className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-3.5 h-3.5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-2" />
                  <span className="text-sm text-gray-700">Discount</span>
                </label>
              </div>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-3">
            <button className="w-full bg-white border border-gray-300 rounded-lg p-3 flex items-center justify-between text-sm font-medium shadow-sm">
              <span>Filters & Sort</span>
              <span>⚙️</span>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Sort and Filter Bar */}
            <div className="bg-white rounded-lg p-3 mb-3 space-y-2">
              <div className="text-sm text-gray-600">
                Sort By:
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {['Relevance', 'Latest', 'Top Sales', 'Price'].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => setSortBy(sort)}
                    className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded whitespace-nowrap ${
                      sortBy === sort 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid - Using ProductCard Component */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination - Exact Shopee Style */}
            <div className="flex justify-center mt-4 sm:mt-8 mb-2 sm:mb-4">
              <div className="flex items-center">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 text-sm"
                >
                  ←
                </button>
                
                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 7) {
                    pageNum = i + 1;
                  } else if (currentPage <= 4) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i;
                  } else {
                    pageNum = currentPage - 3 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-2 sm:px-3 py-1 sm:py-2 border-t border-b border-r border-gray-300 text-sm ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 text-sm"
                >
                  →
                </button>
              </div>
            </div>

            {/* Page info */}
            <div className="text-center text-sm text-gray-600 mb-8">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;