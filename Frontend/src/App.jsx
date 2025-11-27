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
  );
}

export default App;
