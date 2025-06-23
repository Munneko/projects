import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/main.scss";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Router>
      <Navbar />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
