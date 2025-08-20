import { Outlet } from 'react-router-dom';
import './App.css'
import CardsPage from './pages/CardsPage.jsx'
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Outlet/> 
      
      <Footer/>
    </div>
  )
}

export default App
