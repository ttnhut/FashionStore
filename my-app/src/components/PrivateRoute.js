import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "../auth"

const PrivateRoot = ()=>{

    
    if(isLoggedIn()) {
        return <Outlet />
    }
    else 
        return <Navigate to={"/login"} />
    
}

export default PrivateRoot