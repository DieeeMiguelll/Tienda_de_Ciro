import Brand from "./Brand"
import CartContainer from "./CartContainer"
import ItemCategory from "./ItemCategory"
import MenuButton from "./MenuButton"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Brand />
          <MenuButton />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <ItemCategory isActive={false} name="Libros"/>
              </li>

              <li className="nav-item">
              <ItemCategory isActive={false} name="Música"/>
              </li>

              <li className="nav-item">
              <ItemCategory isActive={false} name="Películas"/>
              </li>

            </ul>
          </div>
          <CartContainer />
        </div>
      </nav>
   );
};

export default NavBar;