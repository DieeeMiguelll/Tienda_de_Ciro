import { useEffect, useState } from "react";
import { getProductById } from "./AsyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [Products, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById (itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    
    return (
        <div className ='ItemDetailContainer' >
            <ItemDetail {...Products} />
        </div>    
    )
}

export default ItemDetailContainer;