import { createAsyncThunk } from "@reduxjs/toolkit";
import requestAddToCart, { requestgetAllCart } from "./requestCart";

export const handleAddtoCart = createAsyncThunk(
  "product/handleAddtoCart",
  async (data, thunkAPI) => {
    try {
      const response = await requestAddToCart(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleGetAllCart = createAsyncThunk(
  "product/handleGetAllCart",
  async (data, thunkAPI) => {
    try {
      const response = await requestgetAllCart(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
