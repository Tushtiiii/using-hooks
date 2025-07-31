import './App.css';
import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Cart from './components/Cart.jsx';


const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <div style={{ display: 'flex' }}>
        <Outlet />
        <Cart/>
        </div>

    </div>
  );
};

export default App;
