import { Box, Flex, HStack, Spacer, useDisclosure ,Input} from "@chakra-ui/react";
import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarDrawer from "./NavbarDrawer";
import { Link as RouterLink } from "react-router-dom";


const Navbar = () => {

const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      // bg={"#22201"}
      backgroundColor={"#32620e"}
      position="sticky"
      top="0"
      zIndex="100"
      boxShadow="rgba(61, 61, 148, 0.25) 0px 6px 12px -2px, rgba(34, 30, 30, 0.3) 0px 3px 7px -3px"
    >
      <Flex alignItems="center" justifyContent={"space-between"}>
        <RouterLink to="/" spy={true} smooth={true} offset={-40} duration={500}>
          <NavbarLogo />
        </RouterLink>
        {isOpen?<Spacer />:null}
        <HStack
          pr={10}
          spacing={[6, 8, 10, 10]}
          display={{ sm: "none", base: "none", md: "none", lg: "flex" }}
          fontSize="20px"
          color={"white"}
        >
          <Box cursor={"pointer"}>
            <RouterLink
              // to="Home"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            >
              {/* Home */}
              <Input placeholder='Search here' w={400} h={50} borderRadius={10}/>
            </RouterLink>
          </Box>{" "}
          <Box cursor={"pointer"}>
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
          <Box cursor={"pointer"}>
            <RouterLink
              to="/expert"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            >
              Expert Support
            </RouterLink>
          </Box>
          <Box cursor={"pointer"}>
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
          <Box cursor={"pointer"}>
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
        </HStack>
       {/* Drawer */}
        <NavbarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      </Flex>
    </Box>
  );
};

export default Navbar;
