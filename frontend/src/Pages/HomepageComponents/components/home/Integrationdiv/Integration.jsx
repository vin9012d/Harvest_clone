import React from 'react'
import { Box, Image, Text, Button,  Flex} from '@chakra-ui/react'
import styles from './integration.module.css'

export const Integration = () => {

  return (
    <Box className={styles.intigrationimg}>
        <Box className={styles.border}></Box>

    <Flex width="88%" margin="auto" marginTop="6rem" gap="4rem" className={styles.flexdiv}>
    <Image className={styles.integration_logo} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg"/>
    <Box className={styles.integration_div}>
    <Text fontSize="20px" fontWeight="700" color="#fa5d00" fontFamily="MuotoWeb - 700">INTEGRATIONS</Text>
     <Text  className={styles.integration_heading1} >Integrated with the tools your team already knows and loves</Text>
     <Text  className={styles.integration_heading2}  >Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</Text>
     <Button bgColor="#1d1e1c" _hover={{cursor:"pointer",bgColor:"#0e0d0dd9"}} color="white"  borderRadius="15px" fontSize="20px"  marginTop="2rem" className={styles.button}>Browse Integrations</Button>
    </Box>
  </Flex>
  </Box>
  )
}
