import { useContext, useState } from "react"
import cartDataContext from "./cartDataContext"

const CartDataProvider = ({children})=>{
    const [cart,setCart] = useState([])
    return (
        <cartDataContext.Provider value={{cart,setCart}}>
            {children}
        </cartDataContext.Provider>
    )
    
}
export const useCartDataContext = ()=> useContext(cartDataContext)

export default CartDataProvider