import React from "react";
import Base from "../components/Base";
import { useCart } from "../contexts/cartContext";

const DashBoard = () => {
  const { data } = useCart();
  return (
    <Base>
      <>
        {/* component */}
        <div className="w-full p-8 bg-white rounded-md">
          <div className="flex items-center justify-between pb-6 ">
            <div>
              <h2 className="text-lg font-semibold text-blue-500">
                Tất cả sản phẩm
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center p-2 border border-solid rounded-md border-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="block ml-1 outline-none "
                  type="text"
                  name=""
                  id=""
                  placeholder="search..."
                />
              </div>
              <div className="flex ml-10 space-x-8 lg:ml-40">
                <button className="px-4 py-2 font-medium tracking-wide text-white bg-indigo-500 rounded-md cursor-pointer">
                  Thêm sản phẩm
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-4 text-sm font-medium tracking-wider text-left text-black uppercase bg-gray-100 border-b-2 border-gray-200">
                        Tên sản phẩm
                      </th>
                      <th className="px-5 py-4 text-sm font-medium tracking-wider text-left text-black uppercase bg-gray-100 border-b-2 border-gray-200">
                        Mã sản phẩm
                      </th>
                      <th className="px-5 py-4 text-sm font-medium tracking-wider text-left text-black uppercase bg-gray-100 border-b-2 border-gray-200">
                        Kho
                      </th>
                      <th className="px-5 py-4 text-sm font-medium tracking-wider text-left text-black uppercase bg-gray-100 border-b-2 border-gray-200">
                        Giá
                      </th>
                      <th className="px-5 py-4 text-sm font-medium tracking-wider text-left text-black uppercase bg-gray-100 border-b-2 border-gray-200">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 &&
                      data.map((item) => (
                        <tr key={item.id}>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-[60px] h-[60px]">
                                <img
                                  className="w-full h-full rounded "
                                  src={item.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-base font-medium text-gray-900 ">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-base font-medium text-gray-900">
                              {item.id}
                            </p>
                          </td>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-base font-medium text-green-500 ">
                              Còn Hàng
                            </p>
                          </td>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-base font-medium text-gray-900">
                              {item.price}đ
                            </p>
                          </td>
                          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                              <div className="flex justify-around">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6 text-blue-700 cursor-pointer"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6 ml-3 text-red-500 cursor-pointer"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </div>
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between ">
                  <button className="py-2 text-base font-normal text-white bg-pink-600 rounded opacity-90 px-14 hover:opacity-100">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Base>
  );
};

export default DashBoard;
