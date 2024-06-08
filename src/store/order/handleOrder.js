import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetAllOrder, {
  requestCancelOrder,
  requestGetDetailsOrder,
} from "./requestOrder";
import { toast } from "react-toastify";

export const handleGetAllOrder = createAsyncThunk(
  "order/handleGetAllOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetAllOrder(data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleGetDetailsOrder = createAsyncThunk(
  "order/handleGetDetailsOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetDetailsOrder(data);
      return response.data.results;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleCancelOrder = createAsyncThunk(
  "order/handleCancelOrder",
  async (data, thunkAPI) => {
    try {
      const response = await requestCancelOrder(data);
      if (response.status === 200) {
        toast.success("Đơn hàng đã được hủy!", { autoClose: 800 });
        data?.callBack?.();
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
