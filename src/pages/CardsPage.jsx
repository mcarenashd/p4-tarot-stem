import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";
import "./CardsPage.css";
import Card from "../components/Card";
import deckImg from "../assets/images/barajav2.png"; // imagen de portada (import para bundlers)

function CardsPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await getAllCards();
        setCards(data);
      } finally {
        setIsLoading(false);
      }
    };
    loadCards();
  }, []);

  if (isLoading) {
    return (
      <p role="status" aria-live="polite">
        Las cartas se están cargando…
      </p>
    );
  }

  return (
    <main className="cards-page">
      <header className="cards-hero">
        <h1 className="home-title">
          TAROT <span>STEM</span>
        </h1>

        <div className="hero-media">
          <img
            className="deck-hero-image"
            src={deckImg}
            alt="Baraja Tarot STEM"
          />
        </div>
        <p className="cards-hero-subtitle">Conoce las cartas</p>
      </header>

      <section
        className="cards-container"
        aria-label="Listado de cartas de Tarot STEM"
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </main>
  );
}

export default CardsPage;
