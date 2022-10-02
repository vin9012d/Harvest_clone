import React from 'react';
import harvest_logo from '../../assets/whiteHarvest.svg';
import styles from './footer.module.css';
import lin from '../db.json';

import {
    Box,
    Container,
    Flex,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram  } from 'react-icons/ai';

export const Footer = () => {    
  return (
    <Box bgColor='#1d1e1c' color='#fff' >
      <Container as={Stack} maxW={'7xl'} py={20}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={20} mb={10} fontSize={'lg'}>

          <Stack spacing={6}>
            <Box></Box>            
            <Image w='15vw' src={harvest_logo} alt='harvest logo' />
          </Stack>

          <Stack align={'flex-start'} lineHeight='4vh'>
            <ListHeader>Harvest</ListHeader>
            {lin.harvest_link.map((link)=>(
                <Link className={styles.links} key={link.id} href={link.link}>{link.linkName}</Link>
            ))}            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Community</ListHeader>
            {lin.community_link.map((link)=>(
                <Link className={styles.links} key={link.id} href={link.link}>{link.linkName}</Link>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {lin.company_link.map((link)=>(
                <Link className={styles.links} key={link.id} href={link.link}>{link.linkName}</Link>
            ))}
          </Stack>  

        </SimpleGrid>

        <Box className={styles.harvestForc}>
            <Link href={'#'}>
               We also make: <span>Harvest Forecast</span>  – the fast and simple way to schedule your team across projects.
            </Link>         
        </Box>

        <Flex justify='space-between' pt='10' fontWeight={700} >
            <Box>© 2006-2022 Harvest</Box>
            <Flex gap='4'>
                <Flex className={styles.socialIcons}>
                    <Box><AiOutlineTwitter/></Box>
                    <Box>Twiter</Box>
                </Flex>
                <Flex className={styles.socialIcons}>
                    <Box><AiFillLinkedin/></Box>
                    <Box>LinkedIn</Box>
                </Flex>
                <Flex className={styles.socialIcons}>
                    <Box><AiOutlineInstagram/></Box>
                    <Box>Instagram</Box>
                </Flex>                
            </Flex>
        </Flex>

      </Container>
    </Box>
  )
};

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
};
