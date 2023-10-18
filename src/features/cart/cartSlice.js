import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
})