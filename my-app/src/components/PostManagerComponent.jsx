import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteClothes, loadAddClothes } from "../services/clothes-service";

const PostManagerComponent = ()=>{

    const [clothesContent, setClothesContent] = useState({
        content: [],
        totalPages: "",
        totalElements: "",
        pageSize: "",
        lastPage: false,
        pageNumber: ""
    
      });
   
    
    useEffect(() => {
        changePage(0)
        
    }, []);
    const changePage = (pageNumber=0,pageSize=6)=>{
        // if(pageNumber > clothesContent.pageNumber && clothesContent.lastPage) 
        //   return
        // if(pageNumber < clothesContent.pageNumber && clothesContent.pageNumber==0) 
        //   return
       
        loadAddClothes(pageNumber,pageSize).then(res=>{
            
          setClothesContent({
            content:res.content,
            totalPages: res.totalPages,
            totalElements: res.totalElements,
            pageSize: res.pageSize,
            lastPage: res.lastPage,
            pageNumber: res.pageNumber
          })

            console.log("API")
            console.log(clothesContent)
        }).catch(error=>{
          toast.error("Load Clothes Error")
        })
      }
      const handleDeletePost = (event,id)=>{
        event.preventDefault()
        deleteClothes(id).then(res=>{
          alert("Xóa thành công")
          changePage(0)
        })
      }
    return (
        <>
                   
          <div className="w-full h-screen bg-gray-100">
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bolder leading-tight text-gray-900">
          Quản lý sản phẩm
        </h1>
      </div>
      <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
        <div className="flex items-center py-2">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-searcg"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center py-2">
          <Link
            to={"/user/dashboard/productmanager/addproduct"}
            className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
          >
            Thêm mới sản phẩm
          </Link>
        </div>
      </div>
      <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            {/* HEAD start */}
            <thead>
              <tr className="border-b border-gray-200 bg-white leading-4 tracking-wider text-base text-gray-900">
                <th className="px-6 py-5 text-left" colSpan={6}>
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </th>
                <th className="px-6 py-5 text-left">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </th>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 text-left font-medium">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </th>
                <th className="px-6 py-3 text-left font-medium">Id</th>
                <th className="px-6 py-3 text-left font-medium">Tên sản phẩm</th>
                <th className="px-6 py-3 text-left font-medium">Giá tiền</th>
                <th className="px-6 py-3 text-left font-medium">Loại</th>
                <th className="px-6 py-3 text-left font-medium">Màu sắc</th>
                <th className="px-6 py-3 text-left font-medium">Hình ảnh</th>
              </tr>
            </thead>
            {/* HEAD end */}
            {/* BODY start */}
            <tbody className="bg-white">
                {clothesContent.content.map(item=><>
                    <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.price}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.category.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.color}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.image.substring(0,10)} ...
                  </div>
                </td>
              
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    published
                  </span>
                </td>
                
               
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                
                <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={(e)=>handleDeletePost(e,item.id)} >
                    Xóa
                </button>
                <Link to={"/user/dashboard/productmanager/edit/" + item.id}>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Sửa
                </button>
                </Link>
                </td>
              </tr>
                </>)}
              
                <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li onClick={()=>changePage(clothesContent.pageNumber -1)}>
      <a
       
        href="#"
        className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </a>
    </li>
    
      {
        [...Array(clothesContent.totalPages)].map((item,index)=>(
          <li key={index} onClick={()=>changePage(index)}>
              <a
                
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {index+1}
              </a>
          </li>
        ))
      }
    <li onClick={()=>changePage(clothesContent.pageNumber+1)} >
      <a
        href="#"
        className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </a>
    </li>
  </ul>
</nav>
            </tbody>
            {/* BODY end */}
          </table>
             
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default PostManagerComponent