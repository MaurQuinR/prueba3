
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";
import { NavLink } from "react-router-dom";
import "../assets/css/Nabvar.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");
  const navigate = useNavigate();
  const { usuario, setUsuario } = useContext(Context);
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <span className="navbar-brand">MQR</span>
      <p className="navbar-text">TIENDA DE JUEGOS RETRO</p>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          {!usuario ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/Carro">🛒</NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink className="nav-link" to="/Carro">🛒</NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="ml-auto">
        {!usuario ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/registrarse">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-secondary" to="/login">Iniciar Sesión</Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn btn-success" to="/perfil">Mi Perfil</Link>
            </li>
          
            <li className="nav-item">
              <Link className="btn btn-secondary" to="/posts">Mis Comentarios</Link>
            </li>
            <li className="salir">
              <button onClick={logout} className="btn btn-warning">Salir</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

