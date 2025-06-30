// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import { FaHome, FaSearch, FaDownload, FaShoppingBag } from "react-icons/fa";

export default function Navbar(){

  return(
    <header className="navbar">
      {/*Buscador y menu*/}
      <section className="navbar-left">
        
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        alt="Logo Spotify"
        className="navbar-logo"
        />
      <Link to="/home" className="navbar-home">
        <FaHome style={{ marginRight: "5px" }} />
      </Link>

   <div className="navbar-search-container">
    <FaSearch className="navbar-search-icon" />
    <input
      type="text"
      placeholder="¿Qué quieres reproducir?"
      className="navbar-search"
      
    />
     <Link  className="navbar-explorer-icon">
  <FaShoppingBag />
  </Link>
  </div>

      </section>
      {/*Seccion de la derecha*/}
         <nav className="navbar-right">
        <Link to="/premium">Premium</Link>
        <Link to="/support">Asistencia</Link>
        <Link to="/download">Descargar </Link>
        <span className="navbar-divider">|</span>
        <Link to="/install">
          <FaDownload style={{ marginRight: "5px" }} />
        Instalar app
        </Link>
        <Link to="/register">Registrarte</Link>
        <Link to="/" className="navbar-login">
          Iniciar sesión
        </Link>
      </nav>

    </header>

  )
}