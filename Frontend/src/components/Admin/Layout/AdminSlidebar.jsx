import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Login/Logo";
import {
  LayoutDashboard,
  Apple,
  PlusCircle,
  Tags,
  Package,
  Users,
  ClipboardList,
  Ticket,
} from "lucide-react";

const NavItem = ({ to, icon, children, end = false }) => {
  const baseClasses =
    "flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200";
  const inactiveClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";
  const activeClasses = "bg-amber-500 text-white shadow-md";

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
      }
    >
      {icon}
      <span className="ml-3">{children}</span>
    </NavLink>
  );
};

const NavSection = ({ title, children }) => (
  <div>
    <h3 className="px-4 pt-4 pb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
      {title}
    </h3>
    <div className="space-y-1">{children}</div>
  </div>
);

function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white shrink-0 flex flex-col">
      <div className="p-5 flex flex-col items-center justify-center border-b border-gray-700">
        <Logo size={48} />
        <p className="text-sm text-gray-400 mt-2">Bảng quản trị</p>
      </div>
      <nav className="flex-1 px-4 pt-2 pb-4 overflow-y-auto custom-scrollbar transition duration-300">
        <NavSection title="Chính">
          <NavItem
            to="/admin/dashboard"
            icon={<LayoutDashboard size={18} />}
            end
          >
            Bảng điều khiển
          </NavItem>
        </NavSection>

        <NavSection title="Sản phẩm">
          <NavItem
            to="/admin/dashboard/products"
            icon={<Apple size={18} />}
            end
          >
            Tất cả trái cây
          </NavItem>
          <NavItem
            to="/admin/dashboard/products/add"
            icon={<PlusCircle size={18} />}
          >
            Thêm trái cây
          </NavItem>
          <NavItem to="/admin/dashboard/categories" icon={<Tags size={18} />}>
            Danh mục
          </NavItem>
        </NavSection>

        <NavSection title="Đơn hàng">
          <NavItem to="/admin/dashboard/orders" icon={<Package size={18} />}>
            Đơn hàng
          </NavItem>
        </NavSection>

        <NavSection title="Khách hàng">
          <NavItem to="/admin/dashboard/customers" icon={<Users size={18} />}>
            Khách hàng
          </NavItem>
        </NavSection>

        <NavSection title="Kho / Tồn kho">
          <NavItem
            to="/admin/dashboard/inventory"
            icon={<ClipboardList size={18} />}
          >
            Kho
          </NavItem>
        </NavSection>

        <NavSection title="Giảm giá / Phiếu giảm giá">
          <NavItem to="/admin/dashboard/coupons" icon={<Ticket size={18} />}>
            Phiếu giảm giá
          </NavItem>
        </NavSection>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
