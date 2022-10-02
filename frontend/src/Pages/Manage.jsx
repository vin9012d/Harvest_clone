import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import {
  Box,
  Select,
  Heading,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  border,
  Button,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useSelector } from "react-redux";
export const Manage = () => {
  const [client_data, setClient_data] = useState([]);
  // const token = useSelector((state) => state.authReducer.token);
  // const { id } = useParams();

  // console.log(id);

  const getClientsdata = async () => {
    await fetch("http://localhost:8080/client", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // token: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setClient_data(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClientsdata();
  }, []);

  return (
    <Box style={{ width: "50%", margin: "auto" }}>
      <Box margin="30px 0px">
        <Heading>Client</Heading>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={["column", "row"]} spacing="11px">
          <Box
           
            color="white"
            textAlign="center"
            padding="7.5px"
            borderRadius="10px"
            w="150px"
            h="40px"
            bg="green"
          >
            <Link to="/addclient">+ New Client</Link>
          </Box>
          <Box
          
            border="1px solid"
            textAlign="center"
            padding="7.5px"
            borderRadius="10px"
            w="150px"
            h="40px"
            color="black"
          >
            + Add contacts
          </Box>
          <Box
            w="150px"
            h="40px"
            textAlign="center"
            border="1px solid black"
            borderRadius="10px"
          >
            <Select placeholder="Import/Export" border="none">
              <option value="Import clients from CSV">
                Import clients from CSV
              </option>
              <option value="">Import contacts from CSV</option>
              <option value="">___________</option>
              <option value="">Export client to Excel</option>
              <option value="">Export contacts to Excel</option>
              <option value="">Export contacts to CSV</option>
              <option value="">Export client to CSV</option>
             
            </Select>
          </Box>
        </Stack>
        <Stack direction={["column", "row"]} spacing="24px">
          <Box
           
            border="1px solid"
            textAlign="center"
            padding="7.5px"
            borderRadius="11px"
            w="200px"
            h="42px"
            color="black"
          >
            View Archieved clients
            <ArrowForwardIcon marginLeft="5px" />

          </Box>

        </Stack>

      </Box>
      <Box margin="25px 0px" width="55%">

        <InputGroup border="none">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="black" />}
          />
          <Input type="text" placeholder="Filter by client or contact" />

        </InputGroup>
      </Box>
      <Box>
        {client_data.map((item,ind) => (
          <Box
          marginTop="20px"
          bg="#efefef"
          key={ind}
            border="1px solid grey"
            borderLeft="none"
            borderRight="none"
            height="50px"
            display="flex"
            justifyContent="space-between"
           
          >
            <Box display="flex" gap="30px" padding="10px">
              <Link to={`/edit/${item._id}`}>
                <button
                  style={{
                    borderRadius: "5px",
                    background: "white",
                    border: "1px solid grey",
                    padding: "0px 7px",
                   
                  }}
                >
                  Edit
                </button>
              </Link>
              <Text fontWeight="bold" fontSize="17px">
                {item.client_name}
              </Text>
            </Box>
            <Box
                 textAlign="center"
                 margin="10px"
                 borderRadius="10px"
                 background="white"
              color="black"
              border="1px solid"
              w="130px"
              h="30px"
           
            >
              + Add contacts
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


