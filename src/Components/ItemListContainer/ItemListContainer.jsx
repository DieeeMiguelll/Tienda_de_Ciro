// src/ItemListContainer.js
import React, { useState, useEffect } from 'react';
//import ItemCount from './ItemCount';
import { getProducts, getProductByCategory } from '../AsyncMock';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
  const [Products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts 

    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    }) 
   },[categoryId])

   return (
    <div>

      <h1 className ="greeting">Bienvenido a la Tienda más particular de todas!</h1>
      <ItemList Products={Products}/>

    </div>
   )
}


export default ItemListContainer;