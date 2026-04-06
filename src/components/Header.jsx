import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo-link">
          <FontAwesomeIcon icon={faShieldDog} className="header-icon" />
          <span className="header-title">Dog Store</span>
        </a>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li>
              <a href="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="header-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
