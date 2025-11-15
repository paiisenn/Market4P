import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "../pages/Admin/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />

          {/* Thêm route cho Admin */}
          <Route path="admin/login" element={<AdminLogin />} />
          <Route
            path="admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
