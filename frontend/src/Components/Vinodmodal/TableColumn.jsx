import { Progress, Td, textDecoration, Th } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

export const TableColumn = ({ Values, objkey ,name}) => {
    let property = false;
    let obj={}
    if (objkey == "name" || objkey == "hour") {
        property = true;
        obj = {
            color: "blue",
            textDecoration: "underline"
        }
    }

    if (objkey == "email") {
        obj = {
            color: "green",
            // textDecoration: "underline"
        }
    }

    if (name !== undefined && objkey == "team_name") {
        obj={...obj, textDecoration:"underline",color:"blue"}
        return (
           <Td> <Link to={`/reports/${Values}`}> <p style={obj} >{Values} {objkey == "hours" ? <Progress value={(Values*100)/700} /> : ""} </p></Link></Td>
        )
    }
  
    return (
        
      
        <Td style={obj} >{Values} {objkey == "hours" ? <Progress value={(Values*100)/700} /> : ""}
           
        
    
        </Td>
  )
}
