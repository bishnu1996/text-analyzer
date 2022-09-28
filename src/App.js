import React, { useState } from "react";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Analyzer"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextBox mode={mode} />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
