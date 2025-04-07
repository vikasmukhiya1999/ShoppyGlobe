import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import LoadingSpinner from "./LoadingSpinner";
import { useProducts } from "../hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useDispatch();
  const { products, loading, error } = useProducts();
  
  const product = products.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!product) return <div className="text-center p-4">Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.images[selectedImage]}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg bg-white shadow-sm"
          />
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md 
                  ${selectedImage === index ? "border-2 border-blue-500" : ""}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(product.rating) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-gray-600">({product.rating})</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          <div className="space-y-2 text-gray-700">
            <p className="text-lg">{product.description}</p>
            <p>
              Brand: <span className="font-semibold">{product.brand}</span>
            </p>
            <p>
              Category:{" "}
              <span className="font-semibold">{product.category}</span>
            </p>
            <p
              className={`font-semibold ${
                product.stock < 10 ? "text-red-500" : "text-green-500"
              }`}
            >
              {product.stock < 10 ? "Low Stock" : "In Stock"}: {product.stock}{" "}
              units
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
