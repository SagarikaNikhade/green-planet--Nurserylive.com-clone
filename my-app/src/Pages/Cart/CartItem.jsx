import { Button, CloseButton, Flex, Link, Select, useColorModeValue ,Text} from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState } from 'react'

// const QuantitySelect = ({SelectProps}) => {
//   return (
//     <Select
//       maxW="64px"
//       aria-label="Select quantity"
//       focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
//       {...SelectProps}
//     >
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//       <option value="4">4</option>
//     </Select>
//   )
// }

export const CartItem = ({title,price,image,category,rating,isGiftWrapping,onChangeQuantity,onClickDelete,}) => {
  const addCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [data,setData] = useState(addCart)
  // const [qty , setQty] = useState(1);

  //   const handleQty = (id,value) =>{
  //       let quantity = data.map((el)=>
  //           el.id === id ? setQty(qty+value) :el
  //       )
  //       console.log(quantity)
  //       setData(quantity)
  //   }

  const [number, setNumber] = useState(localStorage.getItem("count") || 1); 

	const updateQuantity = (id, value) => {
    addCart.map((item) => item.id === id) &&
			setNumber((prevState) => prevState + value);
      localStorage.setItem("count",value++)
	};
    // console.log(qty)

    function deleteItem() {
      var answer = localStorage.key(2);
      answer.removeItem("cart");
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
        {/* <Button backgroundColor='#ff6b6b' onClick={()=>handleQty(+1)}>+</Button>
        <Text>{qty}</Text>
        <Button backgroundColor='#ff6b6b' onClick={()=>handleQty(-1)} isDisabled={qty == 0}>-</Button> */}
        <button onClick={(id) => updateQuantity(id, 1)}>+</button>
      <p>{number}</p>
      <button onClick={(id) => updateQuantity(id, -1)}>-</button>
        <PriceTag price={price}  />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={deleteItem} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        {/* <Button backgroundColor='#ff6b6b' onClick={(id)=>{handleQty(id,Number(+1))}}>+</Button>
        <Button>{qty}</Button>
        <Button backgroundColor='#ff6b6b' onClick={(id)=>{handleQty(id,-1)}} isDisabled={qty == 0}>-</Button> */}
        <button onClick={(id) => updateQuantity(id, 1)}>+</button>
      <p>{number}</p>
      <button onClick={(id) => updateQuantity(id, -1)}>-</button>
        <PriceTag price={price}/>
      </Flex>
    </Flex>
  )
}