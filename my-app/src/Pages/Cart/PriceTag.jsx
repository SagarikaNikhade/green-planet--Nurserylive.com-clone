import { HStack, StackProps, Text, TextProps, useColorModeValue as mode } from '@chakra-ui/react'
import { ReactNode } from 'react'

// interface PriceTagProps {
//   currency: string
//   price: number
//   salePrice?: number
//   rootProps?: StackProps
//   priceProps?: TextProps
//   salePriceProps?: TextProps
// }

// export type FormatPriceOptions = { locale?: string; currency?: string }

// export function formatPrice() {
//   const { locale = 'en-US', currency = 'USD' } = opts
//   const formatter = new Intl.NumberFormat(locale, {
//     currency,
//     style: 'currency',
//     maximumFractionDigits: 2,
//   })
//   return formatter.format(value)
// }

export const PriceTag = ({id,title,price,image,rating,salePriceProps,salePrice,priceProp}) => {
//   const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props
  return (
    <HStack spacing="1" >
      <Price isOnSale={!!salePrice} >
        {price}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
        {/* {formatPrice(salePrice, { currency })} */}
        </SalePrice>
      )}
    </HStack>
  )
}

const Price = ({isOnSale,textProps,children}) => {
  const defaultColor = mode('gray.700', 'gray.400')
  const onSaleColor = mode('gray.400', 'gray.700')
  const color = isOnSale ? onSaleColor : defaultColor
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
  )
}

const SalePrice = (textProps) => (
  <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')} {...textProps} />
)