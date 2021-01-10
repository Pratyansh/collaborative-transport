import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import shipmentReducer from "./shipmentReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  shipments: shipmentReducer
});