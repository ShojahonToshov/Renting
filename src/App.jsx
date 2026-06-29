import React from 'react'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Catalog from "./Pages/Catalog"
import DetailedCatalog from "./Pages/DetailedCatalog"
import About from "./Pages/About"
import Contacts from "./Pages/Contacts"
import './i18n';
export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/catalog/:id" element={<DetailedCatalog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
  )
}
