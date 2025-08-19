import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";
import "./Home.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      console.log("Trayendo las cartas de la base de datos");
      const data = await getAllCards();
      setCards(data);
      setIsLoading(false);
      console.log("Funciona el llamado");
    };
    loadCards();
  }, []);
  console.log("Valor de 'cards' al momento de dibujar:", cards);
  if (isLoading) {
    return <p>Las tarjetas se están cargando...</p>;
  }

  return (
    <div>
      <h1>Tarot STEM</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <Link to={`/card/${card.id}`} key={card.id}>
            <div className="card-back">
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
