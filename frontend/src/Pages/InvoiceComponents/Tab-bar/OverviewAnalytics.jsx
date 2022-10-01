import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const OverviewAnalytics = () => {
  return (
    <Box mt='1.5rem' w="100%" h="auto" border={"1px solid red"}>
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
            <Text  mt='2rem' fontWeight={'500'}>Total open</Text>
            <Text fontWeight='700' fontSize='24px'>$2868.00</Text>
          </Box>
          {/* 2nd boxes start here */}
          <Box w="auto" h="140px" border="1px solid rgba(29,30,28,.25)">
            <Text mt='2rem' mx='10px' fontWeight={'500'}>
              Total paid amount <QuestionOutlineIcon />
            </Text>
            <Text fontWeight='700' fontSize='24px'>$0.00</Text>
          </Box>
        </Box>
        <Box w="auto" h="100%" border="1px solid rgba(29,30,28,.25)">
          Graph
        </Box>
      </Flex>
      {/* All invoice table */}
      <Box></Box>
    </Box>
  );
};

export default OverviewAnalytics;
