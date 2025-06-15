import { Link } from "react-router-dom";

function home() {
  return (
    <>
      <div class="floating-elements">
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>
      </div>

      <main>
        <div class="container">
          <section class="hero" id="inicio">
            <h1>Currency Exchange Hub</h1>
            <p>
              Tu plataforma completa para conversión de monedas y análisis de
              tasas de cambio en tiempo real. Accede a herramientas
              profesionales para el manejo de divisas internacionales.
            </p>
          </section>

          <section class="services-grid" id="servicios">
            <div class="service-card">
              <div class="service-icon">💱</div>
              <h3>Conversor de Monedas</h3>
              <p>
                Convierte entre diferentes monedas con tasas de cambio
                actualizadas en tiempo real. Interfaz simple y resultados
                precisos.
              </p>
              <a href="/exchange" class="btn">
                Acceder al Conversor
              </a>
            </div>

            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Tasas de Cambio</h3>
              <p>
                Consulta las tasas de cambio actuales y históricas. Análisis
                detallado de tendencias y fluctuaciones del mercado.
              </p>
              <a href="/exchangeRates" class="btn">
                Ver Tasas
              </a>
            </div>


          </section>
        </div>
      </main>
    </>
  );
}

export default home;
