import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <center>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/mobiles">Mobiles</Link>
          {" | "}
          <Link to="/kids">Kids</Link>
          {" | "}
        </nav>
      </center>
    </div>
  );
}

export default Navbar;
