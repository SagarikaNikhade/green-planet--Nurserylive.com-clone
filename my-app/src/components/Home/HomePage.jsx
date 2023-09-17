import React from 'react';
import { Slideshow } from './Slideshow';
import { Center,Image, Box,Text} from '@chakra-ui/react';
import styled from 'styled-components';
import GridBox from './GridBox';
import Video from './Video';
import Nav2 from "./Nav2";

const HomePage = () => {
  return (
    <DIV>
       {/* nav-2 */}
       <Nav2/>

      {/* slider */}
      <Center >
        <Slideshow />
      </Center>


      <Center>
  <Box 
    border='0px solid white' 
    mt='30px' 
    bgGradient="linear(to-r, green.500, #8dd15a)"
    p="20px"
    rounded="md"
    boxShadow="lg"
  >
    <h2 style={{ 
      color: 'white', 
      fontFamily: 'Cabin, sans-serif', 
      fontSize: '24px', 
      fontWeight: '600', 
      textAlign: 'center' 
    }}>
      Discover Joy in Savings!
    </h2>
    <Text 
      color="white" 
      fontSize="16px" 
      mt="10px" 
      textAlign="center"
    >
      Unlock happiness with amazing offers on the Green Planet!
    </Text>
    <Image 
      src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png' 
      alt='playstore' 
      h='auto' 
      maxH='40px' 
      mx="auto" 
      mt="20px"
    />
  </Box>
</Center>

       {/* GridBox */}
       <Center>
       <GridBox/>
      </Center>
     {/* Video */}
      <Center >
         <Video/>
      </Center>
    </DIV>
  )
}

export default HomePage

const DIV = styled.div`
border:1px solid white;
`;