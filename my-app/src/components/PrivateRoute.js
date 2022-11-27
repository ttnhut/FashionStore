import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "../auth"
import userContext from "../contexts/userContext"

const PrivateRoot = ()=>{

    const userContextData = useContext(userContext)
    if(isLoggedIn() && userContextData.user.login) {
        return <Outlet />
    }
    else 
        return <Navigate to={"/login"} />
    
}

export default PrivateRoot