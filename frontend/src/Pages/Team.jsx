import { Box, Flex, Icon, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import MultiColorProgressbar from 'multi-color-progressbar-with-indicator'
import React, { useEffect, useState } from 'react'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Mininavbar from '../Components/Mininavbar'
import { Daytypes } from '../Components/Vinodmodal/Daytypes'
import { Reporttable } from '../Components/Vinodmodal/Reporttable'
import SecondaryFooter from './SecondaryFooter'
import SecondaryNavbar from './SecondaryNavbar'

export const Team = () => {
  const [team, setTeam] = useState([])
  const token = useSelector((store) => store.AuthReducer.token);


  const data = [
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:26
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    }
  ]

  const data1 = [
    {
      name: "Unknown",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:26
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    },
    {
      name: "Viinod",
      email: "hfdsh@gmail.com",
      price: 233,
      hour:2
    }
  ]


  var bars = [
       
    {width: (35*100)/50, color: '#48bb78'},
    {width: 100-((35*100)/50), color: '#c6f6d5'}
  
  ]

  function getteam(res) {
    let obj={}
    for (let i = 0; i < res.length; i++){

      
      let Billable = 0;
      let Notbillable = 0;
      let Total = 0;

      if (obj[res[i].emp_name] == undefined) {
        obj[res[i].emp_name]={ hours:0,billable:0,notbillable:0,total:0}
      }
  
      for(let j = 0; j < res[i].work.length; j++) {
        let vin = res[i].work[j];
        console.log(vin,'vin')
        Billable = Billable + vin.billable;
        Notbillable = Notbillable + vin.notbillable;
        Total = Total + (vin.charge*vin.billable);
      }
// console.log(obj,'teams')
      obj[res[i].emp_name].billable = obj[res[i].emp_name].billable + Billable;
      obj[res[i].emp_name].notbillable = obj[res[i].emp_name].notbillable + Notbillable;
      obj[res[i].emp_name].hours= obj[res[i].emp_name].notbillable+obj[res[i].emp_name].billable

      obj[res[i].emp_name].total = obj[res[i].emp_name].total + Total;
    }
let vinu=[]
    for (let key in obj) {
  vinu.push({team_name:key, ...obj[key]})
    }
    console.log(obj,'vinubhai team object')
    console.log(vinu,'vinubhai team')
    return vinu;
  }


  
  const getdata = async () => {
    await fetch("https://mysterious-ridge-11647.herokuapp.com/time", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
     

        let d = getteam(res)
        setTeam([...d])
      
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getdata();
  }, []);



  return (

    <Box >
  <Box>

<SecondaryNavbar />
</Box>
<Box width='90%' m='auto'>
        <Flex  alignItems='center' mt='3.5rem'>   <Flex alignItems='center' > <Icon as={BsArrowLeftSquare} w={8} h={8} />
        <Icon as={BsArrowRightSquare} w={8} h={8} />
      </Flex> <Text ml='3' fontSize="3xl" fontWeight='bolder'>This Week: 26 Sep – 02 Oct 2022</Text><Spacer />  <Daytypes w="140px" />    </Flex>
      <hr style={{marginTop:'20px', marginBottom:"20px"}} />
      
      <Flex justifyContent='space-between' gap={['8',"none"]} flexWrap='wrap'>
        <Box>
          <Text>Total hours</Text>
          <Text fontWeight="bold" fontSize='2xl'>115.25</Text>
          </Box>
        <Box>
          <Text>Total capacity</Text>
          <Text fontWeight="bold" fontSize='2xl'>120</Text>
        </Box>
        
        <Box>
        <Flex alignItems="center" gap='2'> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.400" ></Box>
                        <Text>Billable</Text>
            </Flex>
            
              <Flex gap='2'mt='2'>  
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.100" ></Box>
                        <Text>Not Billable</Text>
                    </Flex>
        </Box>
        
        <Box>
          <Text fontWeight='bold' >90</Text>
          <Text fontWeight='bold'>30</Text>
          
        </Box>
        <Box w="18%" mr='10px'>
        <MultiColorProgressbar value={70} height={30} bars={bars} minVal={0} maxVal={120} />
          
        </Box>


      </Flex>
      <hr style={{marginTop:'20px', marginBottom:"35px"}} />  
     { team.length>0 && <Reporttable name={"team"} data={team} />}  
      <Box>
        <SecondaryFooter />
      </Box>
      </Box>
      </Box>
  )
}
