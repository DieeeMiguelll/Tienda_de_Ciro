import CartIcon from "./Cart"
import ItemsBag from "./ItemsBag";


const CartContainer = () => {
    return (
        <div className="bg-light rounded-circle p-3 position-relative">
            <CartIcon color ="blue" />
            <ItemsBag count={3} />
        </div>
    );
};

export default CartContainer;