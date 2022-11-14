import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Box,
  Radio,
  RadioGroup,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, SmallAddIcon } from "@chakra-ui/icons";
import Overview from "./InvoiceComponents/Tab-bar/Overview";
import OverviewAnalytics from "./InvoiceComponents/Tab-bar/OverviewAnalytics";
import SecondaryFooter from "./SecondaryFooter";
import SecondaryNavbar from "./SecondaryNavbar";

export const Invoices = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
    {/* Navbar component, and give the lower box 3rem margin top due to height of the fixed navbar */}
      <SecondaryNavbar />
      <Box mt="3rem">
        {/* Tab bar start here */}
        <Tabs>
          <TabList gap="1rem">
            <Tab
              fontSize="14px"
              ml="5rem"
              _selected={{
                fontWeight: "600",
                borderBottom: "2px solid #ff8000",
              }}
              _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >
              Overview
            </Tab>
            <Tab
              fontSize="14px"
              _selected={{
                fontWeight: "600",
                borderBottom: "2px solid #ff8000",
              }}
              _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >
              Report
            </Tab>
            <Tab
              fontSize="14px"
              _selected={{
                fontWeight: "600",
                borderBottom: "2px solid #ff8000",
              }}
              _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >
              Recurring
            </Tab>
            <Tab
              fontSize="14px"
              _selected={{
                fontWeight: "600",
                borderBottom: "2px solid #ff8000",
              }}
              _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >
              Retainers
            </Tab>
            <Tab
              fontSize="14px"
              _selected={{
                fontWeight: "600",
                borderBottom: "2px solid #ff8000",
              }}
              _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >
              Configure
            </Tab>
          </TabList>
          <TabPanels w="100%">
            <TabPanel w="91%" m="auto">
              <Text align="left" fontSize="32px" fontWeight="600">
                Invoices
              </Text>
              {/* Invoices functionality start here */}
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      my="1rem"
                      color={"white"}
                      w={"10rem"}
                      h={"2.2rem"}
                      bg="green"
                      borderRadius={"7px"}
                      _hover={{ bg: "green.400" }}
                    >
                      <SmallAddIcon mr="6px" />
                      New Invoices
                    </AccordionButton>
                  </h2>
                  <AccordionPanel bg={"#fff2e6"} border={"1px solid #ff8000"}>
                    <Box display="flex" gap={"1rem"} flexWrap="wrap">
                      <Box display="flex" alignItems="center" fontWeight={500}>
                        Client
                      </Box>
                      <Box>
                        {toggle ? (
                          <InputGroup
                            w={{
                              base: "80vh",
                              md: "80vh",
                              sm: "30vh",
                              lg: "100vh",
                            }}
                            ml="2rem"
                          >
                            <Input
                              bg={"white"}
                              placeholder="Choose a client..."
                            />
                            <InputRightElement children={<ChevronDownIcon />} />
                          </InputGroup>
                        ) : (
                          <Input
                            w={{
                              base: "80vh",
                              md: "70vh",
                              sm: "30vh",
                              lg: "100vh",
                            }}
                            ml="2rem"
                            bg={"white"}
                            placeholder="Enter your client's name"
                          />
                        )}
                      </Box>
                      <Box display="flex" alignItems="center">
                        or
                      </Box>
                      <Box>
                        {toggle ? (
                          <Button
                            bg={"white"}
                            onClick={() => setToggle(!toggle)}
                          >
                            <SmallAddIcon />
                            New Client
                          </Button>
                        ) : (
                          <Button
                            bg={"white"}
                            onClick={() => setToggle(!toggle)}
                          >
                            Choose a client
                          </Button>
                        )}
                      </Box>
                    </Box>
                    {/* Invoice type flex start */}
                    <Box my="1rem" display="flex" gap={"2rem"} flexWrap="wrap">
                      <Box fontWeight={500}>Invoice type</Box>
                      <Box>
                        <RadioGroup fontWeight="500" defaultValue="1">
                          <Stack direction="column">
                            <Radio colorScheme="orange" value="1">
                              Create an invoice for tracked time and expenses
                            </Radio>
                            <Radio colorScheme="orange" value="2">
                              Create a blank invoice that can be issued on a
                              recurring schedule
                            </Radio>
                            <Radio colorScheme="orange" value="3">
                              Create a blank invoice
                            </Radio>
                          </Stack>
                        </RadioGroup>
                        <Flex mt="10px" gap={"5px"}>
                          <Button
                            _hover={{ bg: "green.500" }}
                            bg="green"
                            color="white"
                            h="2rem"
                          >
                            Next step
                          </Button>
                          <Button
                            border="1px solid gray"
                            bg="white"
                            h="2rem"
                          >
                            Cancel
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              {/* This is the overview and analytics sections */}
              {false ? <Overview /> : <OverviewAnalytics />}
            </TabPanel>
            {/* <TabPanel>
            <p>two!</p>
          </TabPanel> */}
          </TabPanels>
        </Tabs>
        {/* Footer page add here */}
        <Box>
          <SecondaryFooter />
        </Box>
      </Box>
    </>
  );
};
