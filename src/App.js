// src/App.js
import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Cart from "./componentes/Cart";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./contexts/CartContext";
import "./assets/images/styles/App.css"; // Estilos globales

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
