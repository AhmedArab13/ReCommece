import React from "react";
// import { Button } from "@material-tailwind/react"
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../../features/slices/productsSlice";
import { Link } from "react-router-dom";

export default function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  const productType = useSelector((state) => {
    state.products.type;
  });

  return (
    <>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"filtered-products/" + button} className="px-3 rounded-md border-spacing-1 hover:bg-green-500 duration-300 ease-in-out">
                <button
                  onClick={() => {
                    dispatch(setType(button));
                  }}
                  className="   text-gray-600 "
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>

      <div className="flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </>
  );
}
