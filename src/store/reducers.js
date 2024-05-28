import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import authSlice from "./auth/authSlice";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";

export const reducer = combineReducers({
  user: userSlice,
  auth: authSlice,
  category: categorySlice,
  product: productSlice,
  cart: cartSlice,
});
