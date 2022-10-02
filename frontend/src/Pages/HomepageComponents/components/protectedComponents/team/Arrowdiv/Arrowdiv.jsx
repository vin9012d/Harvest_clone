import React from 'react'
import { ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Select } from '@chakra-ui/react';
import styles from "./arrowdiv.module.css"

const Arrowdiv = () => {
  return (
    <Box marginTop="2rem">
        <Flex justifyContent="space-between">
    <Flex gap="0.5rem">
        <Flex>
        <Box className={styles.leftarrow} >
        <ArrowBackIcon color="#2a2b29"/>
        </Box>
        <Box className={styles.rightarrow}>
        <ArrowForwardIcon color="#2a2b29"/>
    </Box>
    </Flex>
    <Text className={styles.weekheading}>This week: 22 – 28 Aug 2022</Text>
    </Flex>
    <Select placeholder="Everyone" width="110px" height="2rem" fontSize="15px" border="1px solid black" borderRadius="10px" _hover={{border:"1px solid black"}}>
    <option className={styles.option}>My Pins</option>
    </Select>
    </Flex>
    <Box className={styles.border}></Box>
    
    </Box>
  )
}

export default Arrowdiv