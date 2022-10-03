import React from "react";
import Base from "../components/Base";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

const Cart = () => {
  const { cartItems } = useCart();
  console.log("cartItems cart: ", cartItems);
  const cartItemCount = cartItems.length;

  return (
    <Base>
      <div className="mt-[80px] bg-white">
        <div className="w-full xl:w-[1300px] lg:w-[1044px] md:w-[788px] mx-auto mt-10">
          <div className="flex">
            <div className="flex-1 p-10 bg-white ">
              <div className="flex justify-between pb-8 border-b">
                <h1 className="text-2xl font-medium ">Giỏ hàng:</h1>
                <h2 className="text-2xl font-medium">
                  {cartItemCount} sản phẩm
                </h2>
              </div>
              <div className="flex mt-5 mb-5">
                <h3 className="w-2/5 text-base leading-3 font-medium  text-[#ff6310]">
                  Thông tin chi tiết sản phẩm
                </h3>
                <h3 className="w-1/5 text-base leading-3 font-medium text-center text-[#ff6310] ">
                  Số lượng
                </h3>
                <h3 className="w-1/5 text-base leading-3 font-medium text-center text-[#ff6310] ">
                  Giá bán
                </h3>
                <h3 className="w-1/5 text-base leading-3 font-medium text-center text-[#ff6310] ">
                  Tổng
                </h3>
              </div>
              {cartItems.length === 0 ? (
                <div className="w-full mx-auto">
                  <img
                    src="https://bizweb.sapocdn.net/100/419/232/themes/809377/assets/empty-cart.png?1662538039841"
                    alt=""
                    className="h-[200px] mx-auto"
                  />
                  <p className="mt-4 text-lg text-center ">
                    Giỏ hàng của bạn đang trống. Mời bạn mua thêm sản phẩm
                    <Link
                      to="/"
                      className="text-lg uppercase text-[#ff6310] font-semibold"
                    >
                      &nbsp;tại đây !
                    </Link>
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartListShopping
                    key={item.id}
                    info={item}
                  ></CartListShopping>
                ))
              )}
            </div>
            <div
              id="summary"
              className="w-1/4 px-5 py-6 mb-5 border border-gray-300 border-solid rounded-md "
            >
              <h1 className="pb-3 text-2xl font-medium border-b">
                Thông tin đơn hàng
              </h1>
              <div className="flex justify-between mt-5 mb-5">
                <span className="text-xl font-medium ">Tổng tiền:</span>
                <span className="text-xl font-medium text-[#e70303]">
                  {cartItems.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      currentValue.price * currentValue.quantity,
                    0
                  )}{" "}
                  .000đ
                </span>
              </div>
              <div className="py-[15px]">
                <p>
                  Phí vận chuyển sẽ được tính ở trang thanh toán. <br /> Bạn
                  cũng có thể nhập mã giảm giá ở ở phía dưới
                </p>
              </div>
              {/* ghi chú */}
              <div className="mb-[15px]">
                <label
                  htmlFor="note"
                  className="mb-[10px] text-black font-semibold block"
                >
                  Ghi chú đơn hàng
                </label>
                <textarea
                  className="w-full px-3 py-2 resize-none outline-none border border-[#e5e5e5]"
                  id="note"
                  name="note"
                  rows="4"
                  placeholder="Ghi chú"
                ></textarea>
                <input
                  className="w-full px-3 py-2 resize-none outline-none border border-[#e5e5e5] "
                  id="code-discont"
                  placeholder="Nhập mã khuyến mãi (nếu có)"
                ></input>
              </div>

              <div className="">
                <button className="w-full py-3 text-base font-medium text-white bg-black rounded">
                  Thanh toán ngay
                </button>
                <Link
                  to="/"
                  className="flex items-center justify-center mt-3 text-base font-medium text-black hover:text-[#ff6310]"
                >
                  <TiArrowBack className="mr-2" />
                  Tiếp tục mua hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

function CartListShopping({
  info: { image, description, price, quantity, id },
}) {
  const { RemoveCartItem } = useCart();
  const item = { image, description, price, quantity, id };
  return (
    <div className="flex items-center px-6 py-5  border-t border-solid border-[#e5e5e5] ">
      <div className="flex w-2/5">
        {" "}
        {/* product */}
        <div className="w-20">
          <img className="object-cover w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between flex-grow ml-4 ">
          <span className="text-base font-medium leading-5">{description}</span>
          <span className="text-sm text-red-500">Xanh/S</span>
          <button
            onClick={() => RemoveCartItem(item)}
            className="text-sm font-medium text-left underline hover:text-red-400"
          >
            Xóa
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <input
          // onClick={RemoveCart(item)}
          type="button"
          value="-"
          className={`flex bg-white  float-left border border-solid border-[#e1e1e1]  h-[33px] w-[33px]  text-center text-xl  text-black  justify-center items-center ${
            quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
          } `}
        />
        <input
          type="text"
          value={quantity}
          className="flex  bg-white  float-left border border-solid border-[#e1e1e1] border-l-0 h-[33px] w-[33px]  text-center text-base text-black  justify-center items-center"
        />
        <input
          type="button"
          // onClick={() => addToCart(item)}
          value="+"
          className="flex  bg-white  float-left border border-solid border-[#e1e1e1] border-l-0 h-[33px] w-[33px]  text-center text-xl cursor-pointer text-black  justify-center items-center"
        />
      </div>
      <span className="w-1/5 text-sm font-medium text-center">{price}đ</span>
      <span className="w-1/5 text-sm font-medium text-center">
        {price * quantity}.000đ
      </span>
    </div>
  );
}
export default Cart;
