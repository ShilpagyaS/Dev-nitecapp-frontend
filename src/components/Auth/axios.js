import { setloader } from "@/store/slices/ui";
import axios from "axios";
import { store } from "@/store/store"
import { errortoast, successtoast } from "../tostify";


export const baseurl = process.env.NEXT_PUBLIC_BECKEND_URL
// "http://nitecapp-env.eba-8ciezhud.us-east-1.elasticbeanstalk.com/";
// "https://server.nitecapp.io"
// "https://server-prod.nitecapp.io"

 
//routes declairation
const unprotectedRoutes = ["/user-auth/login", "/api/user-auth/verify-otp"];

//axios instence creation

const axiosInstance = axios.create({
  baseURL: baseurl,
});

//token injection for local storage on protected routes

axiosInstance.interceptors.request.use(async (config) => {
  store.dispatch(setloader(true))
  let token = localStorage.getItem("nightcpp-token");
  if (token && !unprotectedRoutes.includes(config.url)) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

//error handling on api response

axiosInstance.interceptors.response.use(
  async (config) => {
    store.dispatch(setloader(false))
    return config;
  },
  (error) => {
    store.dispatch(setloader(false))
    errortoast({ message: error?.response?.data?.message || "Something Went Wrong" })
    return Promise.reject(error?.response?.data?.message || "Something Went Wrong")
  }
);



export default axiosInstance;



export const axiosDebounceInstance = axios.create({
  baseURL: baseurl,
});


//token injection for local storage on protected routes

axiosDebounceInstance.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("nightcpp-token");
  if (token && !unprotectedRoutes.includes(config.url)) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

//error handling on api response

axiosDebounceInstance.interceptors.response.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error?.response?.data?.message || "Something Went Wrong")

  }
);



export const axiosAuthInstance = axios.create({
  baseURL: baseurl,
});

//token injection for local storage on protected routes

axiosAuthInstance.interceptors.request.use(async (config) => {
  store.dispatch(setloader(true))
  let token = localStorage.getItem("nightcpp-token");
  if (token && !unprotectedRoutes.includes(config.url)) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

//error handling on api response

axiosAuthInstance.interceptors.response.use(
  async (config) => {
    store.dispatch(setloader(false))
    return config;
  },
  (error) => {
    store.dispatch(setloader(false))
    return Promise.reject(error?.response?.data?.message || "Something Went Wrong")
  }
);
