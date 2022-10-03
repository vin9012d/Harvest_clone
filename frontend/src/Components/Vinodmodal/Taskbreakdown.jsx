import React from 'react'
import MultiColorProgressbar from 
"multi-color-progressbar-with-indicator";

import "multi-color-progressbar-with-indicator/dist/index.css";
import { Box, color, Flex, Text } from '@chakra-ui/react';
export const Taskbreakdown = ({ width }) => {
    let colors = ["red", "green", "blue", "yellow", "orange,'black"]
    
    let widths = [20, 30, 10, 40]
    let bars=[];
    for (let i = 0; i < widths.length; i++){
        let vin = { width: (Math.floor((widths[0] * 100) / 140)),color:colors[i] }
        bars.push({...vin})
    }

    let data = [
        {
        title: "Web devellopment",
        hour:"44"
    },
    
        {
        title: "Production making",
        hour:"44"
    },
    
        {
        title: "Quality Checking",
        hour:"56"
    },
        {
        title: "Selling",
        hour:"56"
    }
    
    
    ]
    // var bars = [
       
    //     {
    //         width: (35 * 100) / 50, color: 'red'
    //     },
    //     {
    //         width: (25 * 100) / 50, color: 'green'
    //     },
    //     {
    //         width: (40 * 100) / 50, color: 'blue'
    //     }
      
    //   ]
    return (
        <Box width={width}>
            <Text>Task breakdown</Text>
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
            <MultiColorProgressbar value={20} height={30} bars={bars} minVal={0} maxVal={140} />
     
            <Box mt="40px">

                
                
                    {data.map((item,id) => (
                        <Flex justifyContent="space-between" mt='3'> 
                              <Flex gap='2'> 
                          <Box borderRadius="2px" width="20px" height="20px" backgroundColor={colors[id]} ></Box>
                                <Text>{item.title}</Text>
                    </Flex>
                            <Text>{item.hour}</Text>
                </Flex>
                    ))}
                  
               
       </Box>

            </Box>
  )
}
