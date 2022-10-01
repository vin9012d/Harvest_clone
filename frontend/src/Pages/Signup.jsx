
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/Authreducer/actions";

const initState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initState);
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { firstName, lastName, company, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData)).then((r) => {
      if (r.type === "SIGNUP_SUCCESS" && r.status === true) {
        return navigate("/login");
      }
      alert("User Already Exist! Please login");
    });

    setFormData({ ...initState });
  };

  useEffect(() => {
    document.title = "Sign up for Harvest";
  }, []);

  return (

    <Box
      className={styles.signupContainer}
      h={isSmallerThan768 ? "100%" : "100vh"}
    >

      <Container color="#1d1e1c" maxW="550px">
        <Box p="12px 0px">
          <Box>
            <Link to="/">

              <IconHarvest />

            </Link>
          </Box>
          <Box p="45px 0px 25px">
            <Heading as="h2" size="lg" color="#323432" fontWeight="650">
              Start your free 30-day trial.
            </Heading>
            <Text
              color="#4a4b49"
              fontSize="17px"
              fontWeight="500"
              letterSpacing="1"
              pt="0px"
            >
              Fully functional. No credit card required.
            </Text>
          </Box>
          {/* google authentication */}
          <Box m="5px 0">
            <Button
              textAlign="left"
              fontSize="15px"
              bgColor="white"
              borderRadius="7px"
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
                    p="0px 8.7vw 0px 7.6vw"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sign up with Google
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
          <Box fontWeight="700" color="#393838f6">
            <form onSubmit={handleSubmit}>
              <Flex
                direction={isSmallerThan768 ? "column" : "row"}
                justifyContent="space-between"
                m="10px 0"
                alignItems={isSmallerThan768 ? "left" : "center"}
              >
                <label htmlFor="">First name</label>
                <Input
                  mt={isSmallerThan768 ? "5px" : ""}
                  rounded="5px"
                  outline="1px solid #73737390"
                  isRequired
                  color="#333332"
                  fontSize="17px"
                  fontWeight="500"
                  w={isSmallerThan768 ? "100%" : "330px"}
                  size="md"
                  bgColor="white"
                  focusBorderColor="black"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </Flex>
              <Flex
                direction={isSmallerThan768 ? "column" : "row"}
                justifyContent="space-between"
                m="10px 0"
                alignItems={isSmallerThan768 ? "left" : "center"}
              >
                <label htmlFor="">Last name</label>
                <Input
                  mt={isSmallerThan768 ? "5px" : ""}
                  rounded="5px"
                  outline="1px solid #73737390"
                  isRequired
                  color="#333332"
                  fontSize="17px"
                  fontWeight="500"
                  _placeholder={{ color: "black" }}
                  w={isSmallerThan768 ? "100%" : "330px"}
                  size="md"
                  bgColor="white"
                  focusBorderColor="black"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </Flex>
              <Flex
                direction={isSmallerThan768 ? "column" : "row"}
                justifyContent="space-between"
                m="10px 0"
                alignItems={isSmallerThan768 ? "left" : "center"}
              >
                <label htmlFor="">Company name</label>
                <Input
                  mt={isSmallerThan768 ? "5px" : ""}
                  rounded="5px"
                  outline="1px solid #73737390"
                  isRequired
                  color="#333332"
                  fontSize="17px"
                  fontWeight="500"
                  _placeholder={{ color: "black" }}
                  w={isSmallerThan768 ? "100%" : "330px"}
                  size="md"
                  bgColor="white"
                  focusBorderColor="black"
                  type="text"
                  name="company"
                  value={company}
                  onChange={handleChange}
                />
              </Flex>
              <Flex
                direction={isSmallerThan768 ? "column" : "row"}
                justifyContent="space-between"
                m="10px 0"
                alignItems={isSmallerThan768 ? "left" : "center"}
              >
                <label htmlFor="">Work email</label>
                <Input
                  mt={isSmallerThan768 ? "5px" : ""}
                  rounded="5px"
                  outline="1px solid #73737390"
                  isRequired
                  color="#333332"
                  fontSize="17px"
                  fontWeight="500"
                  _placeholder={{ color: "black" }}
                  w={isSmallerThan768 ? "100%" : "330px"}
                  size="md"
                  bgColor="white"
                  focusBorderColor="black"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Flex>
              <Flex
                direction={isSmallerThan768 ? "column" : "row"}
                justifyContent="space-between"
                m="10px 0"
                alignItems={isSmallerThan768 ? "left" : "center"}
              >
                <label htmlFor="">Password</label>
                <Input
                  mt={isSmallerThan768 ? "5px" : ""}
                  rounded="5px"
                  outline="1px solid #73737390"
                  isRequired
                  color="#333332"
                  fontSize="17px"
                  fontWeight="500"
                  _placeholder={{ color: "black" }}
                  w={isSmallerThan768 ? "100%" : "330px"}
                  size="md"
                  bgColor="white"
                  focusBorderColor="black"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Flex>
              <Button
                mt="18px"
                type="submit"
                w="100%"
                color="#fff"
                _hover={{ bgColor: "#11742a" }}
                _active={{ bgColor: "#07561b" }}
                bgColor="#188433"
                rounded="10px"
                fontWeight="700"
              >
                Create my account
              </Button>
            </form>
          </Box>
          <Box color="#737472" mt="20px">
            <Link to="/login">
              <Text _hover={{ textDecoration: "underline" }}>
                Already a customer?{" "}
                <span style={{ textDecoration: "underline", color: "#4a4b49" }}>
                  Sign in
                </span>
              </Text>
            </Link>
            <Box fontSize="13px" mt="18px">
              <Box>
                By creating an account, you agree to the Harvest{" "}
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {" "}
                  Terms of service
                </span>{" "}
                and{" "}
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {" "}
                  Privacy policy.
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
