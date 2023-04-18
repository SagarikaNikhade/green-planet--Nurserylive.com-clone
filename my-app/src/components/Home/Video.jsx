import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import { Center} from '@chakra-ui/react';

const VIDEO_PATH = 'https://youtu.be/N-gjXi2yZ5I';

function Video() {
   const playerRef = useRef(null);
   return (
      <div style={{marginTop:'50px' ,border:'0px solid blue',width:'100%',height:'600px'}}>
        <Center>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} width='95%' height='600px'/>
        </Center>
      </div>
   )
};
export default Video;
