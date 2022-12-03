import { useEffect } from "react"
import { useState } from "react"
import { deleteUser, getAllUsers } from "../services/user-service"
import { toast } from 'react-toastify'

const UserManagerComponent = ()=>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
        loadUsers()
    },[])
    
    const handleDeleteUser = (event,id)=>{
        event.preventDefault()
        deleteUser(id).then(res=>{
            console.log(res)
            loadUsers()
            toast.success("Xóa user thành công")
        })
        .catch(error=>{
          console.log(error)
          toast.error(error.message)
        })
    }
    const loadUsers = ()=>{
        getAllUsers().then(res=>{
            setUsers(res)
            
        })
        .catch(error=>{
            
            toast.success("That bai")
        })
    }
    return (
        <>
          
          <div className="w-full h-screen bg-gray-100">
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bolder leading-tight text-gray-900">
          Quản lý người dùng
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
                <th className="px-6 py-3 text-left font-medium">Tên đăng nhập</th>
                <th className="px-6 py-3 text-left font-medium">Quyền</th>
                
              </tr>
            </thead>
            {/* HEAD end */}
            {/* BODY start */}
            <tbody className="bg-white">
                {users.map(item=><>
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
                    {item.username}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {item.roles.map(item1=>
                        <>
                            {item1.name}
                        </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    published
                  </span>
                </td>
                
               
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                
                <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={(e)=>handleDeleteUser(e,item.id)}>
                    Xóa
                </button>
                
                </td>
              </tr>
                </>)}
              
             
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

export default UserManagerComponent