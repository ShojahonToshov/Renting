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
const statusStyle = {
  Доставлен:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  "В пути": "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  Обработка:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
};

import React from "react";

export default function Dashboard() {
  return (
    <div>
      {/* Stats */}
      <div className="mb-8 grid grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-900/5 dark:bg-gray-800 dark:ring-white/5"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {label}
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <Icon size={15} />
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {value}
            </p>
            <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {change} за месяц
            </p>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-900/5 dark:bg-gray-800 dark:ring-white/5">
        <div className="flex items-center justify-between border-b border-emerald-900/5 px-6 py-4 dark:border-white/5">
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-emerald-500" />
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Последние заказы
            </h2>
          </div>
          <button className="text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400">
            Все заказы →
          </button>
        </div>

        <div className="divide-y divide-emerald-900/5 dark:divide-white/5">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-emerald-50/50 dark:hover:bg-gray-700/30"
            >
              <span className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500">
                {order.id}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {order.customer}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {order.product}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${statusStyle[order.status]}`}
              >
                {order.status}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {order.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
