import React, { useState,useEffect } from 'react'
import {Box, CircularProgress, CircularProgressLabel, Flex, Icon, Spacer, Text,  Tab, TabList, TabPanel, TabPanels, Tabs,} from "@chakra-ui/react"
import { Daytypes } from '../Components/Vinodmodal/Daytypes'
import { Reporttable } from '../Components/Vinodmodal/Reporttable'
import { Totalhours } from '../Components/Vinodmodal/Totalhours'
import { Projectsbreakdown } from '../Components/Vinodmodal/Projectsbrekdown'
import { Taskbreakdown } from '../Components/Vinodmodal/Taskbreakdown'
import { Teamworktable } from '../Components/Vinodmodal/Teamwektable'
import {BsArrowLeftSquare,BsArrowRightSquare} from "react-icons/bs"
import { FormText } from 'reactstrap'
import SecondaryNavbar from './SecondaryNavbar'
import SecondaryFooter from './SecondaryFooter'
import { useSelector } from 'react-redux'
export const Report = () => {
  const [clients, setClients] = useState([]);
  const [project, setProject] = useState([]);
  const [task, setTask] = useState([]);
  const [team, setTeam] = useState([]);
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

  const vinod = [
    
    {
      date: "21 sep",
      works: [{ title: "work of project", time: 1.01 },
        { title: "web development", time: 1.01 },
        {title:"work of project", time:1.01}]
    },
    
    {
      date: "22 sep",
      works:[{title:"software testing", time:1.01}]
    },
    
    {
      date: "23 sep",
      works: [
        
        { title: "Navbar building", time: 1.01 },
        { title: "Navbar responsive", time: 5.01 },
        { title: "Navbar css", time: 2.01 },
        { title: "Navbar integrate", time: 3.01 },
      
      
      ]
    },
    {
      date: "24 sep",
      works:[{title:"footer building", time:1.01}]
    },
    {
      date: "25 sep",
      works:[{title:"cart building", time:1.01}]
    },
    {
      date: "25 sep",
      works: [
        { title: "checkout building", time: 1.01 },
        { title: "checkout building", time: 1.01 }
      
      ]
    },
   
  ]

  function getprojects(res) {
    let obj={}
    for (let i = 0; i < res.length; i++){

      
      let Billable = 0;
      let Notbillable = 0;
      let Total = 0;

      if (obj[res[i].project_name] == undefined) {
        obj[res[i].project_name]={hours:0,billable:0,notbillable:0,total:0}
      }
  
      for(let j = 0; j < res[i].work.length; j++) {
        let vin = res[i].work[j];
        console.log(vin,'vin')
        Billable = Billable + vin.billable;
        Notbillable = Notbillable + vin.notbillable;
        Total = Total + (vin.charge*vin.billable);
      }

      obj[res[i].project_name].billable = obj[res[i].project_name].billable + Billable;
      obj[res[i].project_name].notbillable = obj[res[i].project_name].notbillable + Notbillable;
      obj[res[i].project_name].hours = obj[res[i].project_name].notbillable + obj[res[i].project_name].billable;
      obj[res[i].project_name].total = obj[res[i].project_name].total + Total;
    }
let vinu=[]
    for (let key in obj) {
  vinu.push({projectname:key, ...obj[key]})
    }
    console.log(vinu,'vinu')
    return vinu;
  }


  function getclient(res) {
    let obj={}
    for (let i = 0; i < res.length; i++){

      
      let Billable = 0;
      let Notbillable = 0;
      let Total = 0;

      if (obj[res[i].client_name] == undefined) {
        obj[res[i].client_name]={hours:0,billable:0,notbillable:0,total:0}
      }
  
      for(let j = 0; j < res[i].work.length; j++) {
        let vin = res[i].work[j];
        console.log(vin,'vin')
        Billable = Billable + vin.billable;
        Notbillable = Notbillable + vin.notbillable;
        Total = Total + (vin.charge*vin.billable);
      }

      obj[res[i].client_name].billable = obj[res[i].client_name].billable + Billable;
      obj[res[i].client_name].notbillable = obj[res[i].client_name].notbillable + Notbillable;
      obj[res[i].client_name].hours = obj[res[i].client_name].notbillable + obj[res[i].client_name].billable;
      obj[res[i].client_name].total = obj[res[i].client_name].total + Total;
    }
let vinu=[]
    for (let key in obj) {
  vinu.push({clientName:key, ...obj[key]})
    }
    console.log(obj,'vinubhai object')
    console.log(vinu,'vinubhai')
    return vinu;
  }


  function gettask(res) {
    let obj={}
    for (let i = 0; i < res.length; i++){

      
      let Billable = 0;
      let Notbillable = 0;
      let Total = 0;

     
  
      for (let j = 0; j < res[i].work.length; j++) {
        let vin = res[i].work[j];
        let Billable = 0;
      let Notbillable = 0;
      let Total = 0;
        
        if (obj[vin.task] == undefined) {
          obj[vin.task]={ hours:0,billable:0,notbillable:0,total:0}
        }
        
        console.log(vin,'vin')
        Billable = Billable + vin.billable;
        Notbillable = Notbillable + vin.notbillable;
        Total = Total + (vin.charge * vin.billable);

        
        
          obj[vin.task].billable = obj[vin.task].billable + Billable;
        obj[vin.task].notbillable = obj[vin.task].notbillable + Notbillable;
        obj[vin.task].hours = obj[vin.task].billable + obj[vin.task].notbillable;
        
        
          obj[vin.task].total = obj[vin.task].total + Total;
    
      }

    
    }
let vinu=[]
    for (let key in obj) {
  vinu.push({task_name:key, ...obj[key]})
    }
    console.log(obj,'vinubhai task object') 
    console.log(vinu,'vinubhai task')
    return vinu;
  }

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
         let a = getprojects(res)
        setProject([...a])

        let b = getclient(res)
        setClients([...b])

        let c = gettask(res)
        setTask([...c])

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



    <Box>
      <Box>

        <SecondaryNavbar />
      </Box>
      <Box m='auto' width={["90%","90%","80%"]}>   <Box mt='3.5rem'>
        <Flex alignItems='center'>   <Flex alignItems='center' > <Icon as={BsArrowLeftSquare} w={8} h={8} />
        <Icon as={BsArrowRightSquare} w={8} h={8} />
        </Flex> <Text ml='3' fontSize="3xl" fontWeight='bolder'>This Week: 26 Sep – 02 Oct 2022</Text><Spacer />  <Daytypes w="140px" />    </Flex>
        
        <hr  style={{marginBottom:"20px",marginTop:'12px'}}/>
        <Flex justifyContent='space-between' gap={['8',"none"]} flexWrap='wrap'> 
          <Box>
            <Text>Total Hours</Text>
            <Text>1.08</Text>
          </Box>
          <Box>
            <Flex alignItems="center">           <Box>
              
              
              <CircularProgress size="100px" value={80} color='green.400'>
      <CircularProgressLabel>45.0%</CircularProgressLabel>
            </CircularProgress>
            
            </Box>
              <Box ml="3">
              <Flex alignItems="center"> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.400" ></Box>
                        <Text>Billable</Text>
                    </Flex>
                    <Flex mt='3' alignItems='center'> 
                        <Box borderRadius="2px" width="20px" height="20px" backgroundColor="green.100" ></Box>
                        <Text>Not Billable</Text>
                    </Flex>
              </Box>
              
            </Flex>
 
        
          </Box>
         
          <Box>
            <Text>38.89</Text>
            <Text>0.00</Text>
          </Box>
          <Box>
            <Text>Billable amount</Text>
            <Text>$612.53</Text>
          </Box>
          <Box>
            <Text>Uninvoiced amount</Text>
            <Text>$509.53</Text>
          </Box>
        </Flex>
      </Box>
      {/* <Totalhours width="400px" />
    
      <Reporttable data={data} /> */}
   {/* {  project.length>0 && <Reporttable data={project} />}
   {  clients.length>0 && <Reporttable data={clients} />}
   {  task.length>0 && <Reporttable data={task} />}
   {  team.length>0 && <Reporttable data={team} />} */}
      {/* <Teamworktable data={vinod} />
      <Totalhours width="400px" />
      <Taskbreakdown width="400px" />
      <Projectsbreakdown width="400px" /> */}
      
       <Box mb='60px' mt='20px'>
     
        
     <Tabs >
<TabList>
         <Tab _hover={{ borderBottom: "2px solid orangered", fontWeight: "500" }}
          _selected={{ borderBottom: "2px solid orangered", fontWeight: "500" }}>Clients</Tab>
         <Tab _hover={{ borderBottom: "2px solid orangered", fontWeight: "500" }}
          _selected={{ borderBottom: "2px solid orangered", fontWeight: "500" }}>Projects</Tab>
         <Tab _hover={{ borderBottom: "2px solid orangered", fontWeight: "500" }}
          _selected={{ borderBottom: "2px solid orangered", fontWeight: "500" }}>Tasks</Tab>
         <Tab _hover={{ borderBottom: "2px solid orangered", fontWeight: "500" }}
          _selected={{ borderBottom: "2px solid orangered", fontWeight: "500" }}>Team</Tab>

</TabList>
<TabPanels  mt='30px'>
            <TabPanel>
            {  clients.length>0 && <Reporttable data={clients} />}

 </TabPanel>
 <TabPanel>
 {  project.length>0 && <Reporttable data={project} />}
 </TabPanel>
 <TabPanel>
 {  task.length>0 && <Reporttable data={task} />}
 </TabPanel>
 <TabPanel>
 {  team.length>0 && <Reporttable data={team} />}
 </TabPanel>


</TabPanels>
</Tabs>
   </Box > 
      <Box>
        <SecondaryFooter />
      </Box>
    </Box>
    </Box>
   
  )
}
