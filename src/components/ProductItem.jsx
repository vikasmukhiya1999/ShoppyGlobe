/**
 * ProductItem component displays individual product cards in the product list
 * Features:
 * - Shows product image, title, description, and price
 * - Links to detailed product view
 * - Includes Add to Cart functionality
 * - Prevents default link behavior when adding to cart
 */

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="font-bold truncate">{product.title}</h3>

          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <div className="text-xl font-bold text-teal-600 text-center">
            ${product.price}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleAddToCart}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-4xl flex items-center justify-center gap-2 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
