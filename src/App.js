import './App.css';


import './styles/components/pages/Cosmologia.css';
import './styles/components/pages/Home.css';
import './styles/components/pages/Dioesesyheroes.css';
import './styles/components/pages/Novedades.css';
import './styles/components/pages/Contacto.css';

import './styles/components/layout/Footer.css';
import './styles/components/layout/Header.css';
import './styles/components/layout/Nav.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import CosmologiaPage from './pages/CosmologiaPage';
import DiosesyheroesPage from './pages/DiosesyheroesPage';
import CulturapopularPage from './pages/CulturapopularPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cosmologia" element={<CosmologiaPage />} />
          <Route path="/diosesyheroes" element={<DiosesyheroesPage />} />
          <Route path="/culturapopular" element={<CulturapopularPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
