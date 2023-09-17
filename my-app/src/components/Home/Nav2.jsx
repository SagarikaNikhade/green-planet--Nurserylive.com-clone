import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Center, Flex,Text, VStack} from '@chakra-ui/react';
import styled from 'styled-components';

const Nav2 = () => {
  return (
    <DIV>
      <Center>
        <Flex className="nav2" gap={10}>
            <RouterLink to="/product">
              <VStack>
                <img src="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_8b24edb8-88c8-408a-9b5d-e5f8e2049c49.jpg?v=1639228002" alt="Gardening" style={{ width: '100px', borderRadius: '50%' }} />
                <Text style={{ textDecoration:'none',color: 'white', fontFamily: 'cabin sans-serif', fontSize: '15px', fontWeight: '600' }}>GARDENING</Text>
              </VStack>
            </RouterLink>
            <RouterLink to="/product">
              <VStack>
                <img src="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-anthurium-andreanum-princess-amalia-elegance-plant.jpg?v=1634213376" alt="Gardening" style={{ width: '100px', borderRadius: '50%' }} />
                <Text style={{ color: 'white', fontFamily: 'cabin sans-serif', fontSize: '15px', fontWeight: '600' }}>PLANTS</Text>
              </VStack>
            </RouterLink>
            <RouterLink to="/product">
              <VStack>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufmwUnvpsL3Qh85p9TyZ6NTUQpSLlXuTG8w&usqp=CAU" alt="seeds" style={{ width: '100px', borderRadius: '50%' }} />
                <Text style={{ color: 'white', fontFamily: 'cabin sans-serif', fontSize: '15px', fontWeight: '600' }}>SEEDS</Text>
              </VStack>
            </RouterLink>
            <RouterLink to="/product">
              <VStack>
                <img src="https://5.imimg.com/data5/OH/ZB/KJ/SELLER-59518110/gladiolus-500x500.jpg" alt="bulbs" style={{ width: '100px', borderRadius: '50%' }} />
                <Text style={{ color: 'white', fontFamily: 'cabin sans-serif', fontSize: '15px', fontWeight: '600' }}>BULBS</Text>
              </VStack>
            </RouterLink>
            <RouterLink to="/product">
              <VStack>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyhTxCkhaT9cq4a7TlgT8TLv_7EQgmFSfhA&usqp=CAU" alt="pubbles" style={{ width: '100px', borderRadius: '50%' }} />
                <Text style={{ color: 'white', fontFamily: 'cabin sans-serif', fontSize: '15px', fontWeight: '600' }}>PEBBLES</Text>
              </VStack>
            </RouterLink>
            <RouterLink to="/product">
              <VStack>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y8Uf9-lKac7qr6542Gp-3JTtBVN3DBkb8w&usqp=CAU" alt="pubbles" style={{ width: '100px', borderRadius: '50%' }} />
                <Text style={{ color: 'white', fontFamily: 'cabin sans-serif', fontSize: '15px', fontWeight: '600' }}>FERTILIZERS</Text>
              </VStack>
            </RouterLink>
        </Flex>
      </Center>
    </DIV>
  )
}

export default Nav2

const DIV = styled.div`

.nav2{
  border:0px solid white;
  margin-top:30px;
}

@media (max-width: 710px){
  .nav2{
    flex-direction: column;
  }
}
`;
