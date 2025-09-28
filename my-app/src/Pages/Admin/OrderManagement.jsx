import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Badge,
  Button,
  useToast,
  Alert,
  AlertIcon,
  Spinner,
  Center,
  HStack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Card,
  CardBody,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, updateOrderStatus } from '../../Redux/orderReducer.js/action';

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const dispatch = useDispatch();
  const toast = useToast();
  const orders = useSelector(store => store.orderReducer.orders);
  const isLoading = useSelector(store => store.orderReducer.isLoading);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await dispatch(updateOrderStatus(orderId, newStatus));
      toast({
        title: 'Order status updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error updating order',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'yellow';
      case 'Processing':
        return 'blue';
      case 'Shipped':
        return 'purple';
      case 'Delivered':
        return 'green';
      case 'Cancelled':
        return 'red';
      default:
        return 'gray';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (order.user && order.user.firstName && order.user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (order.user && order.user.email && order.user.email.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = orders
    .filter(order => order.status === 'Delivered')
    .reduce((sum, order) => sum + order.totalAmount, 0);

  const pendingOrders = orders.filter(order => order.status === 'Pending').length;
  const shippedOrders = orders.filter(order => order.status === 'Shipped').length;
  const deliveredOrders = orders.filter(order => order.status === 'Delivered').length;

  if (isLoading) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  return (
    <Box>
      {/* Stats Cards */}
      <Box mb={6}>
        <HStack spacing={4}>
          <Card flex="1">
            <CardBody>
              <Stat>
                <StatLabel>Total Orders</StatLabel>
                <StatNumber color="blue.500">{orders.length}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  15% from last month
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card flex="1">
            <CardBody>
              <Stat>
                <StatLabel>Pending Orders</StatLabel>
                <StatNumber color="yellow.500">{pendingOrders}</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  5% from last month
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card flex="1">
            <CardBody>
              <Stat>
                <StatLabel>Total Revenue</StatLabel>
                <StatNumber color="green.500">₹{totalRevenue.toLocaleString()}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  22% from last month
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </HStack>
      </Box>

      {/* Filters */}
      <Box mb={6} display="flex" gap={4} alignItems="center">
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          maxW="200px"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </Select>
      </Box>

      {/* Orders Table */}
      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          Order Management ({filteredOrders.length} orders)
        </Text>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order #</Th>
                <Th>Customer</Th>
                <Th>Items</Th>
                <Th>Total</Th>
                <Th>Status</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredOrders.map((order) => (
                <Tr key={order._id}>
                  <Td>
                    <Text fontWeight="medium" color="blue.500">
                      #{order._id.slice(-8).toUpperCase()}
                    </Text>
                  </Td>
                  <Td>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">
                        {order.user ? `${order.user.firstName} ${order.user.lastName}` : 'N/A'}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {order.user ? order.user.email : 'N/A'}
                      </Text>
                    </VStack>
                  </Td>
                  <Td>
                    <VStack align="start" spacing={1}>
                      {order.items.map((item, index) => (
                        <Text key={index} fontSize="sm">
                          {item.product ? item.product.title : 'Product not found'} x{item.quantity}
                        </Text>
                      ))}
                    </VStack>
                  </Td>
                  <Td>
                    <Text fontWeight="medium">₹{order.totalAmount}</Text>
                  </Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </Td>
                  <Td>
                    <Text fontSize="sm" color="gray.600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Text>
                  </Td>
                  <Td>
                    <Select
                      size="sm"
                      value={order.status}
                      onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                      maxW="150px"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </Select>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {filteredOrders.length === 0 && (
          <Alert status="info" mt={4}>
            <AlertIcon />
            No orders found matching your criteria.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default OrderManagement;
