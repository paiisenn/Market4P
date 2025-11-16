import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Outlet sẽ là nơi render các component tương ứng với route */}
      <Outlet />
    </>
  );
}

export default App;
