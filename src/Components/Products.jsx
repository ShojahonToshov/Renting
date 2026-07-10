import axios from "axios";
import { ArrowRight, CheckCircle2, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    description: "",
    price_per_meter: "",
    stock: 0,
    manufacturer: "",
    country_of_origin: "",
    number_of_cores: 0,
    conductor_material: "",
    cable_cross_section: "",
    outer_insulation_material: "",
    conductor_insulation_material: "",
    outer_sheath_material: "",
    model_version: "",
    color: "",

    sub_category: {
      id: "",
    },

    images: [
      {
        image: "",
        is_main: true,
        order: 0,
      },
    ],
    meterages: [],

    is_active: true,
    is_favourite: false,
    user: 1,
  });
  const getData = async function () {
    try {
      const res = await axios("http://localhost:3000/products");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const PostData = async function () {
    try {
      await axios.post(`http://localhost:3000/products`, newproduct);
    } catch (error) {
      console.log(error);
    }
  };
  const [modal, setModal] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className=""></div>
      <div
        onClick={() => {
          setModal((prev) => !prev);
        }}
        className="bg-amber-300 p-2 rounded-full inline-flex fixed bottom-15 right-15"
      >
        <Plus />
      </div>
      {modal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop */}
    <div
      onClick={() => setModal((prev) => !prev)}
      className="absolute inset-0 bg-emerald-950/30 backdrop-blur-sm"
    />

    {/* Modal card */}
    <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-emerald-900/5 backdrop-blur-xl dark:bg-gray-800/80 dark:ring-white/10">
      {/* Close button */}
      <button
        onClick={() => setModal((prev) => !prev)}
        aria-label="Закрыть"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      >
        <X size={16} />
      </button>

      {/* Title */}
      <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
        Добавить товар
      </h3>

      {/* Form */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Название
          </label>
          <input
            type="text"
            className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            SKU
          </label>
          <input
            type="text"
            className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Описание
          </label>
          <textarea
            rows={3}
            className="resize-none rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Цена за метр
            </label>
            <input
              type="number"
              className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Остаток
            </label>
            <input
              type="number"
              className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Производитель
            </label>
            <input
              type="text"
              className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Страна
            </label>
            <input
              type="text"
              className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Изображение (URL)
          </label>
          <input
            type="text"
            className="rounded-2xl bg-white/80 px-4 py-2.5 text-sm text-gray-900 ring-1 ring-emerald-900/5 outline-none transition-all focus:ring-2 focus:ring-emerald-500 dark:bg-gray-900/60 dark:text-white dark:ring-white/5"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={() => setModal((prev) => !prev)}
          className="inline-flex w-full items-center justify-center rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200 active:scale-95 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Отмена
        </button>
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95">
          <Plus size={16} />
          Добавить
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
