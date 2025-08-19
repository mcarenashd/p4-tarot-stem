import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";
import Card from "../components/Card";

function CardReading(){
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
                <Card key={card.id} card={card} />
            ))}
        </div>
    </div>
);
}

export default CardReading;
