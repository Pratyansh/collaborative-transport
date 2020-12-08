import React from "react";

const Form = (props) => {
  return (
    <div
      id="form-component"
      className="fixed flex w-full h-full items-center justify-center"
    >
      <div className="absolute inset-0 bg-opacity-50 bg-gray-400" />
      <div
        className="fixed bg-white z-40 rounded-lg overflow-hidden p-4"
        style={{ width: "400px" }}
      >
        <form
          onSubmit={() => {
            console.log("hello");
            props.onClose();
          }}
          onReset={() => {
            props.onClose();
          }}
        >
          <div className="input-field col s12">
            <input
              error={"Required"}
              id="destination"
              type="text"
            />
            <label htmlFor="name">Destination</label>
          </div>
          <div className="input-field col s12">
            <input
              error={"Required"}
              id="vehicle"
              type="text"
            />
            <label htmlFor="email">Vehicle</label>
          </div>
          <div className="input-field col s12">
            <input
              error={"Required"}
              id="emptySpace"
              type="text"
            />
            <label htmlFor="password">Available Space (12x20x20)</label>
          </div>
          <div className="input-field col s12">
            <input
              error={"Required"}
              id="filledSpace"
              type="text"
            />
            <label htmlFor="password2">Filled Space (12x20x20)</label>
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "100px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hover:shadow-lg hover:bg-green-700 bg-green-600 text-sm accent-3"
            >
              Add
            </button>
            <button
              style={{
                borderRadius: "3px",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
              type="reset"
              className="btn btn-large ml-2 waves-effect waves-light hover:shadow-lg hover:bg-gray-400 bg-gray-200 text-gray-800 text-sm accent-3"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
