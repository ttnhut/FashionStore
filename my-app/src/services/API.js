import axios from "axios"
import { getToken } from "../auth"

export let endpoints = {
    "register":"/auth/register/",
    "login":"/auth/login/",
    "categories":"/categories/",
    "clothes":"/clothes/",
    "users":"/users/"
}

export default axios.create({
    baseURL:"http://localhost:9091/api/v1"
})

export const privateAxios = axios.create({
    baseURL:"http://localhost:9091/api/v1"
})
privateAxios.interceptors.request.use(config=>{
    const token = getToken()
    console.log("mytoken" + token)
    if(token){
        config.headers.common.Authorization = `Bearer ${token}`
        console.log(config)
        
    }
    return config
},error=>Promise.reject(error))