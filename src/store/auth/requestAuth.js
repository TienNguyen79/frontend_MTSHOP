import { axiosClient } from "../../app/axios/axiosClient";

export default function requestRegister(data) {
  return axiosClient.post(`/register`, data);
}

export function requestLogin(data) {
  return axiosClient.post(`/login`, data);
}

export function requestSendMail(data) {
  return axiosClient.post(`/sendMail`, data);
}

export function requestResetPass(data) {
  return axiosClient.post(`/forgotPass`, data);
}

export function requestGetCurrentUser() {
  return axiosClient.get(`/currentUser`);
}
