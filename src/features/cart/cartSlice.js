import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cartItems: [],
    amount: 2,
    total: 0,
    isLoading: true,
}

const url = 'https://www.course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    try {
        const respons = await axios(url)
        return respons.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increaseItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decreaseItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
        },
    }
})

console.log(cartSlice);

export const { clearCart, removeItem, increaseItem, decreaseItem, calculateTotal } = cartSlice.actions
export default cartSlice.reducer