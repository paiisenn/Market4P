import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* Toaster để hiển thị thông báo trên toàn ứng dụng */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* Outlet sẽ là nơi render các component tương ứng với route */}
      <Outlet />
    </>
  );
}

export default App;
