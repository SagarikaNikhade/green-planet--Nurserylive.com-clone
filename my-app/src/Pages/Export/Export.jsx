import React from 'react'

import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    SimpleGrid,
    Icon,
    Divider,
  } from "@chakra-ui/react";
  import { FaLeaf, FaHandsHelping, FaSeedling, FaGlobeAsia } from "react-icons/fa";
  
  const Export = () => {
    return (
      <Box p={8} maxW="6xl" mx="auto">
        <VStack spacing={6} align="start">
          <Heading size="xl" color="green.700">
            Corporate Gifting
          </Heading>
          <Text fontSize="lg">
            <strong>Corporate Gifting in India:</strong> A Sustainable Choice for Businesses
          </Text>
          <Text>
            Looking for meaningful and eco-friendly corporate gifting solutions in India? The trend of
            sustainable gifting is growing rapidly, with companies choosing gifts that reflect their
            commitment to the environment. At <strong>NurseryLive</strong>, we specialize in offering
            green corporate gifts like plant gifts and seed kits—perfect for fostering sustainability
            and strengthening relationships.
          </Text>
  
          <Divider />
  
          <Heading size="md" color="green.600">
            Why Choose Green Corporate Gifting?
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            <HStack align="start">
              <Icon as={FaLeaf} boxSize={6} color="green.500" />
              <Text>
                <strong>Environmental Impact:</strong> Plants absorb CO₂, improve air quality, and promote sustainability.
              </Text>
            </HStack>
            <HStack align="start">
              <Icon as={FaHandsHelping} boxSize={6} color="green.500" />
              <Text>
                <strong>Health & Well-being:</strong> Greenery reduces stress, boosts productivity, and enhances mood.
              </Text>
            </HStack>
            <HStack align="start">
              <Icon as={FaSeedling} boxSize={6} color="green.500" />
              <Text>
                <strong>Symbolic Value:</strong> Plants signify growth, prosperity, and good fortune—perfect for business relationships.
              </Text>
            </HStack>
            <HStack align="start">
              <Icon as={FaGlobeAsia} boxSize={6} color="green.500" />
              <Text>
                <strong>Customization:</strong> Add personalized messages, logos, and branded packaging for a unique touch.
              </Text>
            </HStack>
          </SimpleGrid>
  
          <Divider />
  
          <Heading size="md" color="green.600">
            Top Corporate Gifting Ideas from NurseryLive
          </Heading>
          <VStack align="start" spacing={3}>
            <Text>
              • <strong>Indoor Plants:</strong> Low-maintenance plants like succulents, bonsai, and lucky bamboo.
            </Text>
            <Text>
              • <strong>Personalized Plant Kits:</strong> Custom plant sets with company branding.
            </Text>
            <Text>
              • <strong>Seed Kits:</strong> Easy-to-grow seed kits to encourage eco-consciousness.
            </Text>
            <Text>
              • <strong>Air-Purifying Plants:</strong> Snake plants, peace lilies, and more to improve indoor air.
            </Text>
          </VStack>
  
          <Divider />
  
          <Heading size="md" color="green.600">
            The Impact of Gifting Plants
          </Heading>
          <Text>
            A study in the <em>Journal of Environmental Psychology</em> found greenery reduces stress and enhances
            workplace productivity. According to the UN, one tree can absorb up to 48 lbs of CO₂ per year.
            Sustainable gifting can be your company's contribution to environmental conservation.
          </Text>
  
          <Divider />
  
          <Heading size="md" color="green.600">
            Why Choose NurseryLive?
          </Heading>
          <VStack align="start" spacing={3}>
            <Text>
              • <strong>Custom Branding:</strong> Add logos, messages, and custom packaging.
            </Text>
            <Text>
              • <strong>Nationwide Delivery:</strong> Timely delivery across India.
            </Text>
            <Text>
              • <strong>Bulk Orders & Discounts:</strong> Get exclusive corporate pricing.
            </Text>
            <Text>
              • <strong>Eco-Friendly Packaging:</strong> Sustainable and biodegradable materials.
            </Text>
          </VStack>
  
          <Divider />
  
          <Heading size="md" color="green.600">
            Order Your Corporate Gifts Today!
          </Heading>
          <Text>
            Join the green revolution in corporate gifting with NurseryLive. Impress clients, reward
            employees, and make a positive environmental impact. Contact us today for a custom quote.
          </Text>
  
          <Text fontWeight="bold" color="green.700" fontSize="lg">
            Let's make corporate gifting greener, one plant at a time!
          </Text>
        </VStack>
      </Box>
    );
  };
  
  export default Export;
  
