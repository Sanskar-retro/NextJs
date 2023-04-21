import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        data: [],
    },
    reducers: {
        addtoCart: (state, action) => {
            state.data.push(action.payload);
        },
        removeFromCart: (state, action) => {
            let c = "";
            // eslint-disable-next-line array-callback-return
            state.data.map((item, index) => {
                if (action.payload === item.id) {
                    c = index;
                }
            })

            state.data.splice(c, 1);
            state.copy = state.data;
        }
    },
})

export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;



