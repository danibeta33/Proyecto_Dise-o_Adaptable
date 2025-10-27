
import './Perfil.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SelectModal from '../components/SelectModal';
import ToastFavoritos from '../components/ToastFavoritos';
import Icon1 from '../imgs/Iconos/1.png';
import Icon2 from '../imgs/Iconos/2.png';
import Icon3 from '../imgs/Iconos/3.png';
import Icon4 from '../imgs/Iconos/4.png';
import UEafitImg from '../imgs/Iconos/UEafit.jpg';
import UNacionalImg from '../imgs/Iconos/UNacional.jpg';
import useProfileStore from '../store/profileStore';


export default function Perfil() {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfileStore();
  const [isEditing, setIsEditing] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  // buffers locales que se aplican al dar "Aplicar"
  const [city, setCity] = useState(profile.city || 'Medellín, Antioquia');
  const [career, setCareer] = useState(profile.career || 'Comunicación Social');
  const [photo, setPhoto] = useState(profile.photo || null); // null = placeholder actual
  const [modal, setModal] = useState({ type: null, open: false });
  const [showApplyToast, setShowApplyToast] = useState(false);

  // Si el store cambia por fuera, sincronizamos (por ejemplo, tras reset)
  useEffect(() => {
    setCity(profile.city || 'Medellín, Antioquia');
    setCareer(profile.career || 'Comunicación Social');
    setPhoto(profile.photo || null);
  }, [profile.city, profile.career, profile.photo]);

  const triggerReload = () => setAnimKey((k) => k + 1);
  const handleToggleEdit = () => {
    setIsEditing(true);
    triggerReload();
  };
  const handleApply = () => {
    // Guardar en zustand + localStorage
    setProfile({ city, career, photo });
    setIsEditing(false);
    triggerReload();
    setShowApplyToast(true);
  };

  const openModal = (type) => setModal({ type, open: true });
  const closeModal = () => setModal({ type: null, open: false });

  const cityOptions = [
    'Bogotá, Cundinamarca',
    'Medellín, Antioquia',
    'Cali, Valle del Cauca',
    'Barranquilla, Atlántico',
    'Cartagena, Bolívar',
    'Bucaramanga, Santander',
    'Pereira, Risaralda',
    'Manizales, Caldas',
    'Santa Marta, Magdalena',
  ];
  const careerOptions = [
    'Ingeniería de Sistemas',
    'Ingeniería Electrónica',
    'Ingeniería Mecánica',
    'Psicología',
    'Sociología',
    'Economía',
    'Contaduría Pública',
    'Medicina',
    'Enfermería',
  ];
  const photoOptions = [
    { label: 'Icono 1', value: Icon1 },
    { label: 'Icono 2', value: Icon2 },
    { label: 'Icono 3', value: Icon3 },
    { label: 'Icono 4', value: Icon4 },
    { label: 'UNacional', value: UNacionalImg },
    { label: 'UEafit', value: UEafitImg },
  ];

  const handleSelect = (opt) => {
    if (modal.type === 'city') setCity(opt.label || opt);
    if (modal.type === 'career') setCareer(opt.label || opt);
    if (modal.type === 'photo') setPhoto(opt.value || opt);
    closeModal();
  };
  return (
    <Layout>
      <div className="perfil-main-container">
        <div className="perfil-content-wrapper">
          {/* Menú eliminado a solicitud */}

          {/* Fondo gris claro */}
          <div className={`perfil-content-bg ${isEditing ? 'is-editing' : ''} perfil-reload`} key={animKey}>
            {/* Imagen de perfil */}
            <div className="perfil-img-container" style={{cursor: isEditing ? 'pointer':'default'}} onClick={() => isEditing && openModal('photo')}>
              {photo ? (
                <img src={photo} alt="Foto de perfil" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'8px'}} />
              ) : (
                <div className="perfil-img-placeholder">
                  <svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="14" width="28" height="20" rx="3"/><circle cx="24" cy="24" r="5"/></svg>
                </div>
              )}
            </div>

            {/* Inputs de datos */}
            <div className="perfil-inputs-row flex flex-col sm:flex-row gap-2">
              <input
                className="perfil-input editable-field"
                value={city}
                readOnly={!isEditing}
                onChange={(e) => setCity(e.target.value)}
                onClick={() => isEditing && openModal('city')}
              />
              <input
                className="perfil-input editable-field"
                value={career}
                readOnly={!isEditing}
                onChange={(e) => setCareer(e.target.value)}
                onClick={() => isEditing && openModal('career')}
              />
            </div>
            <div className="perfil-inputs-row">
              <input className="perfil-input" value="18" readOnly />
              <input className="perfil-input" value="Femenino" readOnly />
            </div>

            {/* Descripción */}
            <div className="perfil-desc-block">
              <label className="perfil-desc-label">Descripción</label>
              <textarea className="perfil-desc-textarea" value={"Sofía tiene 18 años, vive en Medellín y está interesada en estudiar carreras relacionadas con la comunicación y las artes. Se describe como una persona creativa, apasionada por la escritura y con interés en explorar nuevas culturas. Busca programas universitarios que le permitan combinar la teoría con la práctica."} readOnly />
            </div>

            {/* Carrusel de favoritos */}
            <div className="perfil-carousel-row">
              <button className="perfil-carousel-arrow">&#60;</button>
              <div className="perfil-carousel-card" style={{cursor:'pointer'}} onClick={() => navigate('/favoritos')}>
                <div className="perfil-carousel-img-placeholder"></div>
                <div className="perfil-carousel-label">Universidades</div>
              </div>
              <div className="perfil-carousel-card">
                <div className="perfil-carousel-img-placeholder"></div>
                <div className="perfil-carousel-label">Carreras</div>
              </div>
              <button className="perfil-carousel-arrow">&#62;</button>
            </div>

            {/* Botones inferiores */}
            <div className="perfil-bottom-btn-row">
              {isEditing ? (
                <button className="perfil-bottom-btn perfil-bottom-btn-rosado" onClick={handleApply}>Aplicar</button>
              ) : (
                <button className="perfil-bottom-btn perfil-bottom-btn-rosado" onClick={handleToggleEdit}>Editar</button>
              )}
              <button className="perfil-bottom-btn perfil-bottom-btn-rosado" onClick={() => navigate(-1)}>Atras</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modals de selección */}
      <SelectModal
        visible={modal.open && modal.type === 'city'}
        title="Elige tu ciudad"
        options={cityOptions}
        onSelect={handleSelect}
        onClose={closeModal}
      />
      <SelectModal
        visible={modal.open && modal.type === 'career'}
        title="Elige tu programa"
        options={careerOptions}
        onSelect={handleSelect}
        onClose={closeModal}
      />
      <SelectModal
        visible={modal.open && modal.type === 'photo'}
        title="Elige tu imagen"
        options={photoOptions}
        onSelect={handleSelect}
        onClose={closeModal}
      />
      {/* Toast de confirmación */}
      <ToastFavoritos
        visible={showApplyToast}
        onClose={() => setShowApplyToast(false)}
        onFavoritos={() => setShowApplyToast(false)}
        message="Cambios Aplicados Correctamente"
        showFavoritos={false}
      />
    </Layout>
  );
}