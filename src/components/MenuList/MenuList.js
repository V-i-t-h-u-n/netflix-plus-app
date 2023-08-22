import { NavLink } from 'react-router-dom';
// React helmet package for title change
// change Link to ? for active menu
const MenuList = () => {
  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/hoc-demo">
            Hoc Demo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact-us">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MenuList;
