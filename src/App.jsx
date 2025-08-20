import { Outlet } from 'react-router-dom';
import './App.css'
import CardsPage from './pages/CardsPage.jsx'
import Footer from './components/Footer.jsx';
function App() {

  return (
    <div className="App">
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default App
