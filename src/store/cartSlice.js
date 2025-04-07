/**
 * Redux slice for managing shopping cart state
 * Features:
 * - Manages cart items array and total price
 * - Handles adding items with quantity
 * - Supports removing items
 * - Updates item quantities
 * - Automatically recalculates total on all operations
 */

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  // Initialize empty cart state
  initialState: {
    items: [], // Stores cart items with their quantities
    total: 0, // Keeps track of total cart value
  },
  reducers: {
    // Adds new item or increments quantity if exists
    addToCart: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If new, add with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Recalculate total cart value
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    // Removes item completely from cart
    removeFromCart: (state, action) => {
      // Filter out the item to be removed
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Update total after removal
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    // Updates quantity of existing item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      // Find and update item quantity
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        // Recalculate total after quantity update
        state.total = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }
    },

    // Clears the cart
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
