import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://location-vn.herokuapp.com",
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.error(err);
  }
);
axiosClient.interceptors.response.use(
  (res) => {
    console.log(`log at: => clientAxios.js => before response => res:`, res);
    if (res && res.data) return res.data;
    return res;
  },
  (error) => {
    console.log(
      `log at: => clientAxios.js => before response => error: `,
      error
    );
  }
);

export default axiosClient;
