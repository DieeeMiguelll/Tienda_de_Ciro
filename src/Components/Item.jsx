import { Link } from "react-router-dom";

const Item = ({id, nombre, imgUrl, precio, stock, categoria}) => {

    return (
        <article className="Card-item">
            <header className="Info">
                <h2 className="item-descripcion">
                    {nombre}
                </h2>
            </header>
            <picture className = "Info"> 
                <img src={imgUrl} alt= {nombre} className = "imgCards"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    Categoria: {categoria}
                </p>
            </section>
            <footer className="item-footer">
                <Link to={`/Item/${id}`} className='boton'> Ver detalles </Link>
            </footer>
        </article>
    )
}

export default Item;