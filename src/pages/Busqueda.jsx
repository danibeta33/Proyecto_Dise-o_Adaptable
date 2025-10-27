
import './Busqueda.css';
import UEafitImg from '../imgs/UEafit.jpg';
import UNacionalImg from '../imgs/UNacional.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastFavoritos from '../components/ToastFavoritos';
import Layout from '../components/Layout';



export default function Busqueda() {
  const initialFiltros = { ciudad: false, pais: false, comunicacion: false };
  const [filtros, setFiltros] = useState(initialFiltros);
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const handleFiltroChange = (e) => {
    const { name, checked } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFavoritosClick = () => {
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleToastFavoritos = () => {
    setShowToast(false);
    navigate('/favoritos');
  };

  const handleBuscar = () => {
    // Mostrar resultados solo si "Comunicación" está seleccionado
    if (filtros.comunicacion) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
    setHasSearched(true);
  };

  const handleRestablecer = () => {
    setFiltros(initialFiltros);
    setQuery('');
    setShowResults(false);
    setHasSearched(false);
  };

  return (
    <Layout>
      <div className="busqueda-main-container container">
        {/* Menu eliminado a solicitud */}

        {/* Search bar y filtros */}
        <div className="busqueda-bar-section">
          <label htmlFor="search" className="busqueda-label">🔎 Búsqueda</label>
          <div className="busqueda-bar-row" style={{gap:'8px'}}>
            <input
              id="search"
              type="text"
              className="favoritos-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escribe tu búsqueda"
            />
            <button className="btn-principal" onClick={handleBuscar}>Buscar</button>
          </div>
          <div className="busqueda-filtros-row flex flex-wrap gap-2">
            <label className="busqueda-checkbox">
              <input
                type="checkbox"
                name="ciudad"
                checked={filtros.ciudad}
                onChange={handleFiltroChange}
              /> Mi ciudad
            </label>
            <label className="busqueda-checkbox">
              <input
                type="checkbox"
                name="pais"
                checked={filtros.pais}
                onChange={handleFiltroChange}
              /> Mi país
            </label>
            <label className="busqueda-checkbox">
              <input
                type="checkbox"
                name="comunicacion"
                checked={filtros.comunicacion}
                onChange={handleFiltroChange}
              /> Comunicación
            </label>
          </div>
        </div>

        {/* Resultados */}
        {showResults && (
        <div className="busqueda-resultados-list">
          {/* Card 1 */}
          <div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc] mb-6 busqueda-fade-in">
            <div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md busqueda-img-placeholder overflow-hidden">
              <img src={UNacionalImg} alt="Universidad Nacional de Colombia" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#23263a]">🎓 Universidad Nacional de Colombia</h2>
                <p className="text-sm text-[#23263a] mt-1">Forma parte de una de las universidades más reconocidas del país. El programa de Psicología de la UNAL te brinda una sólida formación teórica y práctica, con enfoque en investigación y compromiso social.</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="btn-principal" onClick={() => navigate('/pagu')}>Ir a la Página</button>
                <button className="btn-secundario" onClick={handleFavoritosClick}>Favoritos</button>
                <button className="btn-secundario">Guardar</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc] mb-6 busqueda-fade-in" style={{animationDelay:'.08s'}}>
            <div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md busqueda-img-placeholder overflow-hidden">
              <img src={UEafitImg} alt="Universidad EAFIT" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#23263a]">🎓 Universidad EAFIT</h2>
                <p className="text-sm text-[#23263a] mt-1">Desarrolla tu creatividad en el mundo digital aprendiendo diseño interactivo, animación y programación. Con docentes expertos y acceso a laboratorios de innovación, podrás trabajar en videojuegos, aplicaciones y experiencias inmersivas</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="btn-principal" onClick={() => navigate('/pagu')}>Ir a la Página</button>
                <button className="btn-secundario" onClick={handleFavoritosClick}>Favoritos</button>
                <button className="btn-secundario">Guardar</button>
              </div>
            </div>
          </div>

          {/* Mensaje de no resultados */}
          <div className="busqueda-no-resultados text-center">
            <span>No hay más resultados</span>
            <div className="busqueda-no-resultados-bar"></div>
          </div>
        </div>
        )}

        {/* Botones inferiores */}
        <div className={`busqueda-bottom-btn-row ${!showResults ? 'empty' : ''}`}>
          <button className="favoritos-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
          {hasSearched && (
            <button className="favoritos-bottom-btn" onClick={handleRestablecer}>Restablecer</button>
          )}
        </div>
        <ToastFavoritos
          visible={showToast}
          onClose={handleToastClose}
          onFavoritos={handleToastFavoritos}
        />
      </div>
    </Layout>
  );
}