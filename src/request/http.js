import axios from 'axios'
import store from '../store'
import router from "../router";
import ReturnCode from "../assets/js/ReturnCode";

const instance = axios.create()
// const requestCache = [];
let isRefresh = false;


// 环境的切换
if (process.env.NODE_ENV === 'development') {
    instance.defaults.baseURL = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'debug') {
    instance.defaults.baseURL = 'http://localhost:3000/'
} else if (process.env.NODE_ENV === 'production') {
    instance.defaults.baseURL = 'http://47.107.98.156:3000/'
}

function refreshToken() {
    return new Promise((resolve, reject) => {

        if (!isRefresh) {
            isRefresh = true;
            axios.post("http://localhost:3000/refresh_token", {
                refreshToken: store.state.refreshToken
            }).then(res => {
                resolve(res)

            }).catch(err => {
                reject(err)
            }).finally(() => {
                isRefresh = false;
            })

        }
    })
}

instance.defaults.headers.post['Content-Type'] = 'application/json'
// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const accessToken = store.state.accessToken
        accessToken && (config.headers.Authorization = accessToken)
        return config
    },
    error => {
        return error
    })

// 响应拦截器
instance.interceptors.response.use(
    response => {

        if (response.data.code === ReturnCode.OK || response.data.code === ReturnCode.LOGIN_OK) {
            return response?.data
        } else if (response.data.code === ReturnCode.OUT_TIME_TOKEN) {
            refreshToken().then(res => {
                console.log(res)
                store.commit("setAccessToken", res.data.accessToken)
                store.commit("setRefreshToken", res.data.refreshToken)
            }).catch(err => {
                alert(err.data.msg)
                store.commit("setAccessToken", null)
                store.commit("setRefreshToken", null)
                router.push("/login");
            })
        } else {
            alert(response.data.msg)
            store.commit("setAccessToken", null)
            store.commit("setRefreshToken", null)
            router.push("/login");
        }
    },
    // 服务器状态码不是200的情况
    error => {
        return error

    })

export default instance;
