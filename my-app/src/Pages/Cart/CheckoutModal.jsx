import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Text,
  useToast,
  Spinner,
  Box,
  Divider,
  Badge
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../Redux/orderReducer.js/action';

const CheckoutModal = ({ isOpen, onClose, cartItems, total }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    postalCode: '',
    country: 'India'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const auth = useSelector(store => store.authReducer);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        items: cartItems.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price
        })),
        totalAmount: total,
        shippingAddress: {
          address: formData.billingAddress,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country
        },
        paymentMethod: 'Credit Card',
        cardDetails: {
          cardNumber: formData.cardNumber.replace(/\s/g, ''),
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
          cardholderName: formData.cardholderName
        }
      };

      await dispatch(createOrder(orderData));
      
      toast({
        title: 'Order Placed Successfully!',
        description: 'Your order has been confirmed and will be processed soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      onClose();
      // Clear form
      setFormData({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
        billingAddress: '',
        city: '',
        postalCode: '',
        country: 'India'
      });
    } catch (error) {
      toast({
        title: 'Order Failed',
        description: 'There was an error processing your order. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="2xl" fontWeight="bold" color="green.600">
            Checkout
          </Text>
          <Text fontSize="sm" color="gray.600">
            Complete your order securely
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={6} align="stretch">
              {/* Order Summary */}
              <Box p={4} bg="gray.50" borderRadius="md">
                <Text fontWeight="bold" mb={2}>Order Summary</Text>
                {cartItems.map((item, index) => (
                  <HStack key={index} justify="space-between" mb={2}>
                    <Text fontSize="sm">{item.product.title}</Text>
                    <Text fontSize="sm">₹{item.product.price} x {item.quantity}</Text>
                  </HStack>
                ))}
                <Divider my={2} />
                <HStack justify="space-between" fontWeight="bold">
                  <Text>Total:</Text>
                  <Text color="green.600">₹{total}</Text>
                </HStack>
              </Box>

              {/* Payment Details */}
              <Box>
                <Text fontWeight="bold" mb={4}>Payment Details</Text>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Card Number</FormLabel>
                    <Input
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </FormControl>

                  <HStack spacing={4} width="100%">
                    <FormControl isRequired>
                      <FormLabel>Expiry Date</FormLabel>
                      <Input
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>CVV</FormLabel>
                      <Input
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={4}
                        type="password"
                      />
                    </FormControl>
                  </HStack>

                  <FormControl isRequired>
                    <FormLabel>Cardholder Name</FormLabel>
                    <Input
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </FormControl>
                </VStack>
              </Box>

              {/* Shipping Address */}
              <Box>
                <Text fontWeight="bold" mb={4}>Shipping Address</Text>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                    />
                  </FormControl>

                  <HStack spacing={4} width="100%">
                    <FormControl isRequired>
                      <FormLabel>City</FormLabel>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Mumbai"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Postal Code</FormLabel>
                      <Input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="400001"
                      />
                    </FormControl>
                  </HStack>

                  <FormControl isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="India"
                    />
                  </FormControl>
                </VStack>
              </Box>

              {/* Security Notice */}
              <Box p={3} bg="blue.50" borderRadius="md">
                <Text fontSize="sm" color="blue.700">
                  🔒 Your payment information is secure and encrypted. We do not store your card details.
                </Text>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              backgroundColor="#32620f"
              color="white"
              isLoading={isSubmitting}
              loadingText="Processing..."
              isDisabled={isSubmitting}
              _hover={{ backgroundColor: '#2a520c' }}
            >
              Place Order - ₹{total}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
