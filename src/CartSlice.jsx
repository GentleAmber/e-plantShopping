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

        if (index !== -1) return;

        state.items.push({...plant, quantity: 1});
    },
    removeItem: (state, action) => {
        const plant = action.payload;
        const index = state.items.findIndex((p) => p.name === plant.name);

        if (index === -1) return;

        state.items.splice(index, 1);
    },
    updateQuantity: (state, action) => {
        const { direction, plant } = action.payload;
        const index = state.items.findIndex((p) => p.name === plant.name);

        if (index === -1) return;

        switch (direction) {
            case -1: 
                if (state.items[index].quantity > 1) state.items[index].quantity -= 1;
                else if (state.items[index].quantity <= 1) state.items.splice(index, 1);

                break;
            case 1: 
                if (state.items[index].quantity < 999) state.items[index].quantity += 1;
                
                break;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
