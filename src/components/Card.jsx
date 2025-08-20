import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Card.css";

function Card({ card, onCardClick }) {
  const cardVariants = {
    hover: {
      y: -15,
      rotateY: 10,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };
  if (onCardClick) {
    return (
      <motion.button
        type="button"
        variants={cardVariants}
        whileHover="hover"
        className="card-back"
        whileTap="tap"
        onClick={() => onCardClick(card)}
      ></motion.button>
    );
  }

  return (
    <Link to={`/card/${card.id}`}>
      <motion.div
        className="card-back"
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </Link>
  );
}
export default Card;
