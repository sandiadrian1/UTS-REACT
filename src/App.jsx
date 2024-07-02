import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Film from './pages/Film';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/film" element={<Film/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;