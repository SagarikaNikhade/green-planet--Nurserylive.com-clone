import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Alert,
  AlertIcon,
  Spinner
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Redux/AuthReducer/action';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await dispatch(registerUser(register));
      
      if (result.success) {
        toast({
          title: 'Registration Successful!',
          description: 'You have been registered successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        
        setRegister(initialState);
        navigate('/login');
      } else {
        setError(result.message || 'Registration failed');
        toast({
          title: 'Registration Failed',
          description: result.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      setError('An error occurred during registration');
      toast({
        title: 'Registration Error',
        description: 'An error occurred during registration',
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
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
            
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input 
                    type="text" 
                    placeholder='First Name' 
                    name="firstName" 
                    value={register.firstName} 
                    onChange={handleChange}
                    isDisabled={isLoading}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input 
                    type="text" 
                    placeholder='Last Name' 
                    name="lastName" 
                    value={register.lastName} 
                    onChange={handleChange}
                    isDisabled={isLoading}
                  />
                </FormControl>
              </Box>
            </HStack>
            
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                placeholder='Email' 
                name="email" 
                value={register.email} 
                onChange={handleChange}
                isDisabled={isLoading}
              />
            </FormControl>
            
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder='Password' 
                  name="password" 
                  value={register.password} 
                  onChange={handleChange}
                  isDisabled={isLoading}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                    isDisabled={isLoading}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            
            <Stack spacing={10} pt={2}>
              <Button
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                isLoading={isLoading}
                loadingText="Creating account..."
                isDisabled={!register.firstName || !register.lastName || !register.email || !register.password}
              >
                {isLoading ? <Spinner size="sm" /> : 'Sign up'}
              </Button>
            </Stack>
            
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} href='/login'>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}