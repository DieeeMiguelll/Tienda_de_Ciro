

const ItemsBag  = ({ count = 0}) =>{
    return (
        <div
        className="position-absolute bg-primary rounded-circle px-2"
        style={{ top: 0, right: 0 }}
        >
        <span style={{ fontSize: "12px", color: "white"}}>
        {count}</span>
        </div>
    );
};

export default ItemsBag;