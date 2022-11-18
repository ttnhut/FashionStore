import React from 'react'
import Counter from '../components/Counter';
import Footer from './Footer';
import Header from './Header';

function ProductPage() {

  return (
    
    <div>
      <Header/>
        <div className="flex justify-center mt-20 mb-20">
            <div className="flex flex-1 items-center justify-center ">
              
              <div className="float-left w-72 ml-4 ">
                <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
                  alt="product_image"
                  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md opacity-90 hover:opacity-100"/>
                <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
                  alt="product_image"
                  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/>
                <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
                  alt="product_image"
                  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/>
                <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
                  alt="product_image"
                  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/>
                {/* <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
                  alt="product_image"
                  className="h-20 my-2 cursor-pointer block rounded-lg shadow-md"/> */}
              </div>

              <div className="float-right">
                <img src="https://product.hstatic.net/1000185342/product/z3532539262041_392bf61850d8547d955ba852c2b33a66_57047d07965845ef990d9d5240b99153_1024x1024.jpg"
                alt="product_image"
                className=" w-[100%] h-[100%] rounded-lg shadow-md hover:scale-[1.1] ease-in duration-300"/>
              </div>
            </div>

            <div className="flex-[1.3] flex items-center justify-items-start flex-col mt-10">
              <h1 className="title text-[40px]">Áo Mini Cat</h1>

              <p className="pr-[4rem] text-justify mt-4 text-[24px]"> <b className="text-[#000]">Thương Hiệu:</b> khác | 
                  <b className="text-[#000] hover:text-[#dc2626]"> Loại: </b> Áo | <b className="text-[#000]">MSP:</b>S30061 </p>

              <div className="flex items-center justify-center">
                  <p className="mt-7 text-2xl font-bold"> Giá: <b className="text-[#dc2626]"> 300.000Đ</b> </p>
                  <p className="mt-7 text-2xl font-bold ml-3">Tình Trạng: <b className="text-[#dc2626]">Còn Hàng</b> </p>
              </div>
              
              {/*color variant */}

              <div className="flex text-2xl mt-3 text-[#000] font-bold">
                color 
                <div className=" bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5 cursor-pointer hover:border-[#0891b2]"></div>
                <div className=" bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5 cursor-pointer hover:border-[#0891b2]"> </div>
                <div className=" bg-green-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5 cursor-pointer hover:border-[#0891b2]"></div>
              </div>

              <div className="mt-3 text-2xl">
                Size
                <select className="ml-2 border-2">
                  <option select disabled> Chọn</option>
                  <option> S</option>
                  <option> M </option>
                  <option> L</option>
                </select>
              </div>

              <div className="mt-5">
                <Counter/>
              </div>
              
              <div className="flex items-center justify-center">
                  <button className="text-white bg-[#000] rounded-md p-3 mt-5 mr-12 hover:bg-[#fff] hover:text-black">
                    Thêm vào giỏ
                  </button>

                  <button className="text-white bg-[#000] rounded-md p-3 mt-5 mr-12  hover:bg-[#fff] hover:text-black ">
                    Mua Ngay
                  </button>
              </div>
                
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ProductPage;