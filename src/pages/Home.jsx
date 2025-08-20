// src/pages/Home.jsx
import { Link } from "react-router-dom";
import CrystalBall from "../components/CrystalBall";
import "./Home.css";

function Home() {
  return (
    // 👇 Contenedor principal que solo se encarga del fondo animado
    <div className="home-background-container">
      
      {/* 👇 Contenedor interno que solo se encarga de centrar el contenido */}
      <div className="home-content">
        <Link to="/CardsPage" className="nav-button">
          Ver la Baraja
        </Link>
        <div className="crystal-ball-container">
          <CrystalBall />
        </div>
        <Link to="/reading" className="nav-button">
          Probar Suerte
        </Link>
      </div>
      
    </div>
  );
}

export default Home;