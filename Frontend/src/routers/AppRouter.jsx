import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import App from "../App.jsx";
import Login from "../pages/Login/Login";
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

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RootLayout sẽ bao bọc toàn bộ ứng dụng để quản lý Toaster */}
        <Route element={<RootLayout />}>
          {/* Trang Login nằm ngoài layout chính (không có Navbar, Footer) */}
          <Route path="/login" element={<Login />} />

          {/* App layout bao bọc các trang người dùng thông thường */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          {/* Các route của Admin được bảo vệ và có layout riêng (AdminDashboard) */}
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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
