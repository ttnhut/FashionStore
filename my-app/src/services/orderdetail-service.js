import API, { endpoints, privateAxios } from "./API"

export const addOrderDetail = (oderId,clothesId,oderdetail)=>{
    return privateAxios.post(`${endpoints["orders"]+oderId}${endpoints["clothes"]+clothesId}${endpoints["orderdetails"]}`,oderdetail).then(res=>res.data)
}

export const getOrderDetailsByOrder = (id)=>{
    return API.get(`${endpoints["orders"]+id}${endpoints["orderdetails"]}`).then(res=>res.data)
}