import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import "./CardReading.css";

/*Función para poder bajarar nuevamente las cartas*/
function shuffleArray(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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
  function handleShuffleClick() {
  const shuffled = shuffleArray(cards); 
  setCards(shuffled); 
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
        confirmButtonColor: "#6a0dad", 
      });
      return;
    }
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, clickedCard]);
    } else {
      Swal.fire({
        title: "¡Lectura Completa!",
        text: "Ya has seleccionado 3 cartas.",
        icon: "info",
        confirmButtonColor: "#6a0dad",
      });
    }
  }
  function handleResetClick() {
    setSelectedCards([]);
  }

  return (
    <div>
      <div className="reading-header">
        <h1>Lectura del Tarot STEM</h1>
        <p/>
        Conecta con la sabiduría de las pioneras STEM. Elige hasta 3 cartas que
        resuenen contigo y descubre qué arquetipos científicos guían tu camino
        hacia la innovación y el descubrimiento.
        <br/>
        <div className="buttons-container">
        <Link className="nav-button-small" to="/CardsPage">
          Volver a la baraja
        </Link>
        <button className="nav-button-small" onClick={handleResetClick}>
          Resetear Lectura
        </button>
        <button className="nav-button-small" onClick={handleShuffleClick}>Barajar Cartas</button>
        </div>
      </div>

      <div className="reading-area">
        <h2>Tu Lectura</h2>
        <div className="selected-cards-display">
          {selectedCards.map((card, index) => (
            <div key={card.id} className="selected-card">
              <h2>{["Pasado", "Presente", "Futuro"][index]}</h2>
              <img
                className="tarot-image"
                src={card.arcaneImage.imageSrc}
                alt={card.arcaneName}
                style={{ maxWidth: "200px" }}
              ></img>
              <p>{card.arcaneName}</p>
              <p>{card.arcaneDescription}</p>
            </div>
          ))}
        </div>
      </div>

      <hr/>

      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default CardReading;
