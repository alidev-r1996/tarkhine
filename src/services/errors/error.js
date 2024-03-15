const { app } = require("../configs/Config");

app.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

app.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
