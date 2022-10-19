import API, { endpoints } from "./API"


export const signUp = (user)=>{
    return API.post(endpoints["register"],user).then(res=>res.data)

}

export const login = (loginDetail)=>{
    return API.post(endpoints["login"],loginDetail).then(res=>res.data)
}