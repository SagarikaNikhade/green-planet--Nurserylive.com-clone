import React from 'react';
import {
  Box, Grid, GridItem, Heading, Text,Image,VStack,Center,Button
} from '@chakra-ui/react';

const Corporate = () => {
  return (
    <Box style={{ border: "0px solid white", width: "98%", marginTop: "30px",justifyContent:"center",margin:"auto" }}>
      <br/>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
        color="white"
        border= "0px solid white"
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
      >
        <GridItem
        margin={'auto'}
          w='100%'
          h='auto'
          border="0px solid blue"
          borderRadius="md"
          textAlign="center">

          <Box border="0px solid red" 
        justifyContent="center"
        w="80%"
        margin={'auto'}
        p={4}
        textAlign="center"
        borderRadius="md"
        fontFamily={'Cabin'}
        >
          <Heading fontSize={'42px'} fontWeight={600}>Start Thoughtful Gifting Today!</Heading>
          <br />
          <Text fontSize={31}>Want your team, partners & friends feel <br />closer?</Text>
          <Text fontSize={31}>You are covered...</Text>
          </Box>
        </GridItem>

        <GridItem
        border="0px solid red"
          w='100%'
          h='auto'
          borderRadius="md">
            <Image width="100%" src="https://wanderingmist.com/wp-content/uploads/2011/08/5_green-party-favors-and-gifting-ideas-to-present-plants-and-flowers-for-any-special-occasion_beautiful-gifts-for-little-gardeners.jpg" alt="gift"/>
          </GridItem>
      </Grid>
      <br/>
      <br/>
      <Text color='white' textAlign={'center'}  fontFamily={'Cabin'} fontSize={'42px'} fontWeight={600}>Our Services</Text>
       
       <Box 
  display="flex" 
  justifyContent="space-around" 
  alignItems="center"
  flexWrap="wrap"
  p={4}
  maxWidth="500px"
  mx="auto"
  border= "0px solid white"
  boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
>
  <VStack>
    <Image 
      src="https://cdn.shopify.com/s/files/1/0047/9730/0847/t/31/assets/nurserylivecorporategiftpagecustomize-brand-1662455704466.png?v=1662455715" 
      alt="Gardening" 
      style={{ width: '100px', borderRadius: '50%' }} 
    />
    <Text 
      style={{ textDecoration: 'none', color: 'white', fontFamily: 'Cabin, sans-serif', fontSize: '15px', fontWeight: '600' }}
      textAlign="center"
    >
      Customize Branding
    </Text>
  </VStack>
  <VStack>
    <Image 
      src="https://cdn.shopify.com/s/files/1/0047/9730/0847/t/31/assets/nurserylivecorporategiftpageallindiadelivery-1662455704459.png?v=1662455711" 
      alt="Gardening" 
      style={{ width: '100px', borderRadius: '50%' }} 
    />
    <Text 
      style={{ textDecoration: 'none', color: 'white', fontFamily: 'Cabin, sans-serif', fontSize: '15px', fontWeight: '600' }}
      textAlign="center"
    >
      All India Delivery
    </Text>
  </VStack>
  <VStack>
    <Image 
      src="https://cdn.shopify.com/s/files/1/0047/9730/0847/t/31/assets/nurserylivecorporategiftpage6000products-1662455704448.png?v=1662455706" 
      alt="Gardening" 
      style={{ width: '100px', borderRadius: '50%' }} 
    />
    <Text 
      style={{ textDecoration: 'none', color: 'white', fontFamily: 'Cabin, sans-serif', fontSize: '15px', fontWeight: '600' }}
      textAlign="center"
    >
      6000+ Products
    </Text>
  </VStack>
</Box>
  <br/>
  <br/>
  <Center mt={4}>
  <Button backgroundColor="#ff6b6b" size="md" >
    View More
  </Button>
</Center>
    
    </Box>

  )
}

export default Corporate
