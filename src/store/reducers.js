import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import authSlice from "./auth/authSlice";

export const reducer = combineReducers({
  user: userSlice,
  auth: authSlice,
});
