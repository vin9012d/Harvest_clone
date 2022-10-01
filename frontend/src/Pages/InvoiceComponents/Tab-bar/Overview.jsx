import { React } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  SimpleGrid,
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, SmallAddIcon } from "@chakra-ui/icons";
import { useState } from "react";
const Overview = () => {
  const [toggle,setToggle]=useState(true)
  return (
    <Box>
      <Accordion >
        <AccordionItem>
          <h2>
            <AccordionButton
              my="1rem"
              color={"white"}
              w={"10rem"}
              h={"2.2rem"}
              bg="green"
              borderRadius={"7px"}
            >
              <SmallAddIcon mr="6px" />
              New Invoices
            </AccordionButton>
          </h2>
          <AccordionPanel bg={"orange.100"} border={"1px solid orangered"}>
            <SimpleGrid columns={{ xl: 4, lg: 3,md:2}} spacing={10} >
              <Box position={'relative'} left='-5rem' fontWeight={500} >Client</Box>
              <Box>
                {toggle ? (
                  <InputGroup w='100vh' h='12px'>
                    <Input bg={"white"} placeholder="Choose a client..." />
                    <InputRightElement children={<ChevronDownIcon />} />
                  </InputGroup>
                ) : (
                  <Input w='100vh' bg={"white"} placeholder="Enter your client's name" />
                )}
              </Box>
              <Box>or</Box>
              <Box>
                {toggle ? (
                  <Button bg={"white"} onClick={()=>setToggle(!toggle)}>
                    <SmallAddIcon />
                    New Client
                  </Button>
                ) : (
                  <Button bg={"white"} onClick={()=>setToggle(!toggle)}>Choose a client</Button>
                )}
              </Box>
            </SimpleGrid>
            <Box></Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Box>gfdgdgfdgs</Box>
    </Box>
  );
};

export default Overview;
