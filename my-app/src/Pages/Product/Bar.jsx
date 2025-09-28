import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  SimpleGrid,
  Select,
  Spacer
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Bar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || '');

  const handleChange = (e) => {
    let newCategory = [...category];
    const value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }

    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  }

  useEffect(() => {
    let params = {
      category,
    }

    order && (params.order = order);

    setSearchParams(params);
  }, [category, order]);

  return (
    <Box
      bg="white"
      rounded="xl"
      boxShadow="lg"
      p={6}
      border="1px solid"
      borderColor="gray.200"
    >
      <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} gap={4}>
        <Button
          backgroundColor="#32620f"
          color="white"
          value="asc"
          isDisabled={order === 'asc'}
          name="order"
          onClick={handleSort}
          _hover={{ backgroundColor: '#2a520c' }}
          _disabled={{ backgroundColor: 'gray.300', color: 'gray.500' }}
        >
          Price: Low to High
        </Button>
        
        <Button
          backgroundColor="#32620f"
          color="white"
          value="desc"
          isDisabled={order === 'desc'}
          name="order"
          onClick={handleSort}
          _hover={{ backgroundColor: '#2a520c' }}
          _disabled={{ backgroundColor: 'gray.300', color: 'gray.500' }}
        >
          Price: High to Low
        </Button>
        
        <Spacer />
        
        <Select
          placeholder="Filter by Category"
          border="2px solid #32620f"
          borderRadius="md"
          onChange={handleChange}
          value={category}
          _focus={{ borderColor: '#2a520c', boxShadow: '0 0 0 1px #2a520c' }}
        >
          <option value="plant">Indoor Plants</option>
          <option value="seed">Seeds</option>
          <option value="bulb">Bulbs</option>
        </Select>
      </SimpleGrid>
    </Box>
  )
}

export default Bar;