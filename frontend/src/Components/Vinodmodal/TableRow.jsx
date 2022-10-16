import { Box, Tr } from '@chakra-ui/react'
import React from 'react'
import { TableColumn } from './TableColumn';

export const TableRow = ({data,name}) => {

    const values = Object.values(data);
    console.log(data,'data')
    console.log(values,'values');

const heading = Object.keys(data);
  return (
      <Tr _hover={{
        background:"teal.100",
        color: "teal.500",
      }}>          {values.map((item,id) => {
           
                  
          return <>    <TableColumn objkey={heading[id]} key={id} name={name} Values={item}  />
          
          </>  
          })}
 </Tr>

  )
}
