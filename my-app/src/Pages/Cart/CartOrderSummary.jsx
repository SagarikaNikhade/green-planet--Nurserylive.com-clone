import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  import { useState } from 'react';
  // import { Link} from "react-router-dom";
//   import { formatPrice } from './PriceTag'
  
  const OrderSummaryItem = ({ label, value, children }) => {
   const handleAlert = () =>{
    alert("Order ")
   }
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
        <Text fontWeight="medium">{value}</Text>
      </Flex>
    )
  }
  
  export const CartOrderSummary = ({id,title,price,image,rating}) => {
    const addCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [data , setData] = useState(addCart)

    const [number, setNumber] = useState(1); //number of item

    const updateQuantity = (id, value) => {
      addCart.map((item) => item.id === id) &&
        setNumber((prevState) => prevState + value);
    };

   let total = 0;
   for(let i=0;i<data.length;i++){
    total += (data[i].price) * number
   }
   console.log(total);

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          {/* <OrderSummaryItem label="Subtotal" value={formatPrice(597)} /> */}
          <OrderSummaryItem label="Price Details">
            <Text>
            ₹ {total}
            </Text>
          </OrderSummaryItem>
          <OrderSummaryItem label="Delivery Charges">
            <Text>
            ₹ 49.99
            </Text>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="lg" fontWeight="extrabold">
            ₹ {total + 49.99}
            </Text>
          </Flex>
        </Stack>
        <Button backgroundColor='#ff6b6b' size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
      </Stack>
    )
  }