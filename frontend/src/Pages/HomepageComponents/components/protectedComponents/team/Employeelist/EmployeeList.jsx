import { Select,Box,Flex,Text, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./employeelist.module.css"
import axios from "axios";
const EmployeeList = () => {
  const[data,setData]=useState([]);
  const[user,setUser]=useState([]);
  useEffect(()=>
  {
    axios.get('https://mysterious-ridge-11647.herokuapp.com/userData')
    .then((r)=>{console.log(r.data);setData(r.data)});

    axios.get('https://mysterious-ridge-11647.herokuapp.com/registeredUsers')
    .then((r)=>{console.log(r.data);setUser(r.data)});

  },[])
  return (
    <Box>
        <Flex gap="10rem" marginTop="0.5rem" marginLeft="10px">
       <Flex gap="3px" ><Text className={styles.ownerinfo} color="black" fontWeight="bold" fontSize="14px">
        {user.firstName}{" "}{user.lastName}
       </Text>
       <Button h="5" bgColor="white" variant={"outline"} fontSize="12px" borderRadius="15px">Owner</Button>
       </Flex>
       <Flex>
       <Text  className={styles.info}>
           {data.hours}.00
        </Text>
        </Flex>
        <Text  className={styles.info} marginLeft="7rem">
           {data.team}
        </Text>
        <Flex gap="1rem">
        <Text  className={styles.info} marginLeft="6rem">
           {data.hours}
        </Text>
        <Select placeholder="Actions" width="100px" height="1.8rem" fontSize="13px" border="1px solid black" marginTop="-0.3rem" borderRadius="10px" _hover={{border:"1px solid black"}}>
    <option className={styles.option}>Edit</option>
    <option className={styles.option}>Pin</option>
    </Select>
        </Flex>
        
        </Flex>
    </Box>
  )
}

export default EmployeeList