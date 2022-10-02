import { Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import {TimeIcon} from "@chakra-ui/icons";
import styles from "./employee.module.css"
const Employee = () => {
   
  return (
   <Box className={styles.box}>
    <Flex justify="space-between" margin="8px 6rem 0px 10px" >
    <Flex gap="0.4rem">
    <TimeIcon w={4} h={3} marginTop="3px"/>
        <Text className={styles.heading}>
        Employees
        </Text>
        </Flex>
        <Text  className={styles.heading}>
           Hours
        </Text>
        <Text  className={styles.heading}>
           Capacity
        </Text>
        <Text  className={styles.heading}>
           Billable Hours
        </Text>
    </Flex>
   </Box>
  )
}

export default Employee