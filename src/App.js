// import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';
import ListProduct from './Components/Views/ListProduct';

function App() {
  const handleProduc= useNavigate()

  return (
    <div className="App">
      <p onClick={()=> {handleProduc('/listProduct')}}>Chuyen listProduc</p>
    </div>
  );
}

export default App;
