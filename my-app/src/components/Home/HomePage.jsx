import React from 'react';
import { Slideshow } from './Slideshow';
import { 
  Center, 
  Image, 
  Box, 
  Text, 
  Heading,
  Button,
  VStack,
  HStack,
  Badge,
  Icon,
  Container
} from '@chakra-ui/react';
import { 
  Star, 
  Truck, 
  Shield, 
  Heart,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import styled from 'styled-components';
import GridBox from './GridBox';
import Video from './Video';
import Nav2 from "./Nav2";
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <DIV>
      {/* nav-2 */}
      <Nav2 />

      {/* slider */}
      <Center>
        <Slideshow />
      </Center>

      {/* Enhanced Promotional Banner */}
      <Box 
        border='0px solid white' 
        mt='30px' 
        bgGradient="linear(to-r, #32620f, #2a520c)"
        p="30px"
        boxShadow="2xl"
        position="relative"
        overflow="hidden"
        w="100%"
        mx="auto"
        _hover={{ transform: 'translateY(-2px)', boxShadow: '3xl' }}
        transition="all 0.3s ease"
      >
          {/* Decorative elements */}
          <Box
            position="absolute"
            top="-20px"
            right="-20px"
            w="100px"
            h="100px"
            bg="white"
            opacity="0.1"
            borderRadius="full"
          />
          <Box
            position="absolute"
            bottom="-30px"
            left="-30px"
            w="150px"
            h="150px"
            bg="white"
            opacity="0.05"
            borderRadius="full"
          />
          
          <VStack spacing={4} textAlign="center" position="relative" zIndex={1}>
            <HStack spacing={2}>
              <Icon as={Sparkles} w={6} h={6} color="white" />
              <Badge 
                colorScheme="white" 
                variant="solid" 
                px={4} 
                py={2} 
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
              >
                🌟 Special Offer
              </Badge>
            </HStack>
            
            <Heading
              color="white" 
              fontFamily="Cabin, sans-serif" 
              fontSize={{ base: '2xl', md: '3xl' }} 
              fontWeight="700" 
              textAlign="center"
              lineHeight="shorter"
            >
              Discover Joy in Savings!
            </Heading>
            
            <Text 
              color="white" 
              fontSize={{ base: 'lg', md: 'xl' }} 
              mt="10px" 
              textAlign="center"
              opacity={0.95}
              maxW="500px"
            >
              Unlock happiness with amazing offers on the Green Planet! 
              Get premium plants at unbeatable prices.
            </Text>
            
            <HStack spacing={4} mt={4}>
              <Button
                backgroundColor="white"
                color="#32620f"
                size="lg"
                _hover={{ bg: 'gray.100', transform: 'scale(1.05)' }}
                rightIcon={<ArrowRight />}
                fontWeight="bold"
                px={8}
                as={Link}
                to="/product"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                color="white"
                borderColor="white"
                size="lg"
                _hover={{ bg: 'white', color: '#32620f' }}
                fontWeight="bold"
                px={8}
              >
                Learn More
              </Button>
            </HStack>
            
            <Image 
              src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png' 
              alt='playstore' 
              h='auto' 
              maxH='50px' 
              mx="auto" 
              mt="20px"
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.2s"
            />
          </VStack>
        </Box>

      {/* Enhanced Features Section */}
      <Container maxW="7xl" py={16}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="xl" color="#32620f">
              Why Choose Green Planet?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              We're committed to bringing you the best in plant care and gardening
            </Text>
          </VStack>

          <Box
            display="grid"
            gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={6}
            w="100%"
          >
            {[
              {
                icon: Truck,
                title: 'Free Delivery',
                description: 'Enjoy free shipping on orders above ₹499. Fast, reliable delivery to your doorstep with care.',
                color: 'blue'
              },
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: '100% satisfaction guaranteed. Premium quality plants with health guarantee on every purchase.',
                color: 'green'
              },
              {
                icon: Heart,
                title: 'Expert Care',
                description: 'Get personalized plant care guidance from our gardening experts. Your plants will thrive!',
                color: 'red'
              },
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Handpicked, premium plants and gardening essentials. Only the finest for your green space.',
                color: 'yellow'
              }
            ].map((feature, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="2xl"
                boxShadow="0 10px 25px rgba(0, 0, 0, 0.1)"
                textAlign="center"
                _hover={{ 
                  transform: 'translateY(-8px) scale(1.02)', 
                  boxShadow: '0 20px 40px rgba(50, 98, 15, 0.2)',
                  borderColor: '#32620f',
                  _before: {
                    opacity: 1
                  }
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                border="2px solid"
                borderColor="transparent"
                position="relative"
                overflow="hidden"
                cursor="pointer"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(50, 98, 15, 0.05) 0%, rgba(50, 98, 15, 0.02) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 0
                }}
              >
                {/* Decorative background circle */}
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  w="80px"
                  h="80px"
                  bg="linear-gradient(135deg, #32620f, #2a520c)"
                  borderRadius="full"
                  opacity="0.1"
                  zIndex={0}
                />
                
                {/* Content with proper z-index */}
                <Box position="relative" zIndex={1}>
                  <Box
                    bg="linear-gradient(135deg, #32620f, #2a520c)"
                    w="80px"
                    h="80px"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    mb={6}
                    boxShadow="0 8px 20px rgba(50, 98, 15, 0.3)"
                    _hover={{
                      transform: 'scale(1.1) rotate(5deg)',
                      boxShadow: '0 12px 30px rgba(50, 98, 15, 0.4)'
                    }}
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={feature.icon}
                      w={10}
                      h={10}
                      color="white"
                    />
                  </Box>
                  
                  <Heading 
                    size="xl" 
                    mb={3} 
                    color="#32620f"
                    fontWeight="800"
                    _hover={{ color: '#2a520c' }}
                    transition="color 0.3s ease"
                    textAlign="center"
                    letterSpacing="-0.5px"
                  >
                    {feature.title}
                  </Heading>
                  
                  {/* Decorative line above text */}
                  <Box
                    w="30px"
                    h="2px"
                    bg="linear-gradient(90deg, #32620f, #2a520c)"
                    mx="auto"
                    mb={4}
                    borderRadius="full"
                    _hover={{
                      w: "50px",
                      transition: "width 0.3s ease"
                    }}
                  />
                  
                  <Text 
                    color="gray.700" 
                    fontSize="lg"
                    lineHeight="1.7"
                    fontWeight="500"
                    textAlign="center"
                    maxW="280px"
                    mx="auto"
                    _hover={{ color: 'gray.800' }}
                    transition="color 0.3s ease"
                  >
                    {feature.description}
                  </Text>
                  
                  {/* Enhanced decorative line */}
                  <Box
                    w="60px"
                    h="4px"
                    bg="linear-gradient(90deg, #32620f, #2a520c)"
                    mx="auto"
                    mt={6}
                    borderRadius="full"
                    _hover={{
                      w: "80px",
                      h: "5px",
                      transition: "all 0.3s ease"
                    }}
                    boxShadow="0 2px 8px rgba(50, 98, 15, 0.3)"
                  />
                  
                  {/* Additional decorative elements */}
                  <Box
                    position="absolute"
                    bottom="-10px"
                    left="50%"
                    transform="translateX(-50%)"
                    w="100px"
                    h="2px"
                    bg="linear-gradient(90deg, transparent, #32620f, transparent)"
                    opacity="0.3"
                    _hover={{
                      opacity: 0.6,
                      transition: "opacity 0.3s ease"
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </VStack>
      </Container>

      {/* GridBox */}
      <Center>
        <GridBox />
      </Center>
      
      {/* Video */}
      <Center>
        <Video />
      </Center>
    </DIV>
  )
}

export default HomePage;

const DIV = styled.div`
  background: linear-gradient(135deg, #f8fffe 0%, #f0f8f0 100%);
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(50, 98, 15, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(50, 98, 15, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  * {
    position: relative;
    z-index: 1;
  }
`;