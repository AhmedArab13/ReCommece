import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FiltredProducts from "./Components/FiltredProducts/FiltredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import { useSelector } from "react-redux";
import Login from "./Components/Login/Login";


function App() {

  const cart = useSelector ((state)=>state.cart);
  const isLoggedIn = useSelector((state)=>state.auth.user.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ isLoggedIn ? <Main /> : <Login/>} />
        <Route path="/filtered-products/:type" element={   isLoggedIn ? <FiltredProducts /> : <Login/>} />
        <Route path="/filtered-products/:type/:id" element={  isLoggedIn ? <SingleProduct/> : <Login/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
