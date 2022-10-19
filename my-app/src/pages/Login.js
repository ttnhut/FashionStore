const Login = () => {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center  bg-gradient-to-r from-purple-400 to-pink-400 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-[#9edef1] shadow-lg left-60 -bottom-28 w-full h-96 rounded-[100%] absolute shadow-none  -rotate-45" />
          <div className="card bg-[#F5A9A9] shadow-lg  right-80 bottom-32 w-full h-96 rounded-full absolute shadow-none   transform rotate-45" />
          <div className="card bg-[#c5258a] shadow-lg  left-40 bottom-96 w-full h-96 rounded-full absolute shadow-none   transform rotate-45" />
          <div
            className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md"
            id="register"
          >
            <label
              htmlFor=""
              className="block mt-3 text-lg text-gray-700 text-center font-bold"
            >
              L O G I N
            </label>
            <form method="#" action="#" className="mt-10">
              <div>
                <input
                  type="name"
                  placeholder="Username"
                  className="mt-1 px-1.5 block w-full border border-gray-500 focus:border-purple-400 bg-gray-100 h-11 rounded-xl shadow-lg  focus:shadow-purple-300 focus:outline-none "
                />
              </div>
              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 px-1.5 block w-full border border-gray-500 focus:border-purple-400 bg-gray-100 h-11 rounded-xl shadow-lg  focus:shadow-purple-300 focus:outline-none "
                />
              </div>
              <div className="mt-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                ></label>
                <div className="w-full text-right"></div>
              </div>
              <div className="mt-7">
                <button className="bg-[#0040FF] w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Sign in
                </button>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or login with
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-[#01A9DB] border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                <button className="bg-[#FF0000] border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Not a member?</label>
                  <a
                    href="/"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
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
  );
};
export default Login;
