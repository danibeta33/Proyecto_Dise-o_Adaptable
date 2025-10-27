import Layout from '../components/Layout';
import './home.css';

export default function Home() {
  // Cargar imágenes disponibles de la carpeta Home y resolver URLs con Vite
  const images = import.meta.glob('../imgs/Home/*', { eager: true, as: 'url' });
  const fondo2 = images['../imgs/Home/fondo2.jpg'] || images['../imgs/Home/fondo2.png'];
  const fondo = fondo2 || images['../imgs/Home/fondo.jpg'] || images['../imgs/Home/fondo.png'];

  // Preferir imágenes que comiencen con Ob* para objetivos; si no, usar enumeradas 1..3
  const obCandidates = Object.entries(images)
    .filter(([k]) => /\/Home\/(Ob|ob)/.test(k))
    .map(([, url]) => url);
  const numbered = [1,2,3,4,5,6,7,8]
    .map(n => images[`../imgs/Home/${n}.png`])
    .filter(Boolean);
  const objetivosImgs = (obCandidates.length >= 3 ? obCandidates.slice(0,3) : numbered.slice(0,3));

  // Afiliaciones: usar numeradas 1..8 en una sola fila
  const afiliaciones = numbered;
  const combinedRow = afiliaciones;
  return (
    <Layout>
      <main className="home-main">
        {/* Hero */}
        <section className="home-hero" style={{backgroundImage: `url(${fondo})`}}>
          <div className="home-hero-card">
            <h1 className="home-title">U BICATE</h1>
            <h2 className="home-subtitle">Descubre tu futuro con confianza.</h2>
            <p className="home-desc">
              Elegir una carrera universitaria puede ser una de las decisiones más importantes de la vida, y muchas veces no contamos con toda la información necesaria para hacerlo con seguridad. Nuestra aplicación está diseñada para acompañarte en ese proceso, ofreciéndote una experiencia completa y personalizada.
            </p>
            <p className="home-desc">
              Explora las diferentes universidades, conoce sus programas académicos, descubre oportunidades de becas y analiza los planes de estudio. Además, podrás leer opiniones y testimonios reales de estudiantes y egresados, quienes comparten su experiencia sobre la carrera y la institución en la que estudiaron.
            </p>
            <p className="home-desc">
              Pero no se trata solo de información: también te ayudamos a conocerte mejor. A través de herramientas interactivas y tests de orientación vocacional, podrás descubrir tus intereses, habilidades y actitudes, para que encuentres una carrera que se alinee con lo que realmente te apasiona.
            </p>
            <p className="home-desc"><strong>
              Tu futuro comienza aquí: infórmate, explora y elige la carrera de tus sueños.
            </strong></p>
          </div>
        </section>

        {/* Objetivos */}
        <section className="home-section">
          <h2 className="home-section-title">Nuestros Objetivos</h2>
          <div className="home-cards">
            {(() => {
              const objetivosContent = [
                {
                  title: '💭 1. Encuentra la carrera de tus sueños',
                  desc: 'Explora cientos de programas universitarios y conoce qué hace única a cada carrera. Te ayudamos a conectar tus intereses, habilidades y valores con el campo profesional que mejor se ajusta a ti.'
                },
                {
                  title: '📉 2. Reduce la deserción universitaria',
                  desc: 'Toma una decisión informada desde el principio. Conoce experiencias reales de otros estudiantes y evita elegir una carrera que no cumpla tus expectativas.'
                },
                {
                  title: '💡 3. Descubre tus actitudes y aptitudes',
                  desc: 'Realiza pruebas que te mostrarán tus fortalezas, intereses y perfil profesional. Así podrás identificar qué carreras se alinean mejor con tu forma de pensar y tus talentos naturales.'
                }
              ];
              return objetivosImgs.map((src, idx) => (
              <article key={idx} className="home-card">
                <div className="home-card-img">
                  <img src={src} alt={`Objetivo ${idx+1}`} />
                </div>
                <div className="home-card-body">
                  <h3 className="home-card-title">{objetivosContent[idx]?.title || `Objetivo ${idx+1}`}</h3>
                  <p className="home-card-desc">{objetivosContent[idx]?.desc || `Descripción ${idx+1}`}</p>
                </div>
              </article>
              ));
            })()}
          </div>
        </section>

        {/* Afiliaciones (una sola fila en loop infinito) */}
        <section className="home-section">
          <h2 className="home-section-title">Afiliaciones</h2>
          <div className="home-marquee">
            <div className="home-marquee-track left">
              {[...combinedRow, ...combinedRow].map((src, idx) => (
                <div className="home-afiliacion" key={`a-${idx}`}>
                  <img src={src} alt="Afiliación" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}