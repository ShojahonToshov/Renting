import { ArrowRight } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import "../home-swiper.css";

// import required modules
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const pictures = [
  "https://picsum.photos/id/10/600/800",
  "https://picsum.photos/id/20/600/800",
  "https://picsum.photos/id/30/600/800",
  "https://picsum.photos/id/40/600/800",
  "https://picsum.photos/id/50/600/800",
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-emerald-50/60 via-white to-white text-gray-600 dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            {t("hero.badge")}
          </span>
          <h1 className="title-font mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl dark:text-white">
            {t("hero.title_line1")}
            <br className="hidden lg:inline-block" />
            {t("hero.title_line2")}
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 dark:text-gray-400">
            {t("hero.description")}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/catalog"><button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-lg font-medium text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95">
              {t("hero.cta_catalog")}
              <ArrowRight size={18} />
            </button></Link>
            <Link to="/about">
            <button className="inline-flex items-center rounded-full bg-emerald-100 px-6 py-2.5 text-lg font-medium text-emerald-700 transition-all hover:bg-emerald-200 active:scale-95 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
              {t("hero.cta_more")}
            </button>
            </Link>
          </div>
        </div>
        <div className="h-[500px] w-5/6 rounded-[28px] bg-white/40 p-2 shadow-xl shadow-emerald-900/10 ring-1 ring-emerald-900/10 backdrop-blur md:w-1/2 lg:w-full lg:max-w-lg dark:bg-gray-800/40 dark:ring-white/10">
          <Swiper
            direction="vertical"
            loop
            speed={800}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, Mousewheel]}
            className="mySwiper h-full"
          >
            {pictures.map((picture, index) => (
              <SwiperSlide key={index}>
                <img
                  src={picture}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}