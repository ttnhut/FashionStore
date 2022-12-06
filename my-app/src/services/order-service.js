import API, { endpoints, privateAxios } from "./API"

export const addOrder = (id) =>{
    return privateAxios.post(`/users/${id}${endpoints["orders"]}`).then(res=>res.data)
}

export const getAllOrders = ()=>{
    return API.get(`${endpoints["orders"]}`).then(res=>res.data)
}