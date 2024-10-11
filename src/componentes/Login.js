// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import "./Auth.css"; // Crea un archivo CSS para estilos específicos

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Aquí agregarás la lógica para autenticar al usuario
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
      // Manejar el inicio de sesión exitoso (por ejemplo, guardar el token)
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
