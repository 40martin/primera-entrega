import './App.css';
import CartWidget from './components/CartWidget';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Producto from './components/Producto';


function App() {
  return (
    <div className="container-fluid">
      <CartWidget />
      <Producto />
      <Header />
      <ItemListContainer greeting={"No se encontraron Productos"} />
      <NavBar />
      <Footer />

    </div>
  );
}
   
export default App;
