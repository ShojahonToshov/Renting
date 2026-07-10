import axios from "axios";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
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
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [cart, setCart] = useState([]);
  const { t } = useTranslation();

  const items = cart; // replace with real state
  const isEmpty = items.length === 0;
  const getData = async function () {
    try {
      const res = await axios("http://localhost:3000/products");
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
    setCart(JSON.parse(localStorage.getItem("cart_product")) || []);
  }, []);

  const subtotal = 0;
  const deliveryFee = 0;
  const total = 0;
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
                "Добавьте кабель или провод из каталога, чтобы оформить заказ",
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
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-3xl bg-white/60 p-4 shadow-sm ring-1 ring-emerald-900/5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center dark:bg-gray-800/60 dark:ring-white/5"
                >
                  {/* Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-emerald-50 dark:bg-gray-700">
                    <img
                      src={item.images?.[0]?.image}
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
                      {Number(item.price_per_meter).toLocaleString("ru-RU")}
                      {t("sum_per_m", "сум/м")}
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">
                      {t("cart_page.in_stock", "В наличии: {{count}} м", 1)}
                    </p>
                  </div>

                  {/* Line total + remove */}
                  <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-center">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {Number(item.price_per_meter).toLocaleString("ru-RU")}{" "}
                      {t("sum", "сум")}
                    </p>
                    <button
                      onClick={() => {
                        const newPRODUCTS = cart.filter((product) => {
                          return product.id !== item.id;
                        });
                        localStorage.setItem(
                          "cart_product",
                          JSON.stringify(newPRODUCTS),
                        );
                        setCart(newPRODUCTS);
                      }}
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

              <button
                onClick={() => {
                  setModal((prev) => !prev);
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95"
              >
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
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setModal((prev) => !prev)}
            className="absolute inset-0 bg-emerald-950/30 backdrop-blur-sm"
          />

          {/* Modal card */}
          <div className="relative w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-emerald-900/5 backdrop-blur-xl dark:bg-gray-800/80 dark:ring-white/10">
            {/* Close button */}
            <button
              onClick={() => setModal((prev) => !prev)}
              aria-label={t("cart_page.close", "Закрыть")}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
            >
              <X size={16} />
            </button>

            {/* Icon */}
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
              <CheckCircle2 size={24} />
            </span>

            {/* Title + text */}
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {t("cart_page.checkout_modal_title", "Оформление заказа")}
            </h3>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              {t(
                "cart_page.checkout_modal_text",
                "Проверьте данные заказа перед подтверждением",
              )}
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => setModal((prev) => !prev)}
                className="inline-flex w-full items-center justify-center rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 active:scale-95 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                {t("cart_page.cancel", "Отмена")}
              </button>
              <button
                onClick={() => setModal((prev) => !prev)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95"
              >
                {t("cart_page.confirm", "Подтвердить")}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
