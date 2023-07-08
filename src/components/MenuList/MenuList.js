import { Link } from "react-router-dom";
//React helmet package for title change
//change Link to ? for active menu
const MenuList = () => {
    return (
        <div >
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about-us">
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
        </div>
        
    );
}
export default MenuList;