import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type : sessionStorage.getItem('type') ,
    singleProduct : sessionStorage.getItem('id')
} ;


export const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        setType : (state, action) => {
            sessionStorage.setItem('type', action.payload)
            state.type = sessionStorage.getItem('type')
        },
        setSingleProduct : (state, action) => {

            sessionStorage.setItem('id', action.payload)
            state.singleProduct = sessionStorage.getItem('id')


            // state.singleProduct = action.payload
        }
    }
})




export const { setType , setSingleProduct} = productsSlice.actions 

export default productsSlice.reducer