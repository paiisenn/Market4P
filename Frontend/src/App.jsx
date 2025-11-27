<<<<<<< HEAD
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Outlet sẽ là nơi render các component tương ứng với route */}
      <Outlet />
    </>
=======
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
    </Routes>
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
  );
}

export default App;
