import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  formData,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Divider,
  useToast,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

export const CartOrderSummary = ({ total }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  console.log("total", total)

  const handleSubmit = () => {
    toast({
      title: 'Payment Successful',
      description: 'Your payment was processed successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setIsOpen(false);
  };

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
      {/* <Button backgroundColor='#ff6b6b' size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button> */}
      <Box py={8}>
        <Button
          colorScheme="blue"
          onClick={() => setIsOpen(true)}
          backgroundColor='#ff6b6b'
          size="lg" fontSize="md" rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e)=>setFormData(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e)=>setFormData(e.target.value)}
              required
            />
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={(e)=>setFormData(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Expiration Date</FormLabel>
            <Input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={(e)=>setFormData(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <Input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={(e)=>setFormData(e.target.value)}
              required
            />
          </FormControl>
        </Stack>
        <Button
          type="submit"
          mt={6}
          colorScheme="blue"
          isFullWidth
          bgColor={mode('blue.500', 'blue.400')}
          color={mode('white', 'gray.900')}
        >
          Place Order
        </Button>
      </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Stack>
  )
}