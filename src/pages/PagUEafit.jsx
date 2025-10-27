import './PagU.css';
import UEafitImg from '../imgs/UEafit.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ToastFavoritos from '../components/ToastFavoritos';
import Layout from '../components/Layout';
import useAuthStore from '../store/authStore';

import noticia1 from '../assets/fotos/01_hidrogeno.jpg';
import noticia2 from '../assets/fotos/02_storage.jpg';
import noticia3 from '../assets/fotos/03_alaska.jpg';
import ue1 from '../imgs/UEafit/1.jpg';
import ue2 from '../imgs/UEafit/2.jpg';
import ue3 from '../imgs/UEafit/3.jpg';
import ue4 from '../imgs/UEafit/4.jpg';
import ue5 from '../imgs/UEafit/5.jpg';

export default function PagUEafit() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);
  const [animateBtn, setAnimateBtn] = useState(false);
  const userType = useAuthStore((s) => s.userType);

  const handleAddFavClick = () => {
    setAnimateBtn(true);
    if (userType === 'perfil') {
      setShowToast(true);
    } else {
      setShowLoginToast(true);
    }
    setTimeout(() => setAnimateBtn(false), 350);
  };

  const handleCloseToast = () => setShowToast(false);
  const handleGoFavoritos = () => { setShowToast(false); navigate('/favoritos'); };
  const handleGoLogin = () => { setShowLoginToast(false); navigate('/inicio'); };

  return (
    <Layout>
      {/* Pilares decorativos solo desktop */}
      <div className="pagu-pillars" aria-hidden>
        <aside className="pagu-pillar pagu-pillar-left">
          <div className="pagu-pillar-cap" />
          <div className="pagu-pillar-images">
            <img src={ue1} alt="Decoración" />
            <img src={ue2} alt="Decoración" />
            <img src={ue3} alt="Decoración" />
            <img src={ue4} alt="Decoración" />
            <img src={ue5} alt="Decoración" />
          </div>
        </aside>
        <aside className="pagu-pillar pagu-pillar-right">
          <div className="pagu-pillar-cap" />
          <div className="pagu-pillar-images">
            <img src={ue2} alt="Decoración" />
            <img src={ue3} alt="Decoración" />
            <img src={ue4} alt="Decoración" />
            <img src={ue5} alt="Decoración" />
            <img src={ue1} alt="Decoración" />
          </div>
        </aside>
      </div>
      <div className="pagu-main-container">
        {/* Chips de filtros */}
        <div className="pagu-chips-row flex flex-wrap gap-2">
          <span className="pagu-chip">Privada</span>
          <span className="pagu-chip">Medellín</span>
          <span className="pagu-chip">Antioquia</span>
        </div>
        {/* Info principal */}
        <div className="pagu-info-row">
          <div className="pagu-img-block">
            <img src={UEafitImg} alt="Universidad EAFIT" className="pagu-img" />
          </div>
          <div className="pagu-desc-block">
            <h1 className="pagu-title">🎓 Universidad EAFIT</h1>
            <p className="pagu-desc">
              La Universidad EAFIT es una institución privada reconocida por su enfoque en la innovación, la formación integral y la conexión con el sector productivo. Con campus principal en Medellín, ofrece programas en áreas como ingeniería, administración, humanidades, ciencias y diseño, con metodologías activas y espacios de creación que impulsan el aprendizaje práctico.<br /><br />
              EAFIT destaca por su cultura investigativa, sus laboratorios de vanguardia y su ecosistema de emprendimiento, promoviendo proyectos interdisciplinarios y experiencias reales con empresas. Su comunidad se caracteriza por el liderazgo, la internacionalización y el desarrollo de habilidades para los retos actuales del mundo profesional.
            </p>
          </div>
        </div>

        {/* Noticias */}
        <div className="pagu-section-title">📰 Últimas Noticias</div>
        <div className="pagu-news-row">
          <div className="pagu-news-card">
            <div className="pagu-news-img-placeholder">
              <img src={noticia1} alt="EAFIT impulsa proyectos de innovación…" className="pagu-news-img" />
            </div>
            <div className="pagu-news-content">
              <h3 className="pagu-news-title">EAFIT impulsa proyectos de innovación…</h3>
              <p className="pagu-news-desc">Con alianzas estratégicas y laboratorios de alta tecnología, EAFIT fortalece su ecosistema de investigación aplicada y emprendimiento de base tecnológica.</p>
              <button className="pagu-news-btn">Ver más</button>
            </div>
          </div>
          <div className="pagu-news-card">
            <div className="pagu-news-img-placeholder">
              <img src={noticia2} alt="Nuevos avances en energías y almacenamiento…" className="pagu-news-img" />
            </div>
            <div className="pagu-news-content">
              <h3 className="pagu-news-title">Nuevos avances en energías y almacenamiento…</h3>
              <p className="pagu-news-desc">Grupos de investigación lideran iniciativas en transición energética, almacenamiento y eficiencia, conectando ciencia y empresa.</p>
              <button className="pagu-news-btn">Ver más</button>
            </div>
          </div>
          <div className="pagu-news-card">
            <div className="pagu-news-img-placeholder">
              <img src={noticia3} alt="Cátedras y foros internacionales…" className="pagu-news-img" />
            </div>
            <div className="pagu-news-content">
              <h3 className="pagu-news-title">Cátedras y foros internacionales…</h3>
              <p className="pagu-news-desc">La universidad consolida su internacionalización con eventos académicos y redes globales para estudiantes y docentes.</p>
              <button className="pagu-news-btn">Ver más</button>
            </div>
          </div>
        </div>
        <div className="pagu-news-btn-row">
          <button className="pagu-news-btn pagu-news-btn-main">Noticias</button>
        </div>

        {/* Comentarios */}
        <div className="pagu-section-title pagu-section-title-coment">💬 Comentarios</div>
        <div className="pagu-coment-block">
          <div className="pagu-coment-user">Mateo Pérez</div>
          <div className="pagu-coment-user-desc">Estudiante de Ingeniería de Sistemas</div>
          <div className="pagu-coment-box">
            Estudiar en EAFIT ha sido una experiencia muy práctica y retadora. Los laboratorios están muy bien equipados y hay muchas oportunidades para participar en proyectos reales con empresas. Me gusta la cercanía de los profesores y el enfoque en innovación y emprendimiento; definitivamente se siente el ambiente de crear y construir cosas nuevas.
            <span className="pagu-coment-icons">
              <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
              <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
            </span>
          </div>
          <div className="pagu-coment-btn-row">
            <button className="pagu-news-btn pagu-news-btn-main" onClick={() => navigate('/comentarios-eafit')}>Comentarios</button>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="pagu-bottom-btn-row">
          <button className="pagu-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
          <button
            className={`pagu-bottom-btn pagu-bottom-btn-rosado${animateBtn ? ' pagu-bottom-btn-anim' : ''}`}
            onClick={handleAddFavClick}
          >
            Añadir a Fav
          </button>
        </div>

        {/* Toasts */}
        <ToastFavoritos visible={showToast} onClose={handleCloseToast} onFavoritos={handleGoFavoritos} />
        <ToastFavoritos
          visible={showLoginToast}
          onClose={() => setShowLoginToast(false)}
          onFavoritos={handleGoLogin}
          message="Es necesario iniciar sesión"
          primaryLabel="Cerrar"
          secondaryLabel="Iniciar sesión"
          showFavoritos={true}
        />
      </div>
    </Layout>
  );
}
