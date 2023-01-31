import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Experience/>
      <Projects/>
      <Footer/>
    </Router>

  );
}

export default App;
