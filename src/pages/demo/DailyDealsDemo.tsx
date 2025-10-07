import React from 'react';

const DailyDealsDemo: React.FC = () => {
  const dealsStats = {
    activeDeals: 247,
    topDiscount: 50,
    endTime: { hours: 23, minutes: 45 },
    soldToday: 1234
  };

  const featuredDeals = [
    { id: 1, name: 'Wireless Earbuds', originalPrice: 199, salePrice: 99, discount: 50, sold: 234, image: '🎧', timeLeft: '23h 45m' },
    { id: 2, name: 'Smart Watch', originalPrice: 299, salePrice: 179, discount: 40, sold: 156, image: '⌚', timeLeft: '23h 45m' },
    { id: 3, name: 'Bluetooth Speaker', originalPrice: 149, salePrice: 89, discount: 40, sold: 89, image: '🔊', timeLeft: '23h 45m' },
    { id: 4, name: 'Phone Charger', originalPrice: 59, salePrice: 29, discount: 51, sold: 456, image: '🔌', timeLeft: '23h 45m' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm p-6 mb-6 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{dealsStats.activeDeals}</div>
              <div className="text-sm opacity-90">Active Deals</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{dealsStats.topDiscount}%</div>
              <div className="text-sm opacity-90">Top Discount</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{dealsStats.endTime.hours}h {dealsStats.endTime.minutes}m</div>
              <div className="text-sm opacity-90">Time Remaining</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{dealsStats.soldToday}</div>
              <div className="text-sm opacity-90">Sold Today</div>
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6 flex items-center justify-center gap-2">
          <span className="text-yellow-700">⏰</span>
          <span className="text-yellow-800 font-medium">
            Deals refresh in {dealsStats.endTime.hours}h {dealsStats.endTime.minutes}m - Don't miss out!
          </span>
        </div>

        {/* Featured Deals */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Featured Deals</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredDeals.map((deal) => (
              <div key={deal.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors relative">
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{deal.discount}%
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-3 mt-2">{deal.image}</div>
                  <h4 className="text-sm font-medium mb-2 h-10 overflow-hidden">{deal.name}</h4>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600 font-bold">RM{deal.salePrice}</span>
                      <span className="text-xs text-gray-500 line-through">RM{deal.originalPrice}</span>
                    </div>
                    <div className="text-xs text-gray-600">{deal.sold} sold</div>
                  </div>
                  
                  <div className="text-xs text-red-600 font-medium mb-3 flex items-center justify-center gap-1">
                    <span>⏰</span>
                    {deal.timeLeft}
                  </div>
                  
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors w-full">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">How Daily Deals Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-medium mb-2">New Deals Daily</h4>
              <p className="text-sm text-gray-600">Fresh deals every 24 hours with massive discounts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-medium mb-2">Limited Quantities</h4>
              <p className="text-sm text-gray-600">Limited stock - grab them before they're gone!</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-medium mb-2">Big Savings</h4>
              <p className="text-sm text-gray-600">Save up to 50% on popular products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDealsDemo;