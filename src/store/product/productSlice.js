import { createSlice, createAction } from "@reduxjs/toolkit";
import {
  handleGetAllProduct,
  handleGetDetailsProduct,
  handleGetNewArrivals,
  handleGetQuantityProduct,
  handleGetTopSoldProduct,
  handleSuggestProduct,
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
  loadingSearchProduct: false,
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
      //get all product
      .addCase(handleGetAllProduct.fulfilled, (state, action) => {
        state.dataAllProduct = action.payload;
        state.loadingSearchProduct = false;
      })
      .addCase(handleGetAllProduct.pending, (state, action) => {
        state.loadingSearchProduct = true;
      })
      .addCase(handleGetAllProduct.rejected, (state, action) => {
        state.dataAllProduct = [];
        state.loadingSearchProduct = false;
      })

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
      })

      //data suggest  Product
      .addCase(handleSuggestProduct.fulfilled, (state, action) => {
        state.dataAllProduct = action.payload;
      })
      .addCase(handleSuggestProduct.rejected, (state, action) => {
        state.dataAllProduct = [];
      });
  },
});
// export const { setLoading } = productSlice.actions;
export default productSlice.reducer;
