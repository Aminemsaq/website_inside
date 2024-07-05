import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; // Adjust paths as per your project structure
import Registration from './components/Registration'; // Adjust paths as per your project structure
import ThankYouPage from './components/ThankYouPage'; // Adjust paths as per your project structure
import NotFound from './components/NotFound'; // Adjust paths as per your project structure
import './index.css';

function App() {
  return (
    <Router basename="/website_inside">
      <div>
        <h1>Website Inside</h1>

        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/Register">Register</Link>
          {" | "}
          <Link to="/ThankYouPage">Thank You Page</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
