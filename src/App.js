
import './App.css';
import Nav from './Components/Nav/Nav';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <ItemListContainer greeting='Texto de Prueba para la entrega del ejercicio de la clase 04'/>
      </header>
    </div>
  );
}

export default App;
