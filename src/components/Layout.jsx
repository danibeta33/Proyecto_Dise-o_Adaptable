import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import hoverSoundSrc from '../imgs/hoverSound.wav';
import clickSoundSrc from '../imgs/clicSound.wav';
import ULogo from '../imgs/U.png';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const hoverAudio = useRef(null);
  const clickAudio = useRef(null);

  useEffect(() => {
    // Crear elementos Audio y preparar para reproducción
    hoverAudio.current = new Audio(hoverSoundSrc);
    clickAudio.current = new Audio(clickSoundSrc);

    // Permitir que se reproduzca rápidamente sin retrasos
    hoverAudio.current.preload = 'auto';
    clickAudio.current.preload = 'auto';

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
      <header className="pagu-header" style={{position: 'sticky', top: 0, zIndex: 50, display:'flex', alignItems:'center', padding:'8px 12px', borderBottom:'2px solid #393e4c', background:'#fff'}}>
        <div className="pagu-header-col pagu-header-col-left">
          <div className="pagu-logo-box" style={{cursor:'pointer'}} onClick={() => navigate('/perfil')}>
            <div className="logo-badge" aria-label="Inicio / Perfil">
              <img src={ULogo} alt="Logo U" loading="lazy" />
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
