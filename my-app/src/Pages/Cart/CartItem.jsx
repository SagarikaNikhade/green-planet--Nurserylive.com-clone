import { Button, CloseButton, Flex, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
import { useDispatch } from 'react-redux'
import { deleteCart, updateCart } from '../../Redux/cartReducer.js/action'

export const CartItem = ({ _id, title, total, quantity, image, category, isGiftWrapping, product }) => {
  const dispatch = useDispatch()
  const itemId = _id; // Use the cart item ID, not the product ID

  const handleDelete = (itemId) => {
    dispatch(deleteCart(itemId));
  }

  const handleIncrease = (itemId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    if (newQuantity <= 10) {
      dispatch(updateCart(itemId, newQuantity));
    }
  }

  const handleDecrease = (itemId, currentQuantity) => {
    const newQuantity = currentQuantity - 1;
    if (newQuantity >= 1) {
      dispatch(updateCart(itemId, newQuantity)); // Use updateCart for both
    }
  }

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        title={product?.product?.title}
        image={product?.product?.image }
        category={product?.product?.category}
        price={product?.product?.price}
        isGiftWrapping={isGiftWrapping}
      />
      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <Button 
          backgroundColor='#32620f' 
          color="white"
          onClick={() => handleIncrease(itemId, quantity)} 
          isDisabled={quantity >= 10}
          _hover={{ backgroundColor: '#2a520c' }}
        >
          +
        </Button>
        <Text>{quantity}</Text>
        <Button 
          backgroundColor='#32620f' 
          color="white"
          onClick={() => handleDecrease(itemId, quantity)} 
          isDisabled={quantity <= 1}
          _hover={{ backgroundColor: '#2a520c' }}
        >
          -
        </Button>
        <PriceTag price={total} />
        <CloseButton 
          aria-label={`Delete ${product?.product?.title} from cart`} 
          onClick={() => handleDelete(itemId)} 
        />
      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{ base: 'flex', md: 'none' }}>
        <Link fontSize="sm" textDecor="underline" onClick={() => handleDelete(itemId)}>
          Delete
        </Link>
        <Button 
          backgroundColor='#32620f' 
          color="white"
          isDisabled={quantity >= 10} 
          onClick={() => handleIncrease(itemId, quantity)}
          _hover={{ backgroundColor: '#2a520c' }}
        >
          +
        </Button>
        <Text>{quantity}</Text>
        <Button 
          backgroundColor='#32620f' 
          color="white"
          onClick={() => handleDecrease(itemId, quantity)} 
          isDisabled={quantity <= 1}
          _hover={{ backgroundColor: '#2a520c' }}
        >
          -
        </Button>
        <PriceTag price={total} />
      </Flex>
    </Flex>
  );
};
