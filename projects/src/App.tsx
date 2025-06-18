import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/projects" element={<h1>Projects Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
   </Router>
  );
}

export default App
