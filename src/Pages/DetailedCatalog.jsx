import axios from "axios";
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailedCatalog() {
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async function () {
    const res = await axios(
      `https://api.electro.motorsdream.ru/api/v1/products/products/${id}`,
    );
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const specs = [
    { label: "Артикул", value: data?.sku },
    { label: "В наличии", value: data?.stock ? `${data.stock} м` : undefined },
    { label: "Производитель", value: data?.manufacturer },
    { label: "Страна", value: data?.country_of_origin },
    { label: "Количество жил", value: data?.number_of_cores },
    { label: "Материал проводника", value: data?.conductor_material },
    { label: "Сечение кабеля", value: data?.cable_cross_section },
    { label: "Изоляция проводника", value: data?.conductor_insulation_material },
    { label: "Внешняя изоляция", value: data?.outer_insulation_material },
    { label: "Материал оболочки", value: data?.outer_sheath_material },
    { label: "Версия модели", value: data?.model_version },
    { label: "Цвет", value: data?.color },
    {
      label: "Создан",
      value: data?.created_at
        ? new Date(data.created_at).toLocaleString("ru-RU")
        : undefined,
    },
    {
      label: "Обновлен",
      value: data?.updated_at
        ? new Date(data.updated_at).toLocaleString("ru-RU")
        : undefined,
    },
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white text-gray-600 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <div className="h-64 w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-emerald-900/5 lg:h-auto lg:w-1/2 dark:ring-white/5">
            <img
              alt={data?.name}
              className="h-full w-full object-cover object-center"
              src={data?.images?.[0]?.image}
            />
          </div>

          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400">
              {data?.sub_category?.main_category?.name}
            </h2>

            <h1 className="title-font mb-2 text-3xl font-medium text-gray-900 dark:text-white">
              {data?.name}
            </h1>

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {data?.sub_category?.name}
            </p>

            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              {data?.description}
            </p>

            <div className="mt-6 space-y-3 rounded-2xl bg-white/60 p-5 ring-1 ring-emerald-900/5 backdrop-blur dark:bg-gray-800/60 dark:ring-white/5">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between border-b border-emerald-900/5 pb-3 last:border-b-0 last:pb-0 dark:border-white/5"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {spec.label}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {spec.value || "-"}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center">
              <span className="title-font text-3xl font-medium text-gray-900 dark:text-white">
                {data?.price_per_meter} ₽/м
              </span>

              <button className="ml-auto inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 font-medium text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95">
                <ShoppingCart size={18} />
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}