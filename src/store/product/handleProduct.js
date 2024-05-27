import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetTopSoldProduct, {
  requestGetNewArrivals,
} from "./requestSlice";

export const handleGetTopSoldProduct = createAsyncThunk(
  "product/handleGetTopSoldProduct",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetTopSoldProduct(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleGetNewArrivals = createAsyncThunk(
  "product/handleGetNewArrivals",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetNewArrivals(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
