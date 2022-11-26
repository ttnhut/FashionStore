import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Base from "../components/Base";
import { login } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../contexts/userContext";
const Login = () => {
  const userContextData = useContext(userContext)
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event, property) => {
    setLoginDetail({ ...loginDetail, [property]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password is required");
      return;
    }
    login(loginDetail)
      .then((data) => {
        console.log("user login : ");
        console.log(data);

        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          userContextData.setUser({
            data : data, 
            login: true
          })
          navigate("/");
        });

        toast.success("Login success");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something wrong");
        }
      });
  };
  return (
    <Base>
      <div className="font-sans">
        <div className="relative flex flex-col items-center min-h-screen bg-gray-100 sm:justify-center ">
          <div className="relative w-full sm:max-w-sm">
            <div className="card bg-[#A9E2F3] shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
            <div className="card bg-[#F5A9A9] shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
              <label
                htmlFor=""
                className="block mt-3 text-lg font-bold text-center text-gray-700"
              >
                LOGIN
              </label>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <input
                    type="name"
                    placeholder="Username"
                    className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl focus:border-blue-100 focus:ring-0"
                    value={loginDetail.username}
                    onChange={(e) => handleChange(e, "username")}
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Password"
                    className="block w-full mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-xl focus:border-blue-100 focus:ring-0"
                    value={loginDetail.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                </div>
                <div className="flex mt-7">
                  <label
                    htmlFor="remember_me"
                    className="inline-flex items-center w-full cursor-pointer"
                  ></label>
                  <div className="w-full text-right"></div>
                </div>
                <div className="mt-7">
                  <button className="bg-[#0040FF] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                  </button>
                </div>
                <div className="flex items-center text-center mt-7">
                  <hr className="w-full border-gray-300 rounded-md border-1" />
                  <label className="block w-full text-sm font-medium text-gray-600">
                    Or login with
                  </label>
                  <hr className="w-full border-gray-300 rounded-md border-1" />
                </div>
                <div className="flex justify-center w-full mt-7">
                  <button className="mr-5 bg-[#01A9DB] border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Facebook
                  </button>
                  <button className="bg-[#FF0000] border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                  </button>
                </div>
                <div className="mt-7">
                  <div className="flex items-center justify-center">
                    <label className="mr-2">Not a member?</label>
                    <a
                      href="#"
                      className="text-blue-500 transition duration-500 ease-in-out transform  hover:-translate-x hover:scale-105"
                    >
                      Register now
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default Login;
