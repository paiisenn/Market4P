import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../components/RootLayout";

// User Pages & Layout
import App from "../App";
import Login from "../pages/Login/Login.jsx";
// import Register from "../pages/Login/Register.jsx";
// import ForgotPassword from "../pages/Login/ForgotPassword";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Checkout from "../pages/Checkout/Checkout";
import Shop from "../pages/Shop/Shop";

// Admin Components and Pages
import AdminDashboard from "../pages/Admin/Dashboard";
import DashboardHome from "../components/Admin/content/DashboardHome.jsx";
import ProductList from "../components/Admin/content/ProductList.jsx";
import AddProduct from "../components/Admin/content/AddProduct.jsx";
import SearchResults from "../components/Admin/Layout/SearchResults.jsx";
import ProtectedRoute from "../pages/Admin/ProtectedRoute";
import AllNotifications from "../components/Admin/content/AllNotifications.jsx";
import AdminProfile from "../components/Admin/content/AdminProfile.jsx";
import AdminSettings from "../components/Admin/content/AdminSettings.jsx";
import EditProduct from "../components/Admin/content/EditProduct.jsx";
import Orders from "../components/Admin/content/Orders.jsx";
import OrderDetail from "../components/Admin/content/OrderDetail.jsx";
import Customers from "../components/Admin/content/Customers.jsx";
import CustomerDetail from "../components/Admin/content/CustomerDetail.jsx";
import Inventory from "../components/Admin/content/Inventory.jsx";
import Coupons from "../components/Admin/content/Coupons.jsx";

export default function AppRouter() {
  return (
    <Routes>
      {/* RootLayout bọc toàn bộ ứng dụng */}
      <Route element={<RootLayout />}>
        {/* Các trang đăng nhập/đăng ký/forgot password nằm ngoài layout App */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/forgot" element={<ForgotPassword />} /> */}

        {/* Các trang người dùng bình thường, có App layout */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Admin routes với layout riêng và được bảo vệ */}
        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="notifications" element={<AllNotifications />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="products/edit/:productId" element={<EditProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetail />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetail />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="coupons" element={<Coupons />} />
        </Route>
      </Route>
    </Routes>
  );
}
