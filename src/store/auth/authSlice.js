import { createSlice, createAction } from "@reduxjs/toolkit";

import { handleRegister } from "./handleAuth";
import { toast } from "react-toastify";

//Reducer Là các hàm xử lý các action và cập nhật trạng thái của ứng dụng.
export const setLoading = createAction("setLoading");

// fullfiled | pending | rejected
const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setLoading: (state, action) => ({
    //   ...state,
    //   loading: action.payload,
    // }),
  },
  extraReducers: (builder) => {
    builder
      //case News
      .addCase(handleRegister.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(handleRegister.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleRegister.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});
// export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
