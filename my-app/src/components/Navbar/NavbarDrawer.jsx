import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import React from 'react'

import { HiMenu } from "react-icons/hi";

const NavbarDrawer = ({ isOpen, onOpen, onClose }) => {
  return (
    <Box
      display={{ sm: "block", base: "block", md: "block", lg: "none" }}
      pr={[2, null, 4]}
    >
      <Button colorScheme="#32620e" onClick={onOpen}>
        <HiMenu boxsize={6} w={12} h={12} color={"white"} />
      </Button>

      <Drawer
        color={"white"}
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        
        size={["full", "2xl", "sm", "xs"]}
      >
        <DrawerOverlay />
        <DrawerContent color={"white"} fontSize={"30px"} fontWeight={600}>
          <DrawerCloseButton />
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
          <DrawerBody  backgroundColor={"#32620e"}>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <RouterLink
                // to="Home"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Search
              </RouterLink>
            </Box>{" "}
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <RouterLink
                to="/corporate"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Corporate
              </RouterLink>
            </Box>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <RouterLink
                to="/export"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Expert Support
              </RouterLink>
            </Box>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <RouterLink
                to="/login"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
                cu
              >
                Login
              </RouterLink>
            </Box>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <RouterLink
                to="/cart"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Cart
              </RouterLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarDrawer
