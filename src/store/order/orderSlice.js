import { createSlice, createAction } from "@reduxjs/toolkit";
import { handleGetAllOrder, handleGetDetailsOrder } from "./handleOrder";

//Reducer Là các hàm xử lý các action và cập nhật trạng thái của ứng dụng.
export const setLoading = createAction("setLoading");

// fullfiled | pending | rejected
const initialState = {
  dataAllOrder: [],
  dataDetailsOrder: {},
  loading: false,
};
const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // setLoading: (state, action) => ({
    //   ...state,
    //   loading: action.payload,
    // }),
  },
  extraReducers: (builder) => {
    builder
      //get All Order
      .addCase(handleGetAllOrder.fulfilled, (state, action) => {
        state.dataAllOrder = action.payload;
      })
      .addCase(handleGetAllOrder.rejected, (state, action) => {
        state.dataAllOrder = [];
      })
      // get Details Orders
      .addCase(handleGetDetailsOrder.fulfilled, (state, action) => {
        state.dataDetailsOrder = action.payload;
      })
      .addCase(handleGetDetailsOrder.rejected, (state, action) => {
        state.dataDetailsOrder = {};
      })

      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});
// export const { setLoading } = OrderSlice.actions;
export default OrderSlice.reducer;
