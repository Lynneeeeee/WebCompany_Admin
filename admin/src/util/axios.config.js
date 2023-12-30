// anxios interceptor
import axios from 'axios';

// add a request axios
axios.interceptors.request.use(
    function (config) {
        // get token and set header before request is send
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        // console.log('Axios gets token:', token);
        return config;
    },
    function (error) {
        // do sth with request error
        return Promise.reject(error);
    }
);

// add a response axios
axios.interceptors.response.use(
    function (response) {
        // any status code that lie within the range of 2xx cause this function to trigger
        // store authorization into local storage
        // console.log('Axios gets header:', response.headers);
        const authorization = response.headers.authorization
        authorization && localStorage.setItem("token", authorization)
        return response;
    },
    function (error) {
        // any status code that falls outside the range of 2xx cause this function to trigger
        // do sth with response error
        // console.log(error.response.data)
        const { status } = error.response
        if(status === 401){
            window.location.href ="#/login"
        }
        return Promise.reject(error);
    }
);

export default axios;
