import { useState } from 'react';
import ProductItem from './ProductItem';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  // Get products data and states from custom hook
  const { products, loading, error } = useProducts();
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show loading or error states
  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Grid of product items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
