import { configureStore, createSlice } from "@reduxjs/toolkit";



let cart = createSlice({
    name : 'cart',
    initialState : [
        { id: 0, name : '선글라스', count : 1 },
        { id : 2, name : '안경', count : 1 }
    ]
})


export let { addCount } = cart.actions



export default configureStore({
    reducer: {
        cart : cart.reducer
    }
})