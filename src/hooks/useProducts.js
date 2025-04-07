/**
 * Custom hook for fetching and managing products data
 * Returns:
 * - products: Array of product objects
 * - loading: Boolean loading state
 * - error: Error message if fetch fails
 * 
 * Automatically fetches products on mount from DummyJSON API
 */

import { useState, useEffect } from 'react';

export const useProducts = () => {
  // State for managing products data and loading states
  const [products, setProducts] = useState([]); // Stores fetched products
  const [loading, setLoading] = useState(true); // Controls loading state
  const [error, setError] = useState(null);     // Stores any error messages

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Fetch data from DummyJSON API
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data.products); // Update products state
    } catch (err) {
      setError(err.message); // Store error if fetch fails
    } finally {
      setLoading(false); // Set loading to false regardless of outcome
    }
  };

  return { products, loading, error };
};
