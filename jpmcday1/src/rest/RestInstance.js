import axios from "axios";
const RestInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
RestInstance.interceptors.request.use(
  (request) => {
    // request.headers['Authorization'] = 'Bearer token'; // Add authorization header
    console.log("Inside request interceptor");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

RestInstance.interceptors.response.use(
  (response) => {
    // request.headers['Authorization'] = 'Bearer token'; // Add authorization header
    console.log("Inside response interceptor");
    //  let stringified = JSON.stringify(response.data);
    //console.log(stringified);
    // response.data = stringified.toUpperCase();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default RestInstance;
