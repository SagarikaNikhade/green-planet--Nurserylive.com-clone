import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import React from 'react';

const Price = ({ isOnSale, textProps, children }) => {
  const defaultColor = mode('gray.700', 'gray.400');
  const onSaleColor = mode('gray.400', 'gray.700');
  const color = isOnSale ? onSaleColor : defaultColor;

  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  );
};

const SalePrice = ({ textProps }) => (
  <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')} {...textProps} />
);

export const PriceTag = ({ isOnSale, salePriceProps, price, salePrice }) => {
  return (
    <HStack spacing="1">
      <Price isOnSale={isOnSale}>{price}</Price>
      {salePrice && <SalePrice {...salePriceProps}>{salePrice}</SalePrice>}
    </HStack>
  );
};
