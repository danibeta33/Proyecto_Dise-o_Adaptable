
import './favoritos.css';
import UNacional from '../imgs/UNacional.jpg';
import UEafit from '../imgs/UEafit.jpg';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FondoImg from '../imgs/fondos/fondo.png';


export default function Favoritos() {
	const navigate = useNavigate();
	return (
		<Layout>
			{/* Pilares decorativos solo desktop */}
			<div className="favoritos-pillars" aria-hidden>
				<aside className="favoritos-pillar favoritos-pillar-left">
					<div className="favoritos-pillar-cap" />
					<div className="favoritos-pillar-images">
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
					</div>
				</aside>
				<aside className="favoritos-pillar favoritos-pillar-right">
					<div className="favoritos-pillar-cap" />
					<div className="favoritos-pillar-images">
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
						<img src={FondoImg} alt="Decoración" />
					</div>
				</aside>
			</div>
			<div className="min-h-screen flex flex-col favoritos-main-container container">
				{/* Menu */}
				{/* Barra de menú eliminada a solicitud */}

				{/* Search */}
				<div className="px-6 pt-6">
					<label htmlFor="search" className="block text-[#23263a] font-semibold mb-1">🔎 Búsqueda</label>
					<div className="flex items-center gap-2">
						<input id="search" type="text" className="favoritos-search-input" />
						{/* Icono lupa */}
						<span className="favoritos-search-icon">
							<svg width="18" height="18" fill="none" stroke="#23263a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><line x1="14" y1="14" x2="11.5" y2="11.5"/></svg>
						</span>
					</div>
				</div>

				{/* Title */}
				<h1 className="text-3xl md:text-5xl font-bold text-[#23263a] px-6 pt-8 pb-4">⭐ Favoritos</h1>

				{/* Favorites List */}
				<div className="flex flex-col gap-8 px-4 pb-8">
					{/* Card 1 */}
					<div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc]">
						<div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md">
							<img src={UNacional} alt="Universidad Nacional de Colombia" className="w-full h-full object-cover rounded-md border border-[#23263a]" />
						</div>
						<div className="flex flex-col flex-1 justify-between">
							<div>
								<h2 className="text-2xl font-semibold text-[#23263a]">🎓 Universidad Nacional de Colombia</h2>
								<p className="text-sm text-[#23263a] mt-1">Forma parte de una de las universidades más reconocidas del país. El programa de Psicología de la UNAL te brinda una sólida formación teórica y práctica, con enfoque en investigación y compromiso social.</p>
							</div>
							<div className="flex gap-4 mt-4">
								{/* Botones de las tarjetas */}
								<button className="btn-principal" onClick={() => navigate('/pagu')}>Ir a la Página</button>
								<button className="btn-secundario">Eliminar</button>
							</div>
						</div>
					</div>
					{/* Card 2 */}
					<div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc]">
						<div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md">
							<img src={UEafit} alt="Universidad EAFIT" className="w-full h-full object-cover rounded-md border border-[#23263a]" />
						</div>
						<div className="flex flex-col flex-1 justify-between">
							<div>
								<h2 className="text-2xl font-semibold text-[#23263a]">🎓 Universidad EAFIT</h2>
								<p className="text-sm text-[#23263a] mt-1">Desarrolla tu creatividad en el mundo digital aprendiendo diseño interactivo, animación y programación. Con docentes expertos y acceso a laboratorios de innovación, podrás trabajar en videojuegos, aplicaciones y experiencias inmersivas</p>
							</div>
							<div className="flex gap-4 mt-4">
								{/* Botones de las tarjetas */}
								<button className="btn-principal" onClick={() => navigate('/pagu')}>Ir a la Página</button>
								<button className="btn-secundario">Eliminar</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Buttons */}
				<div className="flex flex-col md:flex-row justify-center gap-8 mt-auto px-4 pb-8">
					{/* Botones inferiores */}
					<button className="favoritos-bottom-btn" onClick={() => navigate(-1)}>Atras</button>
					<button className="favoritos-bottom-btn" onClick={() => navigate('/busqueda')}>Añadir</button>
				</div>
			</div>
		</Layout>
	);
}
