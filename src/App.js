
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Page/AddItems/AddItems';
import ManageInventory from './Page/ManageInventory/ManageInventory';
import Footer from './Page/Navbar/Footer/Footer';
import Home from './Page/Navbar/Home/Home';
import Navbarr from './Page/Navbar/Navbar';
import ProductDetail from './Page/ProductDetail/ProductDetail';
import Products from './Page/Products/Products';


function App() {
  return (
    <div className="App">
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Products></Products>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/products/:productDetailId' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
      <br />
      <Footer></Footer>

    </div>
  );
}

export default App;
