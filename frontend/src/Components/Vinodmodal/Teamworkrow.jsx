import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'


export const Teamworkrow = ({ data }) => {
    console.log(data,'teamworkrow')
  return (
      <>
          {data.map((item, ind) => (
              <Box key={ind*1000}>
              <Flex  justifyContent="space-between" p="3"  alignItems='center'>
                      <Text>{item?.title}  {item?.title === undefined?"not tracked":""}</Text>
                      <Flex  alignItems='center' >
                          <Text>{item?.time}</Text> 
                          {item?.time!==undefined? <Button ml='3'>Edit</Button>:""}
                          </Flex>
                  </Flex>
                  <hr />
                  </Box>
          ))}
      
      </>
  )
}
