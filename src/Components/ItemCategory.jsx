/* eslint-disable jsx-a11y/anchor-is-valid */



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