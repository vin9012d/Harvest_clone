import { Button, Icon, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react';
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import new_project from "../module.css/new_project.module.css"
const NewProject = () => {
  return (
    <div>
      <div className={new_project.new_prj_main}>
        <h1 className={new_project.new_prj_heading}>New project</h1>
        <hr></hr>
        <div className={new_project.new_prj_box2}>
          <div className={new_project.new_prj_box2_left}>
            <p className={new_project.new_prj_box2_left_1st}>Client</p>

            <p className={new_project.new_prj_box2_left_2nd}>Project name</p>
            <p className={new_project.new_prj_box2_left_3rd}>Project code</p>
            <p className={new_project.new_prj_box2_left_4th}>Dates</p>
            <p className={new_project.new_prj_box2_left_5th}>Notes</p>
            <p className={new_project.new_prj_box2_left_6th}>Permissions</p>
          </div>
          <div className={new_project.new_prj_box2_right}>
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
            <div className={new_project.new_prj_box2_right_2nd}>
              <Input focusBorderColor="black" />
            </div>
            <div className={new_project.new_prj_box2_right_3rd}>
              <Input width={"20%"} focusBorderColor="black" />
            </div>
            <div className={new_project.new_prj_box2_right_4th}>
              <Input
                htmlSize={10}
                height="50px"
                width="auto"
                focusBorderColor="black"
                placeholder="start to"
                type={"date"}
              />
              <p width="20px">to</p>
              <Input
                htmlSize={10}
                height="50px"
                width="auto"
                focusBorderColor="black"
                placeholder="ends to"
                type={"date"}
              />
            </div>
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
      </div>
    </div>
  );
};

export default NewProject;
