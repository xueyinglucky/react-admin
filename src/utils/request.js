// 引入ajax的请求库——axios
import axios from "axios";
import { Provider } from "react-redux";

const request = axios.create({
  baseURL: "/",
  // 一下内容暂时不需要
  /* headers:{},
  timeout:10000 */
});

// 定义请求拦截器
request.interceptors.request.use(
  // 其内部有两个回调函数
  (config) => {
    // config表示请求的所有信息
    // 在请求拦截器中可以设置token等操作
    return config;
  }
);

// 定义响应拦截器
request.interceptors.response.use(
  // 根据响应码判断响应成功还是失败 （通常响应成功状态码为2xx）
  (response) => {
    // 请求（响应）成功
    // 此时判断功能是否成功(code等于20000时表示功能成功)
    if (response.data.code === 20000) {
      // 功能成功，返回成功的数据
      return response.data.data;
    } else {
      // 功能失败
      return Promise.reject(response.data.message);
    }
  },
  (error) => {
    // 服务器没有返回响应
    // 请求超时（timeout）或者是网络错误(network err)
  }
);
export default request;
