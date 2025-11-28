import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";

import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <AppRouter></AppRouter>
  );
}

export default App;
