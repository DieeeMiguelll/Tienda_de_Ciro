/* eslint-disable jsx-a11y/anchor-is-valid */
/*import React, { useState } from 'react';
/*import Contador from './Contador';
import Carrito from './Carrito';
import productos from './Productos';*/


const ItemCategory = ({isActive = false, name}) => {
  return (
    <a 
    className={`nav-link ${isActive ? "active fw-semibold" : null}`}
    aria-current="page" 
    href="#">
        {name}
    </a>
  );
};

export default ItemCategory;