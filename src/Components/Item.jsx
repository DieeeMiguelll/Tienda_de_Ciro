
const Item = ({id, descripcion, imagen, precio, stock, categoria}) => {

    return (
        <article className="Card-item">
            <header className="Header">
                <h2 className="item-descripcion">
                    {descripcion}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt ={descripcion} className="Item-Img"/>
            </picture>
            <section>
                <p className="item-precio">
                    Precio: ${precio}
                </p>
                <p className="item-stock">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="item-footer">
                <button className='boton'> Ver detalles </button>
            </footer>
        </article>
    )
}

export default Item;