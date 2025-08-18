import { useState, useEffect } from "react";
import { getAllCards } from "../services/api";

function HomePage(){
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
}