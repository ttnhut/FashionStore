import  API, { endpoints,privateAxios } from "./API"

export const createClothes = (data)=>{
    return privateAxios.post(endpoints["categories"]
    .concat(data.categoryId)
    .concat(endpoints["clothes"]),data).then(res=>res.data)
}

export const loadAddClothes = ()=>{
    return API.get(endpoints["clothes"]).then(res=>res.data)
}