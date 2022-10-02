import { Flex,Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import exp from "../module.css/Expences.module.css"
import { PhoneIcon, SearchIcon, SmallAddIcon } from "@chakra-ui/icons";
import { IoIosArrowDown } from "react-icons/io";
import {Icon, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress} from "@chakra-ui/react";
export const Expenses = () => {
  let [bool,setbool]=useState(true)
  let [data,setdata]=useState([
    {
      date:"Fri, 30 Sep",
      about1:"Example Project ",
      clint:"Example Client",
      about2:"Entertainment ",
      bil:"Billable",
      price:"100.00"
    }
  ])
  const funn=()=>{
    setbool(!bool)
    console.log(bool)
    document.querySelector("button").disabled=bool
  }
  return (
    <Flex flexDirection={"column"} alignItems="center"  >
      <div className={exp.mainbox}>
          <h1 className={exp.h11font}>Expenses</h1>
          <button className={exp.button} id="button" type="button" aria-disabled={bool}  onClick={funn} >
              <SmallAddIcon width={"20px"} height={"20px"} />
              Track expenses
            </button>
            
      </div>
    
       
      
      { bool==true?null:<>
      <Flex className={exp.addexp} justifyContent="space-evenly">
        <div className={exp.first}>
          <h1 className={exp.h1newfont}>Date</h1>
          <Input  isInvalid  errorBorderColor='rgba(29,30,28,.3)' height={"34px"} width="120px" placeholder='select date'  type="date"/>
        </div>
        <div className={exp.second}>  
          <h1 className={exp.h1newfont}>Project/Category</h1>
          <div className={exp.ppop}>
              <Popover className={exp.popover} >
                <PopoverTrigger>
                  <Button
                    width={"100%"}
                    background={"white"}
                    border="1px solid rgba(29,30,28,.3)"
                    height={"35px"}
                    justifyContent='space-between'
                    className={exp.butt}
                  >
                    choose a project...
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
            </div>
            <div className={exp.ppop}>
              <Popover className={exp.popover} direction="rtl" >
                <PopoverTrigger>
                  <Button
                    width={"100%"}
                    background={"white"}
                    border="1px solid rgba(29,30,28,.3)"
                    height={"35px"}
                    justifyContent='space-between'
                    className={exp.butt}
                  >
                    choose a category...
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  width="740px"
                  className={exp.project_filter_left_opt}
                  borderColor="black"
                >
                  <PopoverArrow className={exp.arrow}  />
                  <PopoverBody className={exp.shadow}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<SearchIcon color='gray.500' />}
                    />
                    <Input type='tel' placeholder='Search...' isInvalid errorBorderColor='black' />
                  </InputGroup >
                    <p className={exp.par}>Entertainment</p>
                    <p className={exp.par}>Lodging</p>
                    <p className={exp.par}>Meals</p>
                    <p className={exp.par}>Mileage</p>
                    <p className={exp.par}>Other</p>
                    <p className={exp.par}>Transportation</p>
                  </PopoverBody>
                </PopoverContent >
              </Popover>
            </div>
            <textarea className={exp.ppopp} placeholder={"Notes(optional)"} ></textarea>
            <input type="file" className={exp.inpu} />
            <button type='button' className={exp.butto}><img src="https://img.icons8.com/external-those-icons-lineal-those-icons/17/000000/external-Attach-emails-those-icons-lineal-those-icons.png"/>Attach receipt</button>
            <Flex>
              <input type="checkbox"  className={exp.checkbox} />
              <label className={exp.h1newfont} style={{marginLeft:"10px"}} >This expense is billable</label>
            </Flex>
            <Flex alignItems="center" >

              <button className={exp.button} id="button" type="button" aria-disabled={bool}  onClick={funn} >
              
                Save expenses
              </button>
              <button className={exp.btn2}>Edit</button>
            </Flex>
        </div>
        <div className={exp.third}>
          <h1 className={exp.h1newfont}>Amount</h1>
          <Flex className={exp.money} alignItems="center">
          <img src="https://img.icons8.com/material-outlined/24/000000/us-dollar--v1.png"/>
          <input className={exp.inn}></input>
          </Flex>
          
        </div>
      </Flex></>}
      <hr style={{width:"79%",marginTop:"30px",backgroundColor:"grey",height:"2px"}}></hr>
      <div className={exp.seconddiv}>
        <h2 className={exp.h22font}>26 Sep – 02 Oct 2022</h2>
      </div>
      <hr style={{width:"79%",backgroundColor:"grey",height:"2px"}}></hr>
      {
        data.map((elem,index)=>{
          return(<><Flex width="79%" justifyContent="space-between" alignItems="center" key={index} className={exp.table}>
              <Flex width="30%" justifyContent="space-between" algnItems="center">
                <p style={{paddingTop:"9px"}}>{elem.date}</p>
                <div>
                  <Flex><p className={exp.font}>{elem.about1}</p>({elem.clint})</Flex>
                  <Flex><p >{elem.about2}</p><p className={exp.sty}>{elem.bil}</p></Flex>
                </div>
              </Flex>
              <Flex width="13%" marginRight={"10px"} alignItems="center" justifyContent={"space-between"}>
                  <h2 className={exp.font} >${elem.price}</h2>
                  <button className={exp.btn}>Edit</button>
              </Flex>
          </Flex><hr style={{width:"79%",backgroundColor:"grey",height:"2px"}}></hr></>
          )
        })
      }
    </Flex>
  )
}
