import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ShoppingCartIcon,
  ClipboardDocumentListIcon,
  BellIcon,
  UserIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const SellerCenter = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for seller dashboard
  const sellerStats = {
    totalSales: 'RM 45,230',
    totalOrders: 1247,
    totalProducts: 89,
    rating: 4.8,
    followers: 12400,
    views: 125600,
    pendingOrders: 23,
    completedOrders: 1224
  };

  const recentOrders = [
    { id: '#SPE001234', customer: 'Ahmad Rahman', product: 'iPhone 15 Pro Max', amount: 'RM 4,999', status: 'pending', date: '2025-10-07' },
    { id: '#SPE001235', customer: 'Siti Aishah', product: 'Samsung Galaxy S24', amount: 'RM 3,599', status: 'processing', date: '2025-10-07' },
    { id: '#SPE001236', customer: 'Lim Wei Ming', product: 'MacBook Air M2', amount: 'RM 5,799', status: 'shipped', date: '2025-10-06' },
    { id: '#SPE001237', customer: 'Fatimah Ali', product: 'AirPods Pro', amount: 'RM 799', status: 'delivered', date: '2025-10-06' },
    { id: '#SPE001238', customer: 'Raj Kumar', product: 'iPad Air', amount: 'RM 2,299', status: 'pending', date: '2025-10-05' }
  ];

  const myProducts = [
    { 
      id: 1, 
      name: 'iPhone 15 Pro Max 256GB', 
      price: 'RM 4,999', 
      stock: 15, 
      sold: 89, 
      status: 'active',
      image: '📱',
      rating: 4.8,
      views: 2340
    },
    { 
      id: 2, 
      name: 'Samsung Galaxy S24 Ultra', 
      price: 'RM 3,599', 
      stock: 8, 
      sold: 156, 
      status: 'active',
      image: '📱',
      rating: 4.7,
      views: 3210
    },
    { 
      id: 3, 
      name: 'MacBook Air M2 13-inch', 
      price: 'RM 5,799', 
      stock: 3, 
      sold: 43, 
      status: 'low_stock',
      image: '💻',
      rating: 4.9,
      views: 1890
    },
    { 
      id: 4, 
      name: 'AirPods Pro 2nd Gen', 
      price: 'RM 799', 
      stock: 0, 
      sold: 234, 
      status: 'out_of_stock',
      image: '🎧',
      rating: 4.6,
      views: 4560
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'low_stock': return 'bg-orange-100 text-orange-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'products', label: 'My Products', icon: ShoppingCartIcon },
    { id: 'orders', label: 'Orders', icon: ClipboardDocumentListIcon },
    { id: 'analytics', label: 'Analytics', icon: () => <span className="text-xl">📊</span> },
    { id: 'promotions', label: 'Promotions', icon: () => <span className="text-xl">🏷️</span> },
    { id: 'shipping', label: 'Shipping', icon: () => <span className="text-xl">🚚</span> },
    { id: 'finance', label: 'Finance', icon: () => <span className="text-xl">💰</span> },
    { id: 'settings', label: 'Settings', icon: () => <span className="text-xl">⚙️</span> }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">{sellerStats.totalSales}</p>
              <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl text-green-600">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{sellerStats.totalOrders}</p>
              <p className="text-xs text-blue-600 mt-1">+8.2% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <ClipboardDocumentListIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Products Listed</p>
              <p className="text-2xl font-bold text-gray-900">{sellerStats.totalProducts}</p>
              <p className="text-xs text-purple-600 mt-1">3 added this week</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <ShoppingCartIcon className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Store Rating</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-gray-900">{sellerStats.rating}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-yellow-600 mt-1">Excellent rating</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-lg text-yellow-600">⭐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors">
                      <span className="text-lg mr-2">➕</span>
            <span className="text-sm font-medium text-gray-900">Add Product</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 transition-colors">
            <ClipboardDocumentListIcon className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">View Orders</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors">
                          <span className="text-lg text-purple-600">🏷️</span>
            <span className="text-sm font-medium text-gray-900">Create Promotion</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-200 transition-colors">
            <span className="text-4xl mb-2">📊</span>
            <span className="text-sm font-medium text-gray-900">View Analytics</span>
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <Link to="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All Orders →
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">My Products</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <span className="text-lg">➕</span>
          <span>Add New Product</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sold</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-lg">{product.image}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.sold}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-1">{product.rating}</span>
                      <span className="text-yellow-400">⭐</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                      {product.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-700" title="View">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700" title="Edit">
                                            <span className="text-sm">✏️</span>
                      </button>
                      <button className="text-red-600 hover:text-red-700" title="Delete">
                                            <span className="text-sm">🗑️</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'products':
        return renderProducts();
      case 'orders':
        return <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <ClipboardDocumentListIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Orders Management</h3>
          <p className="text-gray-500">Manage all your orders, track shipments, and handle returns.</p>
        </div>;
      case 'analytics':
        return <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <span className="text-6xl text-gray-400 mx-auto mb-4 block">📊</span>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Reports</h3>
          <p className="text-gray-500">View detailed analytics about your store performance and sales.</p>
        </div>;
      case 'promotions':
        return <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <span className="text-6xl text-gray-400 mx-auto mb-4 block">🏷️</span>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Promotions & Discounts</h3>
          <p className="text-gray-500">Create and manage promotions, vouchers, and discount campaigns.</p>
        </div>;
      case 'shipping':
        return <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <span className="text-6xl text-gray-400 mx-auto mb-4 block">🚚</span>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Shipping Settings</h3>
          <p className="text-gray-500">Configure shipping options, rates, and delivery preferences.</p>
        </div>;
      case 'finance':
        return <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <span className="text-6xl text-gray-400 mx-auto mb-4 block">💰</span>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Financial Management</h3>
          <p className="text-gray-500">Track earnings, payouts, and financial reports.</p>
        </div>;
      case 'settings':
        return <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <span className="text-6xl text-gray-400 mx-auto mb-4 block">⚙️</span>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Store Settings</h3>
          <p className="text-gray-500">Manage your store profile, policies, and account settings.</p>
        </div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Marketplace
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">Seller Center</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 bg-red-400 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Tech Store Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {typeof IconComponent === 'function' && IconComponent.name === '' ? 
                        <IconComponent /> : 
                        <IconComponent className="w-5 h-5" />
                      }
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCenter;