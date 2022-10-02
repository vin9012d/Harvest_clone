import { Icon, SmallAddIcon } from '@chakra-ui/icons';
import { background, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Input } from 'reactstrap';
import time from "../module.css/time.module.css"
import SecondaryFooter from './SecondaryFooter';
import SecondaryNavbar from './SecondaryNavbar';
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
const timeconvert=(tm)=>{
const second=Math.floor(tm/1000)
const minute=Math.floor(second/60)
const hour=Math.floor(minute/60)
const remain_minute = minute%60
return hour +':'+ remain_minute;
}

export const Time = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setproject] = useState("")
  const [project_name,setProject_names]=useState([])
  const [selected_project, setselected_project] = useState(
    Object.keys(projects)[0]||""
  );
  const [selected_task,setselected_task]=useState("")
  const [selected_day, setselected_day] = useState("day1")
  const [week, setweek] = useState({day1:[],day2:[],day3:[],day4:[],day5:[],day6:[],day7:[]})
  const [isClockRunning, setisClockRunning] = useState(false)

 
    
   
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

  const data = {
    task: selected_task,
    project: selected_project,
    client: projects[selected_project].client_name,
    time:0
  };
  const temp = week;
  week[selected_day].push(data);
  setweek({ ...temp });
  console.log(week);
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
              <ModalBody>
                <p>Project / Task</p>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      background={"white"}
                      border="1px solid black"
                      height={"auto"}
                      padding="10px 0px"
                      width={"100%"}
                      margin="auto"
                    >
                      {selected_project ? selected_project : "Select Project"}
                      <Icon width={"40px"} as={IoIosArrowDown} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent width="100%">
                    <PopoverArrow />
                    <PopoverBody>
                      <input
                        className={time.inp_search}
                        type="text"
                        placeholder="Search ..."
                      ></input>
                      {project_name.map((e, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => setselected_project(e.project_nm)}
                          >
                            <p>{e.cl_name}</p>
                            <p>{e.project_nm}</p>
                          </div>
                        );
                      })}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      background={"white"}
                      border="1px solid black"
                      height={"auto"}
                      padding="10px 0px"
                      width={"100%"}
                      margin="auto"
                    >
                      {selected_task ? selected_task : "Select task"}
                      <Icon width={"40px"} as={IoIosArrowDown} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent width="100%">
                    <PopoverArrow />
                    <PopoverBody>
                      <input
                        className={time.inp_search}
                        type="text"
                        placeholder="Search ..."
                      ></input>
                      {projects[selected_project].tasks.map((e) => {
                        return <p onClick={() => setselected_task(e)}>{e}</p>;
                      })}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <div display="flex  ">
                  <Input placeholder="Notes (optional)" width="50px" />
                  <Input
                    placeholder="0:00"
                    // htmlSize={5}
                    w={25}
                    // size="lg"
                  />
                </div>
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
            <div className={time.time_firstdiv_right_head_days}>
              <div
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
            </div>
          </div>
          <div className={time.time_firstdiv_right_data}>
            {week[selected_day].length > 0 ? (
              week[selected_day].map((elem, index) => {
                const showtime = timeconvert(elem.time);
                return (
                  <div className={time.time_firstdiv_right_data_child}>
                    <div className={time.time_firstdiv_right_data_left}>
                      <div display="flex" backgroundColor="red">
                        <p>{elem.project}</p>
                        <p>({elem.client})</p>
                      </div>

                      <p>{elem.task}</p>
                    </div>
                    <div className={time.time_firstdiv_right_data_right}>
                      <div>{showtime}</div>

                      {isClockRunning ? (
                        <button
                          
                          className={time.time_firstdiv_right_data_right_button}
                        >
                          <div className={time.clock}></div>
                          <p>Stop</p>
                        </button>
                      ) : (
                        <Button
                         
                          backgroundColor={"black"}
                          color="white"
                        >
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Add task to track time</p>
            )}
          </div>
        </div>
      </div>
      <Box marginTop={"80%"}>
        <SecondaryFooter />
      </Box>
    </div>
  );
}
