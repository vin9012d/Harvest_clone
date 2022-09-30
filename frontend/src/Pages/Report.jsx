import React from 'react'
import {Box, CircularProgress, CircularProgressLabel, Flex, Text} from "@chakra-ui/react"
import { Daytypes } from '../Components/Vinodmodal/Daytypes'
import { Reporttable } from '../Components/Vinodmodal/Reporttable'
export const Report = () => {

  const data = [
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:26
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    }
  ]

  return (



    <Box>
      <Box >
        <Flex> <Text>This Week: 26 Sep – 02 Oct 2022</Text> <Daytypes w="140px"/>    </Flex>
        <Flex>
          <Box>
          <Box><CircularProgress size="100px"   value={80} color='green.400'>
      <CircularProgressLabel>45.0%</CircularProgressLabel>
     </CircularProgress></Box>
          <Text>38.89</Text>
          </Box>
          <Box>
            <Text>Data in graph form</Text>
          </Box>
          <Box>
            <Text>38.89</Text>
            <Text>0.00</Text>
          </Box>
          <Box>
            <Text>Billable amount</Text>
            <Text>$612.53</Text>
          </Box>
          <Box>
            <Text>Uninvoiced amount</Text>
            <Text>$509.53</Text>
          </Box>
        </Flex>
      </Box>
      <Reporttable data={data} />
    </Box>

  )
}
