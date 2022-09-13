import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  return (
    <header className="z-[3000] h-16 fixed left-0 w-full top-0">
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
                <li className="px-4 group ">
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
            <div className="px-4 pr-0">
              <div className="cart-search-login ">
                <ul className="flex justify-end p-0 list-none">
                  <li className="align-top w-[40px] flex text-center justify-center items-center">
                    <a
                      href="/"
                      className="relative block text-black no-underline"
                    >
                      {" "}
                      <img
                        src="https://theme.hstatic.net/1000185342/1000830674/14/searcg-icon.svg?v=48"
                        alt="Tìm kiếm"
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
                  <li className="align-top w-[40px] flex text-center justify-center items-center">
                    <a
                      href="/"
                      className="relative block text-black no-underline"
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
                    </a>
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
