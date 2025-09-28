import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';

const OrderSummaryItem = ({ label, value, children }) => {

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
      <Text fontWeight="medium">{value}</Text>
    </Flex>
  )
}

export const CartOrderSummary = ({ total, cartItems }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        {/* <OrderSummaryItem label="Subtotal" value={formatPrice(597)} /> */}
        <OrderSummaryItem label="Price Details">
          <Text>
            ₹ {total}
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Delivery Charges">
          <Text>
            ₹ 49.99
          </Text>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="lg" fontWeight="extrabold">
            ₹ {total + 49.99}
          </Text>
        </Flex>
      </Stack>
      <Box py={8}>
        <Button
          colorScheme="green"
          onClick={() => setIsCheckoutOpen(true)}
          backgroundColor='#32620f'
          color="white"
          size="lg" 
          fontSize="md" 
          rightIcon={<FaArrowRight />}
          width="full"
          _hover={{ backgroundColor: '#2a520c' }}
        >
          Proceed to Checkout
        </Button>
        
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cartItems={cartItems}
          total={total + 49.99}
        />
      </Box>
    </Stack>
  )
}