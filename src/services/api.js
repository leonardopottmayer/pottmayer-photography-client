import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:7575",
  baseURL: "https://photography-api.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("@pp:token");

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const networkError = error.response === undefined;
    const unauthorizedError = error.response?.status === 401;

    if (unauthorizedError) {
      localStorage.removeItem("@pp:token");
      localStorage.removeItem("@pp:user");

      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export default api;
