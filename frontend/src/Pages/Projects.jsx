import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import project_page from "../module.css/projects.module.css";
import { Icon } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { SearchIcon, SmallAddIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <div>
      <div className={project_page.second_navbar_parent}>
        <div className={project_page.second_navbar}>
          <div className={project_page.second_navbar_left}>
            <button className={project_page.new_prj_btn}>
              <SmallAddIcon width={"20px"} height={"20px"} />
              New Project
            </button>
            <button className={project_page.imp_exp_btn}>Import</button>
            <button className={project_page.imp_exp_btn}>Export</button>
          </div>
          <div className={project_page.second_navbar_right}>
            <input
              className={project_page.inp_search}
              type="text"
              placeholder="Search by project or client"
            ></input>
          </div>
        </div>
      </div>
      <div>
        <p className={project_page.project_heading}>Projects</p>
        <div>
          <div className={project_page.project_filter_main}>
            <div className={project_page.project_filter_left}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    background={"white"}
                    border="1px solid black"
                    height={"35px"}
                  >
                    Budgeted Projects (1)
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <div className={project_page.project_filter_right}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    background={"white"}
                    border="1px solid black"
                    height={"35px"}
                  >
                    Filter By Client
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Button
                    background={"white"}
                    border="1px solid black"
                    height={"35px"}
                    width="190px"
                  >
                    Filter By Manager
                    <Icon width={"40px"} as={IoIosArrowDown} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Projects;
