import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Alert,
  AlertIcon,
  Spinner,
  Center,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../Redux/AuthReducer/action';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const auth = useSelector(store => store.authReducer);
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  useEffect(() => {
    if (!auth.isInitialized) {
      return;
    }
    
    if (!auth.isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Load user data
    if (auth.user) {
      setFormData({
        firstName: auth.user.firstName || '',
        lastName: auth.user.lastName || '',
        email: auth.user.email || '',
        role: auth.user.role || 'user'
      });
    }
  }, [navigate, auth.isAuthenticated, auth.isInitialized, auth.user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would dispatch an update user action here
      // For now, we'll just show a success message
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been updated successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setIsEditing(false);
    } catch (error) {
      toast({
        title: 'Update Failed',
        description: 'Failed to update profile. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: auth.user?.firstName || '',
      lastName: auth.user?.lastName || '',
      email: auth.user?.email || '',
      role: auth.user?.role || 'user'
    });
    setIsEditing(false);
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
          Please login to view your profile.
        </Alert>
      </Center>
    );
  }

  return (
    <Container maxW="4xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg" color="green.600" mb={2}>
            My Profile
          </Heading>
          <Text color="gray.600">
            Manage your account information and preferences
          </Text>
        </Box>

        {/* Profile Information Card */}
        <Card bg={cardBg} boxShadow="md">
          <CardHeader>
            <HStack justify="space-between" align="center">
              <Heading size="md">Personal Information</Heading>
              {!isEditing ? (
                <Button
                  backgroundColor="#32620f"
                  color="white"
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                  _hover={{ backgroundColor: '#2a520c' }}
                >
                  Edit Profile
                </Button>
              ) : (
                <HStack>
                  <Button
                    backgroundColor="#32620f"
                    color="white"
                    onClick={handleSave}
                    isLoading={isLoading}
                    loadingText="Saving..."
                    _hover={{ backgroundColor: '#2a520c' }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    isDisabled={isLoading}
                  >
                    Cancel
                  </Button>
                </HStack>
              )}
            </HStack>
          </CardHeader>
          <CardBody>
            <VStack spacing={6} align="stretch">
              {/* User Role Badge */}
              <Box>
                <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
                  Account Type
                </Text>
                <Badge
                  colorScheme={auth.user?.role === 'admin' ? 'red' : 'blue'}
                  size="lg"
                  p={2}
                  borderRadius="md"
                >
                  {auth.user?.role === 'admin' ? 'Administrator' : 'Regular User'}
                </Badge>
              </Box>

              <Divider />

              {/* Form Fields */}
              <HStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    placeholder="Enter your first name"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isDisabled={!isEditing}
                    placeholder="Enter your last name"
                  />
                </FormControl>
              </HStack>

              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isDisabled={!isEditing}
                  placeholder="Enter your email address"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Account Role</FormLabel>
                <Input
                  value={formData.role}
                  isDisabled={true}
                  bg="gray.100"
                  color="gray.600"
                />
                <Text fontSize="sm" color="gray.500" mt={1}>
                  Role cannot be changed. Contact administrator for role changes.
                </Text>
              </FormControl>
            </VStack>
          </CardBody>
        </Card>

        {/* Quick Actions */}
        <Card bg={cardBg} boxShadow="md">
          <CardHeader>
            <Heading size="md">Quick Actions</Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between">
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">Shopping Cart</Text>
                  <Text fontSize="sm" color="gray.600">
                    View and manage your cart items
                  </Text>
                </VStack>
                <Button
                  backgroundColor="#32620f"
                  color="white"
                  variant="outline"
                  onClick={() => navigate('/cart')}
                  _hover={{ backgroundColor: '#2a520c' }}
                >
                  Go to Cart
                </Button>
              </HStack>

              <Divider />

              <HStack justify="space-between">
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">Order History</Text>
                  <Text fontSize="sm" color="gray.600">
                    Track your orders and delivery status
                  </Text>
                </VStack>
                <Button
                  backgroundColor="#32620f"
                  color="white"
                  variant="outline"
                  onClick={() => navigate('/orders')}
                  _hover={{ backgroundColor: '#2a520c' }}
                >
                  View Orders
                </Button>
              </HStack>

              {auth.user?.role === 'admin' && (
                <>
                  <Divider />
                  <HStack justify="space-between">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="medium">Admin Dashboard</Text>
                      <Text fontSize="sm" color="gray.600">
                        Manage products, users, and orders
                      </Text>
                    </VStack>
                    <Button
                      backgroundColor="#32620f"
                      color="white"
                      variant="outline"
                      onClick={() => navigate('/admin')}
                      _hover={{ backgroundColor: '#2a520c' }}
                    >
                      Admin Panel
                    </Button>
                  </HStack>
                </>
              )}
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
};

export default Profile;
