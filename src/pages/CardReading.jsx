import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

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
  function handleCardClick(clickedCard) {
    const isAlreadySelected = selectedCards.some(
      (card) => card.id === clickedCard.id
    );

    if (isAlreadySelected) {
      Swal.fire({
        title: "¡Carta Repetida!",
        text: "Esa carta ya ha sido seleccionada. Por favor, elige otra.",
        icon: "warning",
        confirmButtonColor: "#6a0dad", // Un color que combine con tu paleta
      });
      return;
    }
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, clickedCard]);
    } else {
      Swal.fire({
        title: '¡Lectura Completa!',
        text: 'Ya has seleccionado 3 cartas.',
        icon: 'info',
        confirmButtonColor: '#6a0dad'
      });
    }
  }
  function handleResetClick() {
    setSelectedCards([]);
  }

  return (
    <div>
      <h1>Lectura del Tarot STEM</h1>
      <p />
      Conecta con la sabiduría de las pioneras STEM. Elige hasta 3 cartas que
      resuenen contigo y descubre qué arquetipos científicos guían tu camino
      hacia la innovación y el descubrimiento.
      <br />
      <Link to="/CardsPage">Volver a la baraja</Link>
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
