import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";

import { login } from "../../../features/slices/authSlice";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";



export default function Login() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.auth);

  // console.log(data);
  
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // console.log(input);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            size="lg"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            size="lg"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
         
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={()=>dispatch(login(input))} variant="gradient" fullWidth>
            Sign In
          </Button>
         
        </CardFooter>
      </Card>
    </div>
  );
}
