import React from 'react';

const FreeShippingDemo: React.FC = () => {
  const shippingProgress = {
    current: 35.00,
    target: 40.00,
    remaining: 5.00,
    percentage: (35 / 40) * 100
  };

  const suggestedItems = [
    { id: 1, name: 'Phone Case', price: 'RM8.90', image: '📱' },
    { id: 2, name: 'Screen Protector', price: 'RM6.50', image: '🔒' },
    { id: 3, name: 'USB Cable', price: 'RM12.90', image: '🔌' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Progress Card */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Free Shipping Progress</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Current Cart: <span className="font-semibold text-blue-600">RM{shippingProgress.current.toFixed(2)}</span></span>
              <span>Target: <span className="font-semibold">RM{shippingProgress.target.toFixed(2)}</span></span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${shippingProgress.percentage}%` }}
              ></div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">Add <span className="font-bold text-blue-600">RM{shippingProgress.remaining.toFixed(2)}</span> more for FREE shipping!</p>
            </div>
          </div>
        </div>

        {/* Suggested Items */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Add These Items to Qualify</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {suggestedItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">{item.image}</div>
                  <h4 className="text-sm font-medium mb-2">{item.name}</h4>
                  <div className="text-blue-600 font-bold mb-3">{item.price}</div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Free Shipping Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-medium">No Delivery Fees</h4>
                <p className="text-sm text-gray-600">Save RM5-15 on delivery costs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-medium">Fast Delivery</h4>
                <p className="text-sm text-gray-600">2-3 working days nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingDemo;