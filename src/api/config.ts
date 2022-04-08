import axios from "axios";
import http from "http";
import https from "https";
import { AxiosInstance } from "axios";
import _env from "../_env";

type Header = {
    Accept: string;
    "Content-Type": string;
    Authorization?: string;
};
const baseURL = `${_env.BACKEND}/`;

function config(baseAPI: string) {
    const instance = axios.create({
        baseURL: baseAPI,
        httpAgent: new http.Agent({ keepAlive: true }),
        httpsAgent: new https.Agent({ keepAlive: true }),
    });
    let header: Header = {
        Accept: "*/*",
        "Content-Type": "application/json",
    };
    instance.interceptors.request.use(
        function (config) {
            config.headers = header;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function (response) {
            try {
                if (response.status !== 200) return Promise.reject(response);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    return instance;
}

export default function AxiosAPI(): AxiosInstance {
    return config(baseURL);
}
