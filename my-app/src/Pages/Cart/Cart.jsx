import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  Text,
  Button,
  Spinner,
  Center
} from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getCart } from '../../Redux/cartReducer.js/action'

export const Cart = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(store => store.cartReducer.cart)
  const isLoading = useSelector(store => store.cartReducer.isLoading)
  const isError = useSelector(store => store.cartReducer.isError)
  const auth = useSelector(store => store.authReducer)

  const total = data?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  ) || 0;

  useEffect(() => {
    // Wait for auth state to be initialized before checking
    if (!auth.isInitialized) {
      return; // Still initializing auth state
    }
    
    // Check if user is authenticated using Redux state
    if (!auth.isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Load cart data
    dispatch(getCart());
  }, [dispatch, navigate, auth.isAuthenticated, auth.isInitialized]);



  // Show loading while auth is being initialized
  if (!auth.isInitialized) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  if (isLoading) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center h="50vh">
        <Text color="red.500">Error loading cart. Please try again.</Text>
      </Center>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
        p={10}
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
        backgroundColor="white"
        mt={5}
      >
        <Center h="50vh" flexDirection="column">
          <Text fontSize="xl" mb={4}>Your cart is empty</Text>
          <Button as={Link} to="/products" colorScheme="green">
            Continue Shopping
          </Button>
        </Center>
      </Box>
    );
  }

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
      p={10}
      boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
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
            Shopping Cart ({data.length} items)
          </Heading>

          <Stack spacing="6">
            {data.map((item) => (
              <CartItem 
                key={item._id} 
                _id={item._id}
                title={item.product?.title}
                total={item.total}
                quantity={item.quantity}
                image={item.product?.image}
                category={item.product?.category}
                isGiftWrapping={item.isGiftWrapping}
                product={item}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary total={total} cartItems={data} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link
              to="/product"
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