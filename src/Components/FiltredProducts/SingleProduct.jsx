import React, { useState } from "react";
import { useSelector } from "react-redux";
import { storeData } from "../../assets/data/dummyData";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../../../features/slices/productsSlice";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../../features/slices/cartSlice";
export default function SingleProduct() {
  
  
  const dispatch = useDispatch();

  //  handle refresh page
  const { id } = useParams();

  if (sessionStorage.getItem("id") === null) {
    sessionStorage.setItem("id", id);
    dispatch(setSingleProduct(type));
  }

  const singleProductId = useSelector((state) => state.products.singleProduct);

  const singleProduct = () => {
    return storeData.find((item) => item.id === singleProductId);
  };

  console.log(singleProduct());
  
 
  const [size, setSize] = useState(singleProduct().size != undefined ? singleProduct().size[0] : "");
  const [color, setColor] = useState(singleProduct().color[0]);



  return (
    <>
      {storeData.map((item, index) =>
        item.id === singleProductId ? (
          <div
            key={index}
            className=" flex justify-center  items-center h-[100vh] "
          >
            <div className=" w-[70%] ">
              <div className="flex  items-center flex-row h-[100%] ">
                <img src={item.img} alt="" className="w-[43%]  " />
                <div className="flex flex-col justify-center align-start p-8 ">
                  <h1 className="font-bold">{item.name}</h1>
                  <h2 className="text-orange-500 font-medium my-2 ">15% OFF</h2>

                  <p className=" font-semibold text-gray-600">{item.text}</p>

                  {/* ......................  Size     .................... */}

                  <div className="my-4 ">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900  "
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 p-2.5  cursor-pointer border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >

                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : null}
                  </div>

                  {/* ......................  Color     .................... */}

                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="  cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      {item.color?.map((color, index) => {
                        return (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* {/* ......................  submit     .................... */}

                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="bg-green-700 py-2"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                            size: size,
                            color: color,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}
