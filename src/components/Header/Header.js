import { Link } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';

// import logo from './logo.svg';
function Header () {
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

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                                    Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>

  );
}
export default Header;
