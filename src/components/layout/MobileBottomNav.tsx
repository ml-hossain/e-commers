import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, Squares2X2Icon, ShoppingCartIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Categories', href: '/categories', icon: Squares2X2Icon },
    { name: 'Cart', href: '/cart', icon: ShoppingCartIcon },
    { name: 'Orders', href: '/orders', icon: ClipboardDocumentListIcon },
    { name: 'Account', href: '/account', icon: UserIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
      <nav className="flex">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-1 ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              } transition-colors`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1 font-medium">{item.name}</span>
              {item.name === 'Cart' && (
                <span className="absolute top-1 right-1/4 bg-yellow-500 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  2
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileBottomNav;