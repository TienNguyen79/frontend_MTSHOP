import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetUser, { requestGetCurrentUser } from "./requestUser";
import { OK } from "../../utils/httpStatus";
import { toast } from "react-toastify";

export const handleGetUser = createAsyncThunk(
  "user/handleGetUser",
  async (query, thunkAPI) => {
    const response = await requestGetUser();
    console.log("response", response);
    return response.data;
  }
);

export const handleGetCurrentUser = createAsyncThunk(
  "user/handleGetCurrentUser",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetCurrentUser();

      if (response.status === OK) {
        return response.data.results;
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
