import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Box, 
  Text, 
  VStack, 
  Spinner, 
  Center,
  Alert,
  AlertIcon,
  HStack,
  Button,
  Icon
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/productReducer.js/action';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, isLoading, isError } = useSelector((store) => store.productReducer);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // 3 rows × 3 columns = 9 products per page

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    }
  };

  useEffect(() => {
    dispatch(getProducts(obj));
    setCurrentPage(1); // Reset to first page when filters change
  }, [location.search]);

  // Pagination calculations
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <Center py={20}>
        <VStack spacing={4}>
          <Spinner size="xl" color="#32620f" />
          <Text color="gray.600">Loading products...</Text>
        </VStack>
      </Center>
    );
  }

  if (isError) {
    return (
      <Center py={20}>
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          Failed to load products. Please try again.
        </Alert>
      </Center>
    );
  }

  if (products.length === 0) {
    return (
      <Center py={20}>
        <VStack spacing={4}>
          <Text fontSize="xl" color="gray.600">No products found</Text>
          <Text color="gray.500">Try adjusting your filters or search terms</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Box w="100%" maxW="100%" overflow="hidden">
      <Text fontSize="sm" color="gray.600" mb={6}>
        Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
      </Text>
      
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={6}
        w="100%"
        maxW="100%"
        mx="auto"
        mb={8}
      >
        {currentProducts.map((product) => (
          <Box key={product._id} w="100%" maxW="100%">
            <ProductCard {...product} />
          </Box>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" alignItems="center" py={8}>
          <HStack spacing={2}>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={currentPage === 1}
              size="sm"
              variant="outline"
              leftIcon={<Icon as={ChevronLeftIcon} />}
              _hover={{ backgroundColor: '#32620f', color: 'white' }}
            >
              Previous
            </Button>
            
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                size="sm"
                variant={currentPage === page ? "solid" : "outline"}
                backgroundColor={currentPage === page ? "#32620f" : "transparent"}
                color={currentPage === page ? "white" : "#32620f"}
                _hover={{
                  backgroundColor: currentPage === page ? "#2a520c" : "#32620f",
                  color: "white"
                }}
                minW="40px"
              >
                {page}
              </Button>
            ))}
            
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}
              size="sm"
              variant="outline"
              rightIcon={<Icon as={ChevronRightIcon} />}
              _hover={{ backgroundColor: '#32620f', color: 'white' }}
            >
              Next
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
