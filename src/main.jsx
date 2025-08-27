import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/footer/footer'
import Home from './pages/home'
import './index.css';
import Favoritos from './pages/favoritos'
import Perfil from './pages/Perfil'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Perfil />
  </StrictMode>,
)
