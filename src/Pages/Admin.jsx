import {
  BarChart3,
  Box,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Messages from "../Components/Messages";
import Orders from "../Components/Orders";
import Products from "../Components/Products";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Дашборд",
    active: true,
    link: "/admin/dashboard",
  },
  { icon: Box, label: "Товары", link: "/admin/products" },
  { icon: ShoppingCart, label: "Заказы", link: "/admin/orders" },
  { icon: Users, label: "Пользователи", link: "/admin/users" },
  { icon: MessageSquare, label: "Сообщения", link: "/admin/messages" },
  { icon: Settings, label: "Настройки", link: "/admin/settings" },
];

const stats = [
  { label: "Выручка", value: "₽ 124 500", change: "+12%", icon: TrendingUp },
  { label: "Заказов", value: "348", change: "+5%", icon: ShoppingCart },
  { label: "Товаров", value: "512", change: "+3%", icon: Box },
  { label: "Клиентов", value: "1 204", change: "+8%", icon: Users },
];

const recentOrders = [
  {
    id: "#4521",
    customer: "Алишер Каримов",
    product: "Кабель ВВГ 3×2.5",
    status: "Доставлен",
    amount: "₽ 3 200",
  },
  {
    id: "#4520",
    customer: "Мария Иванова",
    product: "Провод ПВС 2×1.5",
    status: "В пути",
    amount: "₽ 1 850",
  },
  {
    id: "#4519",
    customer: "Бобур Рашидов",
    product: "Кабель NYM 3×4",
    status: "Обработка",
    amount: "₽ 5 100",
  },
  {
    id: "#4518",
    customer: "Анна Смирнова",
    product: "Кабель ВВГ 2×1.5",
    status: "Доставлен",
    amount: "₽ 2 400",
  },
];

const statusStyle = {
  Доставлен:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  "В пути": "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  Обработка:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
};

export default function AdminPanel() {
  const [active, setActive] = useState("Дашборд");

  return (
    <div className="flex h-screen bg-emerald-50/40 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col gap-2 bg-white/80 p-5 shadow-sm ring-1 ring-emerald-900/5 backdrop-blur-xl dark:bg-gray-900/80 dark:ring-white/5">
        {/* Logo */}
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              Tailblocks
            </p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Admin
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label, link }) => (
            <Link key={label} to={link}>
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active === label
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                <Icon size={17} />
                {label}
                {active === label && (
                  <ChevronRight size={14} className="ml-auto" />
                )}
              </button>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <Link
          to="/"
          className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
        >
          <LogOut size={17} />
          Выйти
        </Link>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-auto p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              ✦ Панель управления
            </p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {active}
            </h1>
          </div>
          
        </div>

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}
