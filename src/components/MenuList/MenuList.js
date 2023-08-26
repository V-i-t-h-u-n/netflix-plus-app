// import { NavLink } from 'react-router-dom';
// React helmet package for title change
import MenuItem from './MenuItem/MenuItem';
// change Link to ? for active menu
const MenuList = () => {
  const attributeArrayObject = [
    { link: '/', title: 'Home' },
    { link: '/hoc-demo', title: 'Hoc Demo' },
    { link: '/about-us', title: 'About Us' },
    { link: '/contact-us', title: 'Contact Us' },
    { link: '/hooks-demo', title: 'Hooks' }
  ];
  const componentDataArray = attributeArrayObject.map((attribute) => {
    return (
      <MenuItem
        key={attribute.link}
        link={attribute.link}
        title={attribute.title}
      />
    );
  });
  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">{componentDataArray}</ul>
      {/* <li className="nav-item">
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
        <li className="nav-item">
          <NavLink className="nav-link " to="/hooks-demo">
            Hooks
          </NavLink>
        </li> */}
    </div>
  );
};

export default MenuList;
