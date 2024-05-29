import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetTopSoldProduct, {
  requestGetAllProduct,
  requestGetDetailsProduct,
  requestGetNewArrivals,
  requestGetQuantityProduct,
} from "./requestProduct";

export const handleGetAllProduct = createAsyncThunk(
  "product/handleGetAllProduct",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllProduct(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

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

export const handleGetDetailsProduct = createAsyncThunk(
  "product/handleGetDetailsProduct",
  async (id, thunkAPI) => {
    try {
      const response = await requestGetDetailsProduct(id);
      return response.data.results;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleGetQuantityProduct = createAsyncThunk(
  "product/handleGetQuantityProduct",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetQuantityProduct(data);
      return response.data.results;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
