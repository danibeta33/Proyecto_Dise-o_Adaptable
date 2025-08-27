import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/footer/footer'
import Home from './pages/home'
import './index.css';
import Favoritos from './pages/favoritos'
import Perfil from './pages/Perfil'
import Busqueda from './pages/Busqueda'
import PagU from './pages/PagU'
import Comentarios from './pages/Comentarios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Comentarios />
  </StrictMode>,
)
