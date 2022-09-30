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

export const Teamtable = () => {
  return (
      <Box>
          <TableContainer>
  <Table size='lg'>
    <Thead >
      <Tr style={{backgroundColor:"#efefef"}}>
        <Th >Status</Th>
        <Th>Issue data</Th>
        <Th >ID</Th>
        <Th >Client</Th>
       
      </Tr>
    </Thead>
    <Tbody>
      <Tr   _hover={{
    background:"teal.100",
    color: "teal.500",
  }}>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td >25.4</Td>
        <Td>millimetres (mm)</Td>
       
      </Tr>
      <Tr  _hover={{
    background:"teal.100",
    color: "teal.500",
  }}>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        
      </Tr>
      <Tr  _hover={{
    background:"teal.100",
    color: "teal.500",
  }}>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr  _hover={{
    background:"teal.100",
    color: "teal.500",
  }}>
        <Th>To convert</Th>
        <Th>into</Th>
        
    
        <Th ><Flex justify={'space-between'}><Text>Total</Text><Text>666</Text></Flex></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
  )
}
