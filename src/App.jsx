import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar React Router

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
