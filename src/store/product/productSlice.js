import { createSlice, createAction } from "@reduxjs/toolkit";
import {
  handleGetDetailsProduct,
  handleGetNewArrivals,
  handleGetQuantityProduct,
  handleGetTopSoldProduct,
} from "./handleProduct";

//Reducer Là các hàm xử lý các action và cập nhật trạng thái của ứng dụng.
export const setLoading = createAction("setLoading");

// fullfiled | pending | rejected
const initialState = {
  dataAllProduct: [],
  dataDetailsProduct: {},
  dataQuantityProduct: {},
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
      })

      //data Details Product
      .addCase(handleGetDetailsProduct.fulfilled, (state, action) => {
        state.dataDetailsProduct = action.payload;
      })
      .addCase(handleGetDetailsProduct.rejected, (state, action) => {
        state.dataDetailsProduct = {};
      })

      //data quantity Product
      .addCase(handleGetQuantityProduct.fulfilled, (state, action) => {
        state.dataQuantityProduct = action.payload;
      })
      .addCase(handleGetQuantityProduct.rejected, (state, action) => {
        state.dataQuantityProduct = {};
      });
  },
});
// export const { setLoading } = productSlice.actions;
export default productSlice.reducer;
