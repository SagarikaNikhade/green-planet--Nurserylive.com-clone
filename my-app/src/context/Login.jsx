import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Spinner,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/AuthReducer/action';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const location = useLocation();
  const navigate = useNavigate()
  // const auth = useSelector((store) => store.authReducer)
  const dispatch = useDispatch()
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const userData = {
      email,
      password
    }

    try {
      const result = await dispatch(loginUser(userData));
      
      if (result.success) {
        toast({
          title: 'Login Successful!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        
        // Navigate to intended page or home
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        setError(result.message || 'Login failed');
        toast({
          title: 'Login Failed',
          description: result.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      setError('An error occurred during login');
      toast({
        title: 'Login Error',
        description: 'An error occurred during login',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor={`#a5d38b`}
      // bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                placeholder='Email' 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                isDisabled={isLoading}
              />
            </FormControl>
            
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password" 
                placeholder='Password' 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                isDisabled={isLoading}
              />
            </FormControl>
            
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                isLoading={isLoading}
                loadingText="Signing in..."
                isDisabled={!email || !password}
              >
                {isLoading ? <Spinner size="sm" /> : 'Sign In'}
              </Button>
              
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account? <Link color={'blue.400'} href="/signup">Sign Up</Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
