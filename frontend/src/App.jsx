import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Home } from './pages/Home'
import { DetallePropiedad } from './pages/DetallePropiedad'
import { Categoria } from './pages/Categoria'
import { Prueba } from './pages/Prueba'
import { Contacto } from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<DetallePropiedad />} />
        <Route path='/categoria/:cat' element={<Categoria />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/prueba' element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
