import axios from "axios";

const RestInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default RestInstance