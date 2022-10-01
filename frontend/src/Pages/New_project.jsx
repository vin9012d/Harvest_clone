import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Icon,
  Input,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import new_project from "../module.css/new_project.module.css";
const NewProject = () => {
  const [selected, setselected] = useState(0);
  var tasks = [
    "Business Development",
    "Design",
    "Marketing",
    " Programming",
    "Vacation",
  ];
  return (
    <div>
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
                    Chose a client...{" "}
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
                    <p>Example Project</p>
                    <p>Govind</p>
                    <p>Vinod</p>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Project name</p>
            <div className={new_project.new_prj_box2_right_2nd}>
              <Input focusBorderColor="black" />
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left_3rd}>Project code</p>
            <div className={new_project.new_prj_box2_right_3rd}>
              <Input width={"20%"} focusBorderColor="black" />
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
                placeholder="start to"
                type={"date"}
              />
              <p >to</p>
              <Input
                htmlSize={10}
                height="50px"
                width="auto"
                focusBorderColor="black"
                placeholder="ends to"
                type={"date"}
                marginLeft="10px"
              />
            </div>
          </div>
          <div className={new_project.new_prj_box2_row}>
            <p className={new_project.new_prj_box2_left}>Notes</p>
            <div className={new_project.new_prj_box2_right_5th}>
              <Textarea focusBorderColor="black" />
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
                  <div>
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
                  <div>
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
                  <div>
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
                        />
                        <label> hours</label>
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
                          <option marginBottom="10px" value="fees per task">
                            Fees per task
                          </option>
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
                  <p>Three!</p>
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
            console.log(elem);
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
          {tasks.map((elem) => {
            console.log(elem);
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
        </div>
        <p className={new_project.new_prj_invite}>
          Need to add other people to this project?
          <button>Invite them</button> to Harvest!
        </p>
        <div className={new_project.new_prj_boottom_btn}>
          <button className={new_project.new_prj_save_btn}>Save project</button>
          <button className={new_project.new_prj_cancel_btn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
