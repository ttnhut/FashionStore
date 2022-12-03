import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editCategory, getCategoryById } from "../services/category-service"

const EditCat = () =>{
    
    
    const {id} = useParams()
    const navigate = useNavigate()

    const [category,setCategory] = useState({
        id:"",
        name:"",
    })

    useEffect(()=>{
        getCategoryById(id).then(res=>{
            console.log(res)
            setCategory(res)
        })
        .catch(error=>console.log(error))
    },[])


    const fieldChanged = (event)=>{
        setCategory({
          ...category,[event.target.name]:event.target.value
        })
    }

    

    const editCat = (event)=>{
        event.preventDefault()
        
        if(category.name.trim() === ""){         
            alert("Clothes name is required")
            return
          }
       

        editCategory(id,category).then(res=>{
          alert("thanh cong")
          console.log(res)
          navigate("/user/dashboard/categorymanager")
        }).catch(error=>{
          alert("that bai")
          console.log(error)
        
        })

    }
    return (
        <>
                  <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-[#A9E2F3] shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
            <div className="card bg-[#F5A9A9] shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block mt-3 text-lg text-gray-700 text-center font-bold"
              >
                Chỉnh sửa sản phẩm
              </label>
              <form onSubmit={editCat}>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tên sản phẩm.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    onChange={fieldChanged}
                    value={category.name}
                  />
                </div>
                
                <div className="mt-7">
                  <button type="submit" className="bg-[#0040FF] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Sửa
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default EditCat