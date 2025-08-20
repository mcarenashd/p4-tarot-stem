import { Link } from "react-router-dom";
import "./Card.css";

function Card({ card, onCardClick }) {

if (onCardClick) {
  return (
    <button
      type="button"
      className="card-back"
      onClick={() => onCardClick(card)}
    >
    </button>
  );
}

  return (
    <Link to={`/card/${card.id}`}>
      <div className="card-back">
      </div>
    </Link>
  );
}
export default Card