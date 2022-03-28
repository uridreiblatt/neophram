import axios from 'axios';




const apiUrl = 'http://localhost:13438/Api';
//const apiUrl = 'https://192.168.1.104:13438/Api';
export default axios.create({
  baseURL: apiUrl,

});

// axios.interceptors.request.use(
//   config => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiUrl];
//     const token = localStorage.getItem('token');
//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
//);