import React from 'react'
import { Box, Image, Text, Button, Flex,} from '@chakra-ui/react'
import styles from './getting.module.css'

export const Getting = () => {
  const GettingObj=[
    {img:"https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Create_a_projects1.png",
    heading:"Create a project",desc:"Create entries for your projects and tasks, or import them via one of our integrations."},
    {img:"https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Track_time.png",
    heading:"Track time",desc:"Click start to begin tracking time. Stop and start timers as you switch tasks."},
    {img:"https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Img_step3.png",
    heading:"Generate reports & invoices",desc:"Easily convert time entries into internal reporting or client invoices."}
  ]

  return (
    <Box>
        <Box className={styles.border} width="102%" marginLeft="-1%"></Box>
         <Box  className={styles.box}>
        <Text fontSize="42px"  color="#1d1e1c"  fontWeight="300" lineHeight="50px" fontFamily="MuotoWeb, sans-serif">Getting Started</Text>
      <Text fontSize="26px"  fontWeight="300"  color="#1d1e1c" fontFamily="MuotoWeb-300" marginTop="1rem">Time tracking so easy, your team will actually use it.</Text>
      </Box>
    <Flex className={styles.started}>
      {GettingObj.map((el)=>
      (
      <Box>
        <Image src={el.img}/>
      <Text className={styles.started_heading}>{el.heading}</Text>
      <Text className={styles.started_desc}>{el.desc}</Text>
      </Box>
      ))}
    </Flex>
    <Button bgColor="#fa5d00" _hover={{cursor:"pointer",bgColor:"#ea753f"}} color="white" marginTop="2rem" marginLeft="40%" borderRadius="15px"   width="11rem" padding="1.5rem" fontSize="18px">Get Started {">"}</Button>
    </Box>
  )
}
