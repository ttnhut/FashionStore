import API, { endpoints, privateAxios } from "./API"

export const loadAllCategories = ()=>{
    return API.get(endpoints["categories"]).then(res=>res.data)
}

export const addCategory =(category) =>{
    return privateAxios.post(endpoints["categories"],category).then(res=>res.data)
}

export const editCategory = (id,category) =>{
    return privateAxios.put(`${endpoints["categories"]}${id}`,category).then(res=>res.data)
}

export const getCategoryById = (id)=>{
    return API.get(`${endpoints["categories"]}${id}`).then(res=>res.data)
}

export const deleteCategory = (id)=>{
    return privateAxios.delete(`${endpoints["categories"]}${id}`).then(res=>res.data)
}