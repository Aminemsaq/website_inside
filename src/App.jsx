import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Adjust paths as per your project structure
import Registration from './components/Registration'; // Adjust paths as per your project structure
import ThankYouPage from './components/ThankYouPage'; // Adjust paths as per your project structure
import NotFound from './components/NotFound'; // Adjust paths as per your project structure
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
