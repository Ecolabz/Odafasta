import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Pages/Landing-Page/LandingPage';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
    <Navbar />
    <LandingPage />
    <Footer />
    </div>
  );
}

export default App;
