import { Outlet } from 'react-router-dom';
import './App.css'
import HomePage from './pages/CardsPage.jsx'
function App() {

  return (
    <div className="App">
      <Outlet /> 
    </div>
  )
}

export default App
