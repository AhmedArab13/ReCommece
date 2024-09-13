import React, { Fragment, useState } from "react";
import {
  Tooltip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/slices/cartSlice";
export default function Cart({ open, setOpen }) {
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log(cart);
  return (
    <>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            open={open}
            handler={setOpen}
            className="h-[42rem] overflow-scroll"
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody className="  ">
              <Typography className="flex justify-center items-center flex-col">
                {cart.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="grid grid-cols-3 py-4">
                        <div>
                          <img
                            className="h-[125px] rounded-md"
                            src={item.img}
                            alt={item.name}
                          ></img>
                          <div className="flex flex-col items-start">
                            <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                              {item.name}
                            </h4>
                          </div>
                          <div className="max-w-xs">
                            <p className="text-black text-xs pt-2">
                              {item.text}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Selected size:{" "}
                            <span className="ml-2">{item.size}</span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Selected color:{" "}
                            <span
                              className="ml-2 rounded-full px-2"
                              style={{ backgroundColor: item.color }}
                            ></span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Amount: <span className="ml-2">{item.amount}</span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Single Item Price:{" "}
                            <span className="ml-2">{item.price}$</span>
                          </p>
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Total Item Prices:{" "}
                            <span className="ml-2">{item.totalPrice}$</span>
                          </p>
                        </div>
                        <div className="flex justify-center items-center ">
                          <Button
                            onClick={() => dispatch(removeFromCart(item))}
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                            className="text-center"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </Typography>
            </DialogBody>

            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog open={open} handler={setOpen}>
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody>
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <p className="text-black text-base font-inter tracking-normal leading-none ">
                Add some products
              </p>
            </DialogBody>
            {/* <DialogFooter>
         
            </DialogFooter> */}
          </Dialog>
        </Fragment>
      )}
    </>
  );
}

