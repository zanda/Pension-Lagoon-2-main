import * as React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SliderAuto from './components/SliderAuto';
import Accueil from './pages/Accueil';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <SliderAuto collection="header-carrousel" />
      <Accueil />
      <Footer />
    </div>
  );
}
