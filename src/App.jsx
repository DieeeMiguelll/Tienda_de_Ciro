import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  return (<div>
  <NavBar />
  <ItemListContainer/>
  <ItemCount initial={1} stock ={10} onAdd ={(cantidad) => console.log ('cantidad agregada', cantidad)}/>
    </div>
    
  );
};

export default App;
