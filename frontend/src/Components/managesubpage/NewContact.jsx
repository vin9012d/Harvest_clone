import { Flex,Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  SmallAddIcon } from "@chakra-ui/icons";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { IoIosArrowDown } from "react-icons/io";
import {useNavigate} from "react-router-dom"

import {Icon, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress} from "@chakra-ui/react";

import mod from "/Users/Dell/nem111project/nebulous-unit-9563/frontend/src/module.css/Manage.module.css"
import exp from "/Users/Dell/nem111project/nebulous-unit-9563/frontend/src/module.css/Expences.module.css"
export default function NewContact() {
    let navigate=useNavigate()
  return (
    <Flex flexDirection={"column"} alignItems="center"  >
      <div className={mod.mainbox}>
          <h1 className={mod.h11font}>New contact</h1>
            <h2>No email is sent when adding a contact. The email address is captured for your own reference and for the convenience of sending invoices to the client directly from Harvest.</h2>
            <hr style={{width:"100%",marginTop:"16px",backgroundColor:"rgba(29, 30, 28, 0.3)",height:"1px"}}></hr>
             <div  className={mod.newdata}>
             <Flex width="100%" marginTop={"20px"}  alignItems="center">
                    <strong>Client</strong>
                    <Popover className={exp.popover} >
                <PopoverTrigger>
                  <Button
                    width={"20%"}
                    background={"white"}
                    border="1px solid rgba(29,30,28,.3)"
                    height={"35px"}
                    justifyContent='space-between'
                    marginLeft={"180px"}



                  >
                    Example Client
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  width="165px"
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
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>First name</strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex> 
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>Last name</strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex> 
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>Email</strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex> 
                  <hr style={{width:"100%",marginTop:"16px",backgroundColor:"rgba(29, 30, 28, 0.3)",height:"1px"}}></hr>
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>Title  </strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex>
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong> Office number</strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex>
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>Mobile number</strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
                  </Flex>
                  <Flex marginBottom="30px" marginTop="20px" width="100%"  justifyContent={"space-between"} alignItems="center">
                    <strong>Fax number</strong>
                    <input style={{width:"544px",heigth:"36px",backgroundColor: "#fff",border: "1px solid rgba(29,30,28,.3)"}}/>
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
