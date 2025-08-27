import './Perfil.css';

export default function Perfil() {
	return (
		<div className="perfil-main-container">
			<div className="perfil-content-wrapper">
				{/* Header */}
				<header className="perfil-header">
					<div className="perfil-header-col">
						<div className="perfil-logo-box"></div>
					</div>
					<div className="perfil-header-center-col">
						<div className="perfil-header-center"></div>
					</div>
					<div className="perfil-header-col">
						<button className="perfil-header-menu-btn" aria-label="Menú lateral">
							<svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
						</button>
					</div>
				</header>

				{/* Menu */}
				<div className="perfil-menu-bar">
					<button className="perfil-header-menu-btn">
						<svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="16" x2="17" y2="16"/></svg>
						<span>Menu</span>
					</button>
				</div>

				{/* Fondo gris claro */}
				<div className="perfil-content-bg">
					{/* Imagen de perfil */}
					<div className="perfil-img-container">
						<div className="perfil-img-placeholder">
							<svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="14" width="28" height="20" rx="3"/><circle cx="24" cy="24" r="5"/></svg>
						</div>
					</div>

					{/* Inputs de datos */}
					<div className="perfil-inputs-row">
						<input className="perfil-input" value="Medellín, Antioquia" readOnly />
						<input className="perfil-input" value="Comunicación Social" readOnly />
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
						<div className="perfil-carousel-card">
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
						<button className="perfil-bottom-btn perfil-bottom-btn-rosado">Editar</button>
						<button className="perfil-bottom-btn perfil-bottom-btn-rosado">Atras</button>
					</div>
				</div>
			</div>
		</div>
	);
}