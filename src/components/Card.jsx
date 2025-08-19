import "./Card.css";
import { Link } from "react-router-dom";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(card);
    }
  };

  return (
    <div>
      <div className="cards-container">
        <div className="card-back" onClick={handleClick}></div>
      </div>
    </div>
  );
}
export default Card;
