import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//PAGES
//import Bebidas from "./Pages/bebidas";
//import Entradas from "./Pages/entradas";
//import PlatosPrincipales from "./Pages/platosPrincipales";
//import Postres from "./Pages/postres";
//import Guarniciones from "./Pages/guarniciones";
import MenuCompleto from "./Pages/menuCompleto";
//import Comanda from "./Pages/Comanda";
import NotFound from "./Pages/notFound";
import DetallePlato from "./Pages/detallePlato";

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar />
        <Routes className="saludo">
          <Route path="/" element= {<MenuCompleto />} />
          <Route path="/MenuCompleto" element={<MenuCompleto/>} />
          <Route path="/Detalle/:id" element={<DetallePlato/>} />
          {/* <Route path="/Entradas" element={<Entradas/>} />
          <Route path="/PlatosPrincipales" element={<PlatosPrincipales/>} />
          <Route path="/Guarniciones" element={<Guarniciones/>} />
          <Route path="/Postres" element={<Postres/>} />
          <Route path="/Bebidas" element={<Bebidas/>} />
          <Route path="/Comanda" element={<Comanda/>} /> */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      
    </div>
    </Router>
  );
};

export default App;


{/* <ItemListContainer greeting='Hola, bienvenidos! Que comemos hoy?'/> */}