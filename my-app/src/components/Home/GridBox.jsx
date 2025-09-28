import React from 'react'
import { 
  Box, 
  Grid, 
  GridItem, 
  Button, 
  Heading, 
  Text, 
  Badge,
  VStack,
  HStack,
  Icon,
  Container
} from '@chakra-ui/react';
import { 
  Gift, 
  Home, 
  Sprout, 
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const GridBox = () => {
  const gridItems = [
    {
      id: 1,
      title: 'A Living Gift',
      subtitle: 'Upto 30% Off',
      description: 'Express true emotions with a gift that grows forever.',
      image: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-gift_223a0267-5e95-413f-9c5a-52dafe5b34ef_1109x717.jpg?v=1633892191',
      icon: Gift,
      color: 'green',
      rowSpan: 2,
      colSpan: 3
    },
    {
      id: 2,
      title: 'Miniature Garden',
      subtitle: 'Upto 30% Off',
      description: 'Enjoy a living garden even in tiny spaces.',
      image: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-miniature-gardens_ccf96d85-dcc2-4da8-b932-8b43a6eccbae_554x470.jpg?v=1633892191',
      icon: Home,
      color: 'blue',
      rowSpan: 2,
      colSpan: 2
    },
    {
      id: 3,
      title: 'Organic Seeds',
      subtitle: '50% Off',
      description: 'Best quality seeds for organic lovers. No chemical No preservatives.',
      image: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-seeds-organic_772ae885-6e34-45c1-81f7-584a74ad4315_554x470.jpg?v=1633892191',
      icon: Sprout,
      color: 'orange',
      rowSpan: 2,
      colSpan: 2
    },
    {
      id: 4,
      title: 'Event Gifts',
      subtitle: 'Starting ₹119',
      description: 'Corporate, Marriages, Conferences, Parties? You\'re covered.',
      image: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-home-page-corporate-bulk-gift_f71def5e-6784-46d5-ab61-b5cebaa1d145_554x470.jpg?v=1633892192',
      icon: Users,
      color: 'purple',
      rowSpan: 2,
      colSpan: 3
    }
  ];

  return (
    <Container maxW="7xl" py={16}>
      <VStack spacing={12}>
        <VStack spacing={4} textAlign="center">
          <HStack spacing={2}>
            <Icon as={Sparkles} w={6} h={6} color="#32620f" />
            <Badge 
              colorScheme="green" 
              variant="solid" 
              px={4} 
              py={2} 
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
            >
              🌟 Special Offers
            </Badge>
          </HStack>
          <Heading size="xl" color="#32620f">
            Discover Amazing Deals
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px">
            Explore our curated collection of premium plants and gardening essentials with exclusive offers
          </Text>
        </VStack>

        <DIV>
          <Box>
            <Grid
              h={{ base: 'auto', md: '600px' }}
              templateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)' }}
              templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
              gap={6}
              w="100%"
              maxW="1400px"
              mx="auto"
            >
              {gridItems.map((item) => (
                <GridItem 
                  key={item.id}
                  rowSpan={item.rowSpan} 
                  colSpan={item.colSpan}
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  _hover={{ 
                    transform: 'scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  cursor="pointer"
                >
                  {/* Background Image with Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundImage={`url(${item.image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                  />
                  
                  {/* Gradient Overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(to-br, rgba(0,0,0,0.3), rgba(0,0,0,0.6))"
                    _hover={{
                      bgGradient: "linear(to-br, rgba(0,0,0,0.2), rgba(0,0,0,0.5))"
                    }}
                    transition="all 0.3s ease"
                  />
                  
                  {/* Decorative Elements */}
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                    w="60px"
                    h="60px"
                    bg="white"
                    opacity="0.1"
                    borderRadius="full"
                    _hover={{
                      opacity: 0.2,
                      transform: 'scale(1.1)'
                    }}
                    transition="all 0.3s ease"
                  />
                  
                  {/* Content */}
                  <Box
                    position="relative"
                    zIndex={2}
                    p={8}
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <VStack align="start" spacing={4} flex="1">
                      {/* Icon and Badge */}
                      <HStack spacing={3}>
                        <Box
                          bg="white"
                          p={3}
                          borderRadius="full"
                          boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
                        >
                          <Icon as={item.icon} w={6} h={6} color="#32620f" />
                        </Box>
                        <Badge
                          colorScheme={item.color}
                          variant="solid"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="sm"
                          fontWeight="bold"
                        >
                          {item.subtitle}
                        </Badge>
                      </HStack>
                      
                      {/* Title */}
                      <Heading
                        color="white"
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight="800"
                        lineHeight="shorter"
                        textShadow="0 2px 4px rgba(0,0,0,0.5)"
                      >
                        {item.title}
                      </Heading>
                      
                      {/* Description */}
                      <Text
                        color="white"
                        fontSize={{ base: 'md', md: 'lg' }}
                        lineHeight="1.6"
                        textShadow="0 1px 2px rgba(0,0,0,0.5)"
                        maxW="300px"
                      >
                        {item.description}
                      </Text>
                    </VStack>
                    
                    {/* Button */}
                    <Box>
                      <Button
                        as={Link}
                        to="/product"
                        backgroundColor="#32620f"
                        color="white"
                        size="lg"
                        h="50px"
                        px={8}
                        borderRadius="full"
                        fontWeight="bold"
                        fontSize="md"
                        _hover={{
                          backgroundColor: '#2a520c',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(50, 98, 15, 0.4)'
                        }}
                        _active={{
                          transform: 'translateY(0)'
                        }}
                        transition="all 0.3s ease"
                        rightIcon={<ArrowRight />}
                        boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
                      >
                        Shop Now
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </DIV>
      </VStack>
    </Container>
  )
}

export default GridBox;

const DIV = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, rgba(50, 98, 15, 0.05) 0%, rgba(50, 98, 15, 0.02) 100%);
    border-radius: 24px;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    &::before {
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
    }
  }
`;