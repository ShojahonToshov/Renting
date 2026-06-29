import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [data, setData] = useState();
  const getData = async function () {
    try {
      const res = await axios(
        "https://api.electro.motorsdream.ru/api/v1/products/products/",
      );
      setData(res.data.results);
      console.log(res.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50/40 to-white text-gray-600 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          {data &&
            data.map((x) => {
              return (
                <div key={x.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
                  <Link
                    to={`/catalog/${x.id}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 dark:bg-gray-800 dark:ring-white/5"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        alt={x.name}
                        className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        src={x.images[0].image}
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="title-font mb-1 text-xs tracking-widest text-emerald-600 dark:text-emerald-400">
                        {x.sub_category.name}
                      </h3>

                      <h2 className="title-font text-lg font-medium text-gray-900 dark:text-white">
                        {x.name}
                      </h2>

                      <p className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                        {x.price_per_meter} ₽/м
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        В наличии: {x.stock} м
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}