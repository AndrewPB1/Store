import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulando la obtención de productos
    const fetchProducts = async () => {
      try {
        // Reemplaza con tu ruta de API real
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    fetchProducts();
  }, []);

  // Si no tienes una API lista, puedes simular los productos:

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: "Producto 1",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 2",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 3",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 4",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 5",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 6",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 7",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 8",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      {
        id: 1,
        name: "Producto 9",
        price: 29.99,
        description: "Descripción del Producto 1",
        image: "product1.jpg",
      },
      // Añade hasta 9 productos
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
