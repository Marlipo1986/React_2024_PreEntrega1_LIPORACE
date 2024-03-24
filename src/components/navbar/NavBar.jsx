import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import MenuCompleto from "../../Pages/menuCompleto";
import PlatosPrincipales from "../../Pages/platosPrincipales";
import Guarniciones from "../../Pages/guarniciones";
import Entradas from "../../Pages/entradas";
import Postres from "../../Pages/postres";
import Bebidas from "../../Pages/bebidas";
import Comanda from "../../Pages/comanda";

const NavBar = () => {
  return (
    <nav className="Header">
      <h6>
        RESTAURAPP - del celu a tu mesa - PreEntrega React - Martin Liporace
      </h6>
      <ul className="listaNav">
        <Link to="/MenuCompleto" element={<MenuCompleto />}>
          Menu Completo
        </Link>
        <Link to="/Entradas" element={<Entradas />}>
          Entradas
        </Link>
        <Link to="/PlatosPrincipales" element={<PlatosPrincipales />}>
          Platos Principales{" "}
        </Link>
        <Link to="/Guarniciones" element={<Guarniciones />}>
          Guarniciones
        </Link>
        <Link to="/Postres" element={<Postres />}>
          Postres
        </Link>
        <Link to="/Bebidas" element={<Bebidas />}>
          Bebidas
        </Link>
        <Link to="/Comanda" element={<Comanda />}>
          Comanda {<CartWidget />}
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
