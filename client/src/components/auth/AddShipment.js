import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addShipment } from "../../actions/authActions";
import classnames from "classnames";
class AddShipment extends Component {
  constructor() {
    super();
    this.state = {
      destination: "",
      filledSpace: "",
      availableSpace: "",
      dispatchDate: "",
      errors: {},
    };
  }
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const shipmentData = {
      destination: this.state.destination,
      filledSpace: this.state.filledSpace,
      availableSpace: this.state.availableSpace,
      dispatchDate: this.state.dispatchDate,
    };
    this.props.addShipment(shipmentData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2 flex flex-col">
            <div className="col s12">
              <h4>
                <b>Add Shipment</b> below
              </h4>
            </div>
            <div className="self-center w-3/4">
              <form noValidate onSubmit={this.onSubmit}>
                {/* Destination field */}
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.destination}
                    error={errors.destination}
                    id="destination"
                    type="text"
                    className={classnames("", {
                      invalid: errors.destination,
                    })}
                  />
                  <label htmlFor="destination">Destination</label>
                  <span className="red-text">{errors.destination}</span>
                </div>
                {/* Filled Space field */}
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.filledSpace}
                    error={errors.filledSpace}
                    id="filledSpace"
                    type="text"
                    className={classnames("", {
                      invalid:
                        errors.filledSpace || errors.filledSpaceincorrect,
                    })}
                  />
                  <label htmlFor="password">Filled Space</label>
                  <span className="red-text">
                    {errors.filledSpace}
                    {errors.filledSpaceincorrect}
                  </span>
                </div>
                {/* Available Space field */}
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.availableSpace}
                    error={errors.availableSpace}
                    id="availableSpace"
                    type="text"
                    className={classnames("", {
                      invalid:
                        errors.availableSpace || errors.availableSpaceincorrect,
                    })}
                  />
                  <label htmlFor="password">Available Space</label>
                  <span className="red-text">
                    {errors.availableSpace}
                    {errors.availableSpaceincorrect}
                  </span>
                </div>
                {/* Dispatch Date field */}
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.dispatchDate}
                    error={errors.dispatchDate}
                    id="dispatchDate"
                    type="date"
                    className={classnames("", {
                      invalid:
                        errors.dispatchDate || errors.dispatchDateincorrect,
                    })}
                  />
                  <label htmlFor="password">Dispatch Date</label>
                  <span className="red-text">
                    {errors.dispatchDate}
                    {errors.dispatchDateincorrect}
                  </span>
                </div>

                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hover:shadow-lg hover:bg-green-700 bg-green-600 accent-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddShipment.propTypes = {
  addShipment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { addShipment })(AddShipment);
