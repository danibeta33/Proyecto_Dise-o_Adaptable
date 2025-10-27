
import './Comentarios.css';
import './PagU.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ue1 from '../imgs/UEafit/1.jpg';
import ue2 from '../imgs/UEafit/2.jpg';
import ue3 from '../imgs/UEafit/3.jpg';
import ue4 from '../imgs/UEafit/4.jpg';
import ue5 from '../imgs/UEafit/5.jpg';

export default function ComentariosEafit() {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* Pilares decorativos solo desktop (mismos de PagUEafit) */}
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
      <div className="coment-main-container container">
        {/* Menú eliminado a solicitud */}

  {/* Título */}
  <div className="coment-section-title">Comentarios — Universidad EAFIT</div>

        {/* Lista de comentarios */}
        <div className="coment-list-block">
          {/* Comentario 1 */}
          <div className="coment-user-block">
            <div className="coment-user">Mateo Pérez</div>
            <div className="coment-user-desc">Estudiante de Ingeniería de Sistemas</div>
            <div className="coment-box">
              Estudiar en EAFIT me ha dado un contacto muy directo con la industria. Desde primer semestre trabajamos en proyectos con clientes reales y los laboratorios de cómputo están muy bien equipados. Hay un fuerte enfoque en innovación y emprendimiento; los profes son cercanos y siempre te impulsan a prototipar y publicar.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
          {/* Comentario 2 */}
          <div className="coment-user-block">
            <div className="coment-user">Valeria Ríos</div>
            <div className="coment-user-desc">Estudiante de Diseño</div>
            <div className="coment-box">
              Me gusta que el aprendizaje es muy práctico. Tenemos talleres de prototipado, impresión 3D y espacios para explorar UX/UI. Las clases se sienten actuales, con proyectos interdisciplinarios y feedback constante. El campus es súper agradable y motiva a quedarse creando.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
          {/* Comentario 3 */}
          <div className="coment-user-block">
            <div className="coment-user">Juan Camilo Ortega</div>
            <div className="coment-user-desc">Estudiante de Administración</div>
            <div className="coment-box">
              La conexión con empresas es real: hay ferias laborales, convenios y muchos semilleros. Me han servido mucho los cursos de liderazgo y finanzas aplicadas. Además, hay oportunidades de intercambio y materias en inglés que fortalecen el perfil internacional.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
          {/* Comentario 4 */}
          <div className="coment-user-block">
            <div className="coment-user">Sara Montoya</div>
            <div className="coment-user-desc">Estudiante de Música</div>
            <div className="coment-box">
              En la Escuela de Música hay un ambiente increíble. Los ensambles, salas de práctica y profesores invitan a crecer artística y técnicamente. He podido participar en conciertos dentro y fuera de la U, y eso te da mucha confianza para el futuro profesional.
              <span className="coment-icons">
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="12" height="12" rx="2"/><polyline points="7 8 9.5 10.5 13 7"/></svg>
                <svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="10" height="10" rx="2"/><path d="M8 8h4M8 10h4"/></svg>
              </span>
            </div>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="coment-bottom-btn-row">
          <button className="coment-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
          <button className="coment-bottom-btn coment-bottom-btn-rosado" onClick={() => navigate('/pagueafit')}>Pag Universidad</button>
        </div>
      </div>
    </Layout>
  );
}
