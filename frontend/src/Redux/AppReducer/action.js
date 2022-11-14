import { GET_CLIENT_ERROR, GET_CLIENT_REQUEST, GET_CLIENT_SUCCESS } from "./actionTypes"

const get_client_request = () => {
    return {type:GET_CLIENT_REQUEST}
}

const get_client_success = (payload) => {
    return {type:GET_CLIENT_SUCCESS,payload:payload}
}

const get_client_error = () => {
    return {type:GET_CLIENT_ERROR}
}
const token=JSON.parse(localStorage.getItem("token"))


export const getClientsData = () => async (dispatch) => {
    console.log("step1 get client")
   
    dispatch(get_client_request())
    console.log("step2 client request")
   fetch("https://mysterious-ridge-11647.herokuapp.com/client", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`,
      },
    })
       .then((res) => {
           console.log("vinod M chaudhari",res)
           return res.json()
       })
      .then((res) => {
          console.log(res);
          console.log("client success")
return dispatch(get_client_success(res))
        
      })
      .catch((err) => {
        console.log(err, 'err');
        
      });
  };