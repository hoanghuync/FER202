import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Quiz App</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/news">About</Link>
          <Link className="nav-link" to="/about">News</Link>
          <Link className="nav-link" to="/contact">Quiz</Link>
          <Link className="nav-link" to="/quiz">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<About />} />
        <Route path="/about" element={<News />} />
        <Route path="/contact" element={<Quiz />} />
        <Route path="/quiz" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;