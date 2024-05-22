import { axiosClient } from "../../app/axios/axiosClient";

export default function requestRegister(data) {
  return axiosClient.post(`/register`, data);
}
