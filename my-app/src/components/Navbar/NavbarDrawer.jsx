import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  Button,
  DrawerCloseButton,
  Text,
  Divider,
  VStack,
  HStack,
  Avatar,
  Badge
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import React from 'react'
import { useSelector } from 'react-redux';
import { HiMenu } from "react-icons/hi";

const NavbarDrawer = ({ isOpen, onOpen, onClose }) => {
  const auth = useSelector(store => store.authReducer);

  console.log('NavbarDrawer - User role:', auth?.user?.role);

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };

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
          <DrawerBody backgroundColor={"#32620e"}>
            <VStack spacing={4} align="stretch" mt={4}>
              {/* User Profile Section */}
              {auth.isAuthenticated && (
                <>
                  <Box p={3} bg="rgba(255, 255, 255, 0.1)" borderRadius="md">
                    <HStack spacing={3}>
                      <Avatar
                        size="md"
                        name={getInitials(auth.user?.firstName, auth.user?.lastName)}
                        bg="green.500"
                        color="white"
                      />
                      <Box>
                        <Text color="white" fontWeight="bold" fontSize="md">
                          {auth.user?.firstName} {auth.user?.lastName}
                        </Text>
                        <Text color="gray.300" fontSize="sm">
                          {auth.user?.email}
                        </Text>
                        <Badge 
                          colorScheme={auth.user?.role === 'admin' ? 'red' : 'blue'} 
                          size="sm"
                        >
                          {auth.user?.role === 'admin' ? 'Admin' : 'User'}
                        </Badge>
                      </Box>
                    </HStack>
                  </Box>
                  <Divider />
                </>
              )}

              {/* Navigation Links */}
              <Box cursor={"pointer"} py={2}>
                <RouterLink
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  textDecoration="none"
                  onClick={onClose}
                >
                  <Text color="white">Home</Text>
                </RouterLink>
              </Box>

              <Box cursor={"pointer"} py={2}>
                <RouterLink
                  to="/corporate"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  textDecoration="none"
                  onClick={onClose}
                >
                  <Text color="white">Corporate</Text>
                </RouterLink>
              </Box>

              <Box cursor={"pointer"} py={2}>
                <RouterLink
                  to="/expert"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  textDecoration="none"
                  onClick={onClose}
                >
                  <Text color="white">Expert Support</Text>
                </RouterLink>
              </Box>

              {auth.isAuthenticated ? (
                <>
                  <Box cursor={"pointer"} py={2}>
                    <RouterLink
                      to="/cart"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                      textDecoration="none"
                      onClick={onClose}
                    >
                      <Text color="white">My Cart</Text>
                    </RouterLink>
                  </Box>

                  <Box cursor={"pointer"} py={2}>
                    <RouterLink
                      to="/orders"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                      textDecoration="none"
                      onClick={onClose}
                    >
                      <Text color="white">My Orders</Text>
                    </RouterLink>
                  </Box>

                  {auth.user?.role === 'admin' && (
                    <Box cursor={"pointer"} py={2}>
                      <RouterLink
                        to="/admin"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                        textDecoration="none"
                        onClick={onClose}
                      >
                        <HStack>
                          <Text color="white">Admin Dashboard</Text>
                          <Badge colorScheme="red" size="sm">Admin</Badge>
                        </HStack>
                      </RouterLink>
                    </Box>
                  )}

                  <Divider />
                  
                  <Box cursor={"pointer"} py={2}>
                    <RouterLink
                      to="/profile"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                      textDecoration="none"
                      onClick={onClose}
                    >
                      <Text color="white">My Profile</Text>
                    </RouterLink>
                  </Box>
                </>
              ) : (
                <>
                  <Box cursor={"pointer"} py={2}>
                    <RouterLink
                      to="/login"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                      textDecoration="none"
                      onClick={onClose}
                    >
                      <Text color="white">Login</Text>
                    </RouterLink>
                  </Box>

                  <Box cursor={"pointer"} py={2}>
                    <RouterLink
                      to="/signup"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                      textDecoration="none"
                      onClick={onClose}
                    >
                      <Text color="white">Signup</Text>
                    </RouterLink>
                  </Box>
                </>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarDrawer
