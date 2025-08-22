import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCardById } from "../services/api";
import "./CardDetail.css";

function CardDetailPage() {
  const [card, setCard] = useState(null);        
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadOneCard = async () => {
      try {
        const data = await getCardById(id);
        setCard(data || null);
      } catch (error) {
        console.error("error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadOneCard();
  }, [id]);                                       
  if (isLoading) return <p role="status" aria-live="polite">Cargando carta…</p>;
  if (!card) return <p>Carta no encontrada</p>;

  return (
    <main className="detail-page">
      <section className="cards-cont" aria-label="Detalle de carta de Tarot STEM">
        <article className="card-arcane">
          <h2>{card.arcaneName}</h2>
          <img
            className="tarot-image"
            src={card.arcaneImage?.imageSrc}
            alt={card.arcaneName}
          />
          <h3>Número: {card.arcaneNumber}</h3>
          <p>{card.arcaneDescription}</p>
        </article>

        <article className="card-goddess">
          <h2>{card.goddessName}</h2>
          <img
            className="goddess-image"
            src={card.goddessImage?.imageSrc}
            alt={card.goddessName}
          />
          <p>{card.goddessDescription}</p>
        </article>
      </section>

      <div className="go-back-link">
        <Link className="nav-button-small" to="/CardsPage">Volver a la baraja</Link>
      </div>
    </main>
  );
}

export default CardDetailPage;