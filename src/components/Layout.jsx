import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import hoverSoundSrc from '../imgs/hoverSound.wav';
import clickSoundSrc from '../imgs/clicSound.wav';
import ULogo from '../imgs/U.png';
import useAuthStore from '../store/authStore';
import Footer from './footer/footer';
import ToastFavoritos from './ToastFavoritos';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const hoverAudio = useRef(null);
  const clickAudio = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userType = useAuthStore((s) => s.userType);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const setUserType = useAuthStore((s) => s.setUserType);

  useEffect(() => {
    // Crear elementos Audio y preparar para reproducción
    hoverAudio.current = new Audio(hoverSoundSrc);
    clickAudio.current = new Audio(clickSoundSrc);

    // Permitir que se reproduzca rápidamente sin retrasos
    hoverAudio.current.preload = 'auto';
    clickAudio.current.preload = 'auto';

    // Volúmenes más bajos
    if (hoverAudio.current) hoverAudio.current.volume = 0.2;
    if (clickAudio.current) clickAudio.current.volume = 0.25;

    // Handlers por delegación de eventos
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, .btn-principal, .btn-secundario, .favoritos-bottom-btn, .pagu-bottom-btn');
      if (target) {
        try {
          // Reiniciar y reproducir
          hoverAudio.current.currentTime = 0;
          hoverAudio.current.play();
        } catch (err) {
          // Ignorar errores de autoplay/interrupt
        }
      }
    };

    const handleClick = (e) => {
      const targetBtn = e.target.closest('button, a, img');
      if (targetBtn) {
        try {
          clickAudio.current.currentTime = 0;
          clickAudio.current.play();
        } catch (err) {
          // Ignorar errores
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
      // Liberar referencias
      hoverAudio.current = null;
      clickAudio.current = null;
    };
  }, []);
  return (
    <div>
      <header className="pagu-header" style={{position: 'sticky', top: 0, zIndex: 60, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 12px', borderBottom:'2px solid #393e4c', background:'#fff'}}>
        <div className="pagu-header-col pagu-header-col-left" style={{display:'flex', alignItems:'center'}}>
          <div className="pagu-logo-box" style={{cursor:'pointer'}} onClick={() => navigate('/home')}>
            <div className="logo-badge" aria-label="Inicio / Perfil">
              <img src={ULogo} alt="Logo U" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="pagu-header-col pagu-header-col-right" style={{display:'flex', alignItems:'center', gap:'10px'}}>
          {userType === 'perfil' ? (
            <span style={{color:'#23263a', fontWeight:700, whiteSpace:'nowrap'}}>Bienvenid@, Sofia</span>
          ) : (
            <button
              className="btn-secundario"
              style={{padding:'0.5rem 0.8rem', whiteSpace:'nowrap'}}
              onClick={() => navigate('/inicio')}
            >
              Iniciar Sesion
            </button>
          )}
          <button className="header-menu-btn" aria-label="Abrir menú" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
        </div>
      </header>
      {children}

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Sidebar Panel */}
      <aside className={`sidebar-panel ${sidebarOpen ? 'open' : ''}`} aria-hidden={!sidebarOpen}>
        <div className="sidebar-header">
          <div className="sidebar-title">Menú</div>
          <button className="sidebar-close-btn" aria-label="Cerrar" onClick={() => setSidebarOpen(false)}>×</button>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-item" onClick={() => { setSidebarOpen(false); navigate('/home'); }}>Home</div>
          <div className="sidebar-item" onClick={() => { setSidebarOpen(false); navigate('/busqueda'); }}>Busqueda</div>
          {userType === 'perfil' && (
            <>
              <div className="sidebar-item" onClick={() => { setSidebarOpen(false); navigate('/perfil'); }}>Perfil</div>
              <div className="sidebar-item" onClick={() => { setSidebarOpen(false); navigate('/favoritos'); }}>Favoritos</div>
            </>
          )}
        </div>
        {userType === 'perfil' && (
          <div className="sidebar-footer">
            <button
              className="sidebar-logout-btn"
              onClick={() => {
                setShowLogoutConfirm(true);
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </aside>
      {/* Confirmación de cierre de sesión */}
      <ToastFavoritos
        visible={showLogoutConfirm}
        message="¿Seguro que deseas cerrar sesión?"
        primaryLabel="Cancelar"
        secondaryLabel="Cerrar sesión"
        showFavoritos={true}
        onClose={() => setShowLogoutConfirm(false)}
        onFavoritos={() => {
          setUserType('anonimo');
          setShowLogoutConfirm(false);
          setSidebarOpen(false);
          navigate('/inicio');
        }}
      />
      <Footer />
    </div>
  );
}
