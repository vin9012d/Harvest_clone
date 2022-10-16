import { Box, Button, Text, Flex} from "@chakra-ui/react";
import React from "react";

const SecondaryFooter = () => {
  return (
    <Box m="auto" mb="2rem" w={{sm:"40%",lg:'36%',md:"30%", base:'42%'}}  mt="1rem">
      <Box display="flex" justifyContent={'center'} alignItems='center' flexWrap='wrap' gap="1rem">
        <Text display='inline-block'>
          You have 30 days left in your trial.
        </Text>
        <Button colorScheme="teal"  variant={'outline'}>Upgrade</Button>
      </Box>
      <Flex justifyContent={'center'} alignItems='center' mt='1rem' gap='1rem' flexWrap={'wrap'}>
        <Box>
          <Text fontWeight={'600'}>Harvest</Text>
          
          </Box>
        <Flex gap='1rem' fontWeight={"500"}>
            <a href="https://www.getharvest.com/terms-of-service">Terms</a>
            <a href="https://www.getharvest.com/privacy-policy">Privacy</a>
            <a href="https://www.harveststatus.com/">Status</a>
            <a href="getharvest.com/blog">Blog</a>
            <a href="https://support.getharvest.com/hc/en-us">Help</a>
        </Flex>     
      </Flex>
    </Box>
  );
};

export default SecondaryFooter;
