import { useEffect, useState } from 'react'
import Base from '../components/Base'
import { signUp } from '../services/user-service'
import {toast} from 'react-toastify'
import classNames from 'classnames'
const Register=()=>{
      const inputError = 'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
      const inputNormal= 'mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg  focus:ring-0'
      
      const [data,setData] = useState({
        username:"",
        password:"",
        confirmPassword:""
      })
      const [error,setError] = useState({
        errors:"",
        isError:false
      })
      
     

      const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
      }

      //submitform
      const submitForm = (event)=>{
        event.preventDefault();
       
        
        //data validate

        //call api
       if(data.password != data.confirmPassword){
        toast.error("Confirm password is not equal password")
        
       }
       else{
       
        signUp(data).then(res=>{
          console.log("success log")
          
          toast.success("User is registered successfully with id " + res.id)
          setData({
            username:"",
            password:"",
            confirmPassword:""
            
          })
          setError({
            errors:"",
            isError:false
          })
          
        })
        .catch(error=>{
          console.log("error log")
          toast.error("Something wrong")
          setError({
            errors:error,
            isError:true
          })
        })
       }
        
      }
    return(
      
       <Base>
       
       <div className="font-sans">
  <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
    <div className="relative sm:max-w-sm w-full mt-8">
      <div className="card bg-[#A9E2F3] shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-[#F5A9A9] shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
      <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
        <label
          htmlFor=""
          className="block mt-3 text-lg text-gray-700 text-center font-bold"
        >
          REGISTRATE
          
        </label>
        <form onSubmit={submitForm} className="mt-10">
          <div>
            <input
              type="text"
              placeholder="Username"
              className={classNames({
                [inputNormal]:error.errors?.response?.data?.username ? false :true,
                [inputError]:error.errors?.response?.data?.username ? true :false
              })}
              id="username"
              onChange={(e)=>handleChange(e,'username')}
              value={data.username}
            />
            <p class="text-red-500 text-xs italic">{error.errors?.response?.data?.username}</p>
          </div>
          
          <div className="mt-7">
            <input
              type="password"
              placeholder="Password"
              className={classNames({
                [inputNormal]:error.errors?.response?.data?.password ? false :true,
                [inputError]:error.errors?.response?.data?.password ? true :false
              })}
              
              onChange={(e)=>handleChange(e,'password')}
              value={data.password}
            />
            <p class="text-red-500 text-xs italic">{error.errors?.response?.data?.password}</p>
          </div>
          <div className="mt-7">
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg  focus:ring-0"
              id="confirmpassword"
              onChange={(e)=>handleChange(e,'confirmPassword')}
              value={data.confirmPassword}
            />
          </div>
          <div className="mt-7">
            <button className="bg-[#0040FF] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Registrar
            </button>
          </div>
          <div className="flex mt-7 items-center text-center">
            <hr className="border-gray-300 border-1 w-full rounded-md" />
            <label className="block font-medium text-sm text-gray-600 w-full">
              Registrate with
            </label>
            <hr className="border-gray-300 border-1 w-full rounded-md" />
          </div>
          <div className="flex mt-7 justify-center w-full">
            <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Facebook
            </button>
            <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Google
            </button>
          </div>
          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">You actually have an account?</label>
              <a
                href="#"
                className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                Login
                
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

       </Base>
        

    )
}
export default Register