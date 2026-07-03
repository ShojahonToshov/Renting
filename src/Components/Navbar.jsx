import { Menu, Moon, ShoppingCart, Sparkles, Sun, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const Theme = function () {
    setDark(!dark);
    document.querySelector("html").classList.toggle("dark");
  };

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/catalog", label: t("catalog") },
    { to: "/contacts", label: t("contacts") },
    { to: "/about", label: t("about") },
    { to: "/usersdata", label: t("usersdata") },
  ];

  return (
    <div>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-emerald-50/90 via-emerald-50/60 to-transparent backdrop-blur-md dark:from-gray-900/90 dark:via-gray-900/60">
        <div className="from-emerald-50/90 via-emerald-50/60 container mx-auto flex items-center gap-4 p-4 md:px-6">
          {/* Logo + theme toggle */}
          <a className="flex items-center gap-3 title-font font-medium text-gray-900 dark:text-white">
            <Link to="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
                <Sparkles size={20} />
              </span>
            </Link>
            <Link to="/">
              <span className="text-xl font-semibold tracking-tight">
                Tailblocks
              </span>
            </Link>

            <button
              type="button"
              onClick={Theme}
              aria-label="Toggle theme"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-gray-500 shadow-sm ring-1 ring-emerald-900/10 backdrop-blur transition-all hover:bg-emerald-100 hover:text-gray-900 hover:ring-emerald-500/30 dark:bg-gray-800/60 dark:text-gray-300 dark:ring-white/10 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </a>

          {/* Desktop: nav + lang + cart */}
          <div className="ml-auto hidden items-center gap-4 md:flex">
            <nav className="flex items-center gap-1 rounded-full bg-white/60 p-1 text-sm shadow-sm ring-1 ring-emerald-900/5 backdrop-blur dark:bg-gray-800/60 dark:ring-white/5">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to}>
                  <p className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
                    {item.label}
                  </p>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-white/60 p-1 shadow-sm ring-1 ring-emerald-900/5 backdrop-blur dark:bg-gray-800/60 dark:ring-white/5">
                {["uz", "ru", "en"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => i18n.changeLanguage(lang)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                      i18n.language === lang
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "text-gray-500 hover:bg-emerald-100 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <Link to="/cart">
                <button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95">
                  <ShoppingCart size={16} />
                  {t("cart")}
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile: burger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-emerald-100 hover:text-gray-900 md:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Sidebar */}
        <aside
          className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 bg-white p-6 shadow-2xl transition-transform duration-300 md:hidden  dark:bg-gray-900/90 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Sparkles size={18} />
              </span>
              Tailblocks
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-emerald-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                <p className="rounded-xl px-4 py-3 text-gray-600 transition-colors hover:bg-emerald-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
                  {item.label}
                </p>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 self-start rounded-full bg-emerald-50 p-1 dark:bg-gray-800">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  i18n.language === lang
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-gray-500 hover:bg-emerald-100 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 active:scale-95">
            <ShoppingCart size={16} />
            {t("cart")}
          </button>
        </aside>
      </div>
    </div>
  );
}
