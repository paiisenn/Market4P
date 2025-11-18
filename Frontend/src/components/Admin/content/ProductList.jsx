import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus,
  Filter,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Dữ liệu giả lập ---
// Trong ứng dụng thực tế, dữ liệu này sẽ được lấy từ API.
const mockProducts = [
  {
    id: "SP001",
    name: "Táo Envy New Zealand",
    img: "https://via.placeholder.com/80x80.png?text=Táo+Envy",
    category: "Táo & Lê",
    price: 250000,
    stock: 120,
    status: "Còn hàng",
  },
  {
    id: "SP002",
    name: "Cam Vàng Navel Úc",
    img: "https://via.placeholder.com/80x80.png?text=Cam+Navel",
    category: "Họ Cam Quýt",
    price: 180000,
    stock: 80,
    status: "Còn hàng",
  },
  {
    id: "SP003",
    name: "Dâu Tây Hàn Quốc",
    img: "https://via.placeholder.com/80x80.png?text=Dâu+Tây",
    category: "Quả Mọng",
    price: 450000,
    stock: 8,
    status: "Sắp hết hàng",
  },
  {
    id: "SP004",
    name: "Nho Xanh không hạt Mỹ",
    img: "https://via.placeholder.com/80x80.png?text=Nho+Xanh",
    category: "Quả Mọng",
    price: 320000,
    stock: 50,
    status: "Còn hàng",
  },
  {
    id: "SP005",
    name: "Xoài Cát Hòa Lộc",
    img: "https://via.placeholder.com/80x80.png?text=Xoài+Cát",
    category: "Trái cây nhiệt đới",
    price: 90000,
    stock: 0,
    status: "Hết hàng",
  },
  {
    id: "SP006",
    name: "Kiwi Vàng New Zealand",
    img: "https://via.placeholder.com/80x80.png?text=Kiwi",
    category: "Trái cây nhiệt đới",
    price: 150000,
    stock: 75,
    status: "Còn hàng",
  },
  {
    id: "SP007",
    name: "Lê Nam Phi",
    img: "https://via.placeholder.com/80x80.png?text=Lê+Nam+Phi",
    category: "Táo & Lê",
    price: 110000,
    stock: 90,
    status: "Còn hàng",
  },
  {
    id: "SP008",
    name: "Việt Quất Chile",
    img: "https://via.placeholder.com/80x80.png?text=Việt+Quất",
    category: "Quả Mọng",
    price: 380000,
    stock: 30,
    status: "Còn hàng",
  },
  {
    id: "SP009",
    name: "Bưởi Da Xanh",
    img: "https://via.placeholder.com/80x80.png?text=Bưởi",
    category: "Họ Cam Quýt",
    price: 60000,
    stock: 4,
    status: "Sắp hết hàng",
  },
  {
    id: "SP010",
    name: "Sầu Riêng Ri6",
    img: "https://via.placeholder.com/80x80.png?text=Sầu+Riêng",
    category: "Trái cây nhiệt đới",
    price: 220000,
    stock: 0,
    status: "Hết hàng",
  },
  {
    id: "SP011",
    name: "Cherry Mỹ",
    img: "https://via.placeholder.com/80x80.png?text=Cherry",
    category: "Quả Mọng",
    price: 550000,
    stock: 45,
    status: "Còn hàng",
  },
  {
    id: "SP012",
    name: "Dưa Hấu Không Hạt",
    img: "https://via.placeholder.com/80x80.png?text=Dưa+Hấu",
    category: "Trái cây nhiệt đới",
    price: 50000,
    stock: 150,
    status: "Còn hàng",
  },
  {
    id: "SP013",
    name: "Măng Cụt Lái Thiêu",
    img: "https://via.placeholder.com/80x80.png?text=Măng+Cụt",
    category: "Trái cây nhiệt đới",
    price: 120000,
    stock: 0,
    status: "Hết hàng",
  },
  {
    id: "SP014",
    name: "Vải Thiều Bắc Giang",
    img: "https://via.placeholder.com/80x80.png?text=Vải+Thiều",
    category: "Trái cây nhiệt đới",
    price: 85000,
    stock: 5,
    status: "Sắp hết hàng",
  },
];

// Hàm helper để lấy class cho badge trạng thái
const getStatusBadge = (status) => {
  switch (status) {
    case "Còn hàng":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Sắp hết hàng":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Hết hàng":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function ProductList() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(mockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Số sản phẩm mỗi trang

  // Logic phân trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      className="p-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Tất cả trái cây
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
            <Filter size={16} />
            Bộ lọc
          </button>
          <button
            onClick={() => navigate("/admin/dashboard/products/add")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600"
          >
            <Plus size={16} />
            Thêm mới
          </button>
        </div>
      </div>

      {/* Bảng sản phẩm */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                  Danh mục
                </th>
                <th scope="col" className="px-6 py-3">
                  Giá (VNĐ)
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Tồn kho
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Trạng thái
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Hành động
                </th>
              </tr>
            </thead>
            <motion.tbody
              key={currentPage} // Thêm key để trigger lại animation khi chuyển trang
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  variants={itemVariants}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    {product.price.toLocaleString("vi-VN")}
                  </td>
                  <td className="px-6 py-4 text-center">{product.stock}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-2">
                      <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-red-600 dark:text-red-400 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center p-4 border-t dark:border-gray-700">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <ChevronLeft size={16} />
              Trang trước
            </button>

            <div className="text-sm text-gray-700 dark:text-gray-400">
              Trang <span className="font-semibold">{currentPage}</span> trên{" "}
              <span className="font-semibold">{totalPages}</span>
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Trang sau
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProductList;
