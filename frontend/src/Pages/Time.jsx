import { Icon, SmallAddIcon } from '@chakra-ui/icons';
import {Input, background, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Select, Tab, useDisclosure, TabList, Tabs, TabPanels, TabPanel, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Counter } from '../Components/counter';
import time from "../module.css/time.module.css"
import SecondaryFooter from './SecondaryFooter';
import SecondaryNavbar from './SecondaryNavbar';
import {v4 as uuid} from "uuid"
import axios from 'axios';
import { useSelector } from 'react-redux';

  const projects = {
    Exampl_project: {
      client_name: "Vinod",
      tasks: ["marketing", "programming"],
    },
    Alpha_nemeric: {
      client_name: "bharat",
      tasks: ["marketing", "programming"],
    },
  };
// var tm=5000000
const timeConverttToHour=(tm)=>{
const second=Math.floor(tm/1000)
const minute=Math.floor(second/60)
const hour=Math.floor(minute/60)
const remain_minute = minute%60
return hour +':'+ remain_minute;
}
const timeConverttToSecond=(tm)=>{
var check=tm.includes(":")

if(check){
  var arr = tm.split(":");
  let hour=+arr[0]*60*60
  let minute=+arr[1]*60
  console.log(arr)
 return hour+minute
}
else{
  var hour=+tm*60*60
  return hour
}
}

export const Time = () => {
    const token = useSelector((store) => store.AuthReducer.token);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project_name,setProject_names]=useState([])
  const [selected_project, setselected_project] = useState("");
  const [tasks, settasks] = useState([])
  const [selected_task,setselected_task]=useState("")
  const [selected_day, setselected_day] = useState("day1")
  const [week, setweek] = useState({day1:[],day2:[],day3:[],day4:[],day5:[],day6:[],day7:[]})
  const [isClockRunning, setisClockRunning] = useState(false)
  const [selectedTime, setselectedTime] = useState("0") 
  const [project_data, setproject_data] = useState([]);    
  //  console.log(tasks,"task");

  useEffect(() => {
axios.get("https://mysterious-ridge-11647.herokuapp.com/project",{
      headers: {
        authorization: `bearer ${token}`,
      },
    }).then((res)=>setproject_data(()=>res.data)).catch((err)=>console.log(err));
  }, [])

  const handle_select_project=(e)=>{
    setselected_project(()=>e.target.value)
    var count=-1
    for(var a=0;a<project_data.length;a++){
      if (project_data[a].project_name === e.target.value) {
        count = a;
        // console.log(project_data[a].task);
      }
    }
    console.log(count)
    console.log(project_data[count].task,"hello");
 settasks(() => project_data[count].task);
  }
const handleSubmitWeek=()=>{
  var work = [];
  var arr = week.day1;

  for (var a = 0; a < arr.length; a++) {
    // console.log(arr[a])
    const hour = arr[a].time;
    
    var tempwork = {
      billable: hour,
      notbillable: 0,
      task: arr[a].task,
      charge: 5,
    };
    work.push(tempwork);
  }

  var data = {
    project_name: week.day1[0].project,
    client_name: week.day1[0].client,
    week_number: "Week 1",
    emp_name: "Bharat Rozodkar",
    work: work,
  };
  console.log(data);
  
  axios
    .post("https://mysterious-ridge-11647.herokuapp.com/time", data, {
      headers: {
        authorization: `bearer ${token}`,
      }
    })
    .then((r) => console.log(r.data))
    .catch((err) => console.log(err));

}

  useEffect( () => {
    var temp=[]
    for(var key in projects){
      var obj={}
      obj.project_nm=key
      obj.cl_name = projects[key].client_name;
      temp.push(obj);
    }
setProject_names(()=>[...temp]);
  },[])
