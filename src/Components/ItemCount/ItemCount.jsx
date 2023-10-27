import React, { useState, useRef } from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div className= 'contador'>
      <div className='contenedor-boton-contador'>  
          <button className='boton' onClick= {decrementar}>-</button>
          <h4 className='Number'>{cantidad}</h4>
          <button className='boton' onClick= {incrementar}>+</button>
     </div>
     <div>
          <button className='agregar-carrito' onClick={() => onAdd(cantidad)} disabled={!stock}>
              Agregar al carrito
          </button>
     </div>
    </div> 
  )
};


export default ItemCount;