import { Progress, Td, textDecoration, Th } from '@chakra-ui/react'
import React from 'react'

export const TableColumn = ({ Values, objkey }) => {
    let property = false;
    let obj={}
    if (objkey == "name" || objkey == "hour") {
        property = true;
        obj = {
            color: "blue",
            textDecoration: "underline"
        }
    }
    
  
    return (
      
        <Td  style={obj} >{Values} {objkey=="hour"? <Progress value={Values} />:"" }</Td>
  )
}
