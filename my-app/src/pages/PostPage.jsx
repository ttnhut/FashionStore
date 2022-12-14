import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Base from "../components/Base"
import { loadClothes } from "../services/clothes-service"
import {toast} from "react-toastify"
import "../css/postpage.css"
const PostPage = ()=>{
    const {id} = useParams()

    const [clothes,setClothes] = useState(null)
     useEffect(()=>{
        loadClothes(id).then(res=>{
            console.log(res)
            setClothes(res)
            
        }).catch(error=>{
            console.log(error)
            toast.error("Error in loading post")
        })
     },[])

     

    return (
        <Base>
        {
     	    (clothes) && (
              
				<div className="flex justify-center mt-20 mb-20">
				<div className="flex flex-1 items-center justify-center ">
				  
				  <div className="float-left w-72 ml-4 ">
					<img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
					  alt="product_image"
					  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md opacity-90 hover:opacity-100"/>
					<img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
					  alt="product_image"
					  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/>
					<img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
					  alt="product_image"
					  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/>
					<img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
					  alt="product_image"
					  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/>
					{/* <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
					  alt="product_image"
					  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/> */}
				  </div>
	
				  <div className="float-right">
					<img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
					alt="product_image"
					className=" w-[100%] h-[100%] rounded-lg shadow-md hover:scale-[1.1] ease-in duration-300"/>
				  </div>
				</div>
	
				<div className="flex-[1.3] flex items-center justify-items-start flex-col mt-10">
				<div dangerouslySetInnerHTML={{__html: `<h1 className="title text-[40px]">${clothes?.name}</h1>`}}></div>
				<div dangerouslySetInnerHTML={{__html: `<h3 className="title text-[40px]">${clothes?.description}</h3>`}}></div>
				 
				  <p className="pr-[4rem] text-justify mt-4 text-[24px]"> <b className="text-[#000]">Th????ng Hi???u:</b> kh??c | 
					  <b className="text-[#000] hover:text-[#dc2626]"> Lo???i: </b> {clothes?.category.name} | <b className="text-[#000]">MSP:</b>{clothes?.id} </p>
	
				  <div className="flex items-center justify-center">
					  <p className="mt-7 text-2xl font-bold"> Gi??: <b className="text-[#dc2626]"> {clothes?.price}</b> </p>
					  <p className="mt-7 text-2xl font-bold ml-3">T??nh Tr???ng: <b className="text-[#dc2626]">C??n H??ng</b> </p>
				  </div>
				  
				  {/*color variant */}
	
				  <div className="flex text-2xl mt-3 text-[#000] font-bold">
					color: 
					  {"  " +clothes?.color}
				  </div>
	
				  <div className="mt-3 text-2xl">
					Size
					<select className="ml-2 border-2">
					  <option select disabled> Ch???n</option>
					  <option> S</option>
					  <option> M </option>
					  <option> L</option>
					</select>
				  </div>
	
				  <div className="mt-5">
					
				  </div>
				  
				  <div className="flex items-center justify-center">
					  <button className="text-white bg-[#000] rounded-md p-3 mt-5 mr-12 hover:bg-[#fff] hover:text-black">
						Th??m v??o gi???
					  </button>
	
					  <button className="text-white bg-[#000] rounded-md p-3 mt-5 mr-12  hover:bg-[#fff] hover:text-black ">
						Mua Ngay
					  </button>
				  </div>
					
				</div>
			</div>
            )
            }
        </Base>
    )
}

export default PostPage