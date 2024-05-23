import { createAsyncThunk } from "@reduxjs/toolkit";
import requestRegister, {
  requestGetCurrentUser,
  requestLogin,
  requestResetPass,
  requestSendMail,
} from "./requestAuth";
import { OK } from "../../utils/httpStatus";
import { toast } from "react-toastify";
import { saveToken } from "../../utils/localStorage";

export const handleRegister = createAsyncThunk(
  "auth/handleRegister",
  async (data, thunkAPI) => {
    try {
      const response = await requestRegister(data);

      if (response.status === OK) {
        toast.success("Đăng kí thành công", { autoClose: 1000 });
        data.callback?.();
        return response.data;
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (data, thunkAPI) => {
    try {
      const response = await requestLogin(data);

      if (response.status === OK) {
        saveToken(response.data.token.accessToken);
        data.callback?.();
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.ms, { autoClose: 900 });
    }
  }
);

export const handleSendMail = createAsyncThunk(
  "auth/handleSendMail",
  async (data, thunkAPI) => {
    try {
      const response = await requestSendMail(data);

      if (response.status === OK) {
        toast.success("Kiểm tra email của bạn !", { autoClose: 900 });
        data.callback?.();
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.ms, { autoClose: 900 });
    }
  }
);

export const handleResetPass = createAsyncThunk(
  "auth/handleResetPass",
  async (data, thunkAPI) => {
    try {
      const response = await requestResetPass(data);

      if (response.status === OK) {
        toast.success("Thay đổi thành công !", { autoClose: 900 });
        data.callback?.();
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.ms, { autoClose: 900 });
    }
  }
);

export const handleGetCurrentUser = createAsyncThunk(
  "auth/handleGetCurrentUser",
  async (data, thunkAPI) => {
    try {
      const response = await requestGetCurrentUser();

      if (response.status === OK) {
        return response.data.results;
      }
    } catch (error) {
      toast.error(error.response.data.ms, { autoClose: 900 });
    }
  }
);
