import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/whiteHarvest.svg';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Image,
  Text,
  useDisclosure,
  useMediaQuery 
} from "@chakra-ui/react";

const SNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const navigate = useNavigate();

  const ButtonLink1 = ({children,to}) => {
    return (
      <Button 
        bgColor="transparent" 
        variant="#4a4b49" 
        _hover={{color: 'orange'}}
        onClick={()=> {
          navigate(to);
          onClose();
        }}
       >
        {children}
       </Button>
    )
  };

  const ButtonLink2 = ({children, to}) => {
    return (
      <Button onClick={()=>{ navigate(to); onClose();}} w="48%" bgColor="#4a4b49" variant="#4a4b49" _hover={{color: 'orange'}}>
        {children}
      </Button>
    )
  }
   
  return (
    <>      
      <Flex display={isLargerThan1000? 'none': 'flex'} justify="space-between" align="center" p="15" bgColor="#1d1e1c">
          <Image onClick={()=> navigate('/')} src={logo} _hover={{cursor: 'pointer'}} alt='Harvest logo'/>
          <Box>
            <Button onClick={() => onOpen()} bgColor="#4a4b49" color='#fff' _hover={{color: 'orange'}}>
              Menu
            </Button>
          </Box>
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"} placement={"top"}>
        <DrawerOverlay />

        <DrawerContent bgColor="#1d1e1c" color="#fff">
          {/* <DrawerCloseButton /> */}
          <Flex justify="space-between" align="center" p="15" bgColor="#1d1e1c">
            <Box><Image onClick={()=> navigate('/')} src={logo} _hover={{cursor: 'pointer'}} alt='Harvest logo'/></Box>
            <Box>
              <Button onClick={() => onClose()} bgColor="#4a4b49" _hover={{color: 'orange'}}>
                Menu
              </Button>
            </Box>
          </Flex>

          <DrawerBody>
            <Box lineHeight="7vh" fontWeight="bold" mb="5vh">
              <Box borderTop="1px solid #4a4b49">
                <ButtonLink1 to={'t'} >Why Harvest?</ButtonLink1>
              </Box>
              <Box borderTop="1px solid #4a4b49">
                <ButtonLink1 to={''} >Features</ButtonLink1>
              </Box>
              <Box borderTop="1px solid #4a4b49">
                <ButtonLink1 to={''} >Customers</ButtonLink1>
              </Box>
              <Box borderTop="1px solid #4a4b49">
                <ButtonLink1 to={''} >Integrations</ButtonLink1>
              </Box>
              <Box borderTop="1px solid #4a4b49" borderBottom="1px solid #4a4b49">
                <ButtonLink1 to={''} >Pricing</ButtonLink1>
              </Box>
            </Box>
            <Flex justify="space-between" align="center">
              <ButtonLink2 to={'/login'}>
                Sign in
              </ButtonLink2>
              <ButtonLink2 to={'/Signup'}>
                Try Harvest free
              </ButtonLink2>
            </Flex>

            <Box mt='26%'>
            <Text lineHeight='8vh' borderBottom='1px solid #4a4b49' align='center'>Get the mobile app:</Text>
            <Flex justify='space-between' mt='2vh'>
              <ButtonLink2 to={''}>
                iPhone
              </ButtonLink2>
              <ButtonLink2 to={''}>
                Android
              </ButtonLink2>
            </Flex>
            </Box>
          </DrawerBody>

          {/* <DrawerFooter border="1px solid">
            <Text>Get the mobile app:</Text>
            <Flex justify='space-between'>
              <Button bgColor="#4a4b49" variant="#4a4b49" _hover={{color: 'orange'}}>
                iPhone
              </Button>
              <Button bgColor="#4a4b49" variant="#4a4b49" _hover={{color: 'orange'}}>
                Android
              </Button>
            </Flex>
          </DrawerFooter> */}

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SNavbar;



