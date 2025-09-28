import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Text,
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
  Badge
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Redux/AuthReducer/action';

const ProfileDropdown = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const auth = useSelector(store => store.authReducer);
  const cancelRef = React.useRef();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast({
      title: 'Logged out successfully',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/');
    setIsLogoutOpen(false);
  };

  const handleAdminDashboard = () => {
    navigate('/admin');
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };

  // Debug logging for admin role
  console.log('ProfileDropdown - User role:', auth.user?.role);
  console.log('ProfileDropdown - Is admin:', auth.user?.role === 'admin');

  if (!auth.isAuthenticated) {
    return null;
  }

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="ghost"
          color="white"
          _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          _active={{ bg: 'rgba(255, 255, 255, 0.2)' }}
          px={3}
          py={2}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              size="sm"
              name={getInitials(auth.user?.firstName, auth.user?.lastName)}
              bg="green.500"
              color="white"
            />
            <Box textAlign="left" display={{ base: 'none', md: 'block' }}>
              <Text fontSize="sm" fontWeight="medium">
                {auth.user?.firstName} {auth.user?.lastName}
              </Text>
              <Text fontSize="xs" color="gray.300">
                {auth.user?.email}
              </Text>
            </Box>
          </Box>
        </MenuButton>
        
        <MenuList bg="white" border="1px solid" borderColor="gray.200" boxShadow="lg">
          {/* User Info Header */}
          <Box px={3} py={2} borderBottom="1px solid" borderColor="gray.100">
            <Text fontSize="sm" fontWeight="bold" color="gray.700">
              {auth.user?.firstName} {auth.user?.lastName}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {auth.user?.email}
            </Text>
            <Badge 
              colorScheme={auth.user?.role === 'admin' ? 'red' : 'blue'} 
              size="sm" 
              mt={1}
            >
              {auth.user?.role === 'admin' ? 'Administrator' : 'User'}
            </Badge>
          </Box>

          {/* Profile Menu Items */}
          <MenuItem 
            icon={<Text fontSize="sm">👤</Text>}
            onClick={() => navigate('/profile')}
            _hover={{ bg: 'gray.50' }}
            color="green.600"
          >
            My Profile
          </MenuItem>
          
          <MenuItem 
            icon={<Text fontSize="sm">🛒</Text>}
            onClick={() => navigate('/cart')}
            _hover={{ bg: 'gray.50' }}
            color="green.600"
          >
            My Cart
          </MenuItem>

          <MenuItem 
            icon={<Text fontSize="sm">📦</Text>}
            onClick={() => navigate('/orders')}
            _hover={{ bg: 'gray.50' }}
            color="green.600"
          >
            My Orders
          </MenuItem>

          {/* Admin Dashboard Button */}
          {auth.user?.role === 'admin' && (
            <>
              <MenuDivider />
              <MenuItem 
                icon={<Text fontSize="sm">⚙️</Text>}
                onClick={handleAdminDashboard}
                _hover={{ bg: 'green.50' }}
                color="green.600"
                fontWeight="medium"
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Text>Admin Dashboard</Text>
                  <Badge colorScheme="red" size="sm">Admin</Badge>
                </Box>
              </MenuItem>
            </>
          )}

          <MenuDivider />
          
          {/* Logout */}
          <MenuItem 
            icon={<Text fontSize="sm">🚪</Text>}
            onClick={() => setIsLogoutOpen(true)}
            _hover={{ bg: 'red.50' }}
            color="red.600"
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>

      {/* Logout Confirmation Dialog */}
      <AlertDialog
        isOpen={isLogoutOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsLogoutOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Logout
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to logout? You'll need to login again to access your account.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsLogoutOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ProfileDropdown;
