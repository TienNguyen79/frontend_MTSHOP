import { axiosClient } from "../../app/axios/axiosClient";

export default function requestGetAllOrder(data) {
  const limit = data?.limit || 10;
  const page = data?.page || 1;
  const statusOrder = data?.statusOrder;
  const queryString = statusOrder ? `&statusOrder=${statusOrder}` : "";

  return axiosClient.get(`/order?limit=${limit}&page=${page}${queryString}`);
}

export function requestGetDetailsOrder(id) {
  return axiosClient.get(`/order/${id}`);
}

export function requestCancelOrder(data) {
  return axiosClient.put(`/cancelOrder/${data.id}`);
}

export function requestOrderProduct(data) {
  return axiosClient.post(`/order`, data);
}

export function requestCreateLinkPayment(data) {
  return axiosClient.post(`/payment/createLink`, data);
}
