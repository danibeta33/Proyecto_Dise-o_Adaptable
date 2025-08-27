import './favoritos.css';
import UNacional from '../imgs/UNacional.jpg';
import UEafit from '../imgs/UEafit.jpg';

export default function Favoritos() {
	return (
		<div className="min-h-screen bg-white border-4 border-[#393e4c] rounded-xl flex flex-col">
			{/* Header */}
			<header className="flex items-center justify-between p-2 border-b border-[#393e4c]">
				<div className="flex items-center gap-2">
					<div className="bg-[#23263a] rounded-md px-8 py-3 text-white font-bold text-lg">Logo</div>
				</div>
				<div className="flex-1 flex justify-center">
					<div className="bg-[#23263a] rounded-t-md px-24 py-3" />
				</div>
				<button className="p-2 w-8 h-8"></button>
			</header>

			{/* Menu */}
			<div className="w-full bg-[#e9ecf3] flex justify-center items-center py-3 border-b border-[#393e4c]">
				<button className="flex items-center gap-2 px-8 py-2 rounded-md bg-white border border-[#393e4c] text-[#23263a] font-semibold text-lg">Menu</button>
			</div>

			{/* Search */}
			<div className="px-6 pt-6">
				<label htmlFor="search" className="block text-[#23263a] font-semibold mb-1">Busqueda</label>
				<div className="flex items-center gap-2">
					<input id="search" type="text" className="flex-1 border border-[#bfc5d2] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#23263a]" />
					<div className="w-7 h-7 rounded-full border border-[#bfc5d2] flex items-center justify-center">
						{/* Empty circle for search icon placeholder */}
					</div>
				</div>
			</div>

			{/* Title */}
			<h1 className="text-5xl font-bold text-[#23263a] px-6 pt-8 pb-4">Favoritos</h1>

			{/* Favorites List */}
			<div className="flex flex-col gap-8 px-4 pb-8">
				{/* Card 1 */}
				<div className="border-2 border-dashed border-[#23263a] rounded-lg flex flex-col md:flex-row items-stretch p-4 gap-4 bg-[#f6f8fc]">
					<div className="flex-shrink-0 w-full md:w-56 h-40 rounded-md">
						<img src={UNacional} alt="Universidad Nacional de Colombia" className="w-full h-full object-cover rounded-md border border-[#23263a]" />
					</div>
					<div className="flex flex-col flex-1 justify-between">
						<div>
							<h2 className="text-2xl font-semibold text-[#23263a]">Universidad Nacional de Colombia</h2>
							<p className="text-sm text-[#23263a] mt-1">Forma parte de una de las universidades más reconocidas del país. El programa de Psicología de la UNAL te brinda una sólida formación teórica y práctica, con enfoque en investigación y compromiso social.</p>
						</div>
						<div className="flex gap-4 mt-4">
							<button className="bg-[#23263a] text-white font-bold px-6 py-2 rounded-md">Ir a la Página</button>
							<button className="bg-[#d13c5a] text-white font-bold px-6 py-2 rounded-md">Eliminar</button>
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
							<h2 className="text-2xl font-semibold text-[#23263a]">Universidad EAFIT</h2>
							<p className="text-sm text-[#23263a] mt-1">Desarrolla tu creatividad en el mundo digital aprendiendo diseño interactivo, animación y programación. Con docentes expertos y acceso a laboratorios de innovación, podrás trabajar en videojuegos, aplicaciones y experiencias inmersivas</p>
						</div>
						<div className="flex gap-4 mt-4">
							<button className="bg-[#23263a] text-white font-bold px-6 py-2 rounded-md">Ir a la Página</button>
							<button className="bg-[#d13c5a] text-white font-bold px-6 py-2 rounded-md">Eliminar</button>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Buttons */}
			<div className="flex flex-col md:flex-row justify-center gap-8 mt-auto px-4 pb-8">
				<button className="bg-[#d13c5a] text-white font-bold px-16 py-3 rounded-md">Atras</button>
				<button className="bg-[#d13c5a] text-white font-bold px-16 py-3 rounded-md">Añadir</button>
			</div>
		</div>
	);
}
