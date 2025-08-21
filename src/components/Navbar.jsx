import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar (){
    return(
        <>
       <nav>
        <Link className="navbar-button" to="/">Home</Link> 
        <Link className="navbar-button" to="/CardsPage">Conoce la Baraja</Link>
        <Link className="navbar-button" to="/reading">Conoce tu Suerte</Link>
        </nav> 
        </>
    )
}
export default Navbar