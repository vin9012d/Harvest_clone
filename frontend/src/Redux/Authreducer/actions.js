import axios from "axios";
import * as types from "./actionTypes";

export const signup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("https://mysterious-ridge-11647.herokuapp.com/auth/signup", payload)
    .then((r) => {
      dispatch({ type: types.SIGNUP_REQUEST, payload: r.data });
      console.log(r.data);
      return { type: types.SIGNUP_SUCCESS, status: r.data.status };
    })
    .catch((e) => {
      dispatch({ type: types.SIGNUP_FALIURE });
      return { type: types.SIGNUP_FALIURE, status: false };
    });
};

export const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://mysterious-ridge-11647.herokuapp.com/auth/login", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });

      console.log(r.data);
      return { type: types.LOGIN_SUCCESS, token: r.data?.token };
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FALIURE });
      return { type: types.LOGIN_FALIURE, status: false, error: e.message };

    });
};
