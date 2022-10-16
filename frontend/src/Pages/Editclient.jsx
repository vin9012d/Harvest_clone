import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SecondaryFooter from "./SecondaryFooter";
import SecondaryNavbar from "./SecondaryNavbar";
export const EditClient = () => {
  const navigate = useNavigate();
  // const token = useSelector((state) => state.authReducer.token);
  const token = useSelector((store) => store.AuthReducer.token);
  const [client_name, setClient] = useState("");
  const [address, setAddress] = useState("");
 

  const { edit_id } = useParams();

 

  const handleUpdate = async () => {
    const payload = {
      client_name,
      address
    };
    await fetch(`https://mysterious-ridge-11647.herokuapp.com/client/edit/${edit_id}`, {
      method: "PATCH",
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
    navigate("/manage/client");
  };

  const deleteClient = async () => {
    await fetch(`https://mysterious-ridge-11647.herokuapp.com/client/delete/${edit_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
      },
    })
      .then((res) => navigate("/manages"))
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <Box>
            <Box mb='3.5rem'>
        <SecondaryNavbar />
      </Box>
    <Box style={{ width: "80%", margin: "auto", marginTop: "3.5rem" }}>
      <Box>
        <Heading>Edit Client</Heading>
      </Box>
      <Box>
        <hr />
      </Box>
      <Flex justifyContent="space-between" marginTop="50px">
        <Text padding="5px">Client Name</Text>
        <Input
          width="70%"
          value={client_name}
          onChange={(e) => setClient(e.target.value)}
        />
      </Flex>
      <Flex justifyContent="space-between" marginTop="20px">
        <Text padding="5px">Address</Text>
        <Textarea
          width="70%"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></Textarea>
      </Flex>
      <Flex justifyContent="space-between" marginTop="20px">
        <Text padding="5px">Preferred currency</Text>
        <Select
          width="70%"
          placeholder=" Choose Currency"
          
        >
          <option value={"Euro - EUR"}>Euro - EUR</option>
          <option value={"United States Dollor - USD"}>
            United States Dollor - USD
          </option>
         
          <option value={"Indian Rupee - INR"}>Indian Rupee - INR</option>
          <option value={"Australian Dolar - AUD"}>
            Australian Dolar - AUD
          </option>
         
        </Select>
      </Flex>
      <Flex justifyContent="center" marginTop="20px" gap="20px">
        <Button
          style={{
            background: "green",
            color: "white",
            padding: "8px 12px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={handleUpdate}
        >
          Save client
        </Button>
        <Button
          style={{
            background: "red",
            color: "white",
            padding: "8px 12px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={deleteClient}
        >
          Remove this Client
        </Button>
        <Button
          style={{
            border: "1px solid",
            padding: "8px 12px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={canceladd}
        >
          Cancel
        </Button>
      </Flex>
      </Box>
      <Box>
        <SecondaryFooter />
      </Box>
      </Box>
  );
};
