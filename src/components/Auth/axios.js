import axios from "axios";


export const baseurl = "https://server.nitecapp.io"
 // "http://nitecapp-env.eba-8ciezhud.us-east-1.elasticbeanstalk.com/";


//routes declairation
const unprotectedRoutes = ["/user-auth/login", "/api/user-auth/verify-otp"];

//axios instence creation

const axiosInstance = axios.create({
  baseURL: baseurl,
});

//token injection for local storage on protected routes

axiosInstance.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("nightcpp-token");
  if (token && !unprotectedRoutes.includes(config.url)) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

//error handling on api response

axiosInstance.interceptors.response.use(
  async (config) => {
    return config;
  },
  (error) => {
    console.log(error)
    return { error: true, message: error?.response?.data?.message || "Something Went Wrong" }

  }
);



export default axiosInstance;
