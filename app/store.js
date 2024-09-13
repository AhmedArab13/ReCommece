import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";
import productsSlice from "../features/slices/productsSlice";
import cartSlice from "../features/slices/cartSlice";
import authSlice from "../features/slices/authSlice";
const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsSlice,
    cart: cartSlice,
    auth: authSlice
  },
});

export default store;
