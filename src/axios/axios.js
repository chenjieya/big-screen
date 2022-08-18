import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: '/',
    timeout: 8000,  // 设置网络请求超时时长
    headers: {
        'Content-type': 'application/json'
    }
})

// 请求拦截
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error.response);
})

// 响应拦截
instance.interceptors.response.use( res => {
    return res
}, error => {
    /* 在拦截器中，如果reject的话，会直接抛出错误到控制台，要想在组件中处理错误的话，可以resolve */
    // 错误信息在error.response中
    const { response } = error;
    const { config: { url } } = response;

    let status, message;
    if (response) {
        const { data, statusText } = response;
        status = response.status;
        message = data.message || statusText;
    } else {
        status = 600
        message = error.message || 'Network Error'
    }
    // Message(
    // 	{
    // 		type: 'error',
    // 		message: message,
    // 	}
    // )
    return Promise.reject(
        {
            status,
            url,
            message,
        }
    );
})

export default instance;