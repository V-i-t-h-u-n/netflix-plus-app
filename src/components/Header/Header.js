import { Link } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';

function Header() {
  const cart = useContext(CartContext);
  console.log(cart.cartState);
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid ">
            <Link className="navbar-brand" href="/">
              Netflix-App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <MenuList />
              <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
              <button className="btn btn-danger" type="button">
                Cart (
                {cart.cartState?.length === undefined
                  ? '0'
                  : cart.cartState?.length}
                )
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
