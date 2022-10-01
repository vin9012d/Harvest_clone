import { Box, Tr } from '@chakra-ui/react'
import React from 'react'
import { HeaderColumn } from './HeaderColumn';
import { TableColumn } from './TableColumn';

export const HeaderRow = ({data}) => {

    const values = Object.values(data);

console.log(values);


  return (
      <>
          {data.map((item) => {
              <Tr key={item.id}>
                  
                  <HeaderColumn  Values={item} />
                  
              </Tr>
          })}
    </>
  )
}
