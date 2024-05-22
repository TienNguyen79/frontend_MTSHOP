import { createAsyncThunk } from "@reduxjs/toolkit";
import requestRegister from "./requestAuth";
import { OK } from "../../utils/httpStatus";
import { toast } from "react-toastify";

export const handleRegister = createAsyncThunk(
  "auth/handleRegister",
  async (data, thunkAPI) => {
    const response = await requestRegister(data);

    if (response.status === OK) {
      toast.success("Đăng kí thành công", { autoClose: 1000 });
      data.callback?.();
      return response.data;
    }
  }
);
