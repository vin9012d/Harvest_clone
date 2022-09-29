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

export const Reporttable = ({ data }) => {
    
    const heading = Object.keys(data[0]);
    console.log(heading,'heading')


  return (
      <Box>
          <TableContainer>
  <Table size='lg'>
                  <Thead >
                      <Tr>
                          {heading.map((item,id) => (
                              <Th key={id}>{ item}</Th>
                        ))}
                          <HeaderRow data={heading} />
                          </Tr> 
    </Thead>
                  <Tbody>
                      
                      {data.map((item,ind) => (
                          <TableRow key={ind} data={item} />  
                      ))}
    </Tbody>
    <Tfoot>
      <Tr  _hover={{
    background:"teal.100",
    color: "teal.500",
  }}>
        <Th></Th>
        <Th></Th>
        <Th ><Flex justify={'space-between'}><Text>Total</Text><Text>666</Text></Flex></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
  )
}
