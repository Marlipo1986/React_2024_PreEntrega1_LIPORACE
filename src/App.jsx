import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//PAGES
//import Bebidas from "./Pages/Bebidas";
//import Entradas from "./Pages/Entradas";
//import PlatosPrincipales from "./Pages/PlatosPrincipales";
//import Postres from "./Pages/Postres";
//import Guarniciones from "./Pages/Guarniciones";
import MenuCompleto from "./Pages/MenuCompleto";
//import Comanda from "./Pages/Comanda";
import NotFound from "./Pages/NotFound";
import DetallePlato from "./Pages/DetallePlato";

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