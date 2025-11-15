import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Login/Logo";
import FormInput from "../../components/Login/FormInput";
import { Eye, EyeOff, Mail } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!email && !password) return "Vui lòng nhập email và mật khẩu!";
    if (!email) return "Vui lòng nhập email!";
    if (!password) return "Vui lòng nhập mật khẩu!";
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) return "Email không hợp lệ!";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) return toast.error(v);
    setLoading(true);

    // Giả lập gọi API và kiểm tra credentials
    // Trong ứng dụng thực tế, bạn sẽ gọi API ở đây
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Hardcode thông tin đăng nhập của admin để demo
          if (email === "admin@gmail.com" && password === "admin123") {
            resolve();
          } else {
            reject(new Error("Email hoặc mật khẩu không chính xác!"));
          }
        }, 700);
      });

      localStorage.setItem("isAdminAuthenticated", "true");
      toast.success("Đăng nhập thành công!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg mx-4 sm:max-w-xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Logo />
          <div className="font-semibold text-right">
            <h1 className="text-lg sm:text-2xl font-bold">
              Chào mừng Admin trở lại
            </h1>
            <p className="text-sm text-gray-500">
              Hãy đăng nhập để quản lý trang web!
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mx-2">
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gmail.com"
            rightNode={
              <span className="text-gray-500">
                <Mail />
              </span>
            }
          />

          <FormInput
            label="Mật khẩu"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            rightNode={
              <span className="flex items-center gap-2 text-gray-400">
                <button
                  type="button"
                  className="text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </span>
            }
          />

          <button
            disabled={loading}
            className="w-full py-3 mt-8 cursor-pointer rounded-xl bg-linear-to-r from-indigo-600 to-amber-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-3"
          >
            {loading && (
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            <span>{loading ? "Đang đăng nhập..." : "Đăng nhập"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
