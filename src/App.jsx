import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="saludo">
        <ItemListContainer greeting={"Bienvenido, qué comes hoy?"} />
      </div>
    </div>
  );
};

export default App;
