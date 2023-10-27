import { Link } from "react-router-dom";

const Brand = () => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link to ='/'>
        <a 
        className="navbar-brand active fw-bold" href="/">
            La Tiendita de Ciro
        </a>
        </Link>
    );
};

export default Brand;