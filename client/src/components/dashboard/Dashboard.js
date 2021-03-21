import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tab from "../widgets/Tab";
import Form from "../widgets/Form";

const Dashboard = (props) => {
  const { user } = props.auth;
  const [showModal, setShowModal] = useState(false);
  const onCloseModal = () => {
    setShowModal(false);
  };
  const history = useHistory();
  const reroute = (path) => {
    history.push(path);
  };

  return (
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
        <div className="flex flex-row flex-shrink w-full justify-evenly py-20 text-2xl md:text-sm">
          <Tab
            icon="library_add"
            heading="Add New Shipment"
            onClick={() => {
              reroute("/add-shipment");
            }}
            className="m-2 w-1/5"
          />
          <Tab
            icon="list_alt"
            heading="View Ongoing Shipments"
            onClick={() => {
              reroute("/shipment-list");
            }}
            className="m-2 w-1/5"
          />
        </div>
      </div>
      {showModal && <Form onClose={onCloseModal} />}
    </div>
  );
};
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Dashboard);
