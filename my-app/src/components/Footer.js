import React from "react";
import { ImLocation } from "react-icons/im";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiTiktok, SiZalo } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <footer className=' bottom-0 bg-cover  text-white bg-[#212121]  bg-no-repeat  bg-center bg-[url("https://file.hstatic.net/200000397757/file/wd-footer-bg_bd337816b3d64003b9fa0ca6f4b8b3fa.png")]'>
        <div className="py-[45px]">
          <div className="container w-[1300px] px-[15px]  mx-auto relative">
            <div className="flex flex-wrap justify-between">
              <div className="p-[15]  mb-[15px]">
                <div className="title-footer ">
                  <h4 className="text-xl font-medium  pb-[10px] relative">
                    TALY
                  </h4>
                </div>
                <div className="mt-3">
                  <p className="mb-[10px] leading-5 text-sm">
                    Đặt hàng trực tuyến (9h-21h) CSKH (9h-21h)
                  </p>
                  <ul className="p-0 list-none ">
                    <li className="py-[7px] text-sm inline">
                      <ImLocation size={"15px"} className="inline mr-2" />
                      245F Lê Văn Sỹ, Phường 13, Quận Phú Nhuận
                    </li>
                    <li className="py-[7px] transition-all hover:text-[#ff6310] text-sm">
                      {" "}
                      <BsFillTelephoneFill
                        size={"15px"}
                        className="inline mr-2"
                      />{" "}
                      <a href="/"> 0985.83.24.83</a>
                    </li>
                    <li className="py-[7px] transition-all hover:text-[#ff6310]  text-sm">
                      <FiMail size={"15px"} className="inline mr-2" />
                      <a href="/"> 0985.83.24.83</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-[15]  mb-[15px]">
                <div className="title-footer ">
                  <h4 className="text-xl font-medium  pb-[10px] relative">
                    Liên kết
                  </h4>
                </div>
                <div className="mt-3">
                  <ul className="p-0 list-none ">
                    <li className="py-[7px] transition-all text-sm hover:text-[#ff6310]">
                      <a href="/"> Tìm kiếm</a>
                    </li>
                    <li className="py-[7px] transition-all  text-sm hover:text-[#ff6310]">
                      {" "}
                      <a href="/"> Thông tin tuyển dụng</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-[15]  mb-[15px]">
                <div className="title-footer ">
                  <h4 className="text-xl font-medium  pb-[10px] relative">
                    Chính sách
                  </h4>
                </div>
                <div className="mt-3">
                  <ul className="p-0 list-none ">
                    <li className="py-[7px] transition-all text-sm hover:text-[#ff6310]">
                      <a href="/">Chính sách thanh toán - Giao hàng</a>
                    </li>
                    <li className="py-[7px] transition-all hover:text-[#ff6310]  text-sm">
                      <a href="/">Chính sách đổi hàng</a>
                    </li>
                    <li className="py-[7px] transition-all hover:text-[#ff6310]  text-sm">
                      <a href="/">Chính sách bảo mật</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-[15]  mb-[15px]">
                <div className="title-footer ">
                  <h4 className="text-xl font-medium  pb-[10px] relative">
                    Đăng ký nhận khuyến mãi
                  </h4>
                </div>
                <div className="mt-3">
                  <p className="mb-[10px] leading-5 text-sm">
                    Hãy là người đầu tiên nhận khuyến mãi lớn!
                  </p>
                  <div>
                    <form className="bg-white rounded-md  h-[45px] leading-[45px] border-none w-full max-w-full  relative">
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="border-none outline-none w-full pr-[100px] pl-[10px] text-black "
                        />
                      </div>
                      <button className="absolute top-0 right-0 px-2 text-center text-white uppercase bg-black border-none">
                        Đăng ký
                      </button>
                    </form>
                  </div>
                  <ul className="flex flex-wrap items-center p-0 mt-4 list-none">
                    <li className="ml-4">
                      {" "}
                      <a href="">
                        <SiZalo size={"25px"} />
                      </a>
                    </li>
                    <li className="ml-4">
                      {" "}
                      <a href="">
                        <SiTiktok size={"25px"} />
                      </a>
                    </li>
                    <li className="ml-4">
                      {" "}
                      <a href="">
                        <BsTwitter size={"25px"} />
                      </a>
                    </li>
                    <li className="ml-4">
                      {" "}
                      <a href="">
                        <BsYoutube size={"25px"} />
                      </a>
                    </li>
                    <li className="ml-4">
                      {" "}
                      <a href="">
                        <BsInstagram size={"25px"} />
                      </a>
                    </li>
                    <li className="ml-4">
                      {" "}
                      <a href="">
                        <BsFacebook size={"25px"} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t border-solid  border-[#e8e8f2] py-[15px]">
          <div className="container w-[1300px]  mr-auto ml-auto relative  px-[15px]">
            <div className="flex flex-wrap items-center justify-center  -mx-[15px]">
              <div className="px-[15px] relative  text-center w-full">
                <div className="">
                  <p className="m-0 text-sm leading-5 text-left">
                    © Copyright 2022 By
                    <a
                      href="/"
                      className="no-underline hover:text-[#ff6310] ml-1"
                    >
                      TALY.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
