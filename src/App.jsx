import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Kids from "./Kids";
import Mobiles from "./Mobiles";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mobiles" element={<Mobiles />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
