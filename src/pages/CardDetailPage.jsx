import { useState, useEffect } from "react";
import {useParams, Link} from  "react-router-dom";
import { getCardById } from "../services/api";

function CardDetailPage(){
    const [card, setCard] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();
    console.log("ID de Params", id);

    useEffect (()=>{
    const loadOneCard = async () =>{
        try {
        console.log(`Trayendo la carta de id: " ${id}`);
        const data = await getCardById(id);
        setCard(data);
        setIsLoading(false)
        console.log("Funciona el llamado")
        }
      catch (error) {
        console.error("error:", error);
      } 
    }
    loadOneCard();
},[]);
if (isLoading){
    return <p>Las tarjetas se están cargando...</p>
 }
   if (!card) {
    return <p>Carta no encontrada</p>;
  }
 
    return (
        <div>
            <h1>Tarot STEM</h1>
            <div className="cards-container">
            {card.arcaneName}
            {card.arcaneDescription}
            <Link to ="/">Volver a la baraja</Link>
            </div>
        </div>
    )
}
export default CardDetailPage;


