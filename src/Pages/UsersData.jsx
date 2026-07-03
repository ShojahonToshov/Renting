import axios from "axios";
import { Mail, MessageSquare, Pencil, Trash2, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function UsersData() {
  const [editmodal, setEditmodal] = useState(null);
  const [newdata, setNewdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const Delete = async function (x) {
    try {
      await axios.delete(`http://localhost:3000/user/${x.id}`);
      toast.success("Successfully deleted!!!");
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const EditData = async function (id) {
    try {
      await axios.put(`http://localhost:3000/user/${id}`, {
        name: newdata.name ? newdata.name : editmodal.name,
        email: newdata.email ? newdata.email : editmodal.email,
        message: newdata.message ? newdata.message : editmodal.message,
      });
      getData();
      setNewdata({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState();
  const getData = async function () {
    try {
      const res = await axios("http://localhost:3000/user");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            ✦ Панель управления
          </span>
          <h1 className="title-font text-4xl font-bold text-gray-900 dark:text-white">
            Сообщения пользователей
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((x) => (
              <div
                key={x.id}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-900/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 dark:bg-gray-800 dark:ring-white/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <User size={18} />
                  </span>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {x.name}
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Mail size={14} className="shrink-0 text-emerald-500" />
                    <span className="truncate">{x.email}</span>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MessageSquare
                      size={14}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />
                    <p className="leading-relaxed">{x.message}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-emerald-900/5 pt-4 dark:border-white/5">
                  <button
                    onClick={() => {
                      setEditmodal(x);
                    }}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-50 py-2 text-sm font-medium text-emerald-700 transition-all hover:bg-emerald-100 active:scale-95 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
                  >
                    <Pencil size={14} />
                    Изменить
                  </button>

                  <button
                    onClick={() => {
                      Delete(x);
                    }}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-red-50 py-2 text-sm font-medium text-red-500 transition-all hover:bg-red-100 active:scale-95 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
                  >
                    <Trash2 size={14} />
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          {editmodal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
              onClick={() => setEditmodal(null)}
            >
              <div
                className="w-full max-w-lg rounded-3xl bg-white/80 p-8 shadow-2xl ring-1 ring-emerald-900/10 backdrop-blur-xl dark:bg-gray-900/80 dark:ring-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Pencil size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        Редактирование
                      </p>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {editmodal.name}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setEditmodal(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-emerald-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
                      Имя
                    </label>
                    <div className="relative">
                      <User
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400"
                      />
                      <input
                        defaultValue={editmodal.name}
                        onChange={(e) => {
                          setNewdata({
                            ...newdata,
                            name: e.target.value,
                          });
                        }}
                        placeholder="Имя"
                        className="w-full rounded-xl border-[1.5px] border-emerald-200 bg-emerald-50/60 py-2.5 pl-9 pr-3.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:focus:bg-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400"
                      />
                      <input
                        defaultValue={editmodal.email}
                        onChange={(e) => {
                          setNewdata({
                            ...newdata,
                            email: e.target.value,
                          });
                        }}
                        placeholder="Email"
                        type="email"
                        className="w-full rounded-xl border-[1.5px] border-emerald-200 bg-emerald-50/60 py-2.5 pl-9 pr-3.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:focus:bg-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-700/70 dark:text-emerald-400/70">
                      Сообщение
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={15}
                        className="absolute left-3.5 top-3 text-emerald-400"
                      />
                      <textarea
                        defaultValue={editmodal.message}
                        onChange={(e) => {
                          setNewdata({
                            ...newdata,
                            message: e.target.value,
                          });
                        }}
                        placeholder="Сообщение"
                        className="h-28 w-full resize-none rounded-xl border-[1.5px] border-emerald-200 bg-emerald-50/60 py-2.5 pl-9 pr-3.5 text-sm text-gray-900 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-gray-600 dark:bg-gray-700/60 dark:text-white dark:focus:bg-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setEditmodal(null)}
                    className="flex-1 rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-gray-200 active:scale-95 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={() => {
                      EditData(editmodal.id);
                      setEditmodal(null);
                    }}
                    className="flex-1 rounded-xl bg-emerald-500 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
