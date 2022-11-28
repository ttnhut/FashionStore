import { useState } from "react"
import { toast } from "react-toastify"
import { addCategory } from "../services/category-service"

const AddCat = ()=>{
    const [category,setCategory] = useState({
      name:""
    })
    const fieldChanged = (event)=>{
      setCategory({
        ...category,[event.target.name]:event.target.value
      })
    }

    const createCategory = (event)=>{
      event.preventDefault()
      addCategory(category).then(res=>{
        console.log(res)
        toast.success("Thêm danh mục thành công")
      })
      .catch(error=> console.log(error))
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
                Thêm Danh mục
              </label>
              <form onSubmit={(e)=>createCategory(e)} >
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tên danh mục.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    onChange={fieldChanged}
                    value={category.name}
                  />
                </div>
               
                
                
                
                
                
                <div className="mt-7 flex">
                  <label
                    htmlFor="remember_me"
                    className="inline-flex items-center w-full cursor-pointer"
                  >
                  </label>
                  <div className="w-full text-right">
                    
                  </div>
                </div>
                <div className="mt-7">
                  <button type="submit" className="bg-[#0040FF] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Thêm
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

export default AddCat