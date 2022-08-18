// 导入axios实例
import instance from './axios';

const api = '/mock/';

/**
 * @param { String } url 请求路径
 * @param { Object } params 请求参数
 * @param { String } methods 请求方法
 * @param { Object } config  关于页面的一些配置，例如：loading加载之类的，可以直接封装在网络请求中
 * @return Promise 返回Promise
 * */
function http( url='/', params = {}, methods='get', config = {}) {
    const requestUrl = api + url;

    if (methods.toLocaleLowerCase() === 'get') {
        return tryFun(methods, requestUrl, { params }, config)
    } else{
        return tryFun(methods, requestUrl, { data: params }, config)
    }
}

// 网络请求的辅助函数
async function tryFun(methods, requestUrl, params, config) {
    try {
        const result = await instance[methods](requestUrl, params);
        // console.log(result, 'res');
        if (result.data.ok) {
            return result.data;
        } else{
            // 接口通了，但是数据存在错误。确定弹框组件之后弹出错误信息
        }
    } catch (e) {
        // 接口出错了，确定弹框组件之后弹出错误信息
    }
}

export default {
    instance,
    http
}