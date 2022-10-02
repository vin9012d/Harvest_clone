import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import UserIcon from './UserIcon'

const Invite = () => {
  return (
    <Box width="101.2%" height="4rem" bgColor="#eeeeee" margin="auto" marginLeft="-1rem" >
        <Flex gap="5px" width="85%" margin="auto">
        <Button variant="outline"  _hover={{bgColor:"#336f3f "}}  marginTop="1rem"fontSize="14px" bgColor="#188433" height="2rem" color="white"  width="8rem" borderRadius="8px"><UserIcon/>&nbsp;Invite person</Button>
        <Button variant="outline" _hover={{borderColor:"black",bgColor:"white"}} fontSize="14px" borderColor="#b8b8b8" marginTop="1rem" bgColor="white" borderRadius="8px" height="2rem">Import</Button>
        <Button variant="outline" _hover={{borderColor:"black",bgColor:"white"}} fontSize="14px" borderColor="#b8b8b8" marginTop="1rem" bgColor="white" borderRadius="8px" height="2rem">Export</Button>
        </Flex>
    </Box>
  )
}

export default Invite