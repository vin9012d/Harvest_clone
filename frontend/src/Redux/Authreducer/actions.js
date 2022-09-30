import axios from "axios";
import * as types from "./actionTypes";

export const signup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("http://localhost:8080/auth/signup", payload)
    .then((r) => {
      dispatch({ type: types.SIGNUP_REQUEST, payload: r.data });
      console.log(r.data);
      return { type: types.SIGNUP_SUCCESS, status: r.status };
    })
    .catch((e) => {
      dispatch({ type: types.SIGNUP_FALIURE });
      return { type: types.SIGNUP_FALIURE, status: e.status };
    });
};

export const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("http://localhost:8080/auth/login", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return { type: types.LOGIN_SUCCESS, status: r.status };
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FALIURE });
      return { type: types.LOGIN_FALIURE, status: e.status };
    });
};
