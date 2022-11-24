import  API, { endpoints,privateAxios } from "./API"

export const createClothes = (data)=>{
    return privateAxios.post(endpoints["categories"]
    .concat(data.categoryId)
    .concat(endpoints["clothes"]),data).then(res=>res.data)
}

export const loadAddClothes = (pageNumber,pageSize)=>{
    return API.get(`${endpoints["clothes"]}?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res=>res.data)
}

export const loadClothes = (id)=>{
    return API.get(`${endpoints["clothes"]}${id}`).then(res=>res.data)
}