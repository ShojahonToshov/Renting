import axios from "axios";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";

export default function Contacts({}) {
  const [errorr, setErrorr] = useState({
    name: false,
    email: false,
    message: false,
  });
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const PostData = async function () {
    if (!name || !email || !message) {
      toast.error("Iltimos barcha maydonlarni to'ldiring");
      setErrorr({
        name: !name,
        email: !email,
        message: !message,
      });
      console.log(errorr);

      return false;
    }
    try {
      await axios.post(`http://localhost:3000/user`, {
        name: name,
        email: email,
        message: message,
      });
      toast.success("Xabaringiz yuborildi");
      setName("");
      setEmail("");
      setMessage("");
      setErrorr({
        name: false,
        email: false,
        message: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Xatolik yuz berdi, qayta urinib ko'ring");
    }
  };

  return (
    <section className="body-font bg-gradient-to-b from-emerald-50/60 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto px-5 py-24">
        {/* HEADER */}
        <div className="mb-12 flex w-full flex-col text-center">
          <span className="mx-auto mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            ✦ {t("contacts_page.badge")}
          </span>

          <h1 className="title-font mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {t("contacts_page.title1")}{" "}
            <span className="text-emerald-500">
              {t("contacts_page.title2")}
            </span>
          </h1>

          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
            {t("contacts_page.description")}
          </p>
        </div>

        {/* FORM */}
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-emerald-900/10 ring-1 ring-emerald-900/10 dark:bg-gray-800 dark:ring-white/10">
            <div className="-m-2 flex flex-wrap">
              {/* Name */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70"
                  >
                    {t("contacts_page.form.name")}
                  </label>
                  <input
                    value={name}
                    onChange={(x) => {
                      setName(x.target.value);
                      setErrorr({
                        ...errorr,
                        name: false,
                      });
                    }}
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full rounded-lg border-[1.5px] ${errorr.name ? "border-red-400" : "border-emerald-200"} bg-emerald-50/60 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:focus:bg-gray-700`}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70"
                  >
                    {t("contacts_page.form.email")}
                  </label>
                  <input
                    value={email}
                    onChange={(x) => {
                      setEmail(x.target.value);
                      setErrorr({
                        ...errorr,
                        email: false,
                      });
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full rounded-lg border-[1.5px] ${errorr.email ? "border-red-400" : "border-emerald-200"} bg-emerald-50/60 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:focus:bg-gray-700`}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70"
                  >
                    {t("contacts_page.form.message")}
                  </label>
                  <textarea
                    value={message}
                    onChange={(x) => {
                      setMessage(x.target.value);
                      setErrorr({
                        ...errorr,
                        message: false,
                      });
                    }}
                    id="message"
                    name="message"
                    className={`h-32 w-full resize-none rounded-lg border-[1.5px] ${errorr.message ? "border-red-400" : "border-emerald-200"} bg-emerald-50/60 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:focus:bg-gray-700`}
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="w-full p-2">
                <button
                  type="button"
                  onClick={() => {
                    PostData();
                  }}
                  className="mx-auto flex items-center gap-2 rounded-full bg-emerald-500 px-9 py-3 text-[15px] font-semibold text-white shadow-md shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 active:scale-95"
                >
                  {t("contacts_page.form.submit")}
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Divider + contacts */}
              <div className="mt-6 w-full border-t border-emerald-900/10 p-2 pt-6 text-center dark:border-white/10">
                <a
                  href="mailto:support@shop.com"
                  className="inline-flex items-center gap-1.5 text-[15px] font-bold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  <Mail size={16} />
                  support@shop.com
                </a>

                <p className="my-3 text-[13px] leading-loose text-gray-500 dark:text-gray-400">
                  {t("contacts_page.address")}
                  <br />
                  {t("contacts_page.available")}
                </p>

                {/* Social icons */}
                <span className="inline-flex items-center gap-4">
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400"
                  >
                    <svg
                      fill="currentColor"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400"
                  >
                    <svg
                      fill="currentColor"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400"
                  >
                    <MessageCircle size={20} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
