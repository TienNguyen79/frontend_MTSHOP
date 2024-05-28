import { axiosClient } from "../../app/axios/axiosClient";
import { LIMIT_HIGH } from "../../utils/commom";

export default function requestGetTopSoldProduct(data) {
  const limit = data?.limit || 8;
  const page = data?.page || 1;
  return axiosClient.get(`/product?topSold=desc&limit=${limit}&page=${page}`);
}

export function requestGetNewArrivals(data) {
  const limit = data?.limit || 4;
  const page = data?.page || 1;
  return axiosClient.get(`/product?limit=${limit}&page=${page}`);
}

export function requestGetDetailsProduct(id) {
  return axiosClient.get(`/product/${id}`);
}

export function requestGetQuantityProduct(data) {
  const { id, ...rest } = data;
  console.log("🚀 ~ requestGetQuantityProduct ~ data:", data);

  return axiosClient.post(`/product/getQuantity/${data.id}`, rest);
}
