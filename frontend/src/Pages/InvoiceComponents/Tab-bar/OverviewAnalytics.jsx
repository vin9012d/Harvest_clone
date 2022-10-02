import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import InvoiceTableOpen from "./InvoiceTableOpen";
import OverviewGraph from "../GraphAnalytics/OverviewGraph";

const OverviewAnalytics = () => {
  return (
    <Box mt="1.5rem" w="100%" h="auto">
      <Flex
        flexDirection={{ base: "row", lg: "row", md: "column", sm: "column" }}
        flexWrap={"wrap"}
        gap="20px"
      >
        <Box textAlign={"center"}>
          <Box
            mb="10px"
            w="auto"
            h="140px"
            border="1px solid rgba(29,30,28,.25)"
          >
            <Text mt="2rem" fontWeight={"500"}>
              Total open
            </Text>
            <Text fontWeight="700" fontSize="24px">
              $2868.00
            </Text>
          </Box>
          {/* 2nd boxes start here */}
          <Box w="auto" h="140px" border="1px solid rgba(29,30,28,.25)">
            <Text mt="2rem" mx="10px" fontWeight={"500"}>
              Total paid amount <QuestionOutlineIcon />
            </Text>
            <Text fontWeight="700" fontSize="24px">
              $0.00
            </Text>
          </Box>
        </Box>
        {/* Analysis graph show here */}
        <Box w="auto" border="1px solid rgba(29,30,28,.25)">
          <OverviewGraph />
        </Box>
      </Flex>
      {/* All invoice table */}
      <Box mt='1.5rem'>
        <Tabs>
          <TabList gap='1rem'>
            <Tab
             fontSize="14px"
             _selected={{
               fontWeight: "600",
               borderBottom: "2px solid #ff8000",
             }}
             _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >Open</Tab>

            <Tab
             fontSize="14px"
             _selected={{
               fontWeight: "600",
               borderBottom: "2px solid #ff8000",
             }}
             _hover={{ borderBottom: "2px solid #ff8000", fontWeight: "500" }}
            >All invoices</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <InvoiceTableOpen/>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default OverviewAnalytics;
