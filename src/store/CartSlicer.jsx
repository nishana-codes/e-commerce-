import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD TO CART
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // REMOVE FROM CART
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          // remove if quantity <= 0
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// ACTION EXPORTS
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

// SELECTORS
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;