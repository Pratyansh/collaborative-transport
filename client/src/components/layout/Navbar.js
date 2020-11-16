import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed pb-12">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center black-text text-align:left"
            >
              <i className="material-icons"></i>
              Burgistan
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
