import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slidestyle from './slide.module.css'
import { Box, Image, Text, Flex } from '@chakra-ui/react'

const slideImages = [

  {desc:"We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.",
  writer:"Noah Gedrich, Zehner",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=560&height=374&name=home-photo-zehner.jpg"},
  {desc:"We needed something that worked, something super simple, because we don’t want to have to teach people how to use it as part of onboarding.",
  writer:"Nick Frandsen, Dovetail",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=560&height=374&name=home-photo-dovetail.jpg"},
  {desc:"Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.",
  writer:"Genevieve Laing, Cooper Perkins",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-cooper.jpg?width=560&height=374&name=home-photo-cooper.jpg"},
  {desc:"Harvest was key to helping me start my company – it allowed us to move from managing a lot of subcontractors to managing a staff quite easily.",writer:"Sara Holoubek, Luminary Labs",img:"https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-luminary.jpg?width=560&height=374&name=home-photo-luminary.jpg"}
  
];

const properties={ 
indicators: true,
};


const Slideshow = () => {
    return (
      <Box marginTop="3rem">
        <Slide easing="ease"  {...properties}>
            {slideImages.map((el)=>
            (
              <Box width="100%" className={slidestyle.box}>
                 <Flex  marginTop="3rem"  width="100%"  gap="1rem" margin="auto" className={slidestyle.flexdiv}>
           <Box  className={slidestyle.right} padding="2rem">
         <Text className={slidestyle.customer_box_desc}>{el.desc}</Text>
         <Text className={slidestyle.customer_box_writer} >{el.writer}</Text>
       </Box>
        <Image className={slidestyle.img} src={el.img}/>
       </Flex>
          </Box>  
            ))}
           
        </Slide>
      </Box>
    )
};

export default Slideshow;
