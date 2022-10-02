import { Flex,Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  SmallAddIcon } from "@chakra-ui/icons";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { IoIosArrowDown } from "react-icons/io";
import {useNavigate} from "react-router-dom"

import {Icon, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress} from "@chakra-ui/react";

import mod from "/Users/Dell/nem111project/nebulous-unit-9563/frontend/src/module.css/Manage.module.css"
import exp from "/Users/Dell/nem111project/nebulous-unit-9563/frontend/src/module.css/Expences.module.css"
export default function Newclient() {
    let navigate=useNavigate()
  return (
    <Flex  flexDirection={"column"} alignItems="center"  >
      <div className={mod.mainbox}>
          <h1 className={mod.h11font}>New client</h1>
            <h2>Once you’ve added a client, you can add projects and contacts.</h2>
            <hr style={{width:"100%",marginTop:"16px",backgroundColor:"rgba(29, 30, 28, 0.3)",height:"1px"}}></hr>
             <div  className={mod.newdata}>
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>client name</strong>
                    <input style={{width:"544px",heigth:"34px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex> 
                  <Flex width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>Address</strong>
                    <textarea style={{width:"544px",height:"94px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex> 
                  <Flex width="100%" marginTop={"20px"}  alignItems="center">
                    <strong>Preferred currency</strong>
                    <Popover className={exp.popover} >
                <PopoverTrigger>
                  <Button
                    width={"60%"}
                    background={"white"}
                    border="1px solid rgba(29,30,28,.3)"
                    height={"35px"}
                    justifyContent='space-between'
                    marginLeft={"80px"}



                  >
                    Account default (United States Dollar - USD)
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  width="740px"
                  borderColor="black"
                >
                  <PopoverArrow   />
                  <PopoverBody>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<SearchIcon color='gray.500' />}
                    />
                    <Input type='tel' placeholder='Search...' isInvalid errorBorderColor='black' />
                  </InputGroup>
                    <p className={exp.par}>Example Client</p>
                    <p className={exp.par2} >Example Projects</p>
                    <p className={exp.par} >govmishra</p>
                    <p className={exp.par2} >random</p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
                  </Flex> 
             </div>
             <Flex>
             <button style={{marginLeft :"30%",marginTop:"10px"}}  className={mod.button} id="button" type="button"   onClick={()=>{navigate("/manages")}} >
              
              Save client
          </button>
          <button style={{marignTop:"10px"}} className={mod.btn2}>
           
            cancel
          </button>
             </Flex>
        </div>      
              
              
    </Flex>
  )
}
