import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import './App.css';

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
