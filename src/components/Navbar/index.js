import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <span class="badge badge-dark">
        <h5>
        Empire Construction
        </h5>
      </span>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/AssociateTracker" className= "nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AssociateTracker/directory" className= "nav-link active">
              Directory
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
