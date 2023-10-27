import ItemCount from "./ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({id, nombre, descripcion, imgUrl, precio, stock, categoria}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const { addItem } = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }

    return (
        <article className="Card-item-detail">
            <header className="Info">
                <h2 className="Info">
                    {nombre}
                </h2>
            </header>
            {/* <picture>
                <img src={imgUrl} alt = "Imagen" className ="ImgCard-detail"/>
            </picture> */}
            <section>
                <p className="Info">
                    {descripcion}
                </p>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="item-footer">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='boton'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock ={stock} onAdd ={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;