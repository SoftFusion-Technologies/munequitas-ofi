import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar React Router

function App() {
  return (
    <Router>
      <Navbar />
      <Footer/>
    </Router>
  );
}

export default App;
