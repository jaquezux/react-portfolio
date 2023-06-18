import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';
import LeadGeneration from './components/pages/LeadGeneration';
import InternalSearchEngine from './components/pages/InternalSearchEngine';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<ProjectsPage/>} />
          <Route path='/projects/lead-generation' element={<LeadGeneration/>} />
          <Route path='/projects/internal-search-engine-analysis' element={<InternalSearchEngine/>} />
        </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
