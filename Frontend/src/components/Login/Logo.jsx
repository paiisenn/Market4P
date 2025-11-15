import React from "react";
import { Store } from "lucide-react";

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
