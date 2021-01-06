//2 tabs - open shipments, create shipment
/*
Open Shipment - 
- Cards with Open truck details
- - Open shipment cards - show space available
Create Shipment
- Form with Create shipment details
*/


import React, {Component} from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <h4>
                  <b>Build</b> a login/auth app with the{" "}
                  <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                  scratch
                </h4>
                <p className="flow-text grey-text text-darken-1">
                  Create/Opt-in shipments in your own authenticated personal space
                </p>
                <br />
                <div className="col s6">
                  <Link
                    to="/register"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large waves-effect waves-light hover:shadow-lg hover:bg-green-700 bg-green-600 accent-3"
                  >
                    Register
                  </Link>
                </div>
                <div className="col s6">
                  <Link
                    to="/login"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large btn-flat waves-effect bg-gray-300 hover:bg-gray-400 black-text"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Landing;