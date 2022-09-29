import { getLocalData, saveLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.SIGNUP_FALIURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      saveLocalData("token", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    }
    case types.LOGIN_FALIURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
