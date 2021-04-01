import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  //创建一个新的axios
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
  //axios.interceptors.response响应拦截器
);

export {
  axiosInstance
};