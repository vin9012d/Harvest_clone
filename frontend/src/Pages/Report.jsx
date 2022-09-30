import React from 'react'
import {Box, CircularProgress, CircularProgressLabel, Flex, Text} from "@chakra-ui/react"
import { Daytypes } from '../Components/Vinodmodal/Daytypes'
import { Reporttable } from '../Components/Vinodmodal/Reporttable'
import { Totalhours } from '../Components/Vinodmodal/Totalhours'
import { Projectsbreakdown } from '../Components/Vinodmodal/Projectsbrekdown'
import { Taskbreakdown } from '../Components/Vinodmodal/Taskbreakdown'
import { Teamworktable } from '../Components/Vinodmodal/Teamwektable'
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

  const vinod = [
    
    {
      date: "21 sep",
      works: [{ title: "work of project", time: 1.01 },
        { title: "work of project", time: 1.01 },
        {title:"work of project", time:1.01}]
    },
    
    {
      date: "21 sep",
      works:[{title:"work of project", time:1.01}]
    },
    
    {
      date: "21 sep",
      works:[{title:"work of project", time:1.01}]
    },
    {
      date: "21 sep",
      works:[{}]
    }
  
  
  ]

  return (



    <Box>
      <Box >
        <Flex> <Text>This Week: 26 Sep – 02 Oct 2022</Text> <Daytypes w="140px"/>    </Flex>
        <Flex justifyContent='space-between'> 
          <Box>
            <Text>Total Hours</Text>
            <Text>1.08</Text>
          </Box>
          <Box>
            <Flex alignItems="center">           <Box>
              
              
              <CircularProgress size="100px" value={80} color='green.400'>
      <CircularProgressLabel>45.0%</CircularProgressLabel>
            </CircularProgress>
            
            </Box>
              <Box ml="3">
              <Flex alignItems="center"> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.400" ></Box>
                        <Text>Billable</Text>
                    </Flex>
              <Flex> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.100" ></Box>
                        <Text>Not Billable</Text>
                    </Flex>
              </Box>
              
            </Flex>
 
          <Text>38.89</Text>
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
      <Totalhours width="400px" />
      <Projectsbreakdown width="400px" />
      <Reporttable data={data} />
      {/* <Reporttable data={vinod} /> */}
      <Teamworktable data={vinod} />
      <Totalhours width="400px" />
      <Taskbreakdown width="400px"/>
    
    </Box>

  )
}
