import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsCartPlus } from "react-icons/bs";
import Base from "../components/Base";
import { useCart } from "../contexts/cartContext";

const HomePage = () => {
  const { data } = useCart();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    arrows: true,
    prevArrow: <GrPrevious />,
    nextArrow: <GrNext />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Base>
      <main className="pt-10 min-h-[60.5vh]">
        <h1 className="hidden">TALY</h1>
        <section>
          <div className="block cursor-pointer">
            <a href="/">
              <img
                src="https://file.hstatic.net/1000185342/file/f5_e3642e3ab3b84c92aaef008e06043fad_master.jpg"
                alt=""
                className="object-cover w-full "
              />
            </a>
          </div>
        </section>
        <section className="p-8">
          <div className="container xl:w-[1300px] lg:w-[1044px] md:w-[788px]  relative px-4 ml-auto mr-auto">
            <div className="mb-8 text-center ">
              <h2 className="mb-1 text-center underline lg:text-2xl md:text-xl">
                Được ưa thích
              </h2>
            </div>
            <Slider {...settings}>
              {data.length >= 0 &&
                data
                  .slice(0, 8)
                  .map((item) => (
                    <CardItem key={item.id} info={item}></CardItem>
                  ))}
            </Slider>
          </div>
        </section>
        <section className="mb-7">
          <div className="container xl:w-[1300px] lg:w-[1044px] md:w-[788px] py-[15px] relative  mr-auto ml-auto">
            <div className="mb-[30px]  text-center">
              <h2 className="flex justify-center mb-1 text-center lg:text-2xl md:text-xl">
                <span className="font-medium text-center uppercase ">
                  Sản phẩm nổi bật
                </span>
              </h2>
            </div>
            <ul className="flex flex-wrap pl-0 justify-center  mb-[15px] p-0 list-none">
              <li className="mb-[10px] mr-[10px] flex">
                <a
                  href="/"
                  className="text-[#ff6310] text-sm border border-dashed border-[#ff6310] p-[10px] rounded-2xl uppercase"
                >
                  {" "}
                  top
                </a>
              </li>
              <li className="mb-[10px] mr-[10px] flex">
                <a
                  href="/"
                  className="text-sm text-black   p-[10px] rounded-2xl uppercase"
                >
                  {" "}
                  bottom
                </a>
              </li>
              <li className="mb-[10px] mr-[10px] flex">
                <a
                  href="/"
                  className="text-sm text-black p-[10px] rounded-2xl uppercase"
                >
                  {" "}
                  Đầm
                </a>
              </li>
            </ul>
            <div className="tap-reuslt">
              <div className="block ml-6">
                <div className="-ml-[15px] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-[0.5px]">
                  {data.length > 0 &&
                    data.map((item) => (
                      <CardItem key={item.id} info={item}></CardItem>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
};

const CardItem = ({ info: { image, description, price, quantity, id } }) => {
  const { addToCart } = useCart();

  const item = { image, description, price, quantity, id };
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-2 ">
        <div className="bg-white rounded-lg shadow hover:shadow-md">
          <div className="relative max-w-[300px] overflow-hidden rounded-t cursor-pointer group ">
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full group-hover:scale-105 "
            />
            <span className="absolute z-10 invisible w-8 transition-all opacity-0 cursor-pointer right-5 top-5 group-hover:opacity-100 group-hover:visible">
              <svg
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full"
              >
                <path
                  d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <button
              className="absolute flex items-center justify-center invisible px-4 py-4 text-sm font-medium text-black transition-all bg-white rounded-lg opacity-0 bottom-4 -translate-x-2/4 left-2/4 group-hover:opacity-100 group-hover:visible hover:bg-black hover:text-white"
              onClick={() => addToCart(item)}
            >
              <BsCartPlus size={"20px"} className="mr-2" /> Add to cart
            </button>
          </div>

          <div className="px-2 pt-3 text-start ">
            <div>
              <p className="text-base font-normal ">{description}</p>
            </div>

            <div className="pt-1 pb-2">
              <div className="text-base font-semibold text-red-400">
                {price}đ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
