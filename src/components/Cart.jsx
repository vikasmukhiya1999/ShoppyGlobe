/**
 * Cart component displays the shopping cart contents
 * Features:
 * - Shows list of cart items
 * - Displays total price
 * - Empty cart message
 * - Checkout button
 * - Uses CartItem component for individual items
 */

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-8 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
          <div className="mt-4">
            <button 
              onClick={() => navigate('/checkout')}
              className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
