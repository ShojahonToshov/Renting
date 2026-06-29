import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="body-font bg-gradient-to-b from-white via-emerald-50/40 to-white text-gray-600 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-5 py-24">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            ✦ {t("about_page.badge")}
          </span>
          <h1 className="title-font mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {t("about_page.title")}
          </h1>
          <p className="mx-auto text-lg leading-relaxed text-gray-500 lg:w-2/3 dark:text-gray-400">
            {t("about_page.description")}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              className="h-full w-full rounded-2xl object-cover object-center shadow-lg shadow-emerald-900/10"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt={t("about_page.title")}
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="title-font mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
              {t("about_page.story_title")}
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              {t("about_page.story_p1")}
            </p>

            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
              {t("about_page.story_p2")}
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-emerald-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 dark:bg-gray-800 dark:ring-white/5">
                <h3 className="text-3xl font-bold text-emerald-500">10K+</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {t("about_page.stats.customers")}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-emerald-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 dark:bg-gray-800 dark:ring-white/5">
                <h3 className="text-3xl font-bold text-emerald-500">500+</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {t("about_page.stats.products")}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-emerald-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 dark:bg-gray-800 dark:ring-white/5">
                <h3 className="text-3xl font-bold text-emerald-500">24/7</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {t("about_page.stats.support")}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-emerald-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 dark:bg-gray-800 dark:ring-white/5">
                <h3 className="text-3xl font-bold text-emerald-500">99%</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {t("about_page.stats.reviews")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}