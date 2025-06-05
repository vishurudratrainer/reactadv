import axios from "axios";



//Request interceptor
axios.interceptors.request.use(request => {
  //request.headers['Authorization'] = 'Bearer token'; // Add authorization header
  console.log('Inside request intercepot of axios',request)
  return request;
}, error => {
    console.log("Error",error)
  return Promise.reject(error);
});
const RestApiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000 // Set timeout for requests
 // headers: { 'Authorization': 'Bearer token' },
 
});

RestApiInstance.interceptors.request.use(request => {
  //request.headers['Authorization'] = 'Bearer token'; // Add authorization header
  console.log('Inside request intercepot of axios',request)
  return request;
}, error => {
    console.log("Error inside request",error)
  return Promise.reject(error);
});

RestApiInstance.interceptors.response.use(response => {
  //request.headers['Authorization'] = 'Bearer token'; // Add authorization header
  console.log('Inside response intercepot of axios',response)
  // let stringfied = JSON.stringify(response.data)
    //response.data= JSON.parse(stringfied.toUpperCase())
  return response;
}, error => {
    console.log("Error inside response",error)
  return Promise.reject(error);
});
export default RestApiInstance


