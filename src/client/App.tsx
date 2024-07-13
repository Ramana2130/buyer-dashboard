import './globals.css'
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product } from './components/Product';
import { EditProduct } from './components/EditProduct';
import { Settings } from './components/Setting';

function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} ></Route>
      <Route path='/product' element={<Product />} ></Route>
      <Route path='/editproduct' element={<EditProduct />} ></Route>
      <Route path='/settings' element={<Settings />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
