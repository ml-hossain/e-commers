// Global type definitions for the marketplace platform

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  role: 'buyer' | 'seller' | 'admin';
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  userId: string;
  type: 'home' | 'work' | 'other';
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  level: number;
  isActive: boolean;
  sortOrder: number;
  children?: Category[];
}

export interface ProductImage {
  id: string;
  url: string;
  altText?: string;
  sortOrder: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  values: string[];
}

export interface ProductSku {
  id: string;
  productId: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  cost?: number;
  inventory: number;
  weight?: number;
  barcode?: string;
  variants: { [key: string]: string };
  isActive: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  slug: string;
  sellerId: string;
  sellerName: string;
  categoryId: string;
  category: Category;
  images: ProductImage[];
  variants: ProductVariant[];
  skus: ProductSku[];
  basePrice: number;
  compareAtPrice?: number;
  brand?: string;
  tags: string[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  rating: number;
  reviewCount: number;
  soldCount: number;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  skuId: string;
  quantity: number;
  selectedVariants: { [key: string]: string };
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  skuId: string;
  sellerId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  subtotal: number;
  selectedVariants: { [key: string]: string };
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  cost: number;
  estimatedDays: number;
  carrier: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  currency: string;
  shippingAddress: Address;
  billingAddress?: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: string;
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  isVerified: boolean;
  helpfulCount: number;
  createdAt: string;
}

export interface Voucher {
  id: string;
  code: string;
  title: string;
  description: string;
  type: 'percentage' | 'fixed' | 'shipping';
  value: number;
  minOrderValue?: number;
  maxDiscount?: number;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
  applicableCategories?: string[];
  applicableProducts?: string[];
}

export interface Notification {
  id: string;
  userId: string;
  type: 'order' | 'payment' | 'shipping' | 'promo' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

export interface SearchFilters {
  query?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  hasDiscount?: boolean;
  isFreeShipping?: boolean;
  brand?: string[];
  sellerId?: string;
  sortBy?: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'newest' | 'bestselling';
  page?: number;
  limit?: number;
}

export interface SearchResult {
  products: Product[];
  totalCount: number;
  page: number;
  totalPages: number;
  filters: {
    categories: Array<{ id: string; name: string; count: number }>;
    priceRange: { min: number; max: number };
    brands: Array<{ name: string; count: number }>;
    ratings: Array<{ rating: number; count: number }>;
  };
}

export interface SellerProfile {
  id: string;
  userId: string;
  shopName: string;
  description?: string;
  logo?: string;
  banner?: string;
  rating: number;
  reviewCount: number;
  productCount: number;
  followerCount: number;
  location?: string;
  joinedDate: string;
  isVerified: boolean;
  responseRate: number;
  responseTime: string; // e.g., "within hours"
}

export interface AnalyticsSummary {
  period: string;
  revenue: number;
  orders: number;
  products: number;
  visitors: number;
  conversionRate: number;
  averageOrderValue: number;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone?: string;
  agreeToTerms: boolean;
}

export interface CheckoutForm {
  shippingAddress: Omit<Address, 'id' | 'userId'>;
  billingAddress?: Omit<Address, 'id' | 'userId'>;
  shippingMethod: string;
  paymentMethod: string;
  saveAddress?: boolean;
  notes?: string;
}

// UI State types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}