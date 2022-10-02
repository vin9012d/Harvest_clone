import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { HStack } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import {Link as LinkasRouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

export const TimeTracking = () => {
  const navigate = useNavigate()
  return (
    <Box padding={"60px 0px 60px 0px"} border={"1px solid white"} >
    <HStack textAlign={"left"} width={"90%"} margin="auto">
      <Box width={"50%"}  >
        <VStack textAlign={"left"}>
          <Text width={"90%"} fontSize={"40px"}>
            Start tracking time today
          </Text>
          <Text  width={"90%"} fontWeight={"300"} fontSize={"25px"}>
            Join 70,000+ companies spending their time wisely with Harvest.
          </Text>
          <HStack
            padding={"30px"}
            justifyContent={"space-between"}
            gap="40px"
            marginLeft="30px"
          >
            <LinkasRouterLink to="">
              <Button
                fontSize={"lg"}
                height={"45px"}
                width="200px"
                borderRadius="10px"
                bg={"black"}
                colorScheme={"red"}
                color="white"
                onClick={() => navigate("/signup")}

              >
                Try Harvest free
              </Button>
            </LinkasRouterLink>
            <Text>Free 30-day trial. No credit card required.</Text>
          </HStack>
        </VStack>
      </Box>
      <Box width={"50%"} >
        <Image  margin={'auto'} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" />
      </Box>
    </HStack>
    
  </Box>
  )
}
