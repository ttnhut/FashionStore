import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
// import { GrClose } from "react-icons/gr";
// import ReactDOM from "react-dom";
import ModalCart from "./ModalCart";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-[999] w-full h-16 ">
      <div className="py-[10px] bg-[#fff] min-h-[64px] shadow">
        <div className="container w-[1300px]  mr-auto ml-auto relative">
          <div className="flex flex-wrap items-center -ml-4">
            <div className="logo pl-[15px] w-[16.66667%]">
              <a href="gg">
                <img
                  src="https://file.hstatic.net/1000185342/file/logo_tbag_chuan_e0e6d9427a5f4e32b61668dd34b671ce.png"
                  alt="TALY"
                  className="max-w-[185px] block w-auto h-auto"
                />
              </a>
            </div>
            {/* nav */}
            <nav className="relative pr-0 w-[66.66667%]">
              <ul className="relative flex flex-row justify-center p-0 list-none ">
                <li className="px-4">
                  <a
                    href="/"
                    className="text-[#ff6310]  text-base no-underline"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="px-4 transition-all group ">
                  <a
                    href="/"
                    className="text-[#212121] no-underline text-base font-normal hover:text-[#ff6310] "
                  >
                    Tất cả sản phẩm{" "}
                    <FiChevronDown className="inline-block" size={"18px"} />
                  </a>
                  {/* menu */}
                  <div className="absolute w-full left-0  top-full pt-5 z-[999] hidden group-hover:block transition-all group-hover:transform ">
                    <div className="flex p-5 bg-white border-t-2 border-black border-solid shadow-md">
                      <div className="flex-1 item-menu">
                        <div className="title text-sm block pt-0 px-[7px] pb-[10px] pr-0 font-semibold relative uppercase ">
                          Top{" "}
                        </div>
                        <ul className=" py-[5px] px-[10px] list-none">
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Áo thun
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Áo kiểu
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Áo sơ mi
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Áo len
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310] "
                            >
                              Áo khoác
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Hoodie
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Mũ nón
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1 item-menu">
                        <div className="title text-sm block pt-0 px-[7px] pb-[10px] pr-0 font-semibold relative uppercase ">
                          Bottom{" "}
                        </div>
                        <ul className=" py-[5px] px-[10px] list-none">
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Quần short
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Quần dài
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Quần jeans
                            </a>
                          </li>
                          <li className="relative block">
                            <a
                              href="/"
                              className=" inline-block pb-[10px] text-sm relative text-black hover:text-[#ff6310]"
                            >
                              Váy
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1 item-menu">
                        <div className="title text-sm block pt-0 px-[7px] pb-[10px] pr-0 font-semibold relative uppercase ">
                          Đầm{" "}
                        </div>
                      </div>
                      <div className="flex-1 item-menu">
                        <a href="/">
                          <img
                            src="https://file.hstatic.net/1000185342/file/taly__1__c633c52325cd484aa4c1589a6cc1106c.png"
                            alt="png"
                            className="w-full h-auto "
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="px-4">
                  <a
                    href="/"
                    className="text-[#212121] no-underline text-base font-normal  hover:text-[#ff6310]"
                  >
                    Cửa hàng
                  </a>
                </li>
              </ul>
            </nav>
            {/* group icon */}
            <div className="px-4 pr-0 ">
              <div className=" cart-search-login">
                <ul className="flex justify-end p-0 list-none">
                  <li className="align-top w-[40px]  flex text-center justify-center items-center relative">
                    <a
                      href="#"
                      className="relative block text-black no-underline "
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      {" "}
                      <img
                        src="https://theme.hstatic.net/1000185342/1000830674/14/searcg-icon.svg?v=48"
                        alt="Tìm kiếm"
                        className="w-[20px] h-[20px] fill-black max-w-[100%]"
                      />
                    </a>
                    {showSearch && (
                      <div className="">
                        <div
                          className="fixed inset-0  z-[222] bg-white opacity-0"
                          onClick={() => setShowSearch(false)}
                        ></div>
                        <div className="visible transition-all duration-500  opacity-100 shadow-lg scale-100 w-[482px] absolute top-[42px] -right-[140px] z-[333]  min-w-[280px] rounded text-[#677279]  bg-white  border border-solid  border-[#dfe3e8]">
                          <span className="absolute left-auto right-36 -top-[10px]  bottom-[3px]  my-0 mx-auto w-[22px] h-[15px]">
                            <svg viewBox="0 0 20 9" role="presentation">
                              <path
                                d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                                fill="#f6f6f6"
                              ></path>
                            </svg>
                          </span>
                          <div className="w-full  h-full  max-h-full  overflow-hidden  py-[10px] px-[20px]">
                            <p className="uppercase  text-lg text-black mb-[10px] py-[6px] px-[10px] text-center border-b border-solid border-[#ededed]">
                              Tìm kiếm
                            </p>
                            <div className="">
                              <form
                                action="search "
                                className="relative p-0  mb-[5px] "
                              >
                                <input
                                  placeholder="Tìm kiếm sản phẩm..."
                                  type=" text"
                                  className="bg-[#f5f5f5] text-sm outline-none  border border-solid border-[#ececec] text-[#333333] w-full h-[45px] pr-[55px] pl-[20px] m-0 transition-all "
                                />
                                <button className="w-[45px] h-[45px] absolute p-0 top-0 right-0 bg-transparent transition-opacity border-none ">
                                  <FiSearch size={"25px"} />
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="align-top w-[40px] flex text-center justify-center items-center">
                    <a
                      href="/"
                      className="relative block text-black no-underline"
                    >
                      {" "}
                      <img
                        src="https://theme.hstatic.net/1000185342/1000830674/14/user-account.svg?v=48"
                        alt="account"
                        className="w-[20px] h-[20px] fill-black max-w-[100%]"
                      />
                    </a>
                  </li>
                  <li className="align-top w-[40px] flex text-center justify-center items-center">
                    <a
                      href="/"
                      className="relative block text-black no-underline"
                    >
                      {" "}
                      <img
                        src="https://theme.hstatic.net/1000185342/1000830674/14/heart.svg?v=48"
                        alt="like"
                        className="w-[20px] h-[20px] fill-black max-w-[100%]"
                      />
                      <span className="text-white absolute bg-black w-4 h-4 text-[10px] leading-4 rounded-[50%] text-center -right-2 bottom-3">
                        0
                      </span>
                    </a>
                  </li>
                  <li className="align-top w-[40px] relative flex text-center justify-center items-center">
                    <a
                      href="#"
                      className="relative block text-black no-underline group "
                      onClick={() => setShowModal(true)}
                    >
                      {" "}
                      <img
                        src="https://theme.hstatic.net/1000185342/1000830674/14/shopping-cart.svg?v=48"
                        alt="cart"
                        className="w-[20px] h-[20px] fill-black max-w-[100%]"
                      />
                      <span className="text-white absolute bg-black w-4 h-4 text-[10px] leading-4 rounded-[50%] text-center -right-2 bottom-3">
                        0
                      </span>
                      {/* <div className="absolute z-10 hidden px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm group-hover:block dark:bg-gray-700">
                        hello
                      </div> */}
                    </a>
                    <ModalCart
                      open={showModal}
                      handleClose={() => {
                        setShowModal(false);
                      }}
                    ></ModalCart>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
