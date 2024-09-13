import React from "react";

import { useSelector } from "react-redux";
import { storeData } from "../../assets/data/dummyData";
import ProductCard from "./ProductCard";
import  { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../../features/slices/productsSlice";
import { setSingleProduct } from "../../../features/slices/productsSlice";
export default function FiltredProducts() {


  const dispatch = useDispatch();


  //  handle refresh page 
  const { type } = useParams();
  
  if(sessionStorage.getItem("type") === null){
    sessionStorage.setItem("type", type);
    dispatch(setType(type));
  }
  const productType = useSelector((state) => state.products.type);
  
  

  return (
    <>
    <h1 className="text-center font-bold bg-black text-white rounded-b-full p-2  mb-5 text-xl">{productType}</h1>
      <div className=" grid lg:grid-cols-4 gap-2 md:grid-cols-2 p-7 ">
        {storeData.map((item, index) =>
        item.type === productType ? (
            <div  key={index} className=" ">
              <ProductCard id={item.id } name={item.name} text={item.text} img={item.img} price={item.price} color={item.color} size={item.size} type={item.type} gender={item.gender} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}
