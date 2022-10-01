import { React } from "react";
import { Box, Img, Text } from "@chakra-ui/react";

const Overview = () => {
  return (
    <Box>
      <Box m="auto" my="1.5rem" bg={"gray.200"}>
        <Img
          m="auto"
          pt="2rem"
          src="https://cache.harvestapp.com/static/illustrations/invoices_onboard-7269B096.png"
        />
        <Box w="48%" m="auto" my="2rem" pb="3rem">
          <Text
            textAlign={"center"}
            fontWeight="500"
            color="gray.600"
            fontSize={"17px"}
          >
            Create customized (and handsome!) invoices in under a minute. With
            online payment, you’ll get paid twice as fast.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
