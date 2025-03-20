import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar React Router
import Home from './Pages/Home';
import Turnero from './Pages/Turnero';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnero" element={<Turnero />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
