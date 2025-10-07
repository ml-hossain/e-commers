import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Helper function to render title with badge
  const renderTitle = () => {
    const words = product.name.split(' ');
    
    if (product.mall || product.choice) {
      return (
        <div className="h-8 overflow-hidden">
          {/* First Line: Badge + Title Start */}
          <div className="flex items-start gap-1 mb-0.5">
            <span className={`${product.mall ? 'bg-red-500' : 'bg-orange-500'} text-white text-xs px-1 rounded font-bold leading-none inline-block flex-shrink-0`}>
              {product.mall ? 'Mall' : 'Choice'}
            </span>
            <span className="text-xs text-gray-900 group-hover:text-blue-600 leading-tight">
              {words.slice(0, 3).join(' ')}
            </span>
          </div>
          
          {/* Second Line: Continue from left edge */}
          {words.length > 3 && (
            <div className="text-xs text-gray-900 group-hover:text-blue-600 leading-tight truncate">
              {words.slice(3).join(' ')}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="h-8 overflow-hidden">
          <h3 className="text-xs text-gray-900 group-hover:text-blue-600 leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded border hover:shadow-lg transition-shadow cursor-pointer group w-full overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square w-full">
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-2 sm:p-4">
          <span className="text-2xl sm:text-4xl">{product.image}</span>
        </div>
        
        {/* Discount Badge */}
        <div className="absolute top-1 left-1">
          <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded font-bold">
            -{product.discount}%
          </span>
        </div>
        
        {/* Wishlist Heart */}
        <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-6 h-6 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
            <HeartIcon className="w-3 h-3 text-gray-600" />
          </button>
        </div>
        
        {/* Free Shipping Badge */}
        {product.freeShipping && (
          <div className="absolute bottom-1 left-1">
            <span className="bg-green-500 text-white text-xs px-1 py-0.5 rounded">
              Free Shipping
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-1.5 sm:p-2">
        {/* Product Title */}
        <div className="mb-1 sm:mb-2">
          {renderTitle()}
        </div>
        
        {/* Price Section */}
        <div className="mb-1 sm:mb-2">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-red-600 font-bold text-sm">
              RM{product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-600 bg-gray-100 px-1 rounded">
              -{product.discount}%
            </span>
          </div>
        </div>
        
        {/* Offer Badges */}
        <div className="mb-1 sm:mb-2">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">
              RM{Math.floor(product.discount * 0.3)} off
            </span>
            {product.freeShipping && (
              <span className="bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                COD
              </span>
            )}
          </div>
        </div>
        
        {/* Rating and Sales */}
        <div className="mb-1">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarSolidIcon
                  key={i}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${
                    i < Math.floor(parseFloat(product.rating)) ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">{product.sold} sold</span>
          </div>
        </div>
        
        {/* Delivery Info */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-teal-500">🚚</span>
            <span>{'< 2 Days'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span className="truncate">{product.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;