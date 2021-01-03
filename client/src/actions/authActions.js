import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { USER_LOADING, SET_CURRENT_USER, GET_ERRORS } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
    .then(res => {
        history.push("/login");
    })
    .catch (err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    });
};

//Login User - token required

export const loginUser = (userData) => dispatch => {
    axios.post("/api/users/login", userData)
    .then(res=> {
        const { token } = res.data;
        localStorage.setItem("jwtToken",token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

//Log out user

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

//Set currently logged in user

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

//Add Shipment - token required

export const addShipment = (shipmentData, history) => dispatch => {
    axios.post("/api/shipment/add", shipmentData)
    .then(res=> {
        history.push("/dashboard");
    })
    .catch(err => {
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}