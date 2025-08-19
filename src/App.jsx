import { Outlet } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home.jsx'
function App() {

  return (
    <div className="App">
      <Outlet /> 
    </div>
  )
}

export default App
