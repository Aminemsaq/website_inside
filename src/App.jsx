import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Registration from "./components/Registration";
import './index.css';
import ThankYouPage from "./components/ThankYouPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Registration />}/>
        <Route path="/ThankYouPage" element={<ThankYouPage />}/>
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
