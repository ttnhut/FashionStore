import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsCartPlus } from "react-icons/bs";
import Base from "../components/Base";
import { loadAddClothes } from "../services/clothes-service";
import { useCart } from "../contexts/cartContext";
const fakeData = [
  {
    id: 1,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 2,
    image:
      "https://product.hstatic.net/1000185342/product/img_2697_34d892c4fe064995ba4abff42b0eed25_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/1000185342/product/z3524825081196_a9ef1d04515ff76e966264f3d9a2bbc5_ebfc9ad7bb41483d94efee8d55e65671_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 4,
    image:
      "https://product.hstatic.net/1000185342/product/z3509895198313_782b45bc7c14e25f87d891ac1bb41b39_97072a597688422c9dbaee9f85b1369a_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 5,
    image:
      "https://product.hstatic.net/1000185342/product/z3529867157593_8d918171db8cf2825ba5d25bb189a506_d980e72b60804d1e8fa36f8a5a6f3a79_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 6,
    image:
      "https://product.hstatic.net/1000185342/product/2bf549f8-7a55-4e3e-8239-dc88885bbb46_10cc50cfd5364127898ac83dc572f8a0_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 7,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 8,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 9,
    image:
      "https://product.hstatic.net/1000185342/product/z3675560354662_20d3868f000f209206650f9f1cae3c8b_e30ea2d1f30a432a999b30d337a65b82_large.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHO5fXMEdPas82Ey1HBqQ0-lqewHSsNEmuu0CppFQ&s",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 11,
    image:
      "https://i.pinimg.com/736x/34/73/21/34732191453e029a9b5747f286ec5ebb.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
  {
    id: 12,
    image: "https://cdn.tgdd.vn/Files/2016/09/22/890362/image002_gghx.jpg",
    description: "Áo trễ vai 2 tầng bèo Lili",
    price: 239000,
  },
];

const HomePage = () => {
  const [clothesContent, setClothesContent] = useState(fakeData);
  console.log("clothesContent: ", clothesContent);
  useEffect(() => {
    loadAddClothes()
      .then((res) => {
        console.log(res);
        setClothesContent(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <main className=" min-h-[60.5vh]">
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
              {clothesContent?.length >= 0 &&
                clothesContent
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
                  {/* {clothesContent?.content?.map((item) => (
                    <>
                      <CardItem key={item.id} info={item}></CardItem>
                    </>
                  ))} */}
                  {clothesContent?.length > 0 &&
                    clothesContent?.map((item) => (
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

const CardItem = ({
  info: { color, image, name, description, price, quantity, id, category_id },
}) => {
  const { addToCart } = useCart();

  const item = {
    color,
    image,
    name,
    description,
    price,
    quantity,
    id,
    category_id,
  };
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-2 ">
        <div className="bg-white rounded-lg shadow hover:shadow-md">
          <div className="relative max-w-[300px] overflow-hidden rounded-t cursor-pointer group ">
            <img
              src={image}
              alt=""
              className="object-cover w-[300px] h-[300px] group-hover:scale-105 "
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
              onClick={() => addToCart(item)}
              className="absolute flex items-center justify-center invisible px-4 py-4 text-sm font-medium text-black transition-all bg-white rounded-lg opacity-0 bottom-4 -translate-x-2/4 left-2/4 group-hover:opacity-100 group-hover:visible hover:bg-black hover:text-white"
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
                {
                  (price = price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  }))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
