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
    <div>
      <Box width={'60%'} rounded={'2xl'} boxShadow={'2px 2px 2px 2px #ff6b6b '} margin={'auto'} mt={5}>
        <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }}>
          <Box margin={'10px'}>
            <Button
              backgroundColor='#ff6b6b'
              value={"asc"}
              isDisabled={order === 'asc'}
              name="order"
              onClick={ handleSort}
            >
              LOW TO HIGH
            </Button>
          </Box>
          <Box margin={'10px'}>
            <Button
              backgroundColor='#ff6b6b'
              value={"desc"}
              isDisabled={order === 'desc'}
              name="order"
              onClick={handleSort}
            >
              HIGH TO LOW
            </Button>
          </Box>
          <Spacer />
           <Box margin={'10px'}>
            <Select
              placeholder='Select option'
              border='1px solid #ff6b6b'
              onChange={handleChange}
              value={category}
            >
              <option value='plant'>plant</option>
              <option value='seed'>seed</option>
              <option value='bulb'>bulb</option>
            </Select>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Bar;