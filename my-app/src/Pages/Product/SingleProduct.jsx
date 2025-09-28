import { Grid, GridItem,  Box,  Center,HStack,
Stack,
Text,
Image,
Button,
Heading,
useColorModeValue,
useToast,
List,
ListItem, Spinner} from '@chakra-ui/react'
import { useState, useEffect, } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import ProductRating from './ProductRating';
import { getSingleProduct } from '../../Redux/productReducer.js/action';
import { addToCart } from '../../Redux/cartReducer.js/action';
import {useDispatch, useSelector} from "react-redux";
import { MdLocalShipping } from 'react-icons/md';
import styled from "styled-components";

const SingleProduct = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isAddingToCart, setIsAddingToCart] = useState(false)
    const toast = useToast()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const auth = useSelector(store => store.authReducer);
    
    // Move hooks to the top - before any conditional returns
    const yellowColor = useColorModeValue('yellow.500', 'yellow.300')
    // const buttonColor = useColorModeValue('white', 'gray.900')

    const handleAddToCart = async () => {
        // Check if user is authenticated using Redux state
        if (!auth.isAuthenticated) {
            toast({
                title: 'Please Login',
                description: "You need to login to add items to cart",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            navigate('/login', { state: { from: { pathname: `/product/${id}` } } });
            return;
        }

        setIsAddingToCart(true);
        try {
            const productId = product._id || product.id;
            console.log('Adding to cart - Product ID:', productId, 'Product:', product);
            await dispatch(addToCart(productId, 1));
            toast({
                title: 'Added to Cart Successfully',
                description: "Your item has been added to cart",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Failed to Add to Cart',
                description: "Please try again",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsAddingToCart(false);
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setIsLoading(true);
                await dispatch(getSingleProduct(id));
            } catch (error) {
                console.log('Error fetching product:', error);
                toast({
                    title: 'Error',
                    description: "Failed to load product details",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id, dispatch, toast])

    // Get product data from Redux store
    const productData = useSelector(store => store.productReducer.products);
    const product = Array.isArray(productData) ? productData[0] : productData;

    if (isLoading) {
        return (
            <Center h="50vh">
                <Spinner size="xl" color="green.500" />
            </Center>
        );
    }

    if (!product) {
        return (
            <Center h="50vh">
                <Text color="red.500">Product not found</Text>
            </Center>
        );
    }

    return (
        <DIV>
            <Center>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} border='0px solid red' 
            p={10}
            boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            backgroundColor={`#a5d38b`}
            mt={5}
            >
                
                <GridItem>
                    <Image
                        border='0px solid black'
                        src={product.image}
                        alt={product.title}
                    />
                </GridItem>
                <GridItem>
                    <Box maxW='32rem' border='0px solid black'>
                        <Heading mb={4}>{product.title}</Heading>
                        <Text fontSize='xl'>Rs.{product.price}</Text>
                        <br/>

                        <HStack>
            <Box>
            <ProductRating rating={product.rating} />
              </Box>
            </HStack>
            <br/>

            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={yellowColor}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <Text >{product.info}</Text>
              <br/>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Common title,category:
                  </Text>{' '}
                  {product.common}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Maximum Reachable Height:
                  </Text>{' '}
                  {product.height}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Flower Colour:
                  </Text>{' '}
                  {product.fcolor}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Bloom Time:
                  </Text>{' '}
                  {product.bloom}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Difficulty Level:
                  </Text>{' '}
                  {product.level}
                </ListItem>
              </List>
            </Box>

          <Button
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            backgroundColor='#32620f'
            color="white"
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
              backgroundColor: '#2a520c'
            }}
            onClick={handleAddToCart}
            isLoading={isAddingToCart}
            loadingText="Adding to cart..."
            >
            Add to cart
          </Button>
          <br/>
          <br/>
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
          <br/>
                    </Box>
                </GridItem>
                
            </Grid>
            </Center>
        </DIV>
    )
}

export default SingleProduct

const DIV = styled.div`
  @media (max-width: 710px){
    Grid {
      display: flex;
      flex-direction: column;
    }
  }
`;
