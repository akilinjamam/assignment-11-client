
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
      <br />
      <Footer></Footer>

    </div>
  );
}

export default App;
