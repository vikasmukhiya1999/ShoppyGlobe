# ShoppyGlobe

## Description

ShoppyGlobe is a modern e-commerce web application that enables users to browse products, manage shopping carts, and complete purchases. Built with React and Redux, it offers a seamless shopping experience with features like real-time cart updates, product search, and secure checkout.

## Features

- **Product Browsing**: Search and filter products by category or keywords
- **Shopping Cart**: Add items, adjust quantities, and view total in real-time
- **Checkout Process**: Simple and secure checkout with order summary
- **Product Details**: View detailed product information with image gallery
- **Responsive Design**: Optimized for all device sizes
- **User Experience**:
  - Interactive product image galleries
  - Real-time product search
  - Product ratings and reviews
  - Mobile-first interface

## Technologies Used

- **React**: Frontend framework for building user interface
- **Redux Toolkit**: State management for shopping cart
- **React Router**: Navigation and routing (v7)
- **Tailwind CSS**: Modern utility-first styling
- **Vite**: Build tool for fast development
- **DummyJSON**: API for product data
- **ESLint**: Code quality and standards

## Project Directory Structure

```
shoppy-globe/
├── public/
│   └── _redirects          # Netlify redirects configuration
├── src/
│   ├── components/         # React components
│   │   ├── Cart.jsx       # Shopping cart view
│   │   ├── CartItem.jsx   # Individual cart item
│   │   ├── Checkout.jsx   # Checkout form
│   │   ├── Header.jsx     # Navigation header
│   │   ├── LoadingSpinner.jsx
│   │   ├── NotFound.jsx   # 404 page
│   │   ├── ProductDetail.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── hooks/
│   │   └── useProducts.js # Custom hook for fetching products
│   ├── store/
│   │   ├── cartSlice.js   # Redux cart state management
│   │   └── store.js       # Redux store configuration
│   ├── App.jsx           # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── .gitignore         # Git ignore rules
```

## Installation

1. Ensure Node.js (v16+) and npm are installed
2. Clone the repository:
   ```bash
   git clone https://github.com/vikasmukhiya1999/ShoppyGlobe.git
   ```
3. Navigate to project directory:
   ```bash
   cd ShoppyGlobe
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start development server:
   ```bash
   npm run dev
   ```
2. Build for production:
   ```bash
   npm run build
   ```
3. Preview production build:
   ```bash
   npm run preview
   ```

## Live Demo

Experience the application here: [ShoppyGlobe Live](https://shoppy-globe947.netlify.app)

## Application Architecture

### Components
- **ProductList**: Grid display with search functionality
- **ProductDetail**: Detailed view with image gallery
- **Cart**: Shopping cart management
- **Checkout**: Order processing and form handling
- **Header**: Navigation and cart status

### State Management
Redux Toolkit manages the application state:
- Cart items and quantities
- Total price calculations
- Product filtering and search

### API Integration
- Custom `useProducts` hook for data fetching
- Error handling and loading states
- Real-time cart updates

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add AmazingFeature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## Acknowledgments

- DummyJSON for the product API
- TailwindCSS for the styling framework
- React and Redux communities
