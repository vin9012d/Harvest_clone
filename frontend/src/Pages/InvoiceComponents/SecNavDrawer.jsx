import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function SecNavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant={"ghost"} onClick={onOpen} _hover={{ variant: "ghost" }}>
        <HamburgerIcon
          ml="-2rem"
          h={8}
          w={8}
          color="white"
          display={{
            sm: "flex",
            base: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
          }}
        />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} bg="green">
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />

          <DrawerBody my="2rem">
            <NavLink to="/time">Time</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
            <NavLink to="/expenses">Expenses</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
            <NavLink to="/projects">Projects</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
            <NavLink to="/team">Team</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
            <NavLink to="/report">Reports</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
            <NavLink to="/invoices">Invoices</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
            <NavLink to="/manages">Manage</NavLink>
            <Box my="5px" borderBottom={"1px solid grey"}></Box>
          </DrawerBody>

          <DrawerFooter>
            {/* In case of adding profile and sign out */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SecNavDrawer;
