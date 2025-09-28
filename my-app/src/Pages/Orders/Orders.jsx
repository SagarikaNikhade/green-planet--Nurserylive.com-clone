import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  Image,
  VStack,
  HStack,
  Spinner,
  Center,
  useToast,
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserOrders, cancelOrder } from '../../Redux/orderReducer.js/action';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const auth = useSelector(store => store.authReducer);
  const orders = useSelector(store => store.orderReducer.orders);
  const isLoading = useSelector(store => store.orderReducer.isLoading);

  useEffect(() => {
    if (!auth.isInitialized) {
      return;
    }
    
    if (!auth.isAuthenticated) {
      navigate('/login');
      return;
    }
    
    dispatch(getUserOrders());
  }, [dispatch, navigate, auth.isAuthenticated, auth.isInitialized]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'yellow';
      case 'Processing': return 'blue';
      case 'Shipped': return 'purple';
      case 'Delivered': return 'green';
      case 'Cancelled': return 'red';
      default: return 'gray';
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await dispatch(cancelOrder(orderId));
      toast({
        title: 'Order Cancelled',
        description: 'Your order has been cancelled successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      dispatch(getUserOrders()); // Refresh orders
    } catch (error) {
      toast({
        title: 'Cancellation Failed',
        description: 'Unable to cancel order. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const openOrderDetails = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  if (!auth.isInitialized) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <Center h="50vh">
        <Alert status="error">
          <AlertIcon />
          Please login to view your orders.
        </Alert>
      </Center>
    );
  }

  if (isLoading) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  return (
    <Container maxW="7xl" py={8}>
      <Heading size="lg" mb={6} color="green.600">
        My Orders
      </Heading>

      {orders.length === 0 ? (
        <Box textAlign="center" py={12}>
          <Text fontSize="lg" color="gray.600" mb={4}>
            You haven't placed any orders yet.
          </Text>
          <Button
            backgroundColor="#32620f"
            color="white"
            onClick={() => navigate('/product')}
            _hover={{ backgroundColor: '#2a520c' }}
          >
            Start Shopping
          </Button>
        </Box>
      ) : (
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Date</Th>
                <Th>Items</Th>
                <Th>Total</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order._id}>
                  <Td>
                    <Text fontSize="sm" fontWeight="bold">
                      #{order._id.slice(-8).toUpperCase()}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize="sm">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize="sm">
                      {order.items.length} item(s)
                    </Text>
                  </Td>
                  <Td>
                    <Text fontWeight="bold">₹{order.totalAmount}</Text>
                  </Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openOrderDetails(order)}
                      >
                        View
                      </Button>
                      {['Pending', 'Processing'].includes(order.status) && (
                        <Button
                          size="sm"
                          colorScheme="red"
                          variant="outline"
                          onClick={() => handleCancelOrder(order._id)}
                        >
                          Cancel
                        </Button>
                      )}
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}

      {/* Order Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Order Details #{selectedOrder?._id.slice(-8).toUpperCase()}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedOrder && (
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="bold" mb={2}>Order Status</Text>
                  <Badge colorScheme={getStatusColor(selectedOrder.status)} size="lg">
                    {selectedOrder.status}
                  </Badge>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>Items</Text>
                  {selectedOrder.items.map((item, index) => (
                    <HStack key={index} spacing={4} mb={2}>
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Box flex="1">
                        <Text fontWeight="medium">{item.product.title}</Text>
                        <Text fontSize="sm" color="gray.600">
                          ₹{item.price} x {item.quantity}
                        </Text>
                      </Box>
                      <Text fontWeight="bold">
                        ₹{item.price * item.quantity}
                      </Text>
                    </HStack>
                  ))}
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>Shipping Address</Text>
                  <Text fontSize="sm">
                    {selectedOrder.shippingAddress.address}<br />
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.postalCode}<br />
                    {selectedOrder.shippingAddress.country}
                  </Text>
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>Payment Method</Text>
                  <Text fontSize="sm">{selectedOrder.paymentMethod}</Text>
                </Box>

                <Box>
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Total Amount:</Text>
                    <Text fontWeight="bold" fontSize="lg" color="green.600">
                      ₹{selectedOrder.totalAmount}
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Orders;
