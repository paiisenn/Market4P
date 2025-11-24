import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import CustomToaster from "./Toaster";

const RootLayout = () => {
  const location = useLocation();

  // Hiển thị toast nếu có thông điệp được gửi qua state từ trang đăng nhập
  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message, {
        duration: 3000,
      });
      // Xóa state để không hiển thị lại khi refresh trang
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      {/* Sử dụng CustomToaster để có style nhất quán trên toàn ứng dụng */}
      <CustomToaster />
      {/* Outlet sẽ render các component con tương ứng với route */}
      <Outlet />
    </>
  );
};

export default RootLayout;
