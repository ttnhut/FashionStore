import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import Base from "../../components/Base"
import cartDataContext from "../../contexts/cartDataContext"
import { useCartDataContext } from "../../contexts/CartDataProvider"
import { toast } from 'react-toastify'
import { addOrder } from "../../services/order-service"
import userContext from "../../contexts/userContext"
import { addOrderDetail } from "../../services/orderdetail-service"
const Payment = ()=>{
  const userContextData = useContext(userContext)
  const cartData = useCartDataContext()
  let total = cartData.cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.price * currentValue.quantity),
    0
  );
    useEffect(()=>{
      console.log(cartData.cart)
    },[cartData.cart])
    const handlePayment = ()=>{
       
        addOrder(userContextData.user.data.user.id).then(res=>{
          return res
        })
        .then(res=>{
          cartData.cart.forEach(item=>{
            addOrderDetail(res.id,item.id,item).then(res=>{console.log(res)})
          })
          toast.success("Thanh toán thành công")
        })
    }
    return (
        <Base>           
        <>

<div className="container p-12 mx-auto">
<div className="flex flex-col w-full px-0 mx-auto md:flex-row">
<div className="flex flex-col md:w-full">
<h2 className="mb-4 font-bold md:text-xl text-heading ">
  Shipping Address
</h2>

  <div className="">
    <div className="space-x-0 lg:flex lg:space-x-4">
      
      
    </div>
   
    
    <div className="mt-4">
      <div className="w-full">
        <label
          htmlFor="Address"
          className="block mb-3 text-sm font-semibold text-gray-500"
        >
          Address
        </label>
        <textarea
          className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
          name="Address"
          cols={20}
          rows={4}
          placeholder="Address"
          defaultValue={""}
        />
      </div>
    </div>
    <div className="space-x-0 lg:flex lg:space-x-4">
      <div className="w-full lg:w-1/2">
        <label
          htmlFor="city"
          className="block mb-3 text-sm font-semibold text-gray-500"
        >
          City
        </label>
        <input
          name="city"
          type="text"
          placeholder="City"
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div className="w-full lg:w-1/2 ">
        <label
          htmlFor="postcode"
          className="block mb-3 text-sm font-semibold text-gray-500"
        >
          Postcode
        </label>
        <input
          name="postcode"
          type="text"
          placeholder="Post Code"
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
    </div>
    <div className="flex items-center mt-4">
      <label className="flex items-center text-sm group text-heading">
        <input
          type="checkbox"
          className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
        />
        <span className="ml-2">
          Save this information for next time
        </span>
      </label>
    </div>
    <div className="relative pt-3 xl:pt-6">
      <label
        htmlFor="note"
        className="block mb-3 text-sm font-semibold text-gray-500"
      >
        {" "}
        Notes (Optional)
      </label>
      <textarea
        name="note"
        className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
        rows={4}
        placeholder="Notes for delivery"
        defaultValue={""}
      />
    </div>
    <div className="mt-4">
      <button className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" onClick={handlePayment} >
        Process
      </button>
    </div>
  </div>

</div>
<div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
<div className="pt-12 md:pt-0 2xl:ps-4">
  <h2 className="text-xl font-bold">CÁC SP ĐÃ ĐẶT</h2>
  <div className="mt-8">
    <div className="flex flex-col space-y-4">
        {(
           cartData.cart.map(item=>(

            <div className="flex space-x-4">
        <div>
          <img
            src={item.image}
            alt="image"
            className="w-60"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-sm">{item.color}</p>
          <span className="text-red-600">Price</span> {item.price}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
           ))
        )}
      
    </div>
  </div>
  <div className="flex p-4 mt-4">
    <h2 className="text-xl font-bold">HÓA ĐƠN</h2>
  </div>
  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
    Subtotal<span className="ml-2">{(
      total
    )}</span>
  </div>
  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
    Shipping Tax<span className="ml-2">50000</span>
  </div>
  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
    Total<span className="ml-2">{total + 50000} VNĐ</span>
  </div>
</div>
</div>
</div>
</div>
</>


</Base>
    )

}

export default Payment