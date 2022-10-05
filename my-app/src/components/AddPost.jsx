import { useState } from "react"
import { useEffect } from "react"
import { loadAllCategories } from "../services/category-service"

const AddPost = ()=>{

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        loadAllCategories().then(res=>{
            console.log(res)
            setCategories(res)
        })
        .catch(error=>console.log(error))
    },[])

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
                Thêm sản phẩm
              </label>
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Tên sản phẩm.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    
                    
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Mô tả.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="number"
                    placeholder="Số lượng.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Màu sắc.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Hình ảnh..(đường link liên kết đến hình ảnh)"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    
                  />
                </div>
                
                <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Chọn danh mục</option>
                
                {
                    categories.map(item=>(
                        <option key={item.id}>{item.name}</option>
                    ))
                }
                </select>
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
                  <button className="bg-[#0040FF] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
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
export default AddPost