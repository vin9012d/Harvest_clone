import { Flex,Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import mod from "../module.css/Manage.module.css"
import {  SmallAddIcon } from "@chakra-ui/icons";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { IoIosArrowDown } from "react-icons/io";
import {Icon, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

export const Manage = () => {
  let [bool,setbool]=useState(true)
  
  const funn=()=>{
    setbool(!bool)
    console.log(bool)
    document.querySelector("button").disabled=bool
  }
  let navigate=useNavigate()
  return (
    <Flex flexDirection={"column"} alignItems="center"  >
      <div className={mod.mainbox}>
          <h1 className={mod.h11font}>Clients</h1>
          <Flex>
          <button  className={mod.button} id="button" type="button" aria-disabled={bool}  onClick={()=>{navigate("/manages/newclient")}} >
              <SmallAddIcon width={"20px"} height={"20px"} />
              New Client
          </button>
          <button className={mod.btn2} onClick={()=>{navigate("/manages/newcontact")}}>
            <SmallAddIcon width={"20px"} height={"20px"} />
            Add contact
          </button>
          <Popover className={mod.popover} >
                <PopoverTrigger>
                  <Button
                    width={"155px"}
                    background={"white"}
                    border="1px solid rgba(29,30,28,.3)"
                    height={"34px"}
                    marginTop="10px"
                    marginLeft="5px"
                    justifyContent='space-between'
                    className={mod.butt}
                  >
                    Import/Export
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  width="100%"  
                  borderColor="black"
                >
                  <PopoverArrow   />
                  <PopoverBody className={mod.shadow}>
                  
                    <p className={mod.par}>Import clients from CSV</p>
                    <p className={mod.par} >Import contact from CSV</p>
                    <hr style={{height:"5px",width:'100%',backgroundColor:"balck"}} ></hr>
                    <p className={mod.par} >Export client to Excel</p>
                    <p className={mod.par} >Export client to CSV</p>
                    <p className={mod.par} >Expo contact to Excel</p>
                    <p className={mod.par} >Export contact to CSV</p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              
          </Flex>
          <InputGroup className={mod.in} height="29px" width="280px" marginTop="20px">
                    <InputLeftElement
                    
                      pointerEvents='none'
                      
                      children={<SearchIcon marginBottom='10px'  color='black' />}
                    />
                    <Input type='tel' height="29px" width="280px" borderRadius="0%" placeholder='Filter by client or contact' isInvalid errorBorderColor='rgba(29, 30, 28, 0.3)' />
              </InputGroup>
             
              
              <hr style={{width:"100%",marginTop:"30px",backgroundColor:"rgba(29, 30, 28, 0.3)",height:"1px"}}></hr>
              <Flex className={mod.seconddiv} justifyContent='space-between' alignItems={"center"}>
                <Flex  alignItems={"center"} width={"27%"}>
                  <button className={mod.btn} onClick={()=>{navigate("/manages/edit")}}>Edit</button>
                  <strong style={{marginLeft:"10px"}}>Expert client</strong>
                </Flex>
              
                <Flex alignItems={"center"}  style={{width:"17%"}}>
                <button style={{width:"120px",marginBottom:"10px"}} className={mod.btn2}>
            <SmallAddIcon width={"20px"} height={"20px"} />
            Add contact
          </button>
                </Flex>
                
              </Flex>
              <hr style={{width:"100%",backgroundColor:"rgba(29, 30, 28, 0.3)",height:"1px"}}></hr>
              </div>
    </Flex>
  )
}
