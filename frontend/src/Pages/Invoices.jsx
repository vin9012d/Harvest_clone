import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Text } from "@chakra-ui/react";
import Overview from "./InvoiceComponents/Tab-bar/Overview";

export const Invoices = () => {
  return (
    <div>
      <h1>Navbar</h1>
      {/* Tab bar start here */}
      <Tabs>
        <TabList gap='1rem' >
          <Tab fontSize='14px' ml='5rem' _selected={{fontWeight:"600",borderBottom:"2px solid orangered"}} _hover={{borderBottom:"2px solid orangered",fontWeight:"500"}}>Overview</Tab>
          <Tab fontSize='14px' _selected={{fontWeight:"600",borderBottom:"2px solid orangered"}} _hover={{borderBottom:"2px solid orangered",fontWeight:"500"}}>Report</Tab>
          <Tab fontSize='14px' _selected={{fontWeight:"600",borderBottom:"2px solid orangered"}} _hover={{borderBottom:"2px solid orangered",fontWeight:"500"}}>Recurring</Tab>
          <Tab fontSize='14px' _selected={{fontWeight:"600",borderBottom:"2px solid orangered"}} _hover={{borderBottom:"2px solid orangered",fontWeight:"500"}}>Retainers</Tab>
          <Tab fontSize='14px' _selected={{fontWeight:"600",borderBottom:"2px solid orangered"}} _hover={{borderBottom:"2px solid orangered",fontWeight:"500"}}>Configure</Tab>
        </TabList>
        <TabPanels>
          <TabPanel w='91%' m="auto">
            <Text align='left' fontSize='32px' fontWeight='600'>Invoices</Text>
            <Overview/>
          </TabPanel>
          {/* <TabPanel>
            <p>two!</p>
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  );
};
