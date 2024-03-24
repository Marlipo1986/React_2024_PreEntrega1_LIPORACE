import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar";

//PAGES

import MenuCompleto from "./Pages/menuCompleto";
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
          <Route path="*" element={<NotFound/>} />
        </Routes>
      
    </div>
    </Router>
  );
};

export default App;


