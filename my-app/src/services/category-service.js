import API, { endpoints, privateAxios } from "./API"

export const loadAllCategories = ()=>{
    return API.get(endpoints["categories"]).then(res=>res.data)
}

export const addCategory =(category) =>{
    return privateAxios.post(endpoints["categories"],category).then(res=>res.data)
}