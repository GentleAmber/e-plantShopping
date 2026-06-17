import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const plant = action.payload;
        const index = state.items.findIndex((p) => p.name === plant.name);

        if (index !== -1) {
            state.items[index].quantity += 1;
        } else {
            state.items.push({...plant, quantity: 1});
        }

    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
