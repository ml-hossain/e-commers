import React from 'react';

const VouchersDemo: React.FC = () => {
  const voucherStats = {
    available: 12,
    totalValue: 150,
    expiring: 3,
    coinsBalance: 2450
  };

  const availableVouchers = [
    { 
      id: 1, 
      title: 'RM15 OFF', 
      subtitle: 'Min spend RM100', 
      type: 'SHIPPING',
      validUntil: '2024-12-31',
      color: 'bg-blue-600',
      claimed: false 
    },
    { 
      id: 2, 
      title: 'RM25 OFF', 
      subtitle: 'Electronics only', 
      type: 'CATEGORY',
      validUntil: '2024-12-25',
      color: 'bg-green-600',
      claimed: false 
    },
    { 
      id: 3, 
      title: '30% OFF', 
      subtitle: 'Fashion items', 
      type: 'PERCENTAGE',
      validUntil: '2024-12-20',
      color: 'bg-purple-600',
      claimed: true 
    },
    { 
      id: 4, 
      title: 'FREE SHIPPING', 
      subtitle: 'No minimum', 
      type: 'SHIPPING',
      validUntil: '2024-12-28',
      color: 'bg-orange-600',
      claimed: false 
    }
  ];

  const myVouchers = [
    { 
      id: 1, 
      title: 'RM10 OFF', 
      subtitle: 'Valid for 2 more days', 
      validUntil: '2024-10-09',
      color: 'bg-red-600',
      status: 'expiring' 
    },
    { 
      id: 2, 
      title: '20% OFF', 
      subtitle: 'Fashion & Beauty', 
      validUntil: '2024-10-15',
      color: 'bg-pink-600',
      status: 'active' 
    },
    { 
      id: 3, 
      title: 'RM50 OFF', 
      subtitle: 'Min spend RM300', 
      validUntil: '2024-10-20',
      color: 'bg-indigo-600',
      status: 'active' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Voucher Overview</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{voucherStats.available}</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">RM{voucherStats.totalValue}</div>
              <div className="text-sm text-gray-600">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{voucherStats.expiring}</div>
              <div className="text-sm text-gray-600">Expiring Soon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{voucherStats.coinsBalance}</div>
              <div className="text-sm text-gray-600">Coins Balance</div>
            </div>
          </div>
        </div>

        {/* My Vouchers */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">My Vouchers</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-500">⏰</span>
              <span className="text-sm text-red-600">{voucherStats.expiring} expiring soon</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {myVouchers.map((voucher) => (
              <div key={voucher.id} className={`${voucher.color} text-white rounded-lg p-4 relative overflow-hidden`}>
                {voucher.status === 'expiring' && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    EXPIRING
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{voucher.title}</div>
                  <div className="text-sm opacity-90 mb-3">{voucher.subtitle}</div>
                  <div className="text-xs opacity-75">Valid until {voucher.validUntil}</div>
                </div>
                
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors w-full mt-4">
                  Use Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available Vouchers */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Collect More Vouchers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableVouchers.map((voucher) => (
              <div key={voucher.id} className={`${voucher.color} text-white rounded-lg p-4 relative overflow-hidden ${voucher.claimed ? 'opacity-50' : ''}`}>
                {voucher.claimed && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold">CLAIMED</span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{voucher.title}</div>
                  <div className="text-sm opacity-90 mb-2">{voucher.subtitle}</div>
                  <div className="text-xs opacity-75 mb-4">
                    {voucher.type} • Valid until {voucher.validUntil}
                  </div>
                </div>
                
                {!voucher.claimed && (
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors w-full">
                    Collect
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Earning Tips */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">How to Get More Vouchers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <h4 className="font-medium mb-2">Daily Check-in</h4>
              <p className="text-sm text-gray-600">Check-in daily to earn coins and vouchers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-600 text-2xl">🛒</span>
              </div>
              <h4 className="font-medium mb-2">Make Purchases</h4>
              <p className="text-sm text-gray-600">Earn coins with every successful order</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-2xl">🎉</span>
              </div>
              <h4 className="font-medium mb-2">Special Events</h4>
              <p className="text-sm text-gray-600">Participate in events for exclusive vouchers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VouchersDemo;