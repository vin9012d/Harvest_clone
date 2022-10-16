import { Box,  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer } from "@chakra-ui/react";
import React from "react";

const data = [
  { date: "01/01/2022", id: 1, client: "Ranajit Das", balance: 1500 },
  { date: "03/02/2022", id: 2, client: "Jay Das", balance: 1368 },
];

// coming from overview section
const InvoiceTableOpen = () => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple" colorScheme="green">
          
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th></Th>
              <Th>Issue date</Th>
              <Th>ID</Th>
              <Th>Client</Th>
              <Th></Th>
              <Th>Balance</Th>
            </Tr>
          </Thead>
          <Tbody fontSize='14px'>
           {data.map((ele)=>{
            return  <Tr>
             <Td>Draft</Td>
             <Td>Not sent yet</Td>
             <Td>{ele.date}</Td>
             <Td>{ele.id}</Td>
             <Td fontWeight='600'>{ele.client}</Td>
             <Td></Td>
             <Td fontWeight='600'>$ {ele.balance}</Td>
           </Tr>
           })}
          </Tbody>
          <Tfoot>
          <Tr fontWeight='600'>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>Total</Td>
              <Td>$ 2868</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceTableOpen;
