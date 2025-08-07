
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/header/index.js';
import Home from './pages/Home.js';
import Contato from './pages/Contato.js';
import Services from './pages/Services.js';
import Rodape from './componentes/Rodape/index.js';
function App() {
  return (
    <div className="App">
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes><Rodape />
    </div>
    
  );
}

export default App;
