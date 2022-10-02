import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid, Input } from '@chakra-ui/react'
import styles from './customer.module.css'
import Slideshow from '../Slideshow/Slideshow'

export const Customer = () => {

  return (
    <Box>
        <Box className={styles.border}></Box>
      <Box className={styles.box}>
       <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">CUSTOMER STORIES</Text>
       <Text  className={styles.customer_heading1} >Helping teams thrive since 2006</Text>
       <Text  className={styles.customer_heading2}  marginTop="1rem">Teams of all sizes, types, and industries trust Harvest to track their time.</Text>
       <Slideshow/>
       <Button _hover={{cursor:"pointer",bgColor:"#0e0d0dd9"}} bgColor="#1d1e1c" color="white"  borderRadius="15px" fontSize="20px" className={styles.button} marginTop="2rem">Meet our customers</Button>     
       </Box>
    </Box>
  )
}
