import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Center,
  Button,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Divider,
  useColorModeValue,
  Stack,
  Icon,
  Flex
} from '@chakra-ui/react';
import { 
  Car, 
  ShoppingCart, 
  Star, 
  Users, 
  Gift, 
  Shield, 
  Truck,
  Award,
  Heart,
  Leaf
} from 'lucide-react';

const Corporate = () => {
  const bgColor = 'white';
  const cardBg = 'white';
  const textColor = 'gray.700';
  const headingColor = '#32620f';

  const services = [
    {
      icon: Star,
      title: 'Custom Branding',
      description: 'Personalized packaging and branding for your corporate gifts',
      color: 'yellow'
    },
    {
      icon: Truck,
      title: 'All India Delivery',
      description: 'Fast and reliable delivery across all major cities in India',
      color: 'blue'
    },
    {
      icon: ShoppingCart,
      title: '6000+ Products',
      description: 'Wide variety of plants, seeds, and gardening accessories',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Bulk Orders',
      description: 'Special pricing and support for large corporate orders',
      color: 'purple'
    },
    {
      icon: Gift,
      title: 'Gift Wrapping',
      description: 'Professional gift wrapping and presentation services',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Premium quality plants with health guarantee',
      color: 'red'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest plants and gardening products'
    },
    {
      icon: Heart,
      title: 'Thoughtful Gifting',
      description: 'Make every occasion special with nature\'s gifts'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable and environmentally conscious choices'
    }
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-br, #32620f, #32620f)"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <Badge colorScheme="white" variant="solid" px={4} py={2} borderRadius="full">
                Corporate Gifting Solutions
              </Badge>
              
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight="bold"
                lineHeight="shorter"
              >
                Start Thoughtful Gifting Today!
              </Heading>
              
              <Text fontSize="xl" opacity={0.9} maxW="500px">
                Want your team, partners & friends feel closer? You are covered with our premium corporate gifting solutions.
              </Text>
              
              <HStack spacing={4}>
                <Button
                  size="lg"
                  backgroundColor="white"
                  color="#32620f"
                  _hover={{ bg: 'gray.100' }}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  _hover={{ bg: 'white', color: '#32620f' }}
                >
                  Learn More
                </Button>
              </HStack>
            </VStack>
            
            <Box position="relative">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Gifting"
                borderRadius="xl"
                boxShadow="2xl"
                w="100%"
                h="400px"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top={4}
                right={4}
                bg="white"
                color="#32620f"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
              >
                Premium Quality
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxW="7xl" py={16}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="xl" color={headingColor}>
              Our Corporate Services
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="600px">
              Comprehensive solutions for all your corporate gifting needs
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
            {services.map((service, index) => (
              <Card key={index} bg={cardBg} boxShadow="lg" _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }} transition="all 0.3s">
                <CardBody textAlign="center" p={8}>
                  <Icon
                    as={service.icon}
                    w={12}
                    h={12}
                    color={`${service.color}.500`}
                    mb={4}
                  />
                  <Heading size="md" mb={3} color={headingColor}>
                    {service.title}
                  </Heading>
                  <Text color={textColor} fontSize="sm">
                    {service.description}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box bg={cardBg} py={16}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading size="xl" color={headingColor}>
                Why Choose Green Planet for Corporate Gifting?
              </Heading>
              
              <Stack spacing={6}>
                {features.map((feature, index) => (
                  <HStack key={index} spacing={4} align="start">
                    <Box
                      bg="green.100"
                      p={3}
                      borderRadius="full"
                      color="green.600"
                    >
                      <Icon as={feature.icon} w={6} h={6} />
                    </Box>
                    <VStack align="start" spacing={1}>
                      <Heading size="sm" color={headingColor}>
                        {feature.title}
                      </Heading>
                      <Text color={textColor} fontSize="sm">
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </Stack>
            </VStack>
            
            <Box>
              <Image
                src="https://nurserylive.com/cdn/shop/products/nurserylive-bulk-gifts-money-plant-marble-prince-in-paper-wrap-gift-pack-16969031843980_512x512.jpg?v=1634224220"
                alt="Corporate Benefits"
                borderRadius="xl"
                boxShadow="lg"
                w="100%"
                h="400px"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bgGradient="linear(to-r, #32620f, #32620f)" color="white" py={16}>
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={8}>
            <Heading size="xl">
              Ready to Start Your Corporate Gifting Journey?
            </Heading>
            <Text fontSize="lg" opacity={0.9} maxW="600px">
              Join thousands of companies who trust Green Planet for their corporate gifting needs. 
              Get in touch with our team today!
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                colorScheme="white"
                variant="solid"
                bg="white"
                color="#32620f"
                _hover={{ bg: 'gray.100' }}
              >
                Contact Sales Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'white', color: '#32620f' }}
              >
                Download Catalog
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxW="7xl" py={16}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="#32620f">
              1000+
            </Heading>
            <Text color={textColor} fontWeight="medium">
              Corporate Clients
            </Text>
          </VStack>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="#32620f">
              50,000+
            </Heading>
            <Text color={textColor} fontWeight="medium">
              Gifts Delivered
            </Text>
          </VStack>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="#32620f">
              98%
            </Heading>
            <Text color={textColor} fontWeight="medium">
              Client Satisfaction
            </Text>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Corporate
