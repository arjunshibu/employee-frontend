import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <Link className="nav-header" to="/">
        <Logo className="nav-header-logo" />
      </Link>
      <ul className="nav-items">
        {location.pathname === '/' && (
          <li className="nav-item">
            <Link className="nav-item-link" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
