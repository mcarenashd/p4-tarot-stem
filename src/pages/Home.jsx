import { Link } from "react-router-dom";
import CrystalBall from "../components/CrystalBall";
import "./Home.css";

function Home() {
  return (
    <div className="home-background-container">
      <div className="title">
      <h1 className="homeTitle">El Futuro está en los Datos</h1>
      <p className="homeSubitle">Descubre los arquetipos de la ciencia y la tecnología. Consulta el oráculo de las diosas contemporáneas y revela tu camino.</p>
      </div>
      <div className="home-content">
        <Link to="/CardsPage" className="nav-button">
          CONOCE LA BARAJA
        </Link>
        <div className="crystal-ball-container">
          <CrystalBall />
        </div>
        <Link to="/reading" className="nav-button">
          CONOCE TU SUERTE
        </Link>
      </div>
      
    </div>
  );
}

export default Home;