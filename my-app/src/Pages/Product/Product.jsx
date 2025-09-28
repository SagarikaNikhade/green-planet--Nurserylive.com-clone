import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Productlist from './Productlist';
import Bar from './Bar';

const Product = () => {
  return (
    <Box bg="white" minH="100vh">
      {/* Breadcrumb */}
      <Container maxW="7xl" py={4}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" color="#32620f">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem isCurrentPage>
            <Text color="gray.600">Products</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      {/* Header Section */}
      <Box bg="gray.50" py={12}>
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center">
            <Heading size="xl" color="#32620f">
              Our Plant Collection
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              Discover our premium collection of plants, seeds, and gardening essentials. 
              Find the perfect green companion for your space.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Filter Bar */}
      <Container maxW="7xl" py={6}>
        <Bar />
      </Container>

      {/* Products Grid */}
      <Container maxW="7xl" py={8}>
        <Productlist />
      </Container>
    </Box>
  );
};

export default Product
