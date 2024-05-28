import { axiosClient } from "../../app/axios/axiosClient";
import { LIMIT_HIGH } from "../../utils/commom";

export default function requestAddToCart(data) {
  return axiosClient.post(`/cart`, data);
}

export function requestgetAllCart(data) {
  const limit = data?.limit || LIMIT_HIGH;
  const page = data?.page || 1;
  return axiosClient.get(`/cart?limit=${limit}&page=${page}`);
}
