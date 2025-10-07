import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import OrdersPage from './pages/OrdersPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import SellerCenter from './pages/seller/SellerCenter';
import SellerRegistration from './pages/seller/SellerRegistration';
import SellerVerificationPending from './pages/seller/VerificationPending';
import SellerDashboard from './pages/seller/Dashboard';
import SellerProducts from './pages/seller/Products';
import SellerOrders from './pages/seller/Orders';
import SellerAnalytics from './pages/seller/Analytics';
import AdminDashboard from './pages/admin/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

// Demo Pages
import FreeShippingDemo from './pages/demo/FreeShippingDemo';
import DailyDealsDemo from './pages/demo/DailyDealsDemo';
import VouchersDemo from './pages/demo/VouchersDemo';
import ShopeeChoiceDemo from './pages/demo/ShopeeChoiceDemo';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="categories/:slug" element={<CategoryPage />} />
            <Route path="product/:slug" element={<ProductDetailPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="cart" element={<CartPage />} />
            
            {/* Auth Routes */}
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            
            {/* Protected Buyer Routes */}
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            
            {/* Demo Pages */}
            <Route path="shipping" element={<FreeShippingDemo />} />
            <Route path="daily-deals" element={<DailyDealsDemo />} />
            <Route path="vouchers" element={<VouchersDemo />} />
            <Route path="shopee-choice" element={<ShopeeChoiceDemo />} />
            <Route path="live-shopping" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Live Shopping Demo</h1><p>Coming Soon!</p></div>} />
            <Route path="supermarket" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Supermarket Demo</h1><p>Coming Soon!</p></div>} />
            <Route path="global-brands" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Global Brands Demo</h1><p>Coming Soon!</p></div>} />
            <Route path="cod" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">COD Demo</h1><p>Coming Soon!</p></div>} />
            <Route path="collection-points" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Collection Points Demo</h1><p>Coming Soon!</p></div>} />
            <Route path="rewards" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Rewards Demo</h1><p>Coming Soon!</p></div>} />
            
            {/* Seller Routes */}
            <Route path="seller" element={<SellerRegistration />} />
            <Route path="seller/verification-pending" element={<SellerVerificationPending />} />
            <Route path="seller/center" element={<SellerCenter />} />
            <Route path="seller/dashboard" element={<SellerDashboard />} />
            <Route path="seller/products" element={<SellerProducts />} />
            <Route path="seller/orders" element={<SellerOrders />} />
            <Route path="seller/analytics" element={<SellerAnalytics />} />
            
            {/* Admin Routes */}
            <Route path="admin">
              <Route index element={<AdminDashboard />} />
            </Route>
            
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        
        {/* Global Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'text-sm',
          }}
        />
      </div>
    </Router>
  );
}

export default App;
