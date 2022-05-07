
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AddItems from './Page/AddItems/AddItems';
import Blogs from './Page/Blogs/Blogs';
import Login from './Page/Login/Login';
import ManageInventory from './Page/ManageInventory/ManageInventory';
import MyItem from './Page/MyItem/MyItem';
import Footer from './Page/Navbar/Footer/Footer';
import Home from './Page/Navbar/Home/Home';
import Navbarr from './Page/Navbar/Navbar';
import PageNotFound from './Page/PageNotFound/PageNotFound';
import ProductDetail from './Page/ProductDetail/ProductDetail';
import Products from './Page/Products/Products';
import Register from './Page/Register/Register';
import RequireAuths from './Page/RequireAuths/RequireAuths';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Products></Products>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additems' element={
          <RequireAuths>
            <AddItems></AddItems>
          </RequireAuths>}>
        </Route>
        <Route path='/products/:productDetailId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/Myitem' element={<MyItem></MyItem>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <br />
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
