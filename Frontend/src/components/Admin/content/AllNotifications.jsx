import React, { useState, useEffect, useMemo } from "react";
import {
  fetchNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications,
} from "../Layout/notificationApi";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Bell,
  Package,
  Users,
  BarChart3,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  CheckCheck,
  Trash2,
} from "lucide-react";
import Spinner from "../Layout/Spinner";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

function AllNotifications() {
  const [allNotifications, setAllNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [markingAsRead, setMarkingAsRead] = useState(false);
  const [filterType, setFilterType] = useState("all"); // 'all', 'order', 'customer', etc.
  const itemsPerPage = 7; // Số lượng thông báo mỗi trang

  useEffect(() => {
    setLoading(true);
    fetchNotifications()
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setAllNotifications(sortedData);
      })
      .catch((err) => console.error("Failed to fetch notifications:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleNotificationClick = (notificationId) => {
    const notification = allNotifications.find((n) => n.id === notificationId);

    if (notification && !notification.read) {
      const updatedNotifications = allNotifications.map((n) =>
        n.id === notificationId ? { ...n, read: true } : n
      );
      setAllNotifications(updatedNotifications);

      markNotificationAsRead(notificationId).catch((err) => {
        console.error("Failed to mark notification as read:", err);
        setAllNotifications(allNotifications); // Khôi phục nếu lỗi
      });
    }
  };

  const handleMarkAllAsRead = () => {
    setMarkingAsRead(true);
    markAllNotificationsAsRead()
      .then((updatedNotifications) => {
        // Sắp xếp lại vì API trả về mảng không theo thứ tự timestamp
        const sortedData = updatedNotifications.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setAllNotifications(sortedData);
      })
      .catch((err) => console.error("Failed to mark all as read:", err))
      .finally(() => setMarkingAsRead(false));
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleDeleteNotification = (notificationId) => {
    // Cập nhật UI trước để có hiệu ứng mượt mà
    const updatedNotifications = allNotifications.filter(
      (n) => n.id !== notificationId
    );
    setAllNotifications(updatedNotifications);

    // Gọi API giả
    deleteNotification(notificationId).catch((err) => {
      console.error("Failed to delete notification:", err);
      // Nếu lỗi, có thể khôi phục lại state (tùy vào yêu cầu)
    });
  };

  const handleDeleteAll = () => {
    setAllNotifications([]);
    deleteAllNotifications().catch((err) => {
      console.error("Failed to delete all notifications:", err);
    });
  };
  const getNotificationIcon = (type) => {
    switch (type) {
      case "order":
        return <Package className="w-5 h-5 text-blue-500" />;
      case "customer":
        return <Users className="w-5 h-5 text-green-500" />;
      case "report":
        return <BarChart3 className="w-5 h-5 text-purple-500" />;
      case "inventory":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const notificationCounts = useMemo(() => {
    return {
      all: allNotifications.length,
      order: allNotifications.filter((n) => n.type === "order").length,
      customer: allNotifications.filter((n) => n.type === "customer").length,
      inventory: allNotifications.filter((n) => n.type === "inventory").length,
      report: allNotifications.filter((n) => n.type === "report").length,
    };
  }, [allNotifications]);

  const filterOptions = [
    { value: "all", label: "Tất cả", icon: <Bell size={16} /> },
    { value: "order", label: "Đơn hàng", icon: <Package size={16} /> },
    { value: "customer", label: "Khách hàng", icon: <Users size={16} /> },
    { value: "inventory", label: "Kho", icon: <AlertCircle size={16} /> },
    { value: "report", label: "Báo cáo", icon: <BarChart3 size={16} /> },
  ];

  // Lọc thông báo trước khi phân trang
  const filteredNotifications =
    filterType === "all"
      ? allNotifications
      : allNotifications.filter((n) => n.type === filterType);

  // Logic phân trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotifications = filteredNotifications.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const hasUnread = allNotifications.some((n) => !n.read);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Tất cả thông báo
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleMarkAllAsRead}
            disabled={!hasUnread || markingAsRead}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-600 transition-colors duration-200"
          >
            {markingAsRead ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <CheckCheck size={16} />
            )}
            <span>Đã đọc tất cả</span>
          </button>
          <button
            onClick={handleDeleteAll}
            disabled={allNotifications.length === 0}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-600 transition-colors duration-200"
          >
            <Trash2 size={16} />
            <span>Xóa tất cả</span>
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
            className={`relative flex items-center cursor-pointer gap-2 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
              filterType === option.value
                ? "bg-amber-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {option.icon}
            <span>{option.label}</span>
            <span
              className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
                filterType === option.value
                  ? "bg-white/20 text-white"
                  : "bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-100"
              }`}
            >
              {notificationCounts[option.value]}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {currentNotifications.length > 0 ? (
            currentNotifications.map((notif) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                key={notif.id}
                className={`relative group flex items-start gap-4 p-4 rounded-lg border transition-colors duration-200 ${
                  notif.read
                    ? "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                }`}
              >
                <div
                  onClick={() => handleNotificationClick(notif.id)}
                  className={`grow flex items-start gap-4 ${
                    !notif.read ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="shrink-0 mt-1">
                    {getNotificationIcon(notif.type)}
                  </div>
                  <div className="grow">
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formatDistanceToNow(new Date(notif.timestamp), {
                        addSuffix: true,
                        locale: vi,
                      })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteNotification(notif.id)}
                  className="absolute top-2 right-2 p-1 rounded-full cursor-pointer text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {filterType === "all"
                ? "Bạn không có thông báo nào."
                : `Không có thông báo nào thuộc loại "${filterType}".`}
            </p>
          )}
        </AnimatePresence>
      </div>

      {/* Component Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Trang trước
          </button>

          <div className="text-sm text-gray-700 dark:text-gray-400">
            Trang <span className="font-semibold">{currentPage}</span> trên{" "}
            <span className="font-semibold">{totalPages}</span>
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Trang sau
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}

export default AllNotifications;
