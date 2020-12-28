import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{
          textAlign: "center",
          backgroundColor: "green"

        }}>
          <Link to="/" className="brand-logo">
            Find Books
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
