
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as IconHarvest } from "../assets/IconHarvest.svg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Authreducer/actions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    dispatch(login(payload)).then((r) => {
      console.log(r,'logindata');
      if (r.type === "LOGIN_SUCCESS") {
        setEmail("");
        setPassword("");
        
        navigate("/manages")
      }
    }); 
  };


  useEffect(() => {
    document.title = "Sign in";
  }, []);


  return (
    <Container maxW="550px">
      <Box align="center" mt="15px" color="#1d1e1c">
        <IconHarvest />
        <Heading mt="70px" fontSize="30px" fontWeight="700" lineHeight="36px">
          Sign in to Harvest ID
        </Heading>
      </Box>

      {/* google authentication */}
      <Box
        border="1px solid rgb(255, 162, 108);"
        bgColor="rgb(255, 248, 241)"
        p="30px"
        mt="25px"
      >
        <Box m="5px 0">
          <Button
            textAlign="left"
            fontSize="15px"
            bgColor="white"
            borderRadius="9px"
            fontWeight="500"
            color="#464646"
            border="1px solid #c2c2c2"
            _hover={{ border: "1px" }}
            maxH="40px"
            w="100%"
          >
            <Link to="">
              <Flex alignItems="center">
                <Icon as={FcGoogle} fontSize="23px" />
                <Text
                  fontSize="17px"
                  p="0px 7.5vw 0px 6.0vw"
                  _hover={{ textDecoration: "underline" }}
                >
                  Sign in with Google
                </Text>
              </Flex>
            </Link>
          </Button>
        </Box>
        <Box
          lineHeight="0"
          m="30px auto"
          textAlign="center"
          borderBottom="1px solid rgba(29,30,28,0.4)"
          color="#4a4b49"
          fontSize="15px"
          w="99%"
        >
          <Text p="0px 6px" display="inline" background="#fff8f1">
            or with your email below
          </Text>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <Input
              p="8px"
              rounded="5px"
              outline="1px solid #73737390"
              isRequired
              color="#333332"
              fontSize="17px"
              w="100%"
              size="md"
              bgColor="white"
              focusBorderColor="black"
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              p="8px"
              mt="10px"
              rounded="5px"
              outline="1px solid #73737390"
              isRequired
              color="#333332"
              fontSize="17px"
              w="100%"
              size="md"
              bgColor="white"
              focusBorderColor="black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              mt="18px"
              w="100%"
              type="submit"
              color="#fff"
              _hover={{ bgColor: "#11742a" }}
              _active={{ bgColor: "#07561b" }}
              bgColor="#188433"
              rounded="10px"
              fontWeight="700"
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Box>
      <Flex
        color="#1d1e1c9c"
        mt="20px"
        justify="center"
        columnGap="20px"
        flexWrap="wrap"
      >
        <Text _hover={{ textDecoration: "underline" }} cursor="pointer">
          Forgot password?
        </Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="pointer">
          Terms of service
        </Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="pointer">
          Privacy policy
        </Text>
      </Flex>
    </Container>
  );

};
