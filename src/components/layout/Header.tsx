import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon, BellIcon } from '@heroicons/react/24/outline';
import { getSellerRoute } from '../../utils/sellerUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const categories: string[] = [
    // All requested categories have been removed
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top blue bar */}
      <div className="bg-blue-600 text-white text-sm min-h-[48px] flex items-center">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to={getSellerRoute()} className="hover:text-blue-200 transition-colors">
                Seller Centre
              </Link>
              <span className="text-blue-300">|</span>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Download
              </a>
              <span className="text-blue-300">|</span>
              <div className="flex items-center space-x-3">
                <span>Follow us on</span>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  📘
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  📷
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>🔔</span>
                <span>Notifications</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>❓</span>
                <span>Help</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <span>🌐</span>
                <span>English</span>
                <span>⌄</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-6 py-3">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Logo - Matching Shopee's exact logo */}
          <div className="col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 px-1 py-1">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg shadow-md">
                  S
                </div>
                <span className="text-blue-600 text-xl font-bold ml-2">Shopee</span>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop - Extended width but with proper spacing */}
          <div className="col-span-5 lg:col-span-6 hidden md:block px-2">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search in Shopee"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-14 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-600 text-sm shadow-sm hover:shadow-md transition-shadow"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md"
                >
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right side actions */}
          <div className="col-span-4 lg:col-span-4 flex items-center justify-end space-x-3 px-2">
            {/* Search icon - Mobile */}
            <button className="md:hidden p-1 text-gray-600 hover:text-blue-600 transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="hidden lg:flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50">
              <HeartIcon className="h-4 w-4" />
              <span className="text-xs hidden xl:block font-medium">Wishlist</span>
            </Link>

            {/* Notifications */}
            <button className="hidden lg:flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50">
              <div className="relative">
                <BellIcon className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-3 w-3 flex items-center justify-center text-[9px] font-bold">3</span>
              </div>
              <span className="text-xs hidden xl:block font-medium">Notifications</span>
            </button>

            {/* Cart */}
            <Link to="/cart" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50">
              <div className="relative">
                <ShoppingCartIcon className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-3 w-3 flex items-center justify-center text-[9px] font-bold">2</span>
              </div>
              <span className="text-xs hidden lg:block font-medium">Cart</span>
            </Link>

            {/* Account */}
            <Link to="/account" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50">
              <UserIcon className="h-4 w-4" />
              <span className="text-xs hidden lg:block font-medium">Account</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Categories Navigation - Desktop - Hidden since categories are removed */}
        {categories.length > 0 && (
          <nav className="mt-4 hidden lg:block">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-primary-500 transition-colors text-sm font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {categories.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;