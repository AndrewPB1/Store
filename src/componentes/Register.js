// src/components/Register.js
import React, { useState } from "react";
import axios from "axios";
import "./Auth.css"; // Reutiliza estilos de Login

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // Aquí agregarás la lógica para registrar al usuario
    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      // Manejar el registro exitoso (por ejemplo, redirigir al login)
    } catch (error) {
      console.error("Error al registrar", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
