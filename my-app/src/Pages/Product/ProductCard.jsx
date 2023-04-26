import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    HStack,
  } from '@chakra-ui/react';
  import { FiShoppingCart } from 'react-icons/fi';
  import React from "react";
  import { Link } from 'react-router-dom';
  import { StarIcon} from '@chakra-ui/icons'
  
  
  function ProductCard({id,title,price,image,rating}) {
    return (
      <Link to={`/product/${id}`}>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          
  
          <Image
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                 New
                </Badge>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                <Link to={'/cart'}><Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /></Link>
                </chakra.a>
              </Tooltip>
            </Flex>

            <HStack>
            <Icon as={StarIcon} h={5} w={5} alignSelf={'center'} />
            <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                isTruncated>
                {rating}
              </Box>
            </HStack>

            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={rating}  /> */}
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
      </Link>
    );
  }
  
  export default ProductCard;