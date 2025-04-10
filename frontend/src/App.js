
import './App.css';
import About from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  return (
<Router>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/products' element={<ProductPage/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/gallery' element={<GalleryPage/>} />
</Routes>

</Router>

  );
}

export default App;
