import API, { endpoints } from "./API"

export const loadAllCategories = ()=>{
    return API.get(endpoints["categories"]).then(res=>res.data)
}