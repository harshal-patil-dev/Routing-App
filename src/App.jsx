import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Kids from "./Kids";
import Mobiles from "./Mobiles";

function App() {
  return (
    <div>
      <center>
        <nav>
          <Link to="/">Home</Link> | <Link to="/mobiles">Mobiles</Link> |{" "}
          <Link to="/kids">Kids</Link>
        </nav>
      </center>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mobiles" element={<Mobiles />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
