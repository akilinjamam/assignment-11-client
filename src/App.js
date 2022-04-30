
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Navbar/Home/Home';
import Navbarr from './Page/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
