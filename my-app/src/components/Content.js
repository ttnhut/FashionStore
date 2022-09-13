import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
const Content = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    arrows: true,
    prevArrow: <GrPrevious />,
    nextArrow: <GrNext />,
  };

  return (
    <main className="pt-10 min-h-[60.5vh]">
      <h1 className="hidden">TALY</h1>
      <section>
        <div className="min-h-[398px] block cursor-pointer">
          <a href="/">
            <img
              src="https://file.hstatic.net/1000185342/file/f5_e3642e3ab3b84c92aaef008e06043fad_master.jpg"
              alt=""
              className="object-cover w-full"
            />
          </a>
        </div>
      </section>
      <section className="p-8">
        <div className="container w-[1300px] relative px-4  mr-auto ml-auto">
          <div className="mb-8 text-center ">
            <h2 className="flex items-center justify-center mb-1 text-2xl underline">
              Được ưa thích
            </h2>
          </div>
          <Slider {...settings}>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg"
              }
              desription="Áo trễ vai 2 tầng bèo Lili"
              price={"239,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/img_2697_34d892c4fe064995ba4abff42b0eed25_large.jpg"
              }
              desription="Áo thun form rộng Enni"
              price={"245,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/86e031a0-028c-444f-a58d-e01ef2627003_513ee85ae5234d5ba00d5b05b8476efa_large.jpg"
              }
              desription="Áo sơ mi tay ngắn viền chỉ Ongy"
              price={"219,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/3d5b48d8-7f8c-45e8-9c62-ba2e98fc2375_949b56cebb19461482f4098fb8710d58_large.jpg"
              }
              desription="Áo ghile len sọc Kena"
              price={"319,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/0a90470a-4b73-4c34-a196-139b37e3ec2e_8e3849738561472e94b69c6caa618d09_large.jpg"
              }
              desription="Áo 2 nơ Sona"
              price={"289,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/3d5b48d8-7f8c-45e8-9c62-ba2e98fc2375_949b56cebb19461482f4098fb8710d58_large.jpg"
              }
              desription="Áo ghile len sọc Kena"
              price={"319,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg"
              }
              desription="Áo trễ vai 2 tầng bèo Lili"
              price={"239,000₫"}
            ></CardItem>
            <CardItem
              image={
                "https://product.hstatic.net/1000185342/product/img_2697_34d892c4fe064995ba4abff42b0eed25_large.jpg"
              }
              desription="Áo thun form rộng Enni"
              price={"245,000₫"}
            ></CardItem>
          </Slider>
        </div>
      </section>
      <section className="mb-7">
        <div className="container w-[1300px] py-[15px] relative  mr-auto ml-auto">
          <div className="mb-[30px]  text-center">
            <h2 className="flex justify-center mb-1 text-2xl text-center">
              <span className=" flex items-center text-[22px] uppercase  font-medium">
                Sản phẩm nổi bật
              </span>
            </h2>
          </div>
          <ul className="flex flex-wrap pl-0  justify-center  mb-[15px] p-0 list-none">
            <li className="mr-[15px]  mb-[10px] flex"></li>
          </ul>
        </div>
      </section>
    </main>
  );
};

const CardItem = ({ image, desription, price }) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-full p-2 ">
        <div className="bg-white rounded-lg shadow-md ">
          <a href="/" className="outline-none">
            <img src={image} alt="" className="rounded-t-xl " />
          </a>
          <div className="px-2 pt-1 text-start ">
            <div className="p-1 ">
              <p className="text-base font-normal ">{desription}</p>
              {/* <p className="text-gray-500 font-nunito">
                Short description here
              </p> */}
            </div>
            <div className="p-1 pb-3">
              <div className="text-base font-semibold text-red-400">
                {price}
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-center px-2 pb-1">
            <div className="w-1/2 p-2">
              <button className="block w-full p-1 text-white border rounded-md bg-[#064635] hover:opacity-90">
                <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                  <path
                    fill="currentColor"
                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                  />
                </svg>{" "}
                Chi tiết
              </button>
            </div>
            <div className="w-1/2 p-2">
              <button className="block w-full p-1 text-white bg-red-500 border rounded-md hover:bg-red-400 ">
                Thêm vào giỏ
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Content;
