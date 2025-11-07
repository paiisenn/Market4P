import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import FormInput from "./FormInput";
import { Eye, EyeOff } from "lucide-react";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function LoginCard() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // Register state
  const [regUser, setRegUser] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regError, setRegError] = useState("");
  const [regLoading, setRegLoading] = useState(false);

  // Refs để đo chiều cao của các form
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);
  // State để lưu chiều cao động của container
  const [containerHeight, setContainerHeight] = useState("auto");

  // Effect để cập nhật chiều cao của container dựa trên form đang hoạt động
  useEffect(() => {
    const updateHeight = () => {
      if (isLogin && loginFormRef.current) {
        setContainerHeight(`${loginFormRef.current.scrollHeight}px`);
      } else if (!isLogin && registerFormRef.current) {
        setContainerHeight(`${registerFormRef.current.scrollHeight}px`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isLogin, error, regError]);

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
    setError("");
    const v = validate();
    if (v) return setError(v);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    alert("Đăng nhập thành công!");
  }

  function validateRegister() {
    if (!regUser || !regEmail || !regPassword)
      return "Vui lòng nhập đầy đủ thông tin!";
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(regEmail).toLowerCase())) return "Email không hợp lệ!";
    if (regPassword.length < 6) return "Mật khẩu phải từ 6 ký tự trở lên!";
    return "";
  }

  async function handleRegister(e) {
    e.preventDefault();
    setRegError("");
    const v = validateRegister();
    if (v) return setRegError(v);
    setRegLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setRegLoading(false);
    alert("Đăng ký thành công!");
    setIsLogin(true);
  }

  return (
    <div className="max-w-lg w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 card-animate transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-8">
        <Logo />
        <div className="font-semibold text-right">
          <h1 className="text-2xl font-bold">
            {isLogin ? "Chào mừng trở lại" : "Đăng ký tài khoản"}
          </h1>
          <p className="text-sm text-gray-500">
            {isLogin
              ? "Hãy đăng nhập để tiếp tục!"
              : "Tạo tài khoản để sử dụng dịch vụ!"}
          </p>
        </div>
      </div>
      <div
        className="relative overflow-hidden transition-[height] duration-500 ease-in-out" // Giữ lại transition
        style={{ height: containerHeight }} // Sử dụng chiều cao động
      >
        <div
          className={`absolute w-full top-0 left-0 transition-all duration-500 ease-in-out ${isLogin
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
            }`} // Gán ref cho div chứa form Login
        >
          {/* Login Form */}
          <form
            ref={loginFormRef}
            onSubmit={handleSubmit}
            className="space-y-4 mx-2"
          >
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              rightNode={
                <span className="text-gray-400">
                  <FaUser size={16} />
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
                    className="text-gray-600 cursor-pointer"
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </span>
              }
            />

            {error && <div className="text-md text-red-600">{error}</div>}

            <div className="flex items-center justify-between text-sm text-gray-500 py-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Ghi nhớ đăng nhập</span>
              </label>
              <a href="/forgot" className="hover:underline">
                Quên mật khẩu?
              </a>
            </div>

            <button
              disabled={loading}
              className="w-full py-3 cursor-pointer rounded-xl bg-linear-to-r from-indigo-600 to-amber-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {loading ? (
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
              ) : null}
              <span>{loading ? "Đang đăng nhập..." : "Đăng nhập"}</span>
            </button>
            <div className="flex items-center gap-4 pt-2">
              <hr className="w-full border-gray-300" />
              <p className="text-gray-500 text-sm whitespace-nowrap">
                Hoặc với
              </p>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="p-3 border-2 border-gray-200 rounded-full text-xl text-gray-600 hover:bg-gray-100 hover:border-red-400 hover:text-red-500 transition-all duration-300"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="p-3 border-2 border-gray-200 rounded-full text-xl text-gray-600 hover:bg-gray-100 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </form>
        </div>
        <div
          className={`absolute w-full top-0 left-0 transition-all duration-500 ease-in-out ${!isLogin
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
            }`}
        >
          {" "}
          {/* Gán ref cho div chứa form Register */}
          {/* Register Form */}
          <form
            ref={registerFormRef}
            onSubmit={handleRegister}
            className="space-y-4 mx-2"
          >
            <FormInput
              label="Tên người dùng"
              type="text"
              value={regUser}
              onChange={(e) => setRegUser(e.target.value)}
              placeholder="Nhập tên người dùng"
              rightNode={
                <span className="text-gray-400">
                  <FaUser />
                </span>
              }
            />

            <FormInput
              label="Email"
              type="email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              placeholder="example@gmail.com"
              rightNode={
                <span className="text-gray-400">
                  <FaEnvelope />
                </span>
              }
            />

            <FormInput
              label="Mật khẩu"
              type={showPassword ? "text" : "password"}
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              rightNode={
                <span className="flex items-center gap-2 text-gray-400">
                  <button
                    type="button"
                    className="text-gray-600 cursor-pointer"
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </span>
              }
            />
            {regError && <div className="text-md text-red-600">{regError}</div>}
            <button
              disabled={regLoading}
              className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-600 to-amber-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {regLoading ? (
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
              ) : null}
              <span>{regLoading ? "Đang đăng ký..." : "Đăng ký"}</span>
            </button>
            <div className="flex items-center gap-4 pt-2">
              <hr className="w-full border-gray-300" />
              <p className="text-gray-500 text-sm whitespace-nowrap">
                Hoặc với
              </p>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="p-3 border-2 border-gray-200 rounded-full text-xl text-gray-600 hover:bg-gray-100 hover:border-red-400 hover:text-red-500 transition-all duration-300"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="p-3 border-2 border-gray-200 rounded-full text-xl text-gray-600 hover:bg-gray-100 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        {isLogin ? (
          <>
            <span>Bạn chưa có tài khoản?</span>
            <button
              type="button"
              className="ml-2 text-amber-500 font-medium hover:underline hover:text-amber-600 transition-all duration-300 cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              Đăng ký
            </button>
          </>
        ) : (
          <>
            <span>Đã có tài khoản?</span>
            <button
              type="button"
              className="ml-2 text-amber-500 font-medium hover:underline hover:text-amber-600 transition-all duration-300 cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              Đăng nhập
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginCard;
