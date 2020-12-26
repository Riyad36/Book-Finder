import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "#3B140C" }}>
          <Link to="/" className="brand-logo">
            Find Books
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
