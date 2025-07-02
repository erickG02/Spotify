import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"
export default function Login(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit =  async(e) =>{
        e.preventDefault();
        setError("");

        try{
            await signInWithEmailAndPassword(auth,email,password);
            navigate("/home");
        }catch(err){
            setError("correo o contraseña invalidos");
        }
    };
    return(
        <section className="login-container">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                alt="Spotify"
                className="login-logo"
            />
            <h1 className="login-title">Inicia sesión para continuar</h1>
            {error && <p className="login-error">{error}</p>}
          <form onSubmit={handleSubmit} className="login-form">
  {error && <p className="login-error">{error}</p>}
  <input
    type="email"
    placeholder="Correo electrónico o usuario"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Contraseña"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button>Iniciar sesión</button>
</form>

                <p className="login-footer">
                    ¿No tienes cuenta? <a href="/register">Registrate</a>
                </p>
        </section>
    );
}