import axios from "axios"

export let endpoints = {
    "register":"/api/v1/auth/register/"

}

export default axios.create({
    baseURL:"http://localhost:9090"
})