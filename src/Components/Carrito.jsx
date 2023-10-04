import React from 'react';

const Carrito = ({ carrito }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.descripcion} - Cantidad: {item.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;