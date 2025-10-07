# ShopHub - E-commerce Marketplace

A comprehensive React-based e-commerce marketplace platform inspired by modern shopping experiences. Built with TypeScript, React Router, and Tailwind CSS.

## 🚀 Features

### For Buyers
- **Home Page**: Hero sections, featured categories, flash sales, newsletters
- **Product Browsing**: Category pages, product detail pages, search functionality
- **Shopping Experience**: Shopping cart, checkout process, order tracking
- **Account Management**: User profiles, order history, wishlists
- **Mobile-First Design**: Responsive layout with bottom navigation

### For Sellers
- **Dashboard**: Analytics overview, sales metrics
- **Product Management**: Add, edit, and manage product listings
- **Order Management**: Process orders, handle shipping
- **Analytics**: Track performance, sales reports

### For Administrators
- **Admin Dashboard**: Platform-wide management
- **User Management**: Handle user accounts and seller verification
- **Content Moderation**: Manage listings and reviews

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **State Management**: Redux Toolkit (planned)
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Development**: ESLint, TypeScript

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── layout/         # Layout components (Header, Footer, etc.)
├── pages/              # Route components
│   ├── auth/          # Authentication pages
│   ├── seller/        # Seller dashboard pages
│   └── admin/         # Admin panel pages
├── store/              # Redux store and slices (planned)
├── types/              # TypeScript type definitions
└── styles/             # Global styles and themes
```

## 🎨 Design System

- **Primary Color**: Orange theme (#f97316)
- **Spacing**: 4px base unit system
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach

## 🚧 Development Status

- ✅ Project setup and configuration
- ✅ Basic routing structure  
- ✅ Layout components
- ✅ Home page with featured sections
- ✅ Authentication page layouts
- ✅ Responsive design foundation
- 🔄 Complete Redux state management (planned)
- 🔄 Product catalog and search (planned)
- 🔄 Shopping cart functionality (planned)
