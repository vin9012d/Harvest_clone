import { Box, Flex, Text } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import React from 'react'
import { HeaderRow } from './HeaderRow'
import { TableRow } from './TableRow'
import { Teamworkrow } from './Teamworkrow'

export const Teamworktable = ({ data }) => {
    
    const heading = Object.keys(data[0]);
    console.log(heading,'heading')
console.log(data,'data')

  return (
      <Box>
          
          {data.map((item,ind) => {
          
              return <Box key={ind}>
                   
                  <Box textAlign='left' p="3"  backgroundColor="#efefef"> {item.date} </Box>
                     <Box>
                      <Teamworkrow data={item.works} />
                     
                      </Box>
              </Box>
              
              
      })}
    </Box>
  )
}
