import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { useSelector } from "react-redux";
export const EditClient = () => {
  const navigate = useNavigate();
  // const token = useSelector((state) => state.authReducer.token);
  const [client_name, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurr] = useState("");

  const { edit_id } = useParams();

 

  const handleUpdate = async () => {
    const payload = {
      client_name,
      address,
      currency,
    };
    await fetch(`http://localhost:8080/client/edit/${edit_id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        // token: `bearer ${token}`,
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
    await fetch(`http://localhost:8080/client/delete/${edit_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // token: `bearer ${token}`,
      },
    })
      .then((res) => navigate("/manages"))
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <Box style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
      <Box>
        <Heading>Edit Client</Heading>
      </Box>
      <Box>
        <hr />
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="50px">
        <Text padding="5px">Client Name</Text>
        <Input
          width="70%"
          value={client_name}
          onChange={(e) => setClient(e.target.value)}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="20px">
        <Text padding="5px">Address</Text>
        <Textarea
          width="70%"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></Textarea>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="20px">
        <Text padding="5px">Preferred currency</Text>
        <Select
          width="70%"
          placeholder=" Choose Currency"
          onChange={(e) => setCurr(e.target.value)}
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
          <option value={"Canedian Dollar -CAD"}>Canedian Dollar -CAD</option>
        </Select>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="20px" gap="20px">
        <button
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
        </button>
        <button
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
        </button>
        <button
          style={{
            border: "1px solid",
            padding: "8px 12px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={canceladd}
        >
          Cancel
        </button>
      </Box>
    </Box>
  );
};
