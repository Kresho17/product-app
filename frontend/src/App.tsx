import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
