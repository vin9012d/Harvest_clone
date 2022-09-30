import * as types from "./actionTypes";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
