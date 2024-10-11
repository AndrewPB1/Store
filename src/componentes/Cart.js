// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Cart.css"; // Crea un archivo CSS para estilos específicos

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Precio: ${item.price.toFixed(2)}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <button>Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
