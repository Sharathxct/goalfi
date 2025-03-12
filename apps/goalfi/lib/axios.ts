import Axios, { AxiosRequestConfig } from "axios";

function authRequestInterceptor(config: AxiosRequestConfig) {
    if (config.headers) config.headers.Accept = "application/json";
    return config;
}
const BASE_API_URL = "http://localhost:3000/api/v1";
export const api = Axios.create({
    baseURL: BASE_API_URL,
});

api.interceptors.request.use(authRequestInterceptor as never);