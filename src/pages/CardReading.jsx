import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";
import Card from "../components/Card";

function CardReading() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);

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
  if (isLoading) {
    return <p>Las tarjetas se están cargando...</p>;
  }
  function handleCardClick(selectedCard) {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, selectedCard]);
    } else {
      alert("Ya has seleccionado 3 cartas.");
    }
  }

    function handleResetClick() {
      setSelectedCards([ ]);
  }

  return (
    <div>
      <h1>Lectura del Tarot STEM</h1>
      <button onClick={handleResetClick}>Resetear Lectura</button>
      <div className="reading-area">
        <h2>Tu Lectura</h2>
        <div className="selected-cards-display">
          {selectedCards.map((card, index) => (
            <div key={card.id} className="selected-card">
              <h4>{["Pasado", "Presente", "Futuro"][index]}</h4>
              <p>{card.arcaneName}</p>
               <p>{card.arcaneDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default CardReading;
