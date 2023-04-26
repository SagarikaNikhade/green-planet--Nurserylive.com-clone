import React from 'react'
import { Box, Grid, GridItem, Button } from '@chakra-ui/react';
import styled from 'styled-components';

const GridBox = () => {
  return (
    <DIV>
      <Box mt='30px'>
        <Grid
          h='500px'
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          w={1400}
        >
          <GridItem rowSpan={2} colSpan={3} bgImg='https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-gift_223a0267-5e95-413f-9c5a-52dafe5b34ef_1109x717.jpg?v=1633892191'>
            <div >
              <h2 color='#175612 ' fontFamily='cabin sans-serif' fontSize='34px' fontWeight='600'>A Living Gift - Upto 30% Off</h2>
              <p color='#175612 ' fontFamily='cabin sans-serif' fontSize='20px'>
                Express true emotions with a gift that grows forever.
              </p>
              <Button bg='#ff6b6b' color='white' border={'none'} h='50px' w='137px'
                fontFamily='cabin sans-serif' fontSize='18px' fontWeight='600'>
                Shop Now
              </Button>
            </div>
          </GridItem>
          <GridItem rowSpan={2} colSpan={2} bgImg='https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-miniature-gardens_ccf96d85-dcc2-4da8-b932-8b43a6eccbae_554x470.jpg?v=1633892191'>
            <div >
              <h2 color='#175612 ' fontFamily='cabin sans-serif' fontSize='34px' fontWeight='600'>Miniature Garden - Upto 30% Off</h2>
              <p color='#175612 ' fontFamily='cabin sans-serif' fontSize='20px'>
                Enjoy a living garden even in tiny spaces.
              </p>
              <Button bg='#ff6b6b' color='white' border={'none'} h='50px' w='137px'
                fontFamily='cabin sans-serif' fontSize='18px' fontWeight='600'>
                Shop Now
              </Button>
            </div>
          </GridItem>
          <GridItem rowSpan={2} colSpan={2} bgImg='https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-seeds-organic_772ae885-6e34-45c1-81f7-584a74ad4315_554x470.jpg?v=1633892191'>
            <div >
              <h2 color='#175612 ' fontFamily='cabin sans-serif' fontSize='34px' fontWeight='600'>Organic Seeds - 50% Off</h2>
              <p color='#175612 ' fontFamily='cabin sans-serif' fontSize='20px'>
                Best quality seeds for organic lovers.
                <br /> No chemical No preservatives.
              </p>
              <Button bg='#ff6b6b' color='white' border={'none'} h='50px' w='137px'
                fontFamily='cabin sans-serif' fontSize='18px' fontWeight='600'>
                Shop Now
              </Button>
            </div>
          </GridItem>
          <GridItem rowSpan={2} colSpan={3} bgImg='https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-corporate-bulk-gift_f71def5e-6784-46d5-ab61-b5cebaa1d145_554x470.jpg?v=1633892192'>
            <div >
              <h2 color='#175612 ' fontFamily='cabin sans-serif' fontSize='34px' fontWeight='600'>Event Gifts - Starting ₹119</h2>
              <p color='#175612 ' fontFamily='cabin sans-serif' fontSize='20px'>
                Corporate, Marriages, Conferences, Parties? You're covered.
              </p>
              <Button bg='#ff6b6b' color='white' border={'none'} h='50px' w='137px'
                fontFamily='cabin sans-serif' fontSize='18px' fontWeight='600'>
                Shop Now
              </Button>
            </div>
          </GridItem>
        </Grid>
      </Box>
    </DIV>
  )
}

export default GridBox;

const DIV = styled.div`
Box {
border:'1px solid black',
   }

   @media (max-width: 710px){
  Grid{
    height:'500px',
    grid-template-rows='repeat(2,1fr)',
    grid-template-rows='repeat(3,1fr)',             
  }
}
`;