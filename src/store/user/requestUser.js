import axios from "axios";
import { axiosClient } from "../../app/axios/axiosClient";

export default function requestGetUser() {
  return axiosClient.get(`/users`);
}

export function requestGetCurrentUser() {
  return axiosClient.get(`/currentUser`);
}
