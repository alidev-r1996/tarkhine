const { default: axios } = require("axios");

export const app = axios.create({
  baseURL: process.env.NODE_ENV == "development"?  "http://localhost:3000/api": "https://tarkhine.iran.liara.run/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  put: app.put,
  post: app.post,
  patch: app.patch,
  delete: app.delete,
};

export default http;
