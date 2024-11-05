import { createSlice } from '@reduxjs/toolkit';

// Create the cart slice
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds a new plant item to the items array
    addItem: (state, action) => {
      const item = action.payload; // Get the plant item from the action
      const existingItem = state.items.find((i) => i.name === item.name); // Check if the item already exists in the cart
      
      if (existingItem) {
        // If the item already exists, update the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add a new item with quantity of 1
        state.items.push({ ...item, quantity: 1 }); // Spread the item details and set initial quantity
      }
    },
    // Removes an item from the items array based on its name
    removeItem: (state, action) => {
      const name = action.payload; // Get the name of the item to remove
      state.items = state.items.filter((item) => item.name !== name); // Filter out the item
    },
    // Updates the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract name and new quantity from the payload
      const existingItem = state.items.find((item) => item.name === name); // Find the item
      if (existingItem) {
        existingItem.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default export
export default CartSlice.reducer;
