import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { listShipments } from "../../actions/authActions";
import Card from "../widgets/Card";
class ShipmentList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("SD=", this.props);
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    this.props.listShipments();
    console.log(this.props.shipments);
  }

  componentDidUpdate() {
    console.log("Hey=",this.props);
  }

  render() {
    let shipments = this.props.shipments.shipments;
    return (
      <div id="shipmentList" className="">
        {shipments ? (
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2 flex flex-col">
              <div className="col s12">
                <h4>
                  <b>Ongoing Shipments</b>
                </h4>
                {shipments !== null ? (
                  <ul className="flex flex-row justify-evenly py-20">
                    {shipments.map((shipment) => (
                      <li key={shipment.destination} className="px-5">
                        <Card
                          heading={shipment.destination}
                          details={shipment.filledSpace}
                          details2={shipment.availableSpace}
                          details3={shipment.dispatchDate}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <b>No ongoing shipments found</b>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <b>Show Loader</b>
          </>
        )}
      </div>
    );
  }
}
ShipmentList.propTypes = {
  listShipments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  shipments: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  console.log("State=", state);
  return {
    auth: state.auth,
    shipments: state.shipments,
  };
};
export default connect(mapStateToProps, { listShipments })(ShipmentList);
