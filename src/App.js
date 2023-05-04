import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './style.scss'

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweet />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;