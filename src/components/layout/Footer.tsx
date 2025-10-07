import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/track-order" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* About ShopHub */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About ShopHub</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/investor-relations" className="hover:text-white transition-colors">Investor Relations</Link></li>
            </ul>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Sellers</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/seller/register" className="hover:text-white transition-colors">Start Selling</Link></li>
              <li><Link to="/seller/help" className="hover:text-white transition-colors">Seller Center</Link></li>
              <li><Link to="/seller/fees" className="hover:text-white transition-colors">Selling Fees</Link></li>
              <li><Link to="/seller/tools" className="hover:text-white transition-colors">Seller Tools</Link></li>
              <li><Link to="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/intellectual-property" className="hover:text-white transition-colors">Intellectual Property</Link></li>
              <li><Link to="/prohibited-items" className="hover:text-white transition-colors">Prohibited Items</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              SH
            </div>
            <div>
              <div className="text-xl font-bold">ShopHub</div>
              <div className="text-gray-400 text-sm">Your trusted marketplace</div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 ShopHub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Connect with us on social media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;