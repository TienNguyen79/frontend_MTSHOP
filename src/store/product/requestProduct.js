import { axiosClient } from "../../app/axios/axiosClient";
import { LIMIT_HIGH } from "../../utils/commom";

export function requestGetAllProduct(data) {
  const limit = data?.limit || 10;
  const page = data?.page || 1;
  const name = data?.name;
  const category = data?.category;
  const topDisCount = data?.topDisCount;

  return axiosClient.get(
    `/product?limit=${limit}&page=${page}&name=${name}&category=${category}&topDisCount=${topDisCount}`
  );
}

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

  return axiosClient.post(`/product/getQuantity/${data.id}`, rest);
}

export function requestSuggestProduct(id) {
  return axiosClient.get(`/suggestProduct/${id}`);
}
