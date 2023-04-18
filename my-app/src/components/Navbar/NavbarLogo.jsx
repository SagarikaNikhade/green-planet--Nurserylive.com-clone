import { Box, Image } from '@chakra-ui/react'
import React from 'react';
import Logo from "../Logo/green-planet.png";

const NavbarLogo = () => {
  return (
    <Box pl={3} width="100px">
      <Image
        src={Logo}
        cursor={"pointer"}
        borderRadius={"50%"}
        overflow="hidden"
        width={"60px"}
        p="5px"
        h={"60px"}
      ></Image>
    </Box>
  );
}

export default NavbarLogo
