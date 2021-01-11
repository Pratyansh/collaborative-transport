import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { listShipments } from "../../actions/authActions";
import Tab from "../widgets/Tab";
class ShipmentList extends Component {
  constructor() {
    super();
    this.state = {
      shipmentData: {},
    };
  }
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    this.props.listShipments();
    this.setState({ shipmentData: this.props.shipments });
  }
  componentDidUpdate(prevProps,prevState) {
    if (this.state.shipmentData == null) {
      console.log("helo");
      this.props.listShipments();
      this.setState({ shipmentData: this.props.shipments });
 }
}

  render() {
    const { shipmentData } = this.state;
    let shipments = null;
    if (shipmentData) {
      shipments = shipmentData.shipments;
    }
    console.log(shipments);
    return ( 
      <div id="shipmentList" className="">
        {shipments && <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2 flex flex-col">
            <div className="col s12">
              <h4>
                <b>Ongoing Shipments</b>
              </h4>
              {shipments !== null ? (
              <ul className="flex flex-row justify-evenly py-20">
                {shipments.map((shipment) => (
                  <li key={shipment.destination}><Tab heading={shipment.destination} icon=""/></li>
                ))}
              </ul>
            ) : (
              <></>
            )}
            </div>
          </div>
        </div>}
      </div>
    );
  }
}
ShipmentList.propTypes = {
  listShipments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  shipments: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  shipments: state.shipments,
});
export default connect(mapStateToProps, { listShipments })(ShipmentList);
