import { Link } from "react-router-dom";
import "./Card.css";

function Card({ card, onCardClick }) {

  if (onCardClick) {
    return (
      <div className="card-back" onClick={() => onCardClick(card)}>
      </div>
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