import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import ProductPage from './pages/ProductPage/ProductPage';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
