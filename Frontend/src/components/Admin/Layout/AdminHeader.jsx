import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Tạo một đối tượng để ánh xạ từ đường dẫn sang tiêu đề
const routeTitles = {
  "/admin/dashboard": "Bảng điều khiển",
  "/admin/dashboard/products": "Tất cả trái cây",
  "/admin/dashboard/products/add": "Thêm trái cây",
  "/admin/dashboard/categories": "Danh mục",
  "/admin/dashboard/orders": "Đơn hàng",
  "/admin/dashboard/customers": "Khách hàng",
  "/admin/dashboard/inventory": "Kho",
  "/admin/dashboard/coupons": "Phiếu giảm giá",
};

function AdminHeader() {
  const location = useLocation();
  const [title, setTitle] = useState("Bảng điều khiển");

  // Sử dụng useEffect để cập nhật tiêu đề mỗi khi đường dẫn thay đổi
  useEffect(() => {
    const currentTitle = routeTitles[location.pathname] || "Bảng điều khiển";
    setTitle(currentTitle);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <p className="text-gray-600">Chào mừng, Admin!</p>
      </div>
    </header>
  );
}

export default AdminHeader;
