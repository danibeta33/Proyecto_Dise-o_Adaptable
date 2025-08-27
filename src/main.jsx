import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './pages/home';
import './index.css';
import Favoritos from './pages/favoritos';
import Perfil from './pages/Perfil';
import Busqueda from './pages/Busqueda';
import PagU from './pages/PagU';
import Comentarios from './pages/Comentarios';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Busqueda />} />
  <Route path="/perfil" element={<Perfil />} />
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/pagu" element={<PagU />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
