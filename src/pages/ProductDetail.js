// src/pages/ProductDetail.js
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import "./ProductDetail.css"; // Crea un archivo CSS para estilos específicos

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`); // Asegúrate de que la ruta sea correcta
        setProduct(response.data);
      } catch (error) {
        console.error("Error al obtener el producto", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;
