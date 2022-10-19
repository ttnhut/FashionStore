/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Base from '../components/Base';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const UserInformation = () => {
  const days = ['1', '2', '3', 
  '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
  const month=[
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agust',
    'September',
    'October',
    'November',
    'December'
  ]
  const year=[
    '1990','1991','1992'
  ]

    return (
        <Base>
            <div
  style={{ backgroundColor: "#f4f4f0" }}
  className=" sm:mx-32 lg:mx-32 xl:mx-72 "
>
  <div className="flex justify-between container mx-auto rounded">
    <div className="w-full">
      <div className="mt-4 px-4">
        <h1 className="font-thinner flex text-4xl pt-10 px-5 font-black">
          My Profile
        </h1>
        <form className="mx-5 my-5">
        <div className="mb-5 ">
            <label className="input-field inline-flex items-baseline border-2 border-black rounded  p-4">
              <span className="flex-none text-dusty-blue-darker select-none leading-none">
                User name
              </span>
              <div className="flex-1 leading-none">
                <input
                  id="handle"
                  type="text"
                  className="w-full pl-1 bg-transparent focus:outline-none"
                  name="handle"
                  placeholder="username"
                />
              </div>
            </label>
          </div>
          <label
            className="relative block p-3 border-2 border-black rounded"
            htmlfor="name"
          >
            <span
              className="text-md font-semibold text-zinc-900"
              htmlfor="name"
            >
              Name
            </span>
            <input
              className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </label>
          <label
            className="relative block p-3 border-2 border-black rounded mt-4"
            htmlfor="name"
          >
            <span
              className="text-md font-semibold text-zinc-900"
              htmlfor="name"
            >
              Email
            </span>
            <input
              className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
              id="email"
              type="password"
              placeholder="Email"
            />
          </label>
          <label
            className="relative block p-3 border-2 border-black rounded mt-4"
            htmlfor="name"
          >
            <span
              className="text-md font-semibold text-zinc-900"
              htmlfor="name"
            >
              Phone
            </span>
            <input
              className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
              id="phone"
              type="text"
              placeholder="Phone"
            />
          </label>
          <label
            className="relative p-3 border-2 border-black rounded mt-4 flex items-center "
            htmlfor="name"
          >
            <span
              className="text-md font-semibold text-zinc-900"
              htmlfor="name"
            >
              Giới tính
            </span>
            <div className="flex justify-items-center">
        <div className='ml-4'><input type="radio" value="Male" name="gender"  /> Male</div>
        <div className='ml-4'><input type="radio" value="Male" name="gender"  /> Female</div>
        <div className='ml-4'><input type="radio" value="Male" name="gender"  /> Khác</div>
        
      </div> 
          </label>
          <label
            className="relative p-3 border-2 border-black rounded mt-4 flex items-center "
            htmlfor="date"
          >
            <span
              className="text-md font-semibold text-zinc-900"
              htmlfor="date"
            >
              Ngày sinh
            </span>
      <div className="flex">
        <div style={{marginLeft:'100px'}}>
        <Autocomplete
          options={days}
          style={{ width: 110 }}
          renderInput={(params) =>
            <TextField {...params} label="Day" variant="outlined" />}/>
          </div>
        <div style={{marginLeft:'150px'}}>
        <Autocomplete
          options={month}
          style={{ width: 110 }}
          renderInput={(params) =>
            <TextField {...params} label="Month" variant="outlined" />}/>
            </div>
          <div style={{marginLeft:'120px'}}>
        <Autocomplete
          options={year}
          style={{ width: 110 }}
          renderInput={(params) =>
            <TextField {...params} label="Year" variant="outlined" />}/>
            </div>
      </div>
          </label>

          <div className="shrink-0 mt-5">
            <img
              className="h-20 w-20 object-cover rounded-full"
              src="https://image.shutterstock.com/image-vector/user-icon-vector-web-computer-260nw-1915878376.jpg"
              alt="Current profile photo"
            />
          </div>
          <label className="block pt-2">
            <span className="sr-only t-2">Choose profile photo</span>
            <input
              type="file"
              className="w-full text-sm text-slate-500file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-300 file:text-zinc-900 hover:file:bg-rose-300
    "
            />
          </label>
          
          <button className="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

        </Base>
    );
};

export default UserInformation; 