import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCardById } from "../services/api";
import "./CardDetail.css";

function CardDetailPage() {
  const [card, setCard] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log("ID de Params", id);

  useEffect(() => {
    const loadOneCard = async () => {
      try {
        console.log(`Trayendo la carta de id: " ${id}`);
        const data = await getCardById(id);
        setCard(data);
        setIsLoading(false);
        console.log("Funciona el llamado");
      } catch (error) {
        console.error("error:", error);
      }
    };
    loadOneCard();
  }, []);
  if (isLoading) {
    return <p>Las tarjetas se están cargando...</p>;
  }
  if (!card) {
    return <p>Carta no encontrada</p>;
  }

  return (
    <div>
      <div className="cards-cont">
        <div className="card-arcane">
          <h2>{card.arcaneName}</h2>
          <br />
          <img
            className="tarot-image"
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            style={{ maxWidth: "200px" }}
          />{" "}
          <br />
          <br />
          <h2>Número: {card.arcaneNumber}</h2> <br />
          <p>{card.arcaneDescription}</p> <br />
        </div>
        <div className="card-goddess">
          <h2>{card.goddessName}</h2> <br />
          <img
            className="goddess-image"
            src={card.goddessImage.imageSrc}
            alt={card.goddessName}
            style={{ maxWidth: "200px" }}
          />{" "}
          <br />
          <p>{card.goddessDescription}</p>
          <br />
        </div>
      </div>
      <Link to="/CardsPage">Volver a la baraja</Link>
    </div>
  );
}
export default CardDetailPage;
