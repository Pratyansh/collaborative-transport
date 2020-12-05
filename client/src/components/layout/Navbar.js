import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper bg-green-500 flex flex-row justify-between">
            <div>
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="absolute inline-block left-0 ml-12"
            >
              <div className="font-light bg-green-600 p-2 inline text-xl text-white shadow-md">
              Truck-Truck-Go
              </div>
            </Link>
            </div>
            {user.name && <div className="inline-block mr-12">
              <button
              onClick={this.onLogoutClick}
              className="btn w-32 waves-effect waves-light hover:shadow-lg hover:bg-green-700 rounded-md bg-green-600 accent-3"
            >
              Logout
            </button>
            </div>
            }
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);