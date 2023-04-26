import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
  const [searchParams , setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category,setCategory] =useState(initialCategory || []);
  const [order,setOrder] =useState(initialOrder || '');

  const handleChange = (e) =>{
    let newCategory =[...category];
    const value = e.target.value;

    if(newCategory.includes(value)){
      newCategory = newCategory.filter((el)=> el !== value);
    }else{
      newCategory.push(value);
    }

    setCategory(newCategory)
  };

  const handleSort = (e) =>{
    setOrder(e.target.value)
  }

  useEffect(()=>{
   let params={
    category,
   }

   order && (params.order = order);

   setSearchParams(params)
  },[category,order]);

  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input 
        type="checkbox"
         value={"male"} 
         onChange={handleChange} 
         checked={category.includes("male")}/>
        <label>Men</label>
      </div>
      <div>
        <input 
        type="checkbox" 
        value={"female"} 
        onChange={handleChange} 
        checked={category.includes("female")}/>
        <label>Women</label>
      </div>
      <div>
        <input 
        type="checkbox" 
        value={"kids"} 
        onChange={handleChange} 
        checked={category.includes("kids")}/>
        <label>Kids</label>
      </div>
      <br/>
      <br/>
      <h2>Sort based on Price</h2>
      <div onChange={handleSort}>
          <input 
          type="radio"
          value={"asc"}
          defaultChecked={order === "asc"}
          name="order"
          />
          <label>Ascending</label>
          <input
          type="radio"
          value={"desc"}
          defaultChecked={order === "desc"}
          name="order"
          />
          <label>Descending</label>
      </div>
    </div>
  )
};

export default Sidebar