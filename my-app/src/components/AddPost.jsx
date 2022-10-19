import { useState } from "react"
import { useEffect } from "react"
import { loadAllCategories } from "../services/category-service"
import { useRef } from "react"
import JoditEditor from "jodit-react"
import { createClothes } from "../services/clothes-service"
const AddPost = ()=>{

    const editer = useRef(null)
    const [description,setDescription] = useState("")
    const [categories,setCategories] = useState([])


    const [clothes,setClothes] = useState({
        name:"",
        description:"",
        quantity:"",
        color:"",
        image:"",
        categoryId:""
    })

    useEffect(()=>{
        loadAllCategories().then(res=>{
            console.log(res)
            setCategories(res)
        })
        .catch(error=>console.log(error))
    },[])


    const fieldChanged = (event)=>{
        setClothes({
          ...clothes,[event.target.name]:event.target.value
        })
    }

    const descriptionFieldChanged = (data)=>{
      setClothes({
        ...clothes,'description':data
      })

    }

    const createClothe = (event)=>{
        event.preventDefault()
        
        if(clothes.name.trim() === ""){         
            alert("Clothes name is required")
            return
          }
        if(clothes.description.trim() ===""){
            alert("Clothes description is required")
            return
        }
        if(clothes.image.trim()===""){
            alert("Clothes image is required")
            return
        }

        createClothes(clothes).then(res=>{
          alert("thanh cong")
          console.log(res)
        }).catch(error=>{
          alert("that bai")
          console.log(error)
        
        })

    }

    return (
        
        <>
        {JSON.stringify(clothes)}
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
              <form onSubmit={createClothe}>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tên sản phẩm.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    onChange={fieldChanged}
                    
                  />
                </div>
                <div className="mt-7">                          
                  {/* <textarea style={{height:"200px"}} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="description" onChange={fieldChanged} placeholder="Mô tả.."></textarea> */}
                    <JoditEditor
                      ref={editer}
            
                      onChange={descriptionFieldChanged}
                      value={clothes.description}
                      
                      // config={config}
                    />
                </div>
                <div className="mt-7">
                  <input
                    type="number"
                    placeholder="Số lượng.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    onChange={fieldChanged}
                    name="quantity"
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Màu sắc.."
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    onChange={fieldChanged}
                    name="color"
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Hình ảnh..(đường link liên kết đến hình ảnh)"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg focus:border-blue-100 focus:ring-0"
                    onChange={fieldChanged}
                    name="image"
                  />
                </div>
                
                <select
                defaultValue={0}
                onChange={fieldChanged}
                name="categoryId"
                id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={0} disabled>Chọn danh mục</option>
                
                {
                    categories.map(item=>(
                        <option key={item.id} value={item.id}>{item.name}</option>
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
export default AddPost