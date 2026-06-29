import { Sparkles } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-emerald-50/90 via-emerald-50/60 to-transparent backdrop-blur-md dark:from-gray-900/90 dark:via-gray-900/60">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="flex items-center justify-center title-font font-medium text-gray-900 md:justify-start dark:text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
            <Sparkles size={20} />
          </span>
          <span className="ml-3 text-xl font-semibold tracking-tight">Tailblocks</span>
        </a>

        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:py-2 dark:text-gray-400">
          © 2026 Tailblocks —
          <a
            href="https://twitter.com/knyttneve"
            className="ml-1 text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            @knyttneve
          </a>
        </p>

        <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/60 p-1 shadow-sm ring-1 ring-emerald-900/5 backdrop-blur sm:ml-auto sm:mt-0 dark:bg-gray-800/60 dark:ring-white/5">
          <a className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-emerald-500 hover:text-white dark:text-gray-400 dark:hover:bg-emerald-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-emerald-500 hover:text-white dark:text-gray-400 dark:hover:bg-emerald-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-emerald-500 hover:text-white dark:text-gray-400 dark:hover:bg-emerald-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-emerald-500 hover:text-white dark:text-gray-400 dark:hover:bg-emerald-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="h-5 w-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}