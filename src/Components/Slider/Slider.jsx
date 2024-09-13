import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../../features/slices/sliderSlice";

import { sliderData } from "../../assets/data/dummyData";

export default function Slider() {
  const dispatch = useDispatch();
  const sliderIndex = useSelector((state) => state.slider.value);
  // console.log(sliderIndex);

  return (
    <>
      <div>
        {sliderData.map((item, index) => (
          <div
            className={
              item.id == sliderIndex ? "relative flex justify-center" : "hidden"
            }
            key={index}
          >
            <img className="w-full h-[80vh]" src={item.img} alt="slider" />
            <p className="absolute text-white mx-auto  bg-green-400 top-6 px-1">
              {item.text}
            </p>

            <button
              className="absolute top-1/2 right-5 hover:bg-green-400 bg-gray-400 p-2 rounded-full"
              onClick={() => {
                dispatch(nextSlide());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <button
              className=" absolute top-1/2 left-5 hover:bg-green-400 bg-gray-400 p-2 rounded-full"
              onClick={() => {
                dispatch(prevSlide());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="absolute bottom-5 flex justify-center">
              {sliderData.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      dispatch(dotSlide(index));
                    }}
                    className={
                      parseInt(item.id) == sliderIndex
                        ? "bg-green-400 p-2 rounded-full cursor-pointer m-2"
                        : "bg-slate-500 p-2 rounded-full cursor-pointer m-2"
                    }
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <br />
    </>
  );
}
