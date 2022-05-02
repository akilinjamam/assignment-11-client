
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ManageInventory from './Page/ManageInventory/ManageInventory';
import Footer from './Page/Navbar/Footer/Footer';
import Home from './Page/Navbar/Home/Home';
import Navbarr from './Page/Navbar/Navbar';
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
      </Routes>
      <br />
      <Footer></Footer>

    </div>
  );
}

export default App;
