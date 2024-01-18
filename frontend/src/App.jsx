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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle' element={<DetallePropiedad />} />
        <Route path='/detalle' element={<DetallePropiedad />} />
        <Route path='/categoria/:cat' element={<Categoria />} />
        <Route path='/prueba' element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
