import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!email || !password) {
    setError("Por favor completa todos los campos.");
    return;
  }

  // validar formato correo
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    setError("Por favor ingresa un correo válido.");
    return;
  }

  if (password.length < 6) {
    setError("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/home");
  } catch (err) {
    console.error(err);
    setError("No se pudo registrar: " + err.message);
  }
};


  return (
    <div className="register-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        alt="Spotify"
        className="register-logo"
      />
      <h1 className="register-title">Regístrate para empezar</h1>
      {error && <p className="register-error">{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          placeholder="correo@dominio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Registrarse</button>
      </form>
      <p className="register-footer">
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </div>
  );
}
