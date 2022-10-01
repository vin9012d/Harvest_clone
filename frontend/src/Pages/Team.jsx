import { Box, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import MultiColorProgressbar from 'multi-color-progressbar-with-indicator'
import React from 'react'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import Mininavbar from '../Components/Mininavbar'
import { Daytypes } from '../Components/Vinodmodal/Daytypes'
import { Reporttable } from '../Components/Vinodmodal/Reporttable'

export const Team = () => {
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


  var bars = [
       
    {width: (35*100)/50, color: '#48bb78'},
    {width: 100-((35*100)/50), color: '#c6f6d5'}
  
  ]


  return (

    <Box>
        <Flex alignItems='center'>   <Flex alignItems='center' > <Icon as={BsArrowLeftSquare} w={8} h={8} />
        <Icon as={BsArrowRightSquare} w={8} h={8} />
      </Flex> <Text ml='3' fontSize="3xl" fontWeight='bolder'>This Week: 26 Sep – 02 Oct 2022</Text><Spacer />  <Daytypes w="140px" />    </Flex>
      
      <Flex justifyContent='space-between'>
        <Box>
          <Text>Total hours</Text>
          <Text fontWeight="bold" fontSize='2xl'>115.25</Text>
          </Box>
        <Box>
          <Text>Total capacity</Text>
          <Text fontWeight="bold" fontSize='2xl'>120</Text>
        </Box>
        
        <Box>
        <Flex alignItems="center" gap='2'> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.400" ></Box>
                        <Text>Billable</Text>
                    </Flex>
              <Flex gap='2'>  
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.100" ></Box>
                        <Text>Not Billable</Text>
                    </Flex>
        </Box>
        
        <Box>
          <Text fontWeight='bold' >99</Text>
          <Text fontWeight='bold'>99</Text>
          
        </Box>
        <Box w="18%" mr='10px'>
        <MultiColorProgressbar value={35} height={30} bars={bars} minVal={0} maxVal={50} />
          
        </Box>


      </Flex>

      <Box mb='50px'>
        <Flex gap='3'>
          <Text>Clients</Text>
          <Text>Projects</Text>
          <Text>Tasks</Text>
          <Text>Team</Text>
        </Flex>
        <hr />
        <Mininavbar  />
      </Box >
      <Reporttable   data={data} />
   </Box>
  )
}
