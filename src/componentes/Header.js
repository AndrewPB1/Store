// src/components/Header.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./Header.css";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MiTienda</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="bx bx-cart"></i> Carrito ({totalItems})
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
