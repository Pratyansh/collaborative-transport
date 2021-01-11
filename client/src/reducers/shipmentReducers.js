import { SET_ACTIVE_SHIPMENTS } from "../actions/types";

const initialState = {
  shipments: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_SHIPMENTS:
      return { ...state, shipments: action.payload };
    default:
      return state;
  }
}
