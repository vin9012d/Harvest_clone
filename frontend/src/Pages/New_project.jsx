import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Editable,
  EditablePreview,
  EditableTextarea,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import new_project from "../module.css/new_project.module.css";
import SecondaryFooter from "./SecondaryFooter";
import SecondaryNavbar from "./SecondaryNavbar";
// var clientnames=["vinod","govid","bharat","arbaz"]

const NewProject = () => {
  const token = useSelector((store) => store.AuthReducer.token);
  const [selected, setselected] = useState(0);
  const [clientnames,setClientNames]=useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [team_names, setteam] = useState(["Vinod Chaudhari"])
  const [first_name, setfirst_name] = useState("")
const [last_name, setlast_name] = useState("")
const [name, setname] = useState("")
const [selected_team,setselected_team]=useState([team_names[0]])
const [charge, setcharge] = useState([0])
const [selected_team_charge, setselected_team_charge] = useState([charge[0]]);

const [client_name, setclient_name] = useState('')
const [project_name, setproject_name] = useState("")
const [start_date, setstart_date] = useState("")
const [end_date, setend_date] = useState("")
const [budget, setbudget] = useState(0)
const navigate=useNavigate()
var task = [
  { task_name: "Business Development" },
  { task_name: "Design" },
  { task_name: "Marketing" },
  { task_name: "Programming" },
];

console.log(start_date, end_date);
  var tasks = [
    "Business Development",
    "Design",
    "Marketing",
    " Programming",
    "Vacation",
  ];

  const Submit_project = () => {
    
    const team_data=[]
    for(var a=0;a<selected_team.length;a++){
      var obj={}
      obj.emp_name=selected_team[a]
     
      const indexof = team_names.indexOf(selected_team[a])

       obj.charge = charge[indexof];
      console.log(obj,"in")
      team_data.push(obj);
    }
    const data={
      client_name,
      project_name,
      budget,
      task,
      end_date,
      date:start_date,
      team:team_data
    }
    console.log(data)
    axios
      .post("https://mysterious-ridge-11647.herokuapp.com/project", data, {
        headers: {
          authorization: `bearer ${token}`,
        },
      }).then(()=>navigate("/projects"))
      .catch((e) => console.log(e, "err"));
  }

const handleDeleteTeamMember=async(e)=>{
  const {id}=e.target
  console.log(e.target.id,"jk")
      const temp = team_names;
      var indexOfTeam=-1
      for (let a = 0; a < temp.length; a++) {
        // console.log(id,temp[a])
        if (temp[a] === id) {
          indexOfTeam = a;
          break;
        }
      }
   temp.splice(indexOfTeam,1);
  await setteam(()=>temp)
  let index=-1
  var tempteam = selected_team
  for (let a = 0; a < tempteam.length; a++) {
    if (temp[a] === id) {
      index = a;
      break;
    }
  }
  if(index!=-1){
    var tempcharge=charge
    tempteam.splice(index,1)
    tempcharge.splice(index, 1);
    setcharge(()=>tempcharge)
    setselected(() => tempteam);
  }

}
  const handle_team_charge=async(e)=>{

    const {value,id}=e.target
    const temp = team_names;
    var index=-1
     for (var a = 0; a <temp.length; a++){
       if (temp[a] === id) {
         index = a;
         break;
       }
     }
     const tempcharge=charge
      tempcharge[index]=value
      console.log(tempcharge)
   await setcharge(()=>tempcharge)
   console.log(charge)

  }
  const handlecheckbox=(e)=>{

   const {checked,id}=e.target
    var temp = selected_team;
    var tempcharge=selected_team_charge
    // console.log(id,"nm")
   if(checked){
   temp.push(id)
   tempcharge.push(0)
   }
   if (!checked) {

    let index=-1
    for(var a=0;a<temp.length;a++){
      if(temp[a]==id){
          index=a
          break;
      }
    }
    if (index > -1) { 
      temp.splice(index, 1)
      tempcharge.splice(index,1)
    }
   }
  //  console.log(temp)
    setselected_team(temp);
    setselected_team_charge(()=>tempcharge)
  }

  const handlenameadd=async()=>{
   await setteam(()=>[...team_names, first_name + " " + last_name])
  await  setcharge(()=>[...charge,0])
  }

  useEffect(() => {
    axios
      .get("https://mysterious-ridge-11647.herokuapp.com/client", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) =>  setClientNames(res.data))
      .catch((e) => console.log(e, "err"));
  },[]);


  return (
    <div>
      <Box marginTop={"50px"}>
        <SecondaryNavbar />
      </Box>
      <div className={new_project.new_prj_main}>
        <h1 className={new_project.new_prj_heading}>New project</h1>
        <hr></hr>
        <div className={new_project.new_prj_box2}>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left_1st}>Client</p>
            <div className={new_project.new_prj_box2_right_1st}>
              <Popover width={"90%"}>
                <PopoverTrigger>
                  <button
                    className={new_project.new_prj_box2_right_1st_btn}
                    width={"90%"}
                  >
                    {client_name.length > 0
                      ? client_name
                      : "Choose a client..."}
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  width="850px"
                  className={new_project.new_prj_box2_right_1st_opt}
                >
                  <PopoverArrow marginRight={"100px"} />
                  <PopoverBody>
                    <input
                      className={new_project.inp_search}
                      type="text"
                      placeholder="Search by project or client"
                    ></input>
                    {   clientnames.length>0 &&   clientnames.map((elem) => {
                      return (
                        <p
                          id={elem.client_name}
                          key={elem.client_name}
                          onClick={(e) => setclient_name(() => e.target.id)}
                        >
                          {elem.client_name}
                        </p>
                      );
                    })}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Project name</p>
            <div className={new_project.new_prj_box2_right_2nd}>
              <Input
                onChange={(e) => setproject_name(() => e.target.value)}
                focusBorderColor="black"
                borderColor="gray.400"
              />
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Project code</p>
            <div className={new_project.new_prj_box2_right_3rd}>
              <Input
                width={"20%"}
                focusBorderColor="black"
                borderColor="gray.400"
              />
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Dates</p>
            <div className={new_project.new_prj_box2_right_4th}>
              <Input
                htmlSize={10}
                height="50px"
                width="auto"
                focusBorderColor="black"
                marginRight={"10px"}
                borderColor="gray.400"
                placeholder="start to"
                type={"date"}
                value={start_date}
                onChange={(e) => setstart_date(() => e.target.value)}
              />
              <p>to</p>
              <Input
                htmlSize={10}
                height="50px"
                width="auto"
                focusBorderColor="black"
                borderColor="gray.400"
                placeholder="ends to"
                type={"date"}
                value={end_date}
                onChange={(e) => setend_date(() => e.target.value)}
                marginLeft="10px"
              />
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Notes</p>
            <div className={new_project.new_prj_box2_right_5th}>
              <Textarea focusBorderColor="black" borderColor="gray.400" />
              <p>
                Optional. Notes are great for anything you need to reference
                later, like invoice schedules, which you can see when creating
                an invoice for Fixed Fee projects. Notes can only be seen by
                Administrators. Administrators can control access to notes in
                Settings.
              </p>
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Permissions</p>
            <div className={new_project.new_prj_box2_right_6th}>
              <RadioGroup>
                <Radio colorScheme="orange" size="md" value="1">
                  Show project report to Administrators and people who manage
                  this project . <button> What will people see?</button>
                </Radio>
                <Radio colorScheme="orange" size="md" value="2">
                  Show project report to everyone on this project .
                  <button> What will people see?</button>
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className={new_project.new_prj_box3}>
          <div className={new_project.new_prj_type_left}>Project type</div>
          <div className={new_project.new_prj_type_right}>
            <Tabs variant="unstyled">
              <TabList width={"100%"} justifyContent={"space-between"}>
                <Tab
                  _selected={{ bg: "#ffe7d9", border: "1px solid #fa5d00" }}
                  border="1px solid #bbb"
                  borderRadius={"4px"}
                  width="32%"
                >
                  <div className={new_project.new_prj_type_right_buttons}>
                    <p>Time & Materials </p>
                    <p>Bill by the hour, with billable rates</p>
                  </div>
                </Tab>
                <Tab
                  _selected={{ bg: "#ffe7d9", border: "1px solid #fa5d00" }}
                  border="1px solid #bbb"
                  borderRadius={"4px"}
                  width="32%"
                >
                  <div className={new_project.new_prj_type_right_buttons}>
                    <p>Fixed Fee</p>
                    <p>Bill a set price, regardless of time tracked</p>
                  </div>
                </Tab>
                <Tab
                  _selected={{ bg: "#ffe7d9", border: "1px solid #fa5d00" }}
                  border="1px solid #bbb"
                  borderRadius={"4px"}
                  width="32%"
                >
                  <div className={new_project.new_prj_type_right_buttons}>
                    <p>Non-Billable</p>
                    <p>Not billed to a client</p>
                  </div>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className={new_project.new_prj_type_right_2nd_form}>
                    <div
                      className={new_project.new_prj_type_right_2nd_form_2nddiv}
                    >
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Billable rates
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        We need billable rates to determine how much of your
                        budget is spent.
                      </p>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Select
                          bg={"white"}
                          width={"20%"}
                          focusBorderColor="black"
                        >
                          <option value="no budget">No budget</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="total project fees">
                            Total project fees
                          </option>
                          <option value="fees per task">Fees per task</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="totl project hours">
                            Total project hours
                          </option>
                          <option value="hours per task">Hours per task</option>
                          <option value="Hours per person">
                            Hours per person
                          </option>
                        </Select>
                        <label> $</label>
                        <Input
                          height={"40px"}
                          width={"10%"}
                          focusBorderColor="black"
                          bg={"white"}
                        />
                        <label>per hour</label>
                      </div>
                    </div>

                    <div
                      className={new_project.new_prj_type_right_2nd_form_2nddiv}
                    >
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Budget
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        Set a budget to track project progress.
                      </p>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Select
                          bg={"white"}
                          width={"20%"}
                          focusBorderColor="black"
                        >
                          <option value="no budget">No budget</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="total project fees">
                            Total project fees
                          </option>
                          <option value="fees per task">Fees per task</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="totl project hours">
                            Total project hours
                          </option>
                          <option value="hours per task">Hours per task</option>
                          <option value="Hours per person">
                            Hours per person
                          </option>
                        </Select>
                        <Input
                          height={"35px"}
                          width={"10%"}
                          focusBorderColor="black"
                          bg={"white"}
                          marginLeft="10px"
                          type="number"
                          value={budget}
                          onChange={(e) => setbudget(() => e.target.value)}
                        />
                        <label> $</label>
                      </div>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Checkbox bg={"white"} size={"lg"} colorScheme="red" />
                        <span>
                          Budget includes billable and non-billable project
                          expenses.
                        </span>
                      </div>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Checkbox
                          bg={"white"}
                          size={"lg"}
                          colorScheme="red"
                        ></Checkbox>
                        <span>
                          Send email alerts if project exceeds
                          <Input
                            height={"30px"}
                            width={"13%"}
                            focusBorderColor="black"
                            bg={"white"}
                          />
                          % of budget.
                        </span>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={new_project.new_prj_type_right_2nd_form}>
                    <div>
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Project fees
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        Enter the amount you plan to invoice.
                      </p>
                      <label
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        ${" "}
                      </label>
                      <Input
                        htmlSize={5}
                        height="50px"
                        width="10%"
                        focusBorderColor="black"
                        marginLeft={"10px"}
                        bg={"white"}
                        type={"number"}
                      />
                    </div>
                    <div
                      className={new_project.new_prj_type_right_2nd_form_2nddiv}
                    >
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Budget
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        Set a budget to track project progress.
                      </p>
                      <Select
                        bg={"white"}
                        width={"20%"}
                        focusBorderColor="black"
                      >
                        <option value="no budget">No budget </option>
                        <hr
                          className={
                            new_project.new_prj_type_right_2nd_form_2nddiv_hr
                          }
                        />
                        <option value="total project fees">
                          Total project fees
                        </option>
                        <option value="fees per task">Fees per task</option>
                        <hr
                          className={
                            new_project.new_prj_type_right_2nd_form_2nddiv_hr
                          }
                        />
                        <option value="totl project hours">
                          Total project hours
                        </option>
                        <option value="hours per task">Hours per task</option>
                        <option value="Hours per person">
                          Hours per person
                        </option>
                      </Select>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Checkbox bg={"white"} size={"lg"} colorScheme="red" />
                        <span>
                          Budget includes billable and non-billable project
                          expenses.
                        </span>
                      </div>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Checkbox
                          bg={"white"}
                          size={"lg"}
                          colorScheme="red"
                        ></Checkbox>
                        <span>
                          Send email alerts if project exceeds{" "}
                          <Input
                            height={"40px"}
                            width={"10%"}
                            focusBorderColor="black"
                            bg={"white"}
                          />
                          % of budget.
                        </span>
                      </div>
                    </div>
                    <div
                      className={new_project.new_prj_type_right_2nd_form_2nddiv}
                    >
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Billable rates
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        We need billable rates to determine how much of your
                        budget is spent.
                      </p>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Select
                          bg={"white"}
                          width={"20%"}
                          focusBorderColor="black"
                        >
                          <option value="no budget">No budget</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="total project fees">
                            Total project fees
                          </option>
                          <option value="fees per task">Fees per task</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="totl project hours">
                            Total project hours
                          </option>
                          <option value="hours per task">Hours per task</option>
                          <option value="Hours per person">
                            Hours per person
                          </option>
                        </Select>
                        <label> $</label>
                        <Input
                          height={"40px"}
                          width={"10%"}
                          focusBorderColor="black"
                          bg={"white"}
                        />
                        <label>per hour</label>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={new_project.new_prj_type_right_2nd_form}>
                    <div>
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Project fees
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        Enter the amount you plan to invoice.
                      </p>
                      <label
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        ${" "}
                      </label>
                      <Input
                        htmlSize={5}
                        height="50px"
                        width="10%"
                        focusBorderColor="black"
                        marginLeft={"10px"}
                        bg={"white"}
                        type={"number"}
                      />
                    </div>
                    <div
                      className={new_project.new_prj_type_right_2nd_form_2nddiv}
                    >
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Budget
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        Set a budget to track project progress.
                      </p>
                      <Select
                        bg={"white"}
                        width={"20%"}
                        focusBorderColor="black"
                      >
                        <option value="no budget">No budget </option>
                        <hr
                          className={
                            new_project.new_prj_type_right_2nd_form_2nddiv_hr
                          }
                        />
                        <option value="total project fees">
                          Total project fees
                        </option>
                        <option value="fees per task">Fees per task</option>
                        <hr
                          className={
                            new_project.new_prj_type_right_2nd_form_2nddiv_hr
                          }
                        />
                        <option value="totl project hours">
                          Total project hours
                        </option>
                        <option value="hours per task">Hours per task</option>
                        <option value="Hours per person">
                          Hours per person
                        </option>
                      </Select>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Checkbox bg={"white"} size={"lg"} colorScheme="red" />
                        <span>
                          Budget includes billable and non-billable project
                          expenses.
                        </span>
                      </div>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Checkbox
                          bg={"white"}
                          size={"lg"}
                          colorScheme="red"
                        ></Checkbox>
                        <span>
                          Send email alerts if project exceeds{" "}
                          <Input
                            height={"40px"}
                            width={"20%"}
                            focusBorderColor="black"
                            bg={"white"}
                          />
                          % of budget.
                        </span>
                      </div>
                    </div>
                    <div
                      className={new_project.new_prj_type_right_2nd_form_2nddiv}
                    >
                      <p
                        className={
                          new_project.new_prj_type_right_2nd_form_title
                        }
                      >
                        Billable rates
                      </p>
                      <p
                        className={new_project.new_prj_type_right_2nd_form_text}
                      >
                        We need billable rates to determine how much of your
                        budget is spent.
                      </p>
                      <div
                        className={
                          new_project.new_prj_type_right_2nd_form_2nddiv_check
                        }
                      >
                        <Select
                          bg={"white"}
                          width={"20%"}
                          focusBorderColor="black"
                        >
                          <option value="no budget">No budget</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="total project fees">
                            Total project fees
                          </option>
                          <option value="fees per task">Fees per task</option>
                          <hr
                            className={
                              new_project.new_prj_type_right_2nd_form_2nddiv_hr
                            }
                          />
                          <option value="total project hours">
                            Total project hours
                          </option>
                          <option value="hours per task">Hours per task</option>
                          <option value="Hours per person">
                            Hours per person
                          </option>
                        </Select>
                        <label> $</label>
                        <Input
                          height={"40px"}
                          width={"10%"}
                          focusBorderColor="black"
                          bg={"white"}
                        />
                        <label>per hour</label>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <div className={new_project.new_prj_type_right_content}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className={new_project.new_prj_box4}>
          <div className={new_project.new_prj_box4_head}>
            <div className={new_project.new_prj_box4_head_left}>Tasks</div>
            <div className={new_project.new_prj_box4_head_right}>
              <p>Billable</p>
              Select <button> All</button> /<button> None</button>
            </div>
          </div>
          {tasks.map((elem) => {
            return (
              <div className={new_project.new_prj_box4_data}>
                <div className={new_project.new_prj_box4_data_left}>
                  <div>
                    <CloseIcon w={2.5} h={2.5} />
                  </div>
                  <div>{elem}</div>
                </div>
                <div className={new_project.new_prj_box4_data_right}>
                  <input type={"checkbox"} />
                </div>
              </div>
            );
          })}
          <input
            className={new_project.tag_input_search}
            type="text"
            placeholder="Add a task..."
          ></input>
        </div>
        <div>
          <div className={new_project.new_prj_box4_head}>
            <div className={new_project.new_prj_box4_head_left}>Team</div>
            <div className={new_project.new_prj_box4_head_right}>
              <p>Manages this project</p>
              Select <button> All</button> /<button> None</button>
            </div>
          </div>
          {team_names.map((elem, index) => {
            return (
              <div className={new_project.new_prj_box4_data}>
                <div className={new_project.new_prj_box4_data_left}>
                  <div id={elem} onClick={handleDeleteTeamMember}>
                    <CloseIcon w={2.5} h={2.5} />
                  </div>
                  <div>{elem}</div>
                </div>
                <div className={new_project.new_prj_box5_data_right}>
                  <Editable width={"60%"} defaultValue="0">
                    <EditablePreview
                      w={10}
                      border={"1px"}
                      borderColor="gray.200"
                      mt={0}
                    />
                    <EditableTextarea
                      id={elem}
                      onChange={handle_team_charge}
                      width={"60%"}
                    />
                  </Editable>
                  {index === 0 ? (
                    <input
                      id={elem}
                      onChange={(e) => handlecheckbox(e)}
                      defaultChecked
                      type={"checkbox"}
                    />
                  ) : (
                    <input
                      id={elem}
                      onChange={(e) => handlecheckbox(e)}
                      type={"checkbox"}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className={new_project.new_prj_invite}>
          Need to add other people to this project?
          <button onClick={onOpen}>Add team member</button> to Harvest!
          <Box
            ref={finalRef}
            tabIndex={-1}
            aria-label="Focus moved to this box"
          >
            Some other content that'll receive focus on close.
          </Box>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Team Member</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                  width={"50%"}
                  placeholder="First Name"
                />
                <Input
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                  width={"50%"}
                  placeholder="Last Name"
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button onClick={() => handlenameadd()} variant="ghost">
                  Add member
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </p>
        <div className={new_project.new_prj_boottom_btn}>
          <button
            onClick={Submit_project}
            className={new_project.new_prj_save_btn}
          >
            Save project
          </button>
          <button className={new_project.new_prj_cancel_btn}>Cancel</button>
        </div>
      </div>
      <Box >
        <SecondaryFooter />
      </Box>
    </div>
  );
};

export default NewProject;
