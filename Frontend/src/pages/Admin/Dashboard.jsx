import React from "react";

function AdminDashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Chào mừng bạn đến với trang quản trị.
      </p>
      {/* Tại đây bạn có thể thêm các component quản lý khác như quản lý sản phẩm, người dùng, đơn hàng, v.v. */}
    </div>
  );
}

export default AdminDashboard;
