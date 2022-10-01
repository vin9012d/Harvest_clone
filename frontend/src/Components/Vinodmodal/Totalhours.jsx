import React from 'react'
import MultiColorProgressbar from 
"multi-color-progressbar-with-indicator";

import "multi-color-progressbar-with-indicator/dist/index.css";
import { Box, Flex, Text } from '@chakra-ui/react';
export const Totalhours = ({width}) => {
    var bars = [
       
        {width: (35*100)/50, color: 'red'},
      
      ]
    return (
      <Box width={width}>
            <Flex justifyContent="space-between">
                <Box>
                    <Text>Total Hours</Text>
                    <Text>35</Text>
                </Box>
                <Box>

                    <Text>Capacity</Text>
                    <Text>50</Text>
                </Box>
           </Flex>
            <MultiColorProgressbar value={35} height={30} bars={bars} minVal={0} maxVal={50} />
     
            <Box mt="40px">
                <Flex justifyContent="space-between">
                    <Flex> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="red.600" ></Box>
                        <Text>Billable</Text>
                    </Flex>
                    <Text>55.56</Text>
                </Flex>
                <Flex  justifyContent="space-between" mt="10px">
                    <Flex  > 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="red.200" ></Box>
                        <Text>Not Billable</Text>
                    </Flex>
                    <Text>55.56</Text>
                </Flex>
       </Box>

            </Box>
  )
}
