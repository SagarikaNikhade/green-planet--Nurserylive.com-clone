import { Button, CloseButton, Flex, Link, useColorModeValue, Text } from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
import { useDispatch } from 'react-redux'
import { deleteCart, getCart, updateCart, updateCartDec } from '../../Redux/cartReducer.js/action'

export const CartItem = ({ id,title, price,total, quantity,image, category, isGiftWrapping }) => {
  const dispatch = useDispatch()

  const handleDelete=(id)=>{
    dispatch(deleteCart(id)).then(()=>dispatch(getCart))
  }
  const handleIncrease=(id,total,price,quantity)=>{
    console.log(id)
    dispatch(updateCart(id,total,price,quantity)).then(()=>dispatch(getCart))
  }
  const handleDecrease=(id,total,price,quantity)=>{
    console.log(id)
    dispatch(updateCartDec(id,total,price,quantity)).then(()=>dispatch(getCart))
  }

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
        <Button backgroundColor='#ff6b6b' onClick={()=>handleIncrease(id,total,price,quantity)} isDisabled={quantity===5}>+</Button>
        <Text>{quantity}</Text>
        <Button backgroundColor='#ff6b6b' onClick={()=>handleDecrease(id,total,price,quantity)} isDisabled={quantity===1}>-</Button>
        <PriceTag price={total} />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={()=>handleDelete(id)} />
      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{ base: 'flex', md: 'none' }}>
        <Link fontSize="sm" textDecor="underline" onClick={()=>handleDelete(id)}>
          Delete
        </Link>
        <Button backgroundColor='#ff6b6b' isDisabled={quantity===5} onClick={()=>handleIncrease(id,total,price,quantity)}>+</Button>
        <Text>{quantity}</Text>
        <Button backgroundColor='#ff6b6b' onClick={()=>handleDecrease(id,total,price,quantity)} isDisabled={quantity===1}>-</Button>
        <PriceTag price={total} />
      </Flex>
    </Flex>
  );
};
