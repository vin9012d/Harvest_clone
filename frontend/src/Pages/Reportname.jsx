import React, { useState, useEffect } from 'react'
import { Box, CircularProgress, CircularProgressLabel, Flex, Heading, Icon, Spacer, Text } from "@chakra-ui/react"
import { Daytypes } from '../Components/Vinodmodal/Daytypes'
import { Reporttable } from '../Components/Vinodmodal/Reporttable'
import { Totalhours } from '../Components/Vinodmodal/Totalhours'
import { Projectsbreakdown } from '../Components/Vinodmodal/Projectsbrekdown'
import { Taskbreakdown } from '../Components/Vinodmodal/Taskbreakdown'
import { Teamworktable } from '../Components/Vinodmodal/Teamwektable'
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs"
import { FormText } from 'reactstrap'
import SecondaryFooter from './SecondaryFooter'
import SecondaryNavbar from './SecondaryNavbar'
import { useParams } from 'react-router-dom'
export const Reportname = () => {
    const [clients, setClients] = useState([]);
    const [project, setProject] = useState([]);
    const [task, setTask] = useState([]);
    const [team, setTeam] = useState([]);
    const {name}=useParams()


    const data = [
        {
            name: "Viinod",
            email: "hfdsh@gmail.com",
            price: 233,
            hour: 2
        },
        {
            name: "Viinod",
            email: "hfdsh@gmail.com",
            price: 233,
            hour: 26
        },
        {
            name: "Viinod",
            email: "hfdsh@gmail.com",
            price: 233,
            hour: 2
        },
        {
            name: "Viinod",
            email: "hfdsh@gmail.com",
            price: 233,
            hour: 2
        },
        {
            name: "Viinod",
            email: "hfdsh@gmail.com",
            price: 233,
            hour: 2
        }
    ]

    const vinod = [

        {
            date: "21 sep",
            works: [{ title: "work of project", time: 1.01 },
            { title: "web development", time: 1.71 },
            { title: "work of project", time: 1.61 }]
        },

        {
            date: "22 sep",
            works: [{ title: "software testing", time: 1.31 }]
        },

        {
            date: "23 sep",
            works: [

                { title: "Navbar building", time: 6.01 },
                { title: "Navbar responsive", time: 5.01 },
                { title: "Navbar css", time: 2.01 },
                { title: "Navbar integrate", time: 3.01 },


            ]
        },
        {
            date: "24 sep",
            works: [{ title: "footer building", time: 9.01 }]
        },
        {
            date: "25 sep",
            works: [{ title: "cart building", time: 8.01 }]
        },
        {
            date: "25 sep",
            works: [
                { title: "checkout building", time: 2 },
                { title: "checkout building", time: 1.01 }

            ]
        },

    ]

    function getprojects(res) {
        let obj = {}
        for (let i = 0; i < res.length; i++) {


            let Billable = 0;
            let Notbillable = 0;
            let Total = 0;

            if (obj[res[i].project_name] == undefined) {
                obj[res[i].project_name] = { hours: 0, billable: 0, notbillable: 0, total: 0 }
            }

            for (let j = 0; j < res[i].work.length; j++) {
                let vin = res[i].work[j];
                console.log(vin, 'vin')
                Billable = Billable + vin.billable;
                Notbillable = Notbillable + vin.notbillable;
                Total = Total + (vin.charge * vin.billable);
            }

            obj[res[i].project_name].billable = obj[res[i].project_name].billable + Billable;
            obj[res[i].project_name].notbillable = obj[res[i].project_name].notbillable + Notbillable;
            obj[res[i].project_name].total = obj[res[i].project_name].total + Total;
        }
        let vinu = []
        for (let key in obj) {
            vinu.push({ projectname: key, ...obj[key] })
        }
        console.log(vinu, 'vinu')
        return vinu;
    }


    function getclient(res) {
        let obj = {}
        for (let i = 0; i < res.length; i++) {


            let Billable = 0;
            let Notbillable = 0;
            let Total = 0;

            if (obj[res[i].client_name] == undefined) {
                obj[res[i].client_name] = { hours: 0, billable: 0, notbillable: 0, total: 0, project_name: res[i].project_name }
            }

            for (let j = 0; j < res[i].work.length; j++) {
                let vin = res[i].work[j];
                console.log(vin, 'vin')
                Billable = Billable + vin.billable;
                Notbillable = Notbillable + vin.notbillable;
                Total = Total + (vin.charge * vin.billable);
            }

            obj[res[i].client_name].billable = obj[res[i].client_name].billable + Billable;
            obj[res[i].client_name].notbillable = obj[res[i].client_name].notbillable + Notbillable;
            obj[res[i].client_name].total = obj[res[i].client_name].total + Total;
        }
        let vinu = []
        for (let key in obj) {
            vinu.push({ clientName: key, ...obj[key] })
        }
        console.log(obj, 'vinubhai object')
        console.log(vinu, 'vinubhai')
        return vinu;
    }


    function gettask(res) {
        let obj = {}
        for (let i = 0; i < res.length; i++) {


            let Billable = 0;
            let Notbillable = 0;
            let Total = 0;



            for (let j = 0; j < res[i].work.length; j++) {
                let vin = res[i].work[j];
                let Billable = 0;
                let Notbillable = 0;
                let Total = 0;

                if (obj[vin.task] == undefined) {
                    obj[vin.task] = { client_name: res[i].client_name, hours: 0, billable: 0, notbillable: 0, total: 0, project_name: res[i].project_name }
                }

                console.log(vin, 'vin')
                Billable = Billable + vin.billable;
                Notbillable = Notbillable + vin.notbillable;
                Total = Total + (vin.charge * vin.billable);



                obj[vin.task].billable = obj[vin.task].billable + Billable;
                obj[vin.task].notbillable = obj[vin.task].notbillable + Notbillable;
                obj[vin.task].total = obj[vin.total] + Total;

            }


        }
        let vinu = []
        for (let key in obj) {
            vinu.push({ clientName: key, ...obj[key] })
        }
        console.log(obj, 'vinubhai task object')
        console.log(vinu, 'vinubhai task')
        return vinu;
    }

    function getteam(res) {
        let obj = {}
        for (let i = 0; i < res.length; i++) {


            let Billable = 0;
            let Notbillable = 0;
            let Total = 0;

            if (obj[res[i].emp_name] == undefined) {
                obj[res[i].emp_name] = { hours: 0, client_name: res[i].client_name, billable: 0, notbillable: 0, total: 0, project_name: res[i].project_name }
            }

            for (let j = 0; j < res[i].work.length; j++) {
                let vin = res[i].work[j];
                console.log(vin, 'vin')
                Billable = Billable + vin.billable;
                Notbillable = Notbillable + vin.notbillable;
                Total = Total + (vin.charge * vin.billable);
            }
            // console.log(obj,'teams')
            obj[res[i].emp_name].billable = obj[res[i].emp_name].billable + Billable;
            obj[res[i].emp_name].notbillable = obj[res[i].emp_name].notbillable + Notbillable;
            obj[res[i].emp_name].total = obj[res[i].emp_name].total + Total;
        }
        let vinu = []
        for (let key in obj) {
            vinu.push({ clientName: key, ...obj[key] })
        }
        console.log(obj, 'vinubhai team object')
        console.log(vinu, 'vinubhai team')
        return vinu;
    }



    const getdata = async () => {
        await fetch("https://mysterious-ridge-11647.herokuapp.com/time", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // token: `bearer ${token}`,
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
            

            <Box mt='3.5rem'  m='auto' w={['90%','90%','80%']}>
            <Box  >
                <Flex alignItems='center'  >   <Flex alignItems='center' > <Icon as={BsArrowLeftSquare} w={8} h={8} />
                    <Icon as={BsArrowRightSquare} w={8} h={8} />
                </Flex> <Text ml='3' fontSize="3xl" fontWeight='bolder'>This Week: 26 Sep – 02 Oct 2022</Text><Spacer />  <Daytypes w="140px" />    </Flex>
                <hr style={{ marginTop: "20px", marginBottom: "25px"}} />
                <Flex justifyContent='space-between' mt='5' gap={['8',"none"]} flexWrap='wrap'>
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
            <hr style={{ marginTop: "20px", marginBottom: "25px"}} />
            <Flex justifyContent='space-between' direction={["column","column",'row']} alignItems={["center",'center','none']}>
                    <Box mt={["none",'none','-36']} width={["80%", "80%", '30%']}>
                        <Box mb='3'>
                            <Heading>{name}</Heading>
                        </Box>
                    <Box   boxShadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;" p='5'>
                        <Totalhours width="90%"  />
                    </Box>
                    <Box mt='7'  boxShadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;" p='5'>
                        <Taskbreakdown width="90%" />
                    </Box>
                     <Box mt='7'  boxShadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;" p='5'>
                        <Projectsbreakdown width="90%" />
                        </Box>
                
                </Box>
                
                <Box  mt={["30px",'30px','none']} width={['80%','80%',"60%"]}>    <Teamworktable data={vinod} /></Box>

            </Flex>
            <Box>
        <SecondaryFooter />
      </Box>
      </Box>
        </Box>

    )
}
