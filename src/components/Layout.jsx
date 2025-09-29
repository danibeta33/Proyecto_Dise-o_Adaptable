import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <header className="pagu-header">
        <div className="pagu-header-col pagu-header-col-left">
          <div className="pagu-logo-box" style={{cursor:'pointer'}} onClick={() => navigate('/perfil')}>Logo</div>
        </div>
        <div className="pagu-header-center-col">
          <div className="pagu-header-center"></div>
        </div>
        <div className="pagu-header-col pagu-header-col-right">
          <button className="pagu-header-menu-btn" aria-label="Menú lateral" onClick={() => navigate('/busqueda')}>
            <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
        </div>
      </header>
      {children}
    </div>
  );
}
