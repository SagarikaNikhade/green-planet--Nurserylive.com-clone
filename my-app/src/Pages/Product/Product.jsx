import { Flex } from '@chakra-ui/react'
import React from 'react'
import Productlist from './Productlist'
import SimpleSidebar from './side'
const Product = () => {
  return (
    <div>
      <Flex>
        {/* <SimpleSidebar/> */}
        <Productlist/>
      </Flex>
    </div>
  )
}

export default Product
