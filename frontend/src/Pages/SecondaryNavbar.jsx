import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import SecNavDrawer from "./InvoiceComponents/SecNavDrawer";
const SecondaryNavbar = () => {

  let name = JSON.parse(localStorage.getItem("name"))
  
  return (
    <>
      <Box
      zIndex='10'
        fontWeight="600"
        display={"flex"}
        justifyContent="space-around"
        alignItems={"center"}
        position={"fixed"}
        top='0'
        w="100%"
        h="3rem"
        bg="#ff6600"
      >
        <Box ml="-2rem">
          <SecNavDrawer />
        </Box>
        <Box
          ml="-10%"
          display={{
            sm: "none",
            base: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          }}
          gap="1rem"
          color="white"
          fontWeight="600"
        >
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/time">Time</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/expenses">Expenses</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/projects">Projects</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/team">Team</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/report">Reports</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/invoices">Invoices</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/estimates">Estimates</NavLink>
          </Flex>
          <Flex
            alignItems={"center"}
            h="3rem"
            px="6px"
            _hover={{ bg: "#ffdd99" }}
            _selected={{ bg: "#ffdd99" }}
          >
            <NavLink to="/manages">Manage</NavLink>
          </Flex>
        </Box>
        <Box>
          <Text display={"flex"} gap="10px" alignItems="center" color="white">
            <Avatar size="sm" src="https://bit.ly/broken-link" />
            {name}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default SecondaryNavbar;
