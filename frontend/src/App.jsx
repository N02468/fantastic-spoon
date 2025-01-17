import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import ContactForm from './components/ContactForm';
import Projects from './components/Project';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '20px',
                padding: '10px 20px',
                margin: 0,
                marginTop: '10px',
                backgroundColor: 'black',
                color: 'white',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000
              }}
            >
              <li><Link to="/" style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>Home</Link></li>
              <li><Link to="/about" style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>About</Link></li>
              <li><Link to="/projects" style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>Projects</Link></li>
              <li><Link to="/contact" style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>Contact</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