const handleNewTime = () => {
var timer = timeConverttToSecond(selectedTime);
var cl_name=""

for(var a=0;a<project_data.length;a++){
  if (project_data[a].project_name === selected_project) {
    cl_name = project_data[a].client_name;
  }
}
  const data = {
    task: selected_task,
    project: selected_project,
    client: cl_name,
    time: timer,
    id: uuid(),
  };
  const temp = week;
  week[selected_day].push(data);
  setweek({ ...temp });

  onClose()
};

  return (
    <div>
      <Box marginTop={"50px"}>
        <SecondaryNavbar />
      </Box>
      <div className={time.time_firstdiv}>
        <div className={time.time_firstdiv_left}>
          <button onClick={onOpen} className={time.time_firstdiv_left_btn}>
            <SmallAddIcon
              w={55}
              h={55}
              color="white"
              verticalAlign={"middle"}
              bg="#188433"
              className=""
            />
          </button>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                background="rgba(29,30,28,.07)"
                width={"100%"}
                margin={"auto"}
              >
                New time entry for Saturday, 01 Oct
              </ModalHeader>
              <ModalBody height={"auto"}>
                <p>Project / Task</p>

                <Select
                 
                  mt={3}
                  onChange={handle_select_project}
                  // setselected_project(e.target.value)
                  placeholder="Select project"
                >
                  {project_data.length > 0 &&
                    project_data.map((e, index) => {
                      return (
                        <option
                          background={"red"}
                          fontWeight="extrabold"
                          p={2}
                          key={index}
                          value={e.project_name}
                        >
                          {e.project_name}({e.client_name})
                          {/* <Text
                          bgGradient="linear(to-l, #7928CA, #FF0080)"
                          bgClip="text"
                          fontSize="6xl"
                          fontWeight="extrabold"
                        ></Text> */}
                          {/* <p background="red" className={time.modal_select_project_option}>
                          {e.project_name}({e.client_name})
                        </p> */}
                        </option>
                      );
                    })}
                  {project_name.map((e, index) => {
                    return (
                      <option
                        marginTop="100px"
                        key={index}
                        value={e.project_nm}
                      >
                        <p>{e.project_nm}</p>
                        <p>({e.cl_name})</p>
                      </option>
                    );
                  })}
                </Select>
                <Select
                  onChange={(e) => setselected_task(() => e.target.value)}
                  placeholder="Select task"
                  mt={3}
                >
                  {tasks.length>0 && tasks.map((elem, index) => {
                    return (
                      <option key={index} value={elem.task_name}>
                        {elem.task_name}
                      </option>
                    );
                  })}
                </Select>
                <Box mt={3}>
                  <Input placeholder="Notes (optional)" />
                </Box>
                <Box mt={3}>
                  <Input
                    type="text"
                    value={selectedTime}
                    onChange={(e) => setselectedTime(() => e.target.value)}
                    placeholder="0:00"
                  />
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button onClick={handleNewTime} mr={3} colorScheme="whatsapp">
                  Start timer
                </Button>
                <Button onClick={onClose} variant="ghost">
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <p>Tack time</p>
        </div>
        <div className={time.time_firstdiv_right}>
          <div className={time.time_firstdiv_right_head}>
            {/* <div className={time.time_firstdiv_right_head_days}> */}
            <Tabs>
              <TabList>
                <Tab onClick={(e) => setselected_day("day1")}>Day 1</Tab>
                <Tab>
                  <p onClick={(e) => setselected_day("day2")}>Day 2</p>
                </Tab>
                <Tab onClick={(e) => setselected_day("day3")}>Day 3</Tab>
                <Tab onClick={(e) => setselected_day("day4")}>Day 4</Tab>
                <Tab onClick={(e) => setselected_day("day5")}>Day 5</Tab>
                <Tab onClick={(e) => setselected_day("day6")}>Day 6</Tab>
                <Tab onClick={(e) => setselected_day("day7")}>Day 7</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {week[selected_day].length > 0 ? (
                    week[selected_day].map((elem, index) => {
                      const showtime = timeConverttToHour(elem.time);
                      return (
                        <div className={time.time_firstdiv_right_data_child}>
                          <div className={time.time_firstdiv_right_data_left}>
                            <div display="flex" backgroundColor="red">
                              <p>{elem.project}</p>
                              <p>({elem.client})</p>
                            </div>

                            {/* <p>{elem.task}</p> */}
                          </div>
                          <div className={time.time_firstdiv_right_data_right}>
                            <Counter
                              day={selected_day}
                              week={week}
                              setweek={setweek}
                              time={elem.time}
                              setisClockRunning={setisClockRunning}
                              isClockRunning={isClockRunning}
                              id={elem.id}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>Add task to track time</p>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
            {/* <div
                onClick={(e) => setselected_day("day1")}
                value="day1"
                style={{
                  background: selected_day == "day1" ? "red" : "none",
                }}
              >
                <p>Day 1</p>
                <p>0:00</p>
              </div>
              <div
                id="day2"
                onClick={(e) => setselected_day("day2")}
                style={{
                  background: selected_day == "day2" ? "red" : "none",
                }}
              >
                <p>Day 2</p>
                <p>0:00</p>
              </div>
              <div
                onClick={(e) => setselected_day("day3")}
                style={{
                  background: selected_day == "day3" ? "red" : "none",
                }}
                value="day3"
              >
                <p>Day 3</p>
                <p>0:00</p>
              </div>
              <div
                onClick={(e) => setselected_day("day4")}
                style={{
                  background: selected_day == "day4" ? "red" : "none",
                }}
                value="day4"
              >
                <p>Day 4</p>
                <p>0:00</p>
              </div>
              <div
                onClick={(e) => setselected_day("day5")}
                style={{
                  background: selected_day == "day5" ? "red" : "none",
                }}
                value="day5"
              >
                <p>Day 5</p>
                <p>0:00</p>
              </div>
              <div
                onClick={(e) => setselected_day("day6")}
                style={{
                  background: selected_day == "day6" ? "red" : "none",
                }}
                value="day6"
              >
                <p>Day 6</p>
                <p>0:00</p>
              </div>
              <div
                onClick={(e) => setselected_day("day7")}
                style={{
                  background: selected_day == "day7" ? "red" : "none",
                }}
                value="day7"
              >
                <p>Day 7</p>
                <p>0:00</p>
              </div>
              <div>Total</div>
            </div> */}
          </div>
          <div className={time.time_firstdiv_right_data}></div>
        </div>
      </div>
      <div className={time.final_submit}>
        <Button
          onClick={handleSubmitWeek}
          colorScheme="black"
          variant="outline"
        >
          Submit week for approval
        </Button>
      </div>

      <Box marginTop={"80%"}>
        <SecondaryFooter />
      </Box>
    </div>
  );
}
