import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Checkout from "../pages/Checkout/Checkout";
import Shop from "../pages/Shop/Shop";

import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/Dashboard";
import DashboardHome from "../components/Admin/content/DashboardHome.jsx";
import ProductList from "../components/Admin/content/ProductList.jsx";
import AddProduct from "../components/Admin/content/AddProduct.jsx";
import SearchResults from "../components/Admin/Layout/SearchResults.jsx";
import ProtectedRoute from "../pages/Admin/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />

          {/* Thêm route cho Admin */}
          <Route path="admin/login" element={<AdminLogin />} />
          <Route
            path="admin/dashboard/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            {/* Route con sẽ được render bên trong Outlet của AdminDashboard */}
            <Route index element={<DashboardHome />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="search" element={<SearchResults />} />
            {/* Thêm các route con khác ở đây (customers, orders, etc.) */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
