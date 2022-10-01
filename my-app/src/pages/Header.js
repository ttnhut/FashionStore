import { Fragment, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ModalCart from "./ModalCart";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";

// const navigation = [
//   { name: "Trang chủ", href: "#", current: false },
//   { name: "Tất cả sản phẩm", href: "#", current: false },
//   { name: "Cửa hàng", href: "#", current: false },
//   // { name: "Calendar", href: "#", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartItems } = useCart();
  const cartItemCount = cartItems.length;
  return (
    <>
      <Disclosure
        as="nav"
        className="fixed top-0 w-full left-0 right-0 z-[999] shadow-md  bg-white"
      >
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex items-center flex-shrink-0">
                    <Link to="/">
                      <img
                        className="block w-auto h-8 lg:hidden"
                        src="https://file.hstatic.net/1000185342/file/logo_tbag_chuan_e0e6d9427a5f4e32b61668dd34b671ce.png"
                        alt="Your Company"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        className="hidden w-auto h-8 lg:block"
                        src="https://file.hstatic.net/1000185342/file/logo_tbag_chuan_e0e6d9427a5f4e32b61668dd34b671ce.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center justify-between space-x-4">
                      <Link
                        to="/"
                        className="px-3 py-2 text-base hover:text-[#ff6310]"
                      >
                        Trang chủ
                      </Link>
                      <Link
                        to=""
                        className="px-3 py-2 text-base hover:text-[#ff6310]"
                      >
                        Tất cả sản phẩm
                      </Link>
                      <Link
                        to=""
                        className="px-3 py-2 text-base hover:text-[#ff6310]"
                      >
                        Cửa hàng
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* search */}
                  <div className="items-center hidden w-[400px] max-w-xs bg-white rounded-md shadow mr-8 lg:flex">
                    <input
                      className="w-full py-3 pl-4 text-sm bg-transparent outline-none "
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
                    />
                    <svg
                      className="h-5 px-4 ml-auto text-gray-500 "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#000"
                        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center ">
                    <button
                      type="button"
                      className="relative block p-2 text-black rounded-full "
                    >
                      <div className="absolute top-0 right-0 z-10 bg-black text-white text-xs font-bold px-1 py-0.5 rounded-full">
                        0
                      </div>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                      <span className="sr-only">View notifications</span>
                    </button>
                    <button
                      type="button"
                      className="relative p-2 text-black rounded-full "
                    >
                      <div className="absolute top-0 right-0 z-10 bg-black text-white text-xs font-bold px-1 py-0.5 rounded-full">
                        3
                      </div>
                      <span className="sr-only">View notifications</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                    {/* cart */}
                    <button
                      type="button"
                      className="relative p-2 text-black rounded-full "
                      onClick={() => setShowModal(true)}
                    >
                      <div className="absolute top-0 right-0 z-10 bg-black text-white text-xs font-bold px-1 py-0.5 rounded-full">
                        {cartItemCount}
                      </div>
                      <span className="sr-only">View notifications</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                    <ModalCart
                      open={showModal}
                      handleClose={() => {
                        setShowModal(false);
                      }}
                    ></ModalCart>
                  </div>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    {/* <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                    </Transition> */}
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                {/* block px-3 py-2 rounded-md text-base font-medium */}
                <Disclosure.Button>
                  <Link
                    to="/"
                    className="block text-start px-3 py-2 text-base hover:text-[#ff6310]"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    to=""
                    className="block text-start px-3 py-2 text-base hover:text-[#ff6310]"
                  >
                    Tất cả sản phẩm
                  </Link>
                  <Link
                    to=""
                    className="block text-start px-3 py-2 text-base hover:text-[#ff6310]"
                  >
                    Cửa hàng
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
