import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { CartItem } from './CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  import { useState } from 'react';
  
  export const Cart = () => {
    const addCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [data , setData] = useState(addCart)
     return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      p={10}
    box-shadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    backgroundColor={`#a5d38b`}
    mt={5}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart
          </Heading>
  
          <Stack spacing="6">
            {data.map((item) => (
              <CartItem key={item.id} {...item} /> 
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('#ff6b6b')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}