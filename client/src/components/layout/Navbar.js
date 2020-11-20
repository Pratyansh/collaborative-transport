import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed pb-12">
        <nav className="z-depth-0">
          <div className="nav-wrapper bg-green-500">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="absolute inline-block left-0 ml-12"
            >
              <div className="font-light bg-green-600 p-2 inline text-xl text-white">
              Truck-Truck-Go
              </div>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
