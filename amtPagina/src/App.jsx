import "./App.css";
import Header from "./components/Header";

function App() {
  const portada = "/src/assets/pagina amt/PORTA DE INICIO.png";
  return (
    <>
      <div>
        <Header imagen={portada} alter="imagen"></Header>
      </div>
    </>
  );
}

export default App;
