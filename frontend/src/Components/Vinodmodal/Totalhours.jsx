import React from 'react'
import MultiColorProgressbar from 
"multi-color-progressbar-with-indicator";

import "multi-color-progressbar-with-indicator/dist/index.css";
import { Box, Flex, Text } from '@chakra-ui/react';
export const Totalhours = ({width}) => {
    var bars = [
       
        {width: (70*100)/140, color: 'red'},
      
      ]
    return (
      <Box width={width}>
            <Flex justifyContent="space-between">
                <Box>
                    <Text>Total Hours</Text>
                    <Text>70</Text>
                </Box>
                <Box>

                    <Text>Capacity</Text>
                    <Text>140</Text>
                </Box>
           </Flex>
            <MultiColorProgressbar value={70} height={30} bars={bars} minVal={0} maxVal={140} />
     
            <Box mt="40px">
                <Flex justifyContent="space-between">
                    <Flex gap='2'> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="red.600" ></Box>
                        <Text>Billable</Text>
                    </Flex>
                    <Text>65</Text>
                </Flex>
                <Flex  justifyContent="space-between" mt="10px">
                    <Flex  gap='2' > 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="red.200" ></Box>
                        <Text>Not Billable</Text>
                    </Flex>
                    <Text>5</Text>
                </Flex>
       </Box>

            </Box>
  )
}
