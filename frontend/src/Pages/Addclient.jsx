import React from "react";
import { Box, Button, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SecondaryNavbar from "./SecondaryNavbar";
import SecondaryFooter from "./SecondaryFooter";
export const AddClient = () => {
  const navigate = useNavigate();
//   const token = useSelector((state) => state.authReducer.token);
const token = useSelector((store) => store.AuthReducer.token);
  
    const [payload, setPayload] = useState({client_name:"",address:""})
    const handlePayload = (e) => {

        let { name, value } = e.target;
        setPayload({ ...payload, [name]: value })
        console.log(payload,'payload')
    }

  const addclient = async () => {
 
    await fetch("https://mysterious-ridge-11647.herokuapp.com/client", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/manages");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const canceladd = () => {
    navigate("/client");
  };
  return (
    <Box>
          <Box mb='3.5rem'>
        <SecondaryNavbar />
      </Box>
    <Box style={{ width: "80%", margin: "auto", marginTop: "3.5rem" }}>
        <Box>
          
          <Heading>New Client</Heading>
          
        <Text>
          Once you’ve added a client, you can add projects and contacts.
          </Text>
          
      </Box>
      <Box>
        <hr />
      </Box>
        <Box display="flex" justifyContent="space-between" marginTop="50px">
          

        <Text padding="5px" color="black" fontWeight="600">
          Client Name
        </Text>
        <Input
          width="70%"
          value={payload.client_name} name="client_name"
          onChange={handlePayload}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="20px">


        <Text padding="5px" color="black"
          fontWeight="600" 
          >
          Address
        </Text>
        <Textarea
           onChange={handlePayload}
          width="70%"
          name='address'
          
          value={payload.address}
         
        ></Textarea>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="20px">
        <Text padding="5px" color="black" fontWeight="600">
          Preferred currency
        </Text>
        <Select
          width="70%"
          placeholder=" Choose Currency"
          
        >
          <option value={"Euro - EUR"}>Euro - EUR</option>
          <option value={"United States Dollor - USD"}>
            United States Dollor - USD
          </option>
          <option value={"British Pount - GBP"}>British Pount - GBP</option>


          <option value={"Indian Rupee - INR"}>Indian Rupee - INR</option>
          <option value={"Australian Dolar - AUD"}>
            Australian Dolar - AUD
          </option>
         
        </Select>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="20px" gap="10px">
        <Button
          style={{
            background: "green",
            color: "white",
            padding: "8px",
            fontWeight: "bold",


            borderRadius: "10px",
          }}
          onClick={addclient}
        >
          Save client
        </Button>
        <Button
          style={{
            border: "1px solid",
            padding: "8px",
            fontWeight: "bold",

            borderRadius: "10px",
          }}
          onClick={canceladd}
        >
          Cancel
        </Button>
      </Box>
      </Box>
      <Box>
        <SecondaryFooter />
      </Box>
      </Box>
  );
};
