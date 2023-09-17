import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link  } from 'react-router-dom';
import { getCart } from '../../Redux/cartReducer.js/action'

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const data = useSelector(store => store.cartReducer.cart)
  console.log(data)

  const total = data?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );

  useEffect(() => {
    dispatch(getCart)
  }, [])



  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      p={10}
      box-shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
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
          <CartOrderSummary total={total} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link
              to="/"
              color={mode('#ff6b6b')}
            >
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
      
    </Box>
  )
}