import {INTEGRATIONS_LOADING, INTEGRATIONS_ERROR, INTEGRATIONS_SUCCESS} from './integration.types';
import axios from 'axios';

export const getIngegrationAPI =  (address)=> async (dispatch)=> {  
  dispatch({type: INTEGRATIONS_LOADING});
  try {
    const res = await axios.get(`http://localhost:8080/${address}`);
    dispatch({type: INTEGRATIONS_SUCCESS, payload: res.data});
  } catch {
    dispatch({type: INTEGRATIONS_ERROR});
  }
};

export const queryIngegrationAPI =  ({text, address})=> async (dispatch)=> {  
  dispatch({type: INTEGRATIONS_LOADING});
  try {
    const res = await axios.get(`http://localhost:8080/${address}?q=${text}`);
    dispatch({type: INTEGRATIONS_SUCCESS, payload: res.data});
  } catch {
    dispatch({type: INTEGRATIONS_ERROR});
  }
};



