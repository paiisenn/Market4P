import React from "react";
import { Store } from "lucide-react";

<<<<<<< HEAD
function Logo({ size = 36, collapsed = false }) {
  // Khi ở trạng thái thu gọn, chỉ hiển thị icon
  if (collapsed) {
    return (
      <div className="text-amber-600">
        <Store size={size} strokeWidth={2} />
      </div>
    );
  }

  // Trạng thái bình thường, hiển thị đầy đủ logo
  return (
    <div className="flex items-center gap-x-1 text-amber-600">
      <div>
        <Store size={size} strokeWidth={2} />
=======
function Logo() {
  return (
    <div className="flex items-center gap-x-1 text-amber-600">
      <div>
        <Store size={36} strokeWidth={2} />
>>>>>>> a686210dd9fa7765c9de5ba34c272e50d3fd1bcc
      </div>
      <div className="-mt-0.5 leading-tight">
        <h2 className="text-lg font-bold">Market4P</h2>
        <h3 className="text-[0.7rem] -mt-0.5 tracking-wide">
          Fresh Fruits Online
        </h3>
      </div>
    </div>
  );
}

export default Logo;
