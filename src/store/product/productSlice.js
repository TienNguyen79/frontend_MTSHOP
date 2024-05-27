import { createSlice, createAction } from "@reduxjs/toolkit";
import { handleGetNewArrivals, handleGetTopSoldProduct } from "./handleProduct";

//Reducer Là các hàm xử lý các action và cập nhật trạng thái của ứng dụng.
export const setLoading = createAction("setLoading");

// fullfiled | pending | rejected
const initialState = {
  dataTopSoldProduct: [],
  dataNewArrivals: [],
  loading: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setLoading: (state, action) => ({
    //   ...state,
    //   loading: action.payload,
    // }),
  },
  extraReducers: (builder) => {
    builder
      //Get TopSold Product
      .addCase(handleGetTopSoldProduct.fulfilled, (state, action) => {
        state.dataTopSoldProduct = action.payload;
      })
      .addCase(handleGetTopSoldProduct.rejected, (state, action) => {
        state.dataTopSoldProduct = [];
      })
      //dataNewArrivals
      .addCase(handleGetNewArrivals.fulfilled, (state, action) => {
        state.dataNewArrivals = action.payload;
      })
      .addCase(handleGetNewArrivals.rejected, (state, action) => {
        state.dataNewArrivals = [];
      });
  },
});
// export const { setLoading } = productSlice.actions;
export default productSlice.reducer;
