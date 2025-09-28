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
  CardBody
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, updateUser, deleteUser, getUserStats } from '../../Redux/adminReducer.js/action';

const UserManagement = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const adminReducer = useSelector(store => store.adminReducer);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUserStats());
  }, [dispatch]);

  const loadUsers = async () => {
    dispatch(getAllUsers());
  };

  const handleToggleUserStatus = async (userId) => {
    try {
      const user = adminReducer.users.find(u => u._id === userId);
      if (user) {
        await dispatch(updateUser(userId, { isActive: !user.isActive }));
        toast({
          title: 'User status updated',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error updating user',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await dispatch(deleteUser(userId));
      toast({
        title: 'User deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error deleting user',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'red';
      case 'user':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const getStatusColor = (isActive) => {
    return isActive ? 'green' : 'red';
  };

  const users = adminReducer.users || [];
  const userStats = adminReducer.userStats;
  const isLoading = adminReducer.isLoading;

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
                <StatLabel>Total Users</StatLabel>
                <StatNumber color="blue.500">{userStats?.totalUsers || 0}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  12% from last month
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card flex="1">
            <CardBody>
              <Stat>
                <StatLabel>Active Users</StatLabel>
                <StatNumber color="green.500">{userStats?.activeUsers || 0}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  8% from last month
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card flex="1">
            <CardBody>
              <Stat>
                <StatLabel>Admin Users</StatLabel>
                <StatNumber color="red.500">{userStats?.adminUsers || 0}</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  2% from last month
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </HStack>
      </Box>

      {/* Users Table */}
      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          User Management ({users.length} users)
        </Text>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th>Created</Th>
                <Th>Last Login</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user._id}>
                  <Td>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">
                        {user.firstName} {user.lastName}
                      </Text>
                    </VStack>
                  </Td>
                  <Td>
                    <Text fontSize="sm" color="gray.600">
                      {user.email}
                    </Text>
                  </Td>
                  <Td>
                    <Badge colorScheme={getRoleColor(user.role)} textTransform="capitalize">
                      {user.role}
                    </Badge>
                  </Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(user.isActive)}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </Td>
                  <Td>
                    <Text fontSize="sm" color="gray.600">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </Text>
                  </Td>
                  <Td>
                    <Text fontSize="sm" color="gray.600">
                      {new Date(user.lastLogin).toLocaleDateString()}
                    </Text>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme={user.isActive ? 'red' : 'green'}
                      variant="outline"
                      onClick={() => handleToggleUserStatus(user._id)}
                      isDisabled={user.role === 'admin'}
                    >
                      {user.isActive ? 'Deactivate' : 'Activate'}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {users.length === 0 && (
          <Alert status="info" mt={4}>
            <AlertIcon />
            No users found.
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default UserManagement;
