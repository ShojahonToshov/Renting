import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Catalog from "./Pages/Catalog";
import DetailedCatalog from "./Pages/DetailedCatalog";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import "./i18n";
import toast, { Toaster } from "react-hot-toast";

import Cart from "./Pages/Cart";
import { Eye, EyeOff, Lock, LogIn, Mail, X } from "lucide-react";
import Admin from "./Pages/Admin";

export const LoginContext = createContext();

export default function App() {
  const resetAttempts = function () {
    setTimeout(() => {
      setAttempts(0);
      console.log("reset");
    }, 60000);
  };
  const [loged, setLoged] = useState(
    JSON.parse(localStorage.getItem("loged")) ? true : false,
  );
  const [attempts, setAttempts] = useState(0);
  const [errorr, setErrorr] = useState({
    name: false,
    password: false,
  });
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [eye, setEye] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState({
    login: "admin",
    password: "admin",
  });
  useEffect(() => {
    attempts == 5 ? resetAttempts() : "";
  }, [attempts]);
  return (
    <LoginContext.Provider value={{ login, setLogin, loged, setLoged }}>
      <div className="min-h-screen flex flex-col pt-20">
        <Toaster position="top-center" />
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<DetailedCatalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </div>
        <Footer />

        {login && (
          <div
            onClick={() => setLogin((prev) => !prev)}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-white/80 p-10 shadow-2xl ring-1 ring-emerald-900/10 backdrop-blur-xl dark:bg-gray-900/80 dark:ring-white/10"
            >
              {/* Close button */}
              <button
                onClick={() => setLogin((prev) => !prev)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-emerald-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-8 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  ✦ Добро пожаловать
                </p>
                <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                  Вход в аккаунт
                </h2>
              </div>

              {/* Fields */}
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
                    Логин
                  </label>
                  <div className="relative">
                    <Mail
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400"
                    />
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrorr({
                          ...errorr,
                          name: false,
                        });
                      }}
                      type="text"
                      placeholder="Введите логин"
                      className={`w-full rounded-xl border-[1.5px] ${errorr.name ? "border-red-400" : "border-emerald-200"} bg-emerald-50/60 py-2.5 pl-9 pr-3.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:placeholder-gray-400 dark:focus:bg-gray-700`}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
                    Пароль
                  </label>
                  <div className="relative">
                    <Lock
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400"
                    />
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorr({
                          ...errorr,
                          password: false,
                        });
                      }}
                      type={eye ? "password" : "text"}
                      placeholder="Введите пароль"
                      className={`w-full rounded-xl border-[1.5px] ${errorr.password ? "border-red-400" : "border-emerald-200"} bg-emerald-50/60 py-2.5 pl-9 pr-10 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:placeholder-gray-400 dark:focus:bg-gray-700`}
                    />
                    <button
                      type="button"
                      onClick={() => setEye((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-emerald-500 dark:text-gray-500 dark:hover:text-emerald-400"
                    >
                      {eye ? <Eye size={15} /> : <EyeOff size={15} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit */}

              <button
                onClick={() => {
                  if (attempts == 5) {
                    toast.error(
                      "Popitok ne ostalos, podojdite minutu do novix popitok!!!",
                    );
                    return false;
                  }
                  setAttempts((prev) => prev + 1);
                  if (!name || !password) {
                    toast.error("Iltimos barcha maydonlarni to'ldiring");
                    setErrorr({
                      name: !name,
                      password: !password,
                    });
                    console.log(errorr);

                    return false;
                  }
                  setLogin((prev) => !prev);
                  if (name == admin.login && password == admin.password) {
                    toast.success("You are logged in as Admin!");
                    setLoged(true);
                    console.log(loged);
                    localStorage.setItem(
                      "login&password",
                      JSON.stringify(admin),
                    );
                    localStorage.setItem("loged", JSON.stringify(true));

                    navigate("/admin");
                    setErrorr({
                      name: false,
                      password: false,
                    });
                  } else {
                    toast.error("Неверный логин или пароль");
                  }
                }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-lg active:scale-95"
              >
                <LogIn size={16} />
                Войти
              </button>
            </div>
          </div>
        )}
      </div>
    </LoginContext.Provider>
  );
}
