// Đây là file để giả lập API, cung cấp dữ liệu mẫu và các hàm tương tác.

const mockProducts = [
  {
    id: 1,
    name: "Táo Fuji Nhật Bản",
    category: "Trái cây nhập khẩu",
    price: 89000,
    stock: 150,
  },
  {
    id: 2,
    name: "Nho Xanh không hạt Mỹ",
    category: "Trái cây nhập khẩu",
    price: 120000,
    stock: 80,
  },
  {
    id: 3,
    name: "Xoài Cát Hòa Lộc",
    category: "Trái cây nội địa",
    price: 65000,
    stock: 200,
  },
  {
    id: 4,
    name: "Dưa hấu Sài Gòn",
    category: "Trái cây nội địa",
    price: 25000,
    stock: 300,
  },
  {
    id: 5,
    name: "Cam Sành Bến Tre",
    category: "Trái cây nội địa",
    price: 40000,
    stock: 120,
  },
  {
    id: 6,
    name: "Dâu tây Đà Lạt",
    category: "Trái cây nội địa",
    price: 180000,
    stock: 50,
  },
  {
    id: 7,
    name: "Kiwi Vàng New Zealand",
    category: "Trái cây nhập khẩu",
    price: 150000,
    stock: 70,
  },
  {
    id: 8,
    name: "Sầu riêng Ri6",
    category: "Trái cây nội địa",
    price: 250000,
    stock: 40,
  },
  {
    id: 9,
    name: "Chanh dây",
    category: "Trái cây nội địa",
    price: 30000,
    stock: 90,
  },
  {
    id: 10,
    name: "Bơ 034",
    category: "Trái cây nội địa",
    price: 55000,
    stock: 110,
  },
  {
    id: 11,
    name: "Táo Envy Mỹ",
    category: "Trái cây nhập khẩu",
    price: 199000,
    stock: 60,
  },
];

/**
 * Giả lập hàm tìm kiếm sản phẩm.
 * @param {string} query - Từ khóa tìm kiếm.
 * @returns {Promise<Array>} - Một promise sẽ resolve với mảng các sản phẩm tìm thấy.
 */
export const searchProducts = (query) => {
  console.log(`Searching for: "${query}"`);
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        return resolve([]);
      }
      const lowercasedQuery = query.toLowerCase();
      const results = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercasedQuery) ||
          product.category.toLowerCase().includes(lowercasedQuery)
      );
      resolve(results);
    }, 750); // Giả lập độ trễ mạng 750ms
  });
};
