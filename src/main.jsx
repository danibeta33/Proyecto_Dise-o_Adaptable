import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './pages/home';
import './index.css';
import Favoritos from './pages/favoritos';
import Perfil from './pages/Perfil';
import Busqueda from './pages/Busqueda';
import PagU from './pages/PagU';
import Comentarios from './pages/Comentarios';
import useDarkModeStore from './store/darkModeStore';
import DarkModeButton from './components/DarkModeButton';

function Main() {
  const initializeDarkMode = useDarkModeStore((state) => state.initializeDarkMode);
  const darkMode = useDarkModeStore((state) => state.darkMode);
  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    const root = document.getElementById('root');
    if (root) root.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);
  return (
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Busqueda />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/pagu" element={<PagU />} />
          <Route path="/comentarios" element={<Comentarios />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        <DarkModeButton />
      </HashRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
