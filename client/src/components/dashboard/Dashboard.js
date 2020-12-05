import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Tab from "../widgets/Tab";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  onAddNewClick =()=> {
    console.log("hello");
  }
render() {
    const { user } = this.props.auth;
return (
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <div className="m-4">
                <b>Hey,</b> {user.name.split(" ")[0]}
              </div>
              <p className="flow-text grey-text text-darken-1">
                Successfully logged into{" "}
                <span style={{ fontFamily: "monospace" }}>truck-truck-go</span>
              </p>
            </h4>
            <div className="flex flex-row w-full justify-evenly py-20 text-2xl">
            <Tab
              icon="library_add"
              heading="Add New Shipment"
              onClick={() => {
                console.log("hello");
              }}
              className="m-2 w-1/5"
            />
            <Tab
              icon="list_alt"
              heading="View Ongoing Shipments"
              onClick={() => {
                console.log("hello");
              }}
              className="m-2 w-1/5"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);