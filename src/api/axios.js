import axios from "axios";
const baseurl = "http://localhost:1337";
const axiosInstance = axios.create({
  baseURL: baseurl,
});
axiosInstance.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("nightcpp-token");
  sl(true);

  if (
    token &&
    !config.url.includes("auth") &&
    (user?.user || config.url === "/users/me")
  ) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  async (config) => {
    sl(false);

    return config;
  },
  (error) => {}
);

export default axiosInstance;
