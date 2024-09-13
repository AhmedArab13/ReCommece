import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { setSingleProduct } from "../../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
export default function ProductCard({
  id,
  name,
  text,
  img,
  price,
  color,

  size,
  type,
  gender,
}) {


const dispatch = useDispatch();



  return (
    <div>
      <Link className="" onClick={()=>dispatch(setSingleProduct(id))} to={"/filtered-products/" + type + "/" + id}>
        <Card className="flex flex-col h-[100vh] ">
          <div color="blue" className="h-2/3 w-full  overflow-hidden">
            <img src={img} alt="img-blur-shadow" className=" w-full" />
          </div>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {name}
            </Typography>
            <Typography>{text}</Typography>
          </CardBody>
          <hr />
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">{price}$</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              {color?.map((color, index) => {
                return (
                  <i
                    className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                    key={index}
                    style={{ backgroundColor: color }}
                  ></i>
                );
              })}
            </Typography>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
