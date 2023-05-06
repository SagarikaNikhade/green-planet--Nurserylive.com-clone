import React from 'react'
import {Box,
    Button,
    SimpleGrid,Select,Spacer} from '@chakra-ui/react';

const Bar = () => {
  return (
    <div>
      <Box width={'60%'} rounded={'2xl'} boxShadow={'2px 2px 2px 2px #ff6b6b '} margin={'auto'} mt={5}>
          <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }}>
            <Box margin={'10px'}>
              {/* <Button isDisabled={order === 'asc'} backgroundColor='#ff6b6b' onClick={() => setOrder('asc')}>LOW TO HIGH</Button> */}
              <Button  backgroundColor='#ff6b6b' >LOW TO HIGH</Button>
            </Box>
            <Box margin={'10px'}>
              {/* <Button isDisabled={order === 'desc'} backgroundColor='#ff6b6b' onClick={() => setOrder('desc')}>HIGH TO LOW </Button> */}
              <Button  backgroundColor='#ff6b6b' >HIGH TO LOW</Button>
            </Box>
            {/* <Box margin={'10px'}>
              <Input placeholder='Search here' onChange={(e) => setSearch(e.target.value)} />
            </Box> */}
            <Spacer/>
            <Box margin={'10px'}>
              {/* <Select  placeholder='Select option' onChange={(e) => setFilterby(e.target.value)}> */}
              <Select  placeholder='Select option' border='1px solid #ff6b6b'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </Select>
            </Box>
          </SimpleGrid>
        </Box>
    </div>
  )
}

export default Bar