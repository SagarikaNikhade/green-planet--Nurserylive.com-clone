import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ProductCard from './ProductCard';
import {useLocation, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from '../../Redux/productReducer.js/action';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const {products} = useSelector((store)=>store.productReducer);
  // console.log(searchParams.getAll("category"));

  let obj={
      params:{
          category : searchParams.getAll("category"),
          _sort:searchParams.get("order") && "price",
          _order:searchParams.get("order"),
      }
  };

  useEffect(()=>{
      dispatch(getProducts(obj));
  },[location.search])

  //  console.log({products})
return (
  <DIV>
    {products.length > 0 && products.map((el)=>{
      return <ProductCard key={el.id} {...el} />
    })}
  </DIV>
)
}

export default ProductList


const DIV = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
gap:20px;

@media (max-width: 910px){
  grid-template-columns: repeat(2,1fr);
}
`;
