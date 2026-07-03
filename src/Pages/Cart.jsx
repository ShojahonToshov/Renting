import { Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// TODO: replace mock data with real cart state (context / localStorage / store)
const mockItems = [
  {
    id: 1,
    name: "Кабель ВВГ 3x2.5",
    image: "https://via.placeholder.com/150",
    pricePerMeter: 45000,
    quantity: 12,
    inStock: 340,
  },
  {
    id: 2,
    name: "Провод ПВС 2x1.5",
    image: "https://via.placeholder.com/150",
    pricePerMeter: 18500,
    quantity: 25,
    inStock: 120,
  },
];

export default function Cart() {
  const { t } = useTranslation();

  const items = mockItems; // replace with real state
  const isEmpty = items.length === 0;

  const subtotal = items.reduce(
    (sum, item) => sum + item.pricePerMeter * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 25000 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
            <ShoppingBag size={20} />
          </span>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {t("cart_page.title", "Корзина")}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isEmpty
                ? t("cart_page.empty_subtitle", "Пока здесь пусто")
                : t("cart_page.items_count", "{{count}} товара в корзине", {
                    count: items.length,
                  })}
            </p>
          </div>
        </div>

        {isEmpty ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white/60 py-24 text-center shadow-sm ring-1 ring-emerald-900/5 backdrop-blur dark:bg-gray-800/60 dark:ring-white/5">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-gray-800">
              <ShoppingBag size={28} />
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {t("cart_page.empty_title", "Корзина пуста")}
            </p>
            <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
              {t(
                "cart_page.empty_text",
                "Добавьте кабель или провод из каталога, чтобы оформить заказ"
              )}
            </p>
            <Link to="/catalog">
              <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95">
                {t("cart_page.go_to_catalog", "Перейти в каталог")}
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Items list */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-3xl bg-white/60 p-4 shadow-sm ring-1 ring-emerald-900/5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center dark:bg-gray-800/60 dark:ring-white/5"
                >
                  {/* Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-emerald-50 dark:bg-gray-700">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.pricePerMeter.toLocaleString()} {t("sum_per_m", "сум/м")}
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                      {t("cart_page.in_stock", "В наличии: {{count}} м", {
                        count: item.inStock,
                      })}
                    </p>
                  </div>

                  {/* Quantity stepper */}
                  <div className="flex items-center gap-1 self-start rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-emerald-900/5 dark:bg-gray-900/60 dark:ring-white/5 sm:self-center">
                    <button
                      type="button"
                      aria-label={t("cart_page.decrease", "Уменьшить")}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-emerald-100 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="min-w-[3rem] text-center text-sm font-semibold text-gray-900 dark:text-white">
                      {item.quantity} {t("m_short", "м")}
                    </span>
                    <button
                      type="button"
                      aria-label={t("cart_page.increase", "Увеличить")}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-emerald-100 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Line total + remove */}
                  <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-center">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {(item.pricePerMeter * item.quantity).toLocaleString()}{" "}
                      {t("sum", "сум")}
                    </p>
                    <button
                      type="button"
                      aria-label={t("cart_page.remove", "Удалить")}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-3xl bg-white/60 p-6 shadow-sm ring-1 ring-emerald-900/5 backdrop-blur dark:bg-gray-800/60 dark:ring-white/5">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {t("cart_page.summary_title", "Сумма заказа")}
              </h2>

              <div className="flex flex-col gap-3 border-b border-emerald-900/5 pb-4 text-sm dark:border-white/5">
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>{t("cart_page.subtotal", "Товары")}</span>
                  <span className="text-gray-900 dark:text-white">
                    {subtotal.toLocaleString()} {t("sum", "сум")}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>{t("cart_page.delivery", "Доставка")}</span>
                  <span className="text-gray-900 dark:text-white">
                    {deliveryFee.toLocaleString()} {t("sum", "сум")}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-gray-900 dark:text-white">
                  {t("cart_page.total", "Итого")}
                </span>
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  {total.toLocaleString()} {t("sum", "сум")}
                </span>
              </div>

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95">
                {t("cart_page.checkout", "Оформить заказ")}
                <ArrowRight size={16} />
              </button>

              <Link to="/catalog">
                <p className="mt-3 text-center text-sm text-gray-500 underline-offset-4 transition-colors hover:text-emerald-600 hover:underline dark:text-gray-400 dark:hover:text-emerald-400">
                  {t("cart_page.continue_shopping", "Продолжить покупки")}
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}