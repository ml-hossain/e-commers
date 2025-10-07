# E-commerce Marketplace Project Instructions

This is a comprehensive React-based e-commerce marketplace inspired by Shopee, built with TypeScript and modern architecture.

## Project Overview
- **Type**: E-commerce Marketplace Platform
- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + Styled Components
- **State Management**: Redux Toolkit + React Query
- **Build Tool**: Vite

## Core Features
- Public storefront (home, categories, search, product pages, cart, checkout)
- Seller Dashboard (listings, inventory, orders, promotions, analytics)
- Buyer account (orders, wishlist, profile, wallet/payments)
- Admin panel (user management, seller verification, content moderation)
- Real-time search with autocomplete and filtering
- Mobile-responsive design with bottom navigation
- Multi-language and currency support

## Architecture
- Component-based architecture with reusable UI components
- Microservices-style API design
- Performance optimization with lazy loading and code splitting
- Accessibility compliance (WCAG 2.1)
- Security best practices implemented

## Development Guidelines
- Use TypeScript for all components
- Follow React best practices and hooks patterns
- Implement proper error boundaries
- Use semantic HTML and ARIA attributes
- Maintain consistent spacing (4px base unit)
- Test components with React Testing Library

## Folder Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── store/         # Redux store and slices
├── services/      # API services
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── styles/        # Global styles and themes
```