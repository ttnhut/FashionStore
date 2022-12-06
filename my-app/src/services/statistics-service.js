import API, { endpoints } from "./API"

export const countClothesByCategory = ()=>{
    return API.get(`${endpoints["statistics"]}${endpoints["clothes"]}`).then(res=>res.data)
}