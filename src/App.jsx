import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar React Router
import Home from './Pages/Home';
import Turnero from './Pages/Turnero';
import Mapa from './Components/Mapa';
import Novias from './Pages/Pestañas/Novias';
import Ofertas from './Pages/Pestañas/Ofertas';
import Largos from './Pages/Pestañas/Largos';
import Cortos from './Pages/Pestañas/Cortos';
import Nenas from './Pages/Pestañas/Nenas';
import Quince from './Pages/Pestañas/Quince';
import XXL from './Pages/Pestañas/XXL';
import NotFound from './Pages/NotFound';
import Top from './Pages/Pestañas/Top';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turnero" element={<Turnero />}></Route>
        <Route path="/ofertas" element={<Ofertas />}></Route>
        <Route path="/vestidos-largos" element={<Largos />}></Route>
        <Route path="/vestidos-cortos" element={<Cortos />}></Route>
        <Route path="/vestidos-nenas" element={<Nenas />}></Route>
        <Route path="/novias" element={<Novias />}></Route>
        <Route path="/quince-años" element={<Quince />}></Route>
        <Route path="/xxl" element={<XXL />}></Route>
        <Route
          path="/top_falda"
          element={<Top />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Mapa></Mapa>
      <Footer />
    </Router>
  );
}

export default App;
