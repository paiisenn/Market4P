import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Admin/Layout/AdminSidebar";
import Header from "../../components/Admin/Layout/AdminHeader";
import { Outlet } from "react-router-dom";

function Dashboard() {
  // Đọc trạng thái từ localStorage, mặc định là true nếu không có
  const [isSidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Lưu trạng thái vào localStorage mỗi khi nó thay đổi
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>

        {/* Overlay for mobile */}
        {!isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
