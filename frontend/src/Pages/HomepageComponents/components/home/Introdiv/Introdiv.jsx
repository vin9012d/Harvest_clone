import React from 'react'
import { Box, Image, Text, Button, Flex,  Input } from '@chakra-ui/react'
import styles from './introdiv.module.css'
import { Link } from 'react-router-dom'

export const Introdiv = () => {
  return (
    <Flex width="100%"  className={styles.outerbox}>
      <Box className={styles.box}>
      <Flex width="60%" gap="5px">
      <Image src="https://res.cloudinary.com/spiralyze/image/upload/v1657791092/Harvest/1029-Harvest-Home-Center-Align/Rate_stars_1.svg" />
      <Text>4.6</Text>
      <Text color="#9f9f9f" fontSize="16px" fontFamily="MuotoTrial reg-400">(748 reviews)</Text>
      </Flex>
      <Text className={styles.finally_heading}>Time tracking your team wants to use</Text>
        <Text className={styles.finally_desc}>Finally, an easy way to track time across projects. Reports, invoicing, and more. All in just a few clicks.</Text>
        <Flex  marginTop="2rem" gap="1rem" className={styles.inputdiv}>
          <Input placeholder="Work email" bgColor="white"></Input>
        <Button _hover={{cursor:"pointer",bgColor:"#ea753f"}} bgColor="#fa5d00" color="white" borderRadius="15px" width="inherit"><Link to="/signup"> Get Started</Link></Button>
          </Flex>
        <Text fontSize='15px' marginTop="1rem" fontFamily="MuotoTrial reg" fontWeight="400" color="#6d6e6d" lineHeight="20px" className={styles.trial}>Free 30-day trial. No credit card required.</Text>
        </Box>
        <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png" className={styles.img2}/>
      </Flex>
  )
}
