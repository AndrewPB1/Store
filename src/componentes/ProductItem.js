// src/components/ProductItem.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./ProductItem.css"; // Crea un archivo CSS para estilos específicos

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <div className="buttons">
        <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
        <Link to={`/products/${product.id}`}>
          <button>Ver Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
