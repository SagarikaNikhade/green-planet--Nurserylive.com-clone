import { Grid, GridItem,  Box,  Center,Icon ,HStack
, Alert,AlertIcon,AlertTitle,
chakra,
Container,
Stack,
Text,
Image,
Flex,
VStack,
Button,
Heading,
SimpleGrid,
StackDivider,
useColorModeValue,
VisuallyHidden,
useToast,
List,
ListItem,} from '@chakra-ui/react'
import { useState, useEffect, } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductRating from './ProductRating';
// import { getSingleProducts } from '../../Redux/productReducer.js/action';
// import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { StarIcon} from '@chakra-ui/icons'
import { MdLocalShipping } from 'react-icons/md';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from '../../Redux/productReducer.js/action';

const SingleProduct = () => {
    const [data, setData] = useState({})
    const toast=useToast()
    const dispatch = useDispatch();
    // const location = useLocation();
    // const x = useSelector((store)=>store.productReducer);
    const { id } = useParams()

    const handleAddToCart = (image,title,price,category,) =>{
      console.log(image,title,price,category)
        dispatch(addToCart(image,title,price,category))
        toast({
            title: 'Added Product Successfully',
            description: "Your item is added to cart",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }

    useEffect(() => {
        axios.get(`https://drab-pink-prawn-belt.cyclic.cloud/plants/${id}`)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <DIV>
            <Center>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} border='0px solid red' 
            p={10}
            box-shadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
            backgroundColor={`#a5d38b`}
            mt={5}
            >
                
                <GridItem>
                    <Image
                        border='0px solid black'
                        src={data.image}
                        alt={data.title}
                    />
                </GridItem>
                <GridItem>
                    <Box maxW='32rem' border='0px solid black'>
                        <Heading a mb={4}>{data.title}</Heading>
                        <Text fontSize='xl'>Rs.{data.price}</Text>
                        <br/>

                        <HStack>
            <Box>
            <ProductRating rating={data.rating} />
              </Box>
            </HStack>
            <br/>
            {/* <Text fontSize='xl'>{data.category}</Text> */}

            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <Text >{data.info}</Text>
              <br/>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Common title,category:
                  </Text>{' '}
                  {data.common}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Maximum Reachable Height:
                  </Text>{' '}
                  {data.height}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Flower Colour:
                  </Text>{' '}
                  {data.fcolor}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Bloom Time:
                  </Text>{' '}
                  {data.bloom}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Difficulty Level:
                  </Text>{' '}
                  {data.level}
                </ListItem>
              </List>
            </Box>

          <Button
            // rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            // bg={useColorModeValue('gray.900', 'gray.50')}
            backgroundColor='#ff6b6b '
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={() => handleAddToCart(data.image, data.title, data.price,data.category,)}
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
