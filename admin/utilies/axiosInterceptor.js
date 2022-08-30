import axios from "axios";


const  baseURL = process.env.NEXT_API;
const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
})

// let cookie = cookieClient.load('Authentications')


axiosInstance.interceptors.request.use(async request=>{



    return request
},async error=>{
    return Promise.reject(error)
})
axiosInstance.interceptors.response.use(response=>{
// console.log("response",response.headers)

    return response
},async error=>{



    return Promise.reject(error)
})
export default axiosInstance;


