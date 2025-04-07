import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

const Checkout = () => {
  const { items, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <p>Your cart is empty. Please add items before checkout.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <textarea
              name="address"
              required
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
          >
            Place Order (${total.toFixed(2)})
          </button>
        </form>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
