import { Link } from 'react-router-dom';
import list from '../img/list.png';

const Sidebar = () => {
  return (
    <aside>
      <ul className="sidebar-items">
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/employees">
            <img className="sidebar-link-logo" src={list} alt="Employee list" />
            <span className="sidebar-link-text">Employee list</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
