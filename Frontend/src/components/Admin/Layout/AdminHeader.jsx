import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Sun,
  Moon,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

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

// Custom hook để xử lý click bên ngoài
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

function AdminHeader({ isSidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("Bảng điều khiển");
  const [isDarkMode, setDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
      return saveTheme === "dark";
    }

    // Nếu không có, thì kiểm tra cài đặt của hệ thống
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const profileRef = useRef(null);
  useClickOutside(profileRef, () => setProfileOpen(false));

  // Sử dụng useEffect để cập nhật tiêu đề mỗi khi đường dẫn thay đổi
  useEffect(() => {
    const currentTitle = routeTitles[location.pathname] || "Bảng điều khiển";
    setTitle(currentTitle);
  }, [location.pathname]);

  // Xử lý Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin/login");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      e.preventDefault();
      navigate(
        `/admin/dashboard/search?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 z-10 transition-colors duration-300">
      <div className="flex justify-between items-center w-full">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-amber-600 transition-colors duration-300 dark:hover:text-white focus:outline-none relative w-6 h-6"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={isSidebarOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                {isSidebarOpen ? (
                  <PanelLeftClose size={26} />
                ) : (
                  <PanelLeftOpen size={26} />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
          {/* Page Title */}
          <h2 className="hidden md:block text-xl font-semibold text-gray-700 dark:text-gray-200">
            {title}
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="text-gray-400 dark:text-gray-500" size={20} />
            </span>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full max-w-xs py-2 pl-10 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!isDarkMode)}
            className="p-2 rounded-full text-gray-600 cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notification Bell */}
          <button className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
            <Bell size={20} />
            <span className="absolute top-1 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-gray-800"></span>
          </button>

          {/* User Menu */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src="https://i.pravatar.cc/40" // Placeholder avatar
                alt="Admin Avatar"
                className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
              />
              <div className="hidden lg:flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">
                <span>Admin</span>
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border dark:border-gray-700 transition-colors duration-300"
                >
                  <a
                    href="#profile"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <User size={16} /> Hồ sơ
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Settings size={16} /> Cài đặt
                  </a>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors duration-300"
                  >
                    <LogOut size={16} /> Đăng xuất
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
