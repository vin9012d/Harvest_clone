import React from 'react'
import { Box, Image, Text, Button, Container, Flex, Grid } from '@chakra-ui/react'
import styles from "./Logos.module.css";
export const Logos = () => {
  return (
    <Box width="90%" justifyContent="center" margin="auto" marginTop="1rem" paddingBottom="5rem">
      <Flex margin="auto">
   </Flex>
   <Flex  gap="6rem" marginTop="2rem" justifyContent="center">
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"/>
   </Flex>
   <div className={styles.line}></div>
      </Box>
      
  )
}
