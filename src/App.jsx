import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Catalog from "./Pages/Catalog";
import DetailedCatalog from "./Pages/DetailedCatalog";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import "./i18n";
import toast, { Toaster } from "react-hot-toast";
import UsersData from "./Pages/UsersData";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" />
      <Navbar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<DetailedCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/usersdata" element={<UsersData />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
