import { Button, CloseButton, Flex, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
import { useState } from 'react';

export const CartItem = ({ title, price, image, category, isGiftWrapping }) => {
  const addCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [data, setData] = useState(addCart);
  const [number, setNumber] = useState(localStorage.getItem("count") || 1);

  const updateQuantity = (id, value) => {
    const updatedCart = data.map(item => item.title === title ? { ...item, quantity: item.quantity + value } : item);
    setData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNumber(prevNumber => prevNumber + value);
    localStorage.setItem("count", Number(localStorage.getItem("count")) + value);
  };

  const deleteItem = () => {
    const updatedCart = data.filter(item => item.title !== title);
    setData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        title={title}
        image={image}
        category={category}
        isGiftWrapping={isGiftWrapping}
      />
      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <Button backgroundColor='#ff6b6b' onClick={() => updateQuantity(title, 1)}>+</Button>
        <Text>{number}</Text>
        <Button backgroundColor='#ff6b6b' onClick={() => updateQuantity(title, -1)} isDisabled={number === "0"}>-</Button>
        <PriceTag price={price} />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={deleteItem} />
      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{ base: 'flex', md: 'none' }}>
        <Link fontSize="sm" textDecor="underline" onClick={deleteItem}>
          Delete
        </Link>
        <Button backgroundColor='#ff6b6b' onClick={() => updateQuantity(title, 1)}>+</Button>
        <Text>{number}</Text>
        <Button backgroundColor='#ff6b6b' onClick={() => updateQuantity(title, -1)} isDisabled={number === "0"}>-</Button>
        <PriceTag price={price} />
      </Flex>
    </Flex>
  );
};
