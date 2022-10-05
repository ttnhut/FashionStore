import axios from "axios"

export let endpoints = {
    "register":"/auth/register/",
    "login":"/auth/login/",
    "categories":"/categories/"
}

export default axios.create({
    baseURL:"http://localhost:9091/api/v1"
})