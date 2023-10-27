import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cart, clearcart, totalquantity, total } =useContext(CartContext)

  if (totalquantity === 0) {
    return (
      <div>
        <h1>No hay items agregados</h1>
          <Link to='/' className='Option'>Productos</Link>
      </div>
    )
  }

  return (
    <div>
      { cart.map(p => <Cart key)}
    </div>
  )
}
export default Carrito;