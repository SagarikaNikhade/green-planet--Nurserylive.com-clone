import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  CardHeader,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Alert,
  AlertIcon,
  Spinner,
  Center
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Redux/AuthReducer/action';
import { getProducts } from '../../Redux/productReducer.js/action';
import { getUserStats, getOrderStats } from '../../Redux/adminReducer.js/action';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import OrderManagement from './OrderManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(store => store.authReducer);
  const products = useSelector(store => store.productReducer.products);
  const admin = useSelector(store => store.adminReducer);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    // Wait for auth state to be initialized before checking
    if (!auth.isInitialized) {
      return; // Still initializing auth state
    }
    
    if (!auth.isAuthenticated) {
      console.log('AdminDashboard - Not authenticated, redirecting to login');
      navigate('/login');
      return;
    }
    
    if (auth.user?.role !== 'admin') {
      console.log('AdminDashboard - Not admin, redirecting to home');
      navigate('/');
      return;
    }
    
    console.log('AdminDashboard - Access granted');
    setIsLoading(false);
  }, [navigate, auth.isAuthenticated, auth.user?.role, auth.isInitialized]);

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.role === 'admin') {
      dispatch(getProducts());
      dispatch(getUserStats());
      dispatch(getOrderStats());
    }
  }, [dispatch, auth]);

  // Show loading while auth is being initialized
  if (!auth.isInitialized) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
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

  if (!auth.isAuthenticated || auth.user?.role !== 'admin') {
    return (
      <Center h="50vh">
        <Alert status="error">
          <AlertIcon />
          Access denied. Admin privileges required.
        </Alert>
      </Center>
    );
  }

  // Real data from database
  const stats = {
    totalProducts: products?.length || 0,
    totalUsers: admin.userStats?.totalUsers || 0,
    totalOrders: admin.orderStats?.totalOrders || 0,
    totalRevenue: admin.orderStats?.totalRevenue || 0
  };

  return (
    <Box minH="100vh" bg={bgColor} p={6}>
      <Box maxW="7xl" mx="auto">
        {/* Header */}
        <Box mb={8} display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Heading size="xl" color="green.600" mb={2}>
              Admin Dashboard
            </Heading>
            <Text color="gray.600">
              Welcome back, {auth.user?.firstName}! Manage your Green Planet store.
            </Text>
          </Box>
                  <Button
                    backgroundColor="#32620f"
                    color="white"
                    variant="outline"
                    onClick={handleLogout}
                    size="sm"
                    _hover={{ backgroundColor: '#2a520c' }}
                  >
                    Logout
                  </Button>
        </Box>

        {/* Stats Cards */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6} mb={8}>
          <GridItem>
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <Stat>
                  <StatLabel>Total Products</StatLabel>
                  <StatNumber color="green.500">{stats.totalProducts}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    12% from last month
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem>
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <Stat>
                  <StatLabel>Total Users</StatLabel>
                  <StatNumber color="blue.500">{stats.totalUsers}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    {admin.userStats?.newUsers || 0} new this month
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem>
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <Stat>
                  <StatLabel>Total Orders</StatLabel>
                  <StatNumber color="purple.500">{stats.totalOrders}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    {admin.orderStats?.deliveredOrders || 0} delivered
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem>
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <Stat>
                  <StatLabel>Total Revenue</StatLabel>
                  <StatNumber color="orange.500">₹{stats.totalRevenue.toLocaleString()}</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    From {admin.orderStats?.deliveredOrders || 0} orders
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>

        {/* Management Tabs */}
        <Card bg={cardBg} boxShadow="lg">
          <CardHeader>
            <Heading size="md">Store Management</Heading>
          </CardHeader>
          <CardBody>
            <Tabs index={activeTab} onChange={setActiveTab}>
              <TabList>
                <Tab>Products</Tab>
                <Tab>Users</Tab>
                <Tab>Orders</Tab>
                <Tab>Analytics</Tab>
              </TabList>

              <TabPanels>
                <TabPanel px={0}>
                  <ProductManagement />
                </TabPanel>
                <TabPanel px={0}>
                  <UserManagement />
                </TabPanel>
                <TabPanel px={0}>
                  <OrderManagement />
                </TabPanel>
                <TabPanel px={0}>
                  <Box p={8} textAlign="center">
                    <Heading size="md" mb={4}>Analytics Dashboard</Heading>
                    <Text color="gray.600">
                      Advanced analytics and reporting features coming soon!
                    </Text>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
