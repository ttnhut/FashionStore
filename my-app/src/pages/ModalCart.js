import React, { useState } from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const ModalCart = ({ open = false, handleClose = () => {} }) => {
  const { cartItems } = useCart();
  console.log("cartItems: ", cartItems);

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center p-5 modal transition-all duration-500 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-60 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 w-full p-4 bg-white rounded-lg modal-content max-w-[500px]">
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 p-1 bg-black rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
          onClick={handleClose}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
              fill="#fff"
            />
          </svg>
        </span>
        <h2 className="pb-3 text-xl font-medium text-[#252a2b] text-center  uppercase border-b border-solid border-[#e3e5ec]">
          Giỏ hàng
        </h2>
        <div className="">
          <ul>
            {cartItems.length === 0 ? (
              <div className="w-full mx-auto">
                <img
                  src="https://bizweb.sapocdn.net/100/419/232/themes/809377/assets/empty-cart.png?1662538039841"
                  alt=""
                  className="h-[200px] mx-auto"
                />
              </div>
            ) : (
              cartItems.map((item) => (
                <ListItem key={item.id} info={item}></ListItem>
              ))
            )}
          </ul>
          <span className="float-left  w-full  border-t  border-solid border-[#e3e5ec]"></span>
        </div>
        <table className="w-full border-spacing-0">
          <tbody>
            <tr>
              <td className="text-base font-medium uppercase p-[10px]">
                Tổng tiền :
              </td>
              <td className="text-[#ff0000] text-lg font-medium float-right p-[10px]">
                {cartItems.reduce(
                  (previousValue, currentValue) =>
                    previousValue +
                    Number(currentValue.price * currentValue.quantity),
                  0
                )}{" "}
                .000đ
              </td>
            </tr>
            <tr>
              <td className="p-[10px]  text-left pl-0 ">
                <Link
                  to="/cart"
                  className="transition-all hover:bg-white hover:text-black  hover:border hover:border-solid hover:border-[#000] uppercase bg-black text-white text-sm py-[15px] px-[10px] relative  w-full  mb-0 inline-block  border border-solid border-[#fff] text-center "
                >
                  xem giỏ hàng
                </Link>
              </td>
              <td className="p-[10px]  text-left pl-0 ">
                <a
                  href="/"
                  className="transition-all hover:bg-black hover:text-white uppercase bg-white text-black text-sm py-[15px] px-[10px] relative  w-full  mb-0 inline-block  border border-solid border-[#000] text-center "
                >
                  thanh toán
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.querySelector("body")
  );
};

function ListItem({ info: { image, description, price, quantity, id } }) {
  // const [count, setCount] = useState(1);
  const { RemoveCart, addToCart, RemoveCartItem } = useCart();

  const item = { image, description, price, quantity, id };

  return (
    <li className="flex flex-row ">
      <div className="max-w-[90px] py-[10px] pr-[10px]  ">
        <a href="/" className="">
          <img src={image} alt="" className="w-full " />
        </a>
      </div>
      <div className="relative  py-[10px] pr-[25px] w-full ">
        <a
          href="/"
          className="hover:text-[#ff6310] float-left  w-full  text-[14px] "
        >
          {description}
        </a>
        <span className="uppercase text-[12px] float-left w-full text-black opacity-80 mt-[5px] mb-[5px]">
          Xanh/s
        </span>
        <div className="flex float-left  w-[100px]">
          <input
            onClick={() => RemoveCart(item)}
            type="button"
            value="-"
            disabled={quantity === 1}
            className="flex bg-white  float-left border border-solid border-[#e1e1e1] cursor-pointer h-[33px] w-[33px]  text-center text-xl  text-black  justify-center items-center "
          />
          <input
            type="text"
            value={quantity}
            className="flex  bg-white  float-left border border-solid border-[#e1e1e1] border-l-0 h-[33px] w-[33px]  text-center text-base text-black  justify-center items-center"
          />
          <input
            type="button"
            onClick={() => addToCart(item)}
            value="+"
            className="flex  bg-white  float-left border border-solid border-[#e1e1e1] border-l-0 h-[33px] w-[33px]  text-center text-xl cursor-pointer text-black  justify-center items-center"
          />
        </div>

        <span className="block float-left text-[#ff0000] mt-1 ml-[10px]">
          {price * quantity}.000đ
        </span>

        <span
          className="absolute cursor-pointer   right-0  w-5 h-5 top-[10px] text-[17px] text-center "
          onClick={() => RemoveCartItem(item)}
        >
          <GrClose size={"15px"} />
        </span>
      </div>
    </li>
  );
}

export default ModalCart;
