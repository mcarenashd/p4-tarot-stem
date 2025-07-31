import axios from "axios";

const API_URL = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot"

//Método GET para obtener todas las tarjetas

export const getAllCards = async() =>{
    try{
        const response = await axios.get(URL_API);
        return response.data;
    }
    catch(error) {
        console.error(`getAllCards error:`, error.message);
        throw error;
    }
}