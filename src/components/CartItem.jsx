import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover" />
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button 
            className="px-2 py-1 border rounded"
            onClick={() => handleUpdateQuantity(item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            className="px-2 py-1 border rounded"
            onClick={() => handleUpdateQuantity(item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button 
          className="text-red-500"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
