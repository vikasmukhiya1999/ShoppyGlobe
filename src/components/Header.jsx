/**
 * Header component provides main navigation
 * Features:
 * - Fixed position header with shadow
 * - Logo/Home link
 * - Navigation links
 * - Cart indicator with item count
 * - Responsive design
 */

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-gray-800 text-white fixed w-full z-10 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-teal-400 transition-colors"
            >
              ShoppyGlobe
            </Link>
            <div className="flex items-center gap-6">
              <Link
                to="/products"
                className="hover:text-teal-400 transition-colors"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="relative hover:text-teal-400 transition-colors"
              >
                Cart
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-teal-500 rounded-full w-5 h-5 text-xs flex items-center justify-center transform scale-110">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="h-16"></div> {/* Spacer for fixed header */}
    </>
  );
};

export default Header;
