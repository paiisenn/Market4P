import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Component này kiểm tra xem admin đã đăng nhập hay chưa.
 * - Nếu đã đăng nhập, nó sẽ render component con (children).
 * - Nếu chưa, nó sẽ chuyển hướng về trang /admin/login.
 */
const ProtectedRoute = ({ children }) => {
  // Logic kiểm tra xác thực: kiểm tra giá trị trong localStorage.
  // Trong ứng dụng thực tế, bạn nên kiểm tra một token (JWT) hợp lệ.
  const isAdminAuthenticated =
    localStorage.getItem("isAdminAuthenticated") === "true";

  // Nếu chưa xác thực, chuyển hướng đến trang đăng nhập admin
  return isAdminAuthenticated ? (
    children
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export default ProtectedRoute;
