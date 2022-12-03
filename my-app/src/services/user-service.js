import API, { endpoints, privateAxios } from "./API"


export const signUp = (user)=>{
    return API.post(endpoints["register"],user).then(res=>res.data)

}

export const login = (loginDetail)=>{
    return API.post(endpoints["login"],loginDetail).then(res=>res.data)
}

export const getAllUsers=() =>{
    return API.get(endpoints["users"]).then(res=>res.data)
}

export const deleteUser = (id)=>{
    return privateAxios.delete(`${endpoints["users"]}${id}`).then(res=>res.data)
}