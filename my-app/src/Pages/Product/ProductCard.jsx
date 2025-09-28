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
import ProductRating from './ProductRating';
  
  
  function ProductCard({_id,title,price,image,rating}) {
    return (
      <Link to={`/product/${_id}`}>
      <Flex p={4} w="full" alignItems="center" justifyContent="center">
        <Box
          bg="white"
          w="full"
          maxW="300px"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'xl'
          }}
          transition="all 0.3s ease">
          
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
            w="full"
            h="200px"
            objectFit="cover"
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
            <ProductRating rating={rating} />
            </HStack>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                Rs.{price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
      </Link>
    );
  }
  
  export default ProductCard;