import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/home';
// import StoryPage from './pages/About';
// import EnquiryPage from './pages/Services';
// import AboutPage from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<StoryPage />} /> */}
            {/* <Route path="/services" element={<EnquiryPage />} /> */}
            {/* <Route path="/contact" element={<AboutPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;