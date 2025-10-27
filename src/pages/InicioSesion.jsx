import Layout from '../components/Layout';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import './InicioSesion.css';

export default function InicioSesion() {
  const setUserType = useAuthStore((s) => s.setUserType);
  const userType = useAuthStore((s) => s.userType);
  const navigate = useNavigate();

  const handlePerfil = () => {
    setUserType('perfil');
    navigate('/home');
  };
  const handleAnonimo = () => {
    setUserType('anonimo');
    navigate('/home');
  };

  return (
    <Layout>
      <main className="inicio-main">
        <div className="inicio-card">
          <h1 className="inicio-title">Inicio de Sesión</h1>
          <p className="inicio-desc">Elige cómo deseas ingresar:</p>
          <div className="inicio-actions">
            <button className="btn-principal" onClick={handlePerfil}>Ingresar como Sofia</button>
            <button className="btn-secundario" onClick={handleAnonimo}>Ingresar como Anónimo</button>
          </div>
          <p className="inicio-foot">Actual: {userType === 'perfil' ? 'Perfil' : 'Anónimo'}</p>
        </div>
      </main>
    </Layout>
  );
}
