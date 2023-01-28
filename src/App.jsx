// @ts-nocheck
import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contato from "./components/Contato"
import Produtos from "./components/Produtos"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Produto from "./components/produto"

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
