import "./Card.css";
import { Link } from "react-router-dom";

function Card ({card}) {

  return (
    <div>
      <div className="cards-container">
          <Link to={`/card/${card.id}`} key={card.id}>
            <div className="card-back">
            </div>
          </Link>
      </div>
    </div>
  );
}
export default Card;
