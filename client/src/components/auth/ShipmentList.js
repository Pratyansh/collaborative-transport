import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { listShipments } from "../../actions/authActions";
class ShipmentList extends Component {
  constructor() {
    super();
    this.state = {
      shipmentData: {}
    };
  }
  componentDidMount(){
    if(!this.props.auth.isAuthenticated){
      this.props.history.push("/");
    }
    this.props.listShipments();
    this.setState({shipmentData:this.props.shipments})
  };

render() {
  const { shipmentData } = this.state;
  console.log(shipmentData.shipments);
return (
      <div className="">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2 flex flex-col">
            {/* <ul>
              {this.state.shipmentData.map((shipment) => (
                <li key={shipment.destination}>{shipment.destination}</li>
              ))}
            </ul> */}
          </div> 
        </div>
      </div>
    );
  }
}
ShipmentList.propTypes = {
  listShipments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  shipments: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  shipments: state.shipments
});
export default connect(
  mapStateToProps,
  { listShipments }
)(ShipmentList);