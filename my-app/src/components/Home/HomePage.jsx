import React from 'react';
import { Slideshow } from './Slideshow';
import { Center,Image, Box,} from '@chakra-ui/react';
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
        <Box border='1px solid white' mt='30px'>
          <h2 style={{ color: 'white', fontFamily: 'cabin sans-serif', fontSize: '20px', fontWeight: '600' }}>Happiness is availing great offers on Nurserylive App!</h2>
          <Image h='35.5px' src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png' alt='playstore' />
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