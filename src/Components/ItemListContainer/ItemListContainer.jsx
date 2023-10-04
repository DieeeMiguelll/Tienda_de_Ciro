// src/ItemListContainer.js
import React, { useState, useEffect } from 'react';
//import ItemCount from './ItemCount';
import { getProducts } from '../AsyncMock';
import ItemList from '../ItemList';



const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState ([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProductos(response)
    })
    .catch(error => {
      console.error(error)
    }) 
   },[])

   return (
    <div>
    
      <h1 className ="greeting">Bienvenido a la Tienda más particular de todas!</h1>
      <div class="item-list-container">
        <div>
      <ItemList productos={productos}/>
        </div>
      </div>
    </div>
   )
}


export default ItemListContainer;