import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  return (
    <nav>
      <button
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link className="navbar-button" to="/" onClick={close}>
          Home
        </Link>
        <Link className="navbar-button" to="/CardsPage" onClick={close}>
          Conoce la Baraja
        </Link>
        <Link className="navbar-button" to="/reading" onClick={close}>
          Conoce tu Suerte
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;