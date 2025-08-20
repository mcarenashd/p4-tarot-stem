import { Link } from "react-router-dom";
import CrystalBall from "../components/CrystalBall";
import "./Home.css";
import "../components/CrystalBall.css";

function Home() {
  return (
    <>
      <div className="crystal-ball-container">
        <CrystalBall />
      </div>
    </>
  );
}
export default Home;
