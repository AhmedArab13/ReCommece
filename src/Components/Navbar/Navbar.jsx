import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../../../features/slices/authSlice";
export default function Navbar() {
  
  
  const dispatch =  useDispatch();
  const [open, setOpen] = useState(false);


  const handlerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="bg-black w-full ">
        <h1 className="text-white text-center text-2xl font-bold">
          Welcome All
        </h1>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img className="w-full h-20" src={logo} alt="store" />
        </div>
        <div className="flex justify-center items-center ">
          {/* <div className="cursor-pointer flex justify-center  items-center border border-black rounded-md  mx-2 hover:border-red-600 overflow-hidden p-2">
             <button className="text-base text-center font-medium ">Logout</button>
          </div> */}

          <div className="flex justify-center items-center">
            {/* <div className="cursor-pointer flex justify-center  items-center gap-1 border border-black rounded-md  mx-2 hover:border-green-600 overflow-hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
                Whish List
              </p>
            </div> */}

            <div
              onClick={handlerOpen}
              className="cursor-pointer flex justify-center  items-center gap-1 border border-black rounded-md  mx-2 hover:border-green-600 overflow-hidden p-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
                Shopping Bag
              </p>
            </div>

            {/* <div className="cursor-pointer flex justify-center  items-center gap-1 border border-black rounded-md  mx-2 hover:border-green-600 overflow-hidden ">
              <Link to="/login" className="d-block h-full w-full p-2">
                Login
              </Link>
            </div> */}

            <div onClick={()=>dispatch(logout())} className="p-2 cursor-pointer flex justify-center  items-center gap-1 border border-black rounded-md  mx-2 hover:border-red-600 overflow-hidden ">
                Logout
            
            </div>
          </div>
        </div>
      </div>

      {/*.................................  Cart ................................. */}
      {open && (
        <>
          {" "}
          <Cart className="w-full" open={open} setOpen={setOpen} />{" "}
        </>
      )}

      <div className=" flex items-center justify-around  bg-black p-4 w-full">
        <p className="text-white font-inter text-base font-medium ">50& OFF</p>

        <p className="text-white font-inter text-base font-medium ">
          Free shipping and returns
        </p>
        <p className="text-white font-inter text-base font-medium ">
          Diffrent payment methods
        </p>
      </div>
    </>
  );
}
