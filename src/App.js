import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Pages/Landing-Page/LandingPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <LandingPage />
    <Footer />
    </div>
  );
}

export default App;
