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

export const Reporttable = ({ data,name }) => {
  let total = 0;
  for (let i = 0; i < data.length; i++){
    total = total+data[i].total;
  }
    const heading = Object.keys(data[0]);
    console.log(heading,'heading')  


  return (
      <Box>
          <TableContainer>
  <Table size={['sm','sm','lg']}>
                  <Thead  backgroundColor="#efefef">
                      <Tr>
                          {heading.map((item,id) => (
                              <Th key={id}>{ item}</Th>
                        ))}
                          <HeaderRow data={heading} />
                          </Tr> 
    </Thead>
                  <Tbody>
                      
                      {data.map((item,ind) => (
                          <TableRow key={ind} data={item}  name={name} />  
                      ))}
    </Tbody>
    <Tfoot>
      <Tr  _hover={{
    background:"teal.100",
    color: "teal.500",
            }}>
              
              {heading.map((item,ind) => (
                <Th>
                  {ind !== heading.length - 1 ? "" : <Flex justifyContent='space-between'><Text>{total}</Text><Text ml='3.5'>Total</Text></Flex> }
                </Th>
              ))}
        <Th></Th>
        <Th></Th>
        <Th ></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
  )
}
