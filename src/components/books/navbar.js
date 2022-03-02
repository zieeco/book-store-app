import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <nav className="navbar">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="navList">
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <div />
  </div>
);

export default Navbar;
