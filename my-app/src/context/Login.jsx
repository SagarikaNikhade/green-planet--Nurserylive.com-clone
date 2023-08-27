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
  useColorModeValue,useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/AuthReducer/action';

export default function Login() {
  const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate()
    const {auth} = useSelector((store)=> store.authReducer)
    const dispatch = useDispatch()
    const toast=useToast()

    const handleSubmit = (e) =>{
      e.preventDefault();
      const userData = {
          email,password
      }
      dispatch(loginUser(userData)).then(()=>navigate(location.state))
      console.log(userData)
      setEmail(" ");
      setPassword(" ");
      toast({
        title: 'Log In Sucessfully !!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
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
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
                >
                Login in
              </Button>
              
              <Stack pt={6}>
              <Text align={'center'}>
                Already have an account? <Link color={'blue.400'} href="/signup">Sign Up</Link>
              </Text>
            </Stack>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
