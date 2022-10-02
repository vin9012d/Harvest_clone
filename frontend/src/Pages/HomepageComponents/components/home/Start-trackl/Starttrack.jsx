import React from 'react'
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react'
import styles from './starttrack.module.css'
import { Link } from 'react-router-dom'
export const Starttrack = () => {

  return (
    <Box  className={styles.outerbox}>
    <Flex  gap="6rem" className={styles.outerflex}>
    <Box className={styles.innerbox}>
     <Text  className={styles.starttrack_heading1} >Start tracking time today</Text>
     <Text  className={styles.starttrack_heading2}  marginTop="1rem">Join 70,000+ companies spending their time wisely with Harvest.</Text>
     <Flex marginTop="2rem" gap="1rem" className={styles.innerflex}>
      <Button _hover={{cursor:"pointer",bgColor:"#ea753f"}} bgColor="#fa5d00" color="white" borderRadius="15px" className={styles.button} fontSize="19px" height="3rem"><Link to="/signup">Try Harvest free</Link></Button>
         <Text  className={styles.trial}>Free 30-day trial. No credit card required.</Text>
         </Flex></Box>
       <Image marginLeft="-1%" marginTop="5rem" width="30%" height="100%" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" className={styles.img}/>
  </Flex>
  </Box>
  )
}
