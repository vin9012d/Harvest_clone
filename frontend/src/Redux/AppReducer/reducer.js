import { GET_CLIENT_ERROR, GET_CLIENT_REQUEST, GET_CLIENT_SUCCESS } from "./actionTypes";


const initialState = {
  data: [],
  isLoading: false,
  isError:false
};

export const reducer = (state = initialState, {type,payload}) => {
 

  switch (type) {
    case GET_CLIENT_REQUEST: {
      console.log(state.isLoading,'inside reducer')
      return {...state, isLoading:true}
    }
    case GET_CLIENT_SUCCESS: {
      return {...state, isLoading:false, data:payload}
      }
    case GET_CLIENT_ERROR: {
      return {...state,isLoading:false,isError:true}
}

    default:
      return state;
  }
};
